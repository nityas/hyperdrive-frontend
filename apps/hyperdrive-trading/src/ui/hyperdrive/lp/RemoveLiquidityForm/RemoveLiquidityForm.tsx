import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
  TokenConfig,
} from "@hyperdrive/appconfig";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import { calculateValueFromPrice } from "src/base/calculateValueFromPrice";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useActiveItem } from "src/ui/base/hooks/useActiveItem";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import { useRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/useRemoveLiquidity";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { TokenChoices } from "src/ui/token/TokenChoices";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
interface RemoveLiquidityFormProps {
  hyperdrive: HyperdriveConfig;
  lpShares: bigint;
  onRemoveLiquidity?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function RemoveLiquidityForm({
  hyperdrive,
  lpShares,
  onRemoveLiquidity,
}: RemoveLiquidityFormProps): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });

  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  const tokens: TokenConfig<any>[] = [sharesToken];
  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    // base token should be listed first if it's enabled
    tokens.unshift(baseToken);
  }
  const {
    activeItem: activeWithdrawToken,
    setActiveItemId: setActiveWithdrawToken,
  } = useActiveItem({
    items: tokens,
    idField: "address",
    defaultActiveItemId: hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
      ? baseToken.address
      : sharesToken.address,
  });
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });

  const { address: account } = useAccount();

  // Let users type in an amount of lp shares they want to remove
  const {
    amount,
    amountAsBigInt: lpSharesIn,
    setAmount,
  } = useNumericInput({
    decimals: activeWithdrawToken.decimals,
  });

  // Then we preview that trade to show users the split between the actual base
  // and withdrawal shares they'll receive
  const {
    proceeds: actualValueOut,
    previewRemoveLiquidityStatus,
    withdrawalShares,
  } = usePreviewRemoveLiquidity({
    destination: account,
    lpSharesIn,
    hyperdriveAddress: hyperdrive.address,
    minOutputPerShare: 1n,
    asBase:
      hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
      activeWithdrawToken.address === baseToken.address,
  });
  const { removeLiquidity, removeLiquidityStatus } = useRemoveLiquidity({
    hyperdriveAddress: hyperdrive.address,
    lpSharesIn,
    minOutputPerShare: 1n,
    destination: account,
    enabled: previewRemoveLiquidityStatus === "success",
    asBase:
      hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
      activeWithdrawToken.address === baseToken.address,
    onSubmitted: () => {
      (window as any)["withdrawalLpModal"].close();
    },
    onExecuted: () => {
      setAmount("");
    },
  });

  // to format the withdrawal shares out in terms of base, we need to multiply
  // them by the lpSharePrice
  const formattedWithdrawalSharesOut = withdrawalShares
    ? formatBalance({
        balance: calculateValueFromPrice({
          amount: withdrawalShares,
          unitPrice: poolInfo?.lpSharePrice || 0n,
          decimals: baseToken.decimals,
        }),
        decimals: baseToken.decimals,
        places: 4,
      })
    : null;

  const hasEnoughBalance = getHasEnoughBalance({
    amount: lpSharesIn,
    balance: lpShares,
  });

  return (
    <TransactionView
      setting={
        <TokenChoices
          label="Choose asset for withdrawal"
          vertical
          tokens={[
            {
              tokenConfig: baseToken,
            },
            {
              tokenConfig: sharesToken,
            },
          ]}
          selectedTokenAddress={activeWithdrawToken.address}
          onTokenChange={(tokenAddress) => setActiveWithdrawToken(tokenAddress)}
        />
      }
      tokenInput={
        <TokenInput
          name="Input LP shares"
          token={
            <div className="daisy-join-item flex h-12 shrink-0 items-center gap-1.5 border border-neutral-content/30 bg-base-100 px-4">
              <img src={baseToken.iconUrl} className="h-5 " />{" "}
              <span className="text-sm font-semibold">
                {baseToken.symbol}-LP
              </span>
            </div>
          }
          value={amount ?? ""}
          maxValue={formatUnits(lpShares, baseToken.decimals)}
          stat={
            lpShares && !!poolInfo
              ? `Withdrawable: ${formatBalance({
                  balance: lpShares,
                  decimals: hyperdrive.decimals,
                  places: 2,
                })} ${baseToken.symbol}-LP`
              : undefined
          }
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      transactionPreview={
        <>
          <LabelValue
            label="Amount to withdraw"
            value={`${
              actualValueOut
                ? `${formatBalance({
                    balance: lpShares || 0n,
                    decimals: hyperdrive.decimals,
                    places: 4,
                  })}`
                : "0"
            } ${baseToken.symbol}-LP`}
          />
          <LabelValue
            label="Total you receive now"
            value={
              <span className="font-bold">
                {actualValueOut
                  ? `${formatBalance({
                      balance: actualValueOut,
                      decimals: activeWithdrawToken.decimals,
                      places: 4,
                    })}`
                  : "0"}{" "}
                {activeWithdrawToken.symbol}
              </span>
            }
          />
          <LabelValue
            label="Queued for delayed withdrawal"
            value={
              <span className="font-bold">
                {formattedWithdrawalSharesOut || 0} {baseToken.symbol}
              </span>
            }
          />
        </>
      }
      disclaimer={
        <>
          {lpSharesIn && !hasEnoughBalance ? (
            <p className="mb-2 text-center text-sm text-error">
              Insufficient balance
            </p>
          ) : null}

          <p className="text-center text-sm text-neutral-content">
            You can withdraw liquidity at any time. The utilized portion may be
            queued for delayed withdrawal.
          </p>
        </>
      }
      actionButton={(() => {
        if (!account) {
          return <ConnectButton />;
        }

        if (removeLiquidityStatus === "loading") {
          return <LoadingButton label="Removing liquidity" variant="primary" />;
        }

        return (
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full"
            disabled={!hasEnoughBalance || !removeLiquidity}
            onClick={(e) => {
              // prevent closing the modal until the user approves the transaction
              e.preventDefault();
              removeLiquidity?.();
              onRemoveLiquidity?.(e);
            }}
          >
            Remove Liquidity
          </button>
        );
      })()}
    />
  );
}
