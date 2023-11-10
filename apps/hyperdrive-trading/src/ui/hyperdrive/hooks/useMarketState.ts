import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address, ContractFunctionResult } from "viem";
export function useMarketState(hyperdrive: Address): {
  marketState:
    | ContractFunctionResult<typeof IHyperdrive.abi, "getMarketState">
    | undefined;
  marketStateStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdrive);
  const queryEnabled = !!readHyperdrive;
  const { data: marketState, status: marketStateStatus } = useQuery({
    queryKey: makeQueryKey("marketState", { hyperdrive }),
    queryFn: queryEnabled ? () => readHyperdrive.getMarketState() : undefined,
    enabled: queryEnabled,
  });
  return { marketState, marketStateStatus };
}