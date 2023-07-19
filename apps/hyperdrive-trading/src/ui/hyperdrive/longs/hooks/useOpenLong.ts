import { HyperdriveABI } from "@hyperdrive/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/query-core";
import { Hyperdrive } from "src/appconfig/types";
import { ZERO_ADDRESS } from "src/base/constants";
import { useWaitForTransactionThenInvalidateCache } from "src/ui/network/useWaitForTransactionThenInvalidateCache/useWaitForTransactionThenInvalidateCache";
import { Address, useContractWrite, usePrepareContractWrite } from "wagmi";

interface UseOpenLongOptions {
  market: Hyperdrive;
  destination: Address | undefined;
  baseAmount: bigint | undefined;
  bondAmountOut: bigint | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
  /** Callback to be invoked when the transaction is finalized */
}

interface UseOpenLongResult {
  openLong: (() => void) | undefined;
  openLongStatus: MutationStatus;
  openLongTransactionStatus: MutationStatus;
}

export function useOpenLong({
  market,
  destination,
  baseAmount,
  bondAmountOut,
  asUnderlying = true,
  enabled,
}: UseOpenLongOptions): UseOpenLongResult {
  const queryEnabled =
    !!baseAmount && !!bondAmountOut && !!destination && enabled;

  const requiresEth = asUnderlying && market.baseToken.address === ZERO_ADDRESS;

  const { config } = usePrepareContractWrite({
    abi: HyperdriveABI,
    address: market.address,
    functionName: "openLong",
    enabled: queryEnabled,
    args: queryEnabled
      ? [baseAmount, bondAmountOut, destination, asUnderlying]
      : undefined,
    // TODO: better gas optimization
    gas: 500_000n,
    // Used when ETH is the base asset (e.g. StethHyperdrive) and
    // asUnderlying is true.
    value: requiresEth && baseAmount ? baseAmount : 0n,
  });

  const addRecentTransaction = useAddRecentTransaction();
  const {
    write: openLong,
    status,
    data,
  } = useContractWrite({
    ...config,
    onSuccess: (data) => {
      addRecentTransaction({ hash: data.hash, description: "Open Long" });
    },
  });

  const { status: txnStatus } = useWaitForTransactionThenInvalidateCache({
    hash: data?.hash,
  });

  return {
    openLong,
    openLongStatus: status,
    openLongTransactionStatus: txnStatus,
  };
}