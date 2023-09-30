import { RedeemedWithdrawalShares } from "@hyperdrive/sdk";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "wagmi";
interface UseRedeemedWithdrawalSharesOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}
export function useRedeemedWithdrawalShares({
  account,
  hyperdriveAddress,
}: UseRedeemedWithdrawalSharesOptions): {
  redeemedWithdrawalShares: RedeemedWithdrawalShares[] | undefined;
  redeemedWithdrawlSharesStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!account;
  const {
    data: redeemedWithdrawalShares,
    status: redeemedWithdrawlSharesStatus,
  } = useQuery({
    queryKey: makeQueryKey("redeemedWithdrawalShares", {
      account,
      hyperdriveAddress,
    }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getRedeemedWithdrawalShares({ account })
      : undefined,
    enabled: queryEnabled,
  });
  return { redeemedWithdrawalShares, redeemedWithdrawlSharesStatus };
}