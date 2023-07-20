import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Stat } from "src/ui/base/components/Stat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import { useRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/useRemoveLiquidity";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

interface RemoveLiquidityFormProps {
  hyperdrive: Hyperdrive;
  lpShares: bigint;
  onRemoveLiquidity?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function RemoveLiquidityForm({
  hyperdrive,
  lpShares,
  onRemoveLiquidity,
}: RemoveLiquidityFormProps): ReactElement {
  const { decimals: baseDecimals, symbol: baseSymbol } = hyperdrive.baseToken;

  const { address: account } = useAccount();

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: baseDecimals,
  });

  const { baseAmountOut, previewRemoveLiquidityStatus } =
    usePreviewRemoveLiquidity({
      market: hyperdrive,
      lpSharesIn: amountAsBigInt,
      minBaseAmountOut: 0n,
      destination: account,
    });

  const { removeLiquidity, removeLiquidityStatus } = useRemoveLiquidity({
    market: hyperdrive,
    lpSharesIn: amountAsBigInt,
    minBaseAmountOut: 0n,
    destination: account,
    enabled: previewRemoveLiquidityStatus === "success",
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Amount to close section */}
      <div className="space-y-4 text-base-content">
        <h5>Amount to remove</h5>
        <TokenInput
          token={{
            name: "Hyperdrive LP",
            symbol: "LP",
            decimals: baseDecimals,
            address: "0x00",
          }}
          value={amount ?? ""}
          maxValue={formatUnits(lpShares, baseDecimals)}
          onChange={(newAmount) => setAmount(newAmount)}
        />
      </div>

      {/* You receive Section */}
      <div className="space-y-4 text-center text-base-content">
        <Stat
          label={"You receive"}
          value={
            baseAmountOut
              ? `${formatBalance(
                  formatUnits(baseAmountOut, baseDecimals),
                  8,
                )} ${baseSymbol}`
              : ""
          }
        />
      </div>

      {account ? (
        <button
          className="daisy-btn-primary daisy-btn"
          disabled={!removeLiquidity || removeLiquidityStatus === "loading"}
          onClick={(e) => {
            removeLiquidity?.();

            // useful if this is rendered in a modal for example and you want to
            // call e.preventDefault() to prevent the modal from closing right
            // away when the user clicks.
            onRemoveLiquidity?.(e);
          }}
        >
          Remove liquidity
        </button>
      ) : (
        <ConnectButton />
      )}
    </div>
  );
}