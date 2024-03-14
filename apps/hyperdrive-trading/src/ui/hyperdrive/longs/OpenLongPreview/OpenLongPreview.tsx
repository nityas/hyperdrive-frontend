import {
  calculateFixedRateFromOpenLong,
  Long,
} from "@delvtech/hyperdrive-viem";
import { findBaseToken, HyperdriveConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import * as dnum from "dnum";
import { ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatRate } from "src/base/formatRate";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";

interface OpenLongPreviewProps {
  hyperdrive: HyperdriveConfig;
  long: Long;
  spotRateAfterOpen: bigint | undefined;
  curveFee: bigint | undefined;
}

export function OpenLongPreview({
  hyperdrive,
  long,
  spotRateAfterOpen,
  curveFee,
}: OpenLongPreviewProps): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const { fixedAPR } = useCurrentFixedAPR(hyperdrive.address);

  let changeInFixedApr = 0n;
  if (spotRateAfterOpen && fixedAPR) {
    changeInFixedApr = dnum.subtract(
      [fixedAPR.apr, 18],
      [spotRateAfterOpen, 18],
    )[0];
  }

  const termLengthMS = Number(hyperdrive.poolConfig.positionDuration * 1000n);
  const numDays = convertMillisecondsToDays(termLengthMS);
  return (
    <div className="flex flex-col gap-3">
      <LabelValue
        label="You receive"
        value={
          <span className="font-bold">{`${formatBalance({
            balance: long.bondAmount,
            decimals: baseToken.decimals,
            places: 4,
          })} hy${baseToken.symbol}`}</span>
        }
      />
      <LabelValue
        label="Pool fee"
        value={
          <span
            className="daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help border-b border-dashed border-current before:border"
            data-tip="Total combined fee paid to LPs and governance to open the long."
          >
            {curveFee
              ? `${formatBalance({
                  balance: curveFee,
                  decimals: baseToken.decimals,
                  places: 6,
                })} hy${baseToken.symbol}`
              : `0 hy${baseToken.symbol}`}
          </span>
        }
      />
      <LabelValue
        label="Net fixed rate"
        value={
          <span
            className="daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help border-b border-dashed border-current before:border"
            data-tip="Your net fixed rate after pool fees and slippage are applied."
          >
            {long.bondAmount > 0
              ? `${formatRate(
                  calculateFixedRateFromOpenLong({
                    positionDuration:
                      hyperdrive.poolConfig.positionDuration || 0n,
                    baseAmount: long.baseAmountPaid,
                    bondAmount: long.bondAmount,
                    decimals: baseToken.decimals,
                  }),
                  baseToken.decimals,
                )}% APR`
              : "0% APR"}
          </span>
        }
      />
      <LabelValue
        label="Fixed APR after open"
        value={
          <span
            className={classNames(
              "daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help before:border",
              { "border-b border-dashed border-current": spotRateAfterOpen },
            )}
            data-tip="The market fixed rate after opening the long."
          >
            {spotRateAfterOpen ? `${formatRate(spotRateAfterOpen)}% APR` : "-"}
          </span>
        }
      />
      <LabelValue
        label="Fixed APR impact"
        value={
          <span
            className={classNames(
              "daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help  before:border",
              {
                "border-b border-dashed border-error text-error":
                  spotRateAfterOpen,
              },
            )}
            data-tip={`The net market impact on the fixed rate after opening the long.`}
          >
            {getMarketImpactLabel(fixedAPR?.apr, spotRateAfterOpen)}
          </span>
        }
      />
      <LabelValue
        label="Yield at maturity"
        value={
          <div
            className="daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help before:border"
            data-tip={`Total ${baseToken.symbol} expected in return at the end of the term, excluding fees.`}
          >
            {long.bondAmount > 0 ? (
              <span className="cursor-help border-b border-dashed border-success text-success">
                {long.bondAmount > long.baseAmountPaid ? "+" : ""}
                {long.baseAmountPaid
                  ? `${formatBalance({
                      balance: long.bondAmount - long.baseAmountPaid,
                      decimals: baseToken.decimals,
                      places: 4,
                    })} ${baseToken.symbol}`
                  : undefined}
              </span>
            ) : (
              <span className="cursor-help border-b border-dashed">
                0 {baseToken.symbol}
              </span>
            )}
          </div>
        }
      />
      <LabelValue
        label="Matures in"
        value={`${numDays} days, ${new Date(
          Date.now() + termLengthMS,
        ).toLocaleDateString()}`}
      />
    </div>
  );
}

function getMarketImpactLabel(
  currentFixedRate: bigint | undefined,
  spotRateAfterOpenLong: bigint | undefined,
) {
  if (spotRateAfterOpenLong === undefined || currentFixedRate === undefined) {
    return "-";
  }
  const changeInFixedApr = dnum.subtract(
    [currentFixedRate, 18],
    [spotRateAfterOpenLong, 18],
  )[0];

  const isChangeInFixedAprLessThanOneBasisPoint =
    changeInFixedApr < dnum.from("0.0001", 18)[0]; // .01% === .0001

  if (isChangeInFixedAprLessThanOneBasisPoint) {
    return "-<0.01%";
  }
  return `-${formatRate(changeInFixedApr)}%`;
}
