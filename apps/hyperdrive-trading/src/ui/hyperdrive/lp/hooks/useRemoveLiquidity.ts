import { HyperdriveABI } from "@hyperdrive/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { useWaitForTransactionThenInvalidateCache } from "src/ui/network/useWaitForTransactionThenInvalidateCache/useWaitForTransactionThenInvalidateCache";
import { Address, useContractWrite } from "wagmi";

interface UseRemoveLiquidityOptions {
  market: Hyperdrive;
  lpSharesIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UseRemoveLiquidityResult {
  removeLiquidity: (() => void) | undefined;
  removeLiquidityStatus: MutationStatus;
  removeLiquidityTransactionStatus: MutationStatus;
}

export function useRemoveLiquidity({
  market,
  lpSharesIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled,
}: UseRemoveLiquidityOptions): UseRemoveLiquidityResult {
  const queryEnabled =
    !!lpSharesIn && minBaseAmountOut !== undefined && !!destination && enabled;

  const addRecentTransaction = useAddRecentTransaction();
  const {
    write: removeLiquidity,
    status,
    data,
  } = useContractWrite({
    abi: HyperdriveABI,
    address: market.address,
    functionName: "removeLiquidity",
    args: queryEnabled
      ? [lpSharesIn, minBaseAmountOut, destination, asUnderlying]
      : undefined,
    // TODO: better gas optimization
    gas: 500_000n,
    onSuccess: (data) => {
      addRecentTransaction({
        hash: data.hash,
        description: "Remove Liquidity",
      });
    },
  });

  const { status: txnStatus } = useWaitForTransactionThenInvalidateCache({
    hash: data?.hash,
  });

  return {
    removeLiquidity,
    removeLiquidityStatus: status,
    removeLiquidityTransactionStatus: txnStatus,
  };
}
