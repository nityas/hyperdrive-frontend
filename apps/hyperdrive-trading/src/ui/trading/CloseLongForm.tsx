import { Long } from "@hyperdrive/core";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Button } from "src/ui/base/components/Button";
import { Stat } from "src/ui/base/components/Stat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatBigInt } from "src/ui/base/formatting/formatBigInt";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useCloseLong } from "src/ui/hyperdrive/hooks/useCloseLong";
import { usePreviewCloseLong } from "src/ui/hyperdrive/hooks/usePreviewCloseLong";
import { TokenInput } from "src/ui/token/TokenInput";
import { parseUnits } from "viem";
import { useAccount } from "wagmi";

interface CloseLongPositionFormProps {
  hyperdrive: Hyperdrive;
  long: Long;
  onCloseLong?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function CloseLongForm({
  hyperdrive,
  long,
  onCloseLong,
}: CloseLongPositionFormProps): ReactElement {
  const { decimals: baseDecimals, symbol: baseSymbol } = hyperdrive.baseToken;

  const { address: account } = useAccount();
  const { openConnectModal } = useConnectModal();

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: baseDecimals,
  });

  const { baseAmountOut, previewCloseLongStatus } = usePreviewCloseLong({
    hyperdriveAddress: long.hyperdriveAddress,
    maturityTime: long.maturity,
    bondAmountIn: amountAsBigInt,
    minBaseAmountOut: parseUnits("0.01", baseDecimals),
    destination: account,
  });

  const { closeLong, isPendingWalletAction } = useCloseLong({
    long,
    bondAmountIn: amountAsBigInt,
    minBaseAmountOut: parseUnits("1", baseDecimals),
    destination: account,
    enabled: previewCloseLongStatus === "success",
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Amount to close section */}
      {long && (
        <div className="space-y-4 font-rubik text-hyper-blue-100">
          <h5>Amount to close</h5>
          <TokenInput
            token={{
              name: "Hyperdrive Long",
              symbol: "Long",
              decimals: baseDecimals,
              address: "0x00",
            }}
            value={amount ?? ""}
            maxValue={long ? formatBigInt(long.bondAmount, baseDecimals) : ""}
            onChange={(newAmount) => setAmount(newAmount)}
          />
        </div>
      )}

      {/* You receive Section */}
      {long && (
        <div className="space-y-4 text-center font-rubik text-hyper-blue-100">
          <Stat
            label={"You receive"}
            value={
              baseAmountOut
                ? `${formatBalance(
                    formatBigInt(baseAmountOut, baseDecimals),
                    8,
                  )} ${baseSymbol}`
                : ""
            }
          />
        </div>
      )}

      {account ? (
        <Button
          disabled={!closeLong || isPendingWalletAction}
          variant="Crimson"
          size="lg"
          block
          onClick={(e) => {
            closeLong?.();

            // useful if this is rendered in a modal for example and you want to
            // call e.preventDefault() to prevent the modal from closing right
            // away when the user clicks.
            onCloseLong?.(e);
          }}
        >
          <h5>Close Long</h5>
        </Button>
      ) : (
        <Button
          variant="Emerald"
          size="lg"
          block
          onClick={() => openConnectModal?.()}
        >
          <h5>Connect wallet</h5>
        </Button>
      )}
    </div>
  );
}