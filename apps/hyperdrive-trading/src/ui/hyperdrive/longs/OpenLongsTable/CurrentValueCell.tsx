import { Long } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { parseUnits } from "viem";
import { useAccount } from "wagmi";

export function CurrentValueCell({
  row,
  hyperdrive,
}: {
  row: Long;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });

  const { amountOut: sharesAmountOut, previewCloseLongStatus } =
    usePreviewCloseLong({
      hyperdriveAddress: hyperdrive.address,
      maturityTime: row.maturity,
      bondAmountIn: row.bondAmount,
      minOutput: parseUnits("0", baseToken.decimals),
      destination: account,
      // Not all hyperdrives can close to base, but they can all close to
      // shares! To make this component easy, we'll always preview to shares
      // then do the conversion to base ourselves.
      asBase: false,
    });

  // To get the base value of the shares, just do a simple conversion
  const amountOutInBase = convertSharesToBase({
    decimals: hyperdrive.decimals,
    sharesAmount: sharesAmountOut,
    vaultSharePrice: poolInfo?.vaultSharePrice,
  });

  const currentValueLabel = formatBalance({
    balance: amountOutInBase || 0n,
    decimals: baseToken.decimals,
    places: 4,
  });

  const isPositiveChangeInValue =
    amountOutInBase && amountOutInBase > row.baseAmountPaid;
  if (previewCloseLongStatus === "error") {
    return <div>Insufficient Liquidity</div>;
  }
  return (
    <div className="daisy-stat flex flex-row p-0 xl:flex-col">
      <span className="daisy-stat-value text-xs font-bold md:text-md">
        {currentValueLabel}
      </span>
      <div
        data-tip={"Profit/Loss since open, after closing fees."}
        className={classNames(
          "daisy-tooltip daisy-tooltip-left mt-1 flex text-xs before:border",
          { "text-success": isPositiveChangeInValue },
          { "text-error": !isPositiveChangeInValue },
        )}
      >
        <span>{isPositiveChangeInValue ? "+" : ""}</span>
        {amountOutInBase
          ? `${formatBalance({
              balance: amountOutInBase - row.baseAmountPaid,
              decimals: baseToken.decimals,
              places: 4,
            })} ${baseToken.symbol}`
          : undefined}
      </div>
    </div>
  );
}
