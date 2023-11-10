import { useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";

export function useAccruedYield({
  hyperdrive,
  checkpointId,
  bondAmount,
}: {
  hyperdrive: Hyperdrive;
  checkpointId: bigint;
  bondAmount: bigint;
}): {
  accruedYield: bigint | undefined;
} {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive;
  const { data: accruedYield } = useQuery({
    queryKey: makeQueryKey("accruedYield", {
      hyperdriveAddress: hyperdrive.address,
      checkpointId: checkpointId.toString(),
      bondAmount: bondAmount.toString(),
    }),
    queryFn: queryEnabled
      ? () =>
          readHyperdrive.getShortAccruedYield({
            checkpointId,
            bondAmount,
            decimals: hyperdrive.baseToken.decimals,
          })
      : undefined,
    enabled: queryEnabled,
  });
  return { accruedYield };
}