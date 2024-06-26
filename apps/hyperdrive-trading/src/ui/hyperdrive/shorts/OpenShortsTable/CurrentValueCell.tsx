import { OpenShort } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { parseUnits } from "src/base/parseUnits";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { useAccount } from "wagmi";

export function CurrentValueCell({
  openShort,
  hyperdrive,
}: {
  openShort: OpenShort;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });

  const { amountOut: currentValueInShares } = usePreviewCloseShort({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: openShort.maturity,
    shortAmountIn: openShort.bondAmount,
    minAmountOut: parseUnits("0", baseToken.decimals),
    destination: account,
    // Withdraw as shares and convert to base separately to show the current
    // value, as not all hyperdrives allow withdrawing to base, (see
    // HyperdriveConfig).
    asBase: false,
  });
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const currentValueInBase = convertSharesToBase({
    sharesAmount: currentValueInShares,
    decimals: hyperdrive.decimals,
    vaultSharePrice: poolInfo?.vaultSharePrice,
  });

  const currentValueLabel = formatBalance({
    balance: currentValueInBase || 0n,
    decimals: baseToken.decimals,
    places: 4,
  });

  const isPositiveChangeInValue =
    currentValueInBase && currentValueInBase > openShort.baseAmountPaid;

  return (
    <div className="daisy-stat p-0">
      <span className="daisy-stat-value text-md font-bold">
        {currentValueLabel?.toString()}
      </span>
      {currentValueInBase && openShort.bondAmount !== 0n ? (
        <div
          data-tip={"Profit/Loss since open, after closing fees."}
          className={classNames(
            "daisy-tooltip daisy-tooltip-left mt-1 flex text-xs before:border",
            { "text-success": isPositiveChangeInValue },
            { "text-error": !isPositiveChangeInValue },
          )}
        >
          {getProfitLossText({
            startAmount: currentValueInBase,
            endAmount: openShort.baseAmountPaid,
            decimals: baseToken.decimals,
            symbol: baseToken.symbol,
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

function getProfitLossText({
  startAmount,
  endAmount,
  symbol,
  decimals,
}: {
  startAmount: bigint;
  endAmount: bigint;
  symbol: string;
  decimals: number;
}): string {
  const profitOrLoss = startAmount - endAmount;

  const result = `${formatBalance({
    balance: profitOrLoss,
    decimals: decimals,
    includeCommas: true,
    places: 4,
  })} ${symbol}`;

  return result;
}
