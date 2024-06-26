import { useQuery } from "@tanstack/react-query";
import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdriveModel } from "src/ui/hyperdrive/hooks/model/useReadHyperdriveModel";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseVaultRateOptions {
  hyperdriveAddress: Address | undefined;
}

export function useYieldSourceRate({
  hyperdriveAddress,
}: UseVaultRateOptions): {
  vaultRate: { vaultRate: bigint; formatted: string } | undefined;
  vaultRateStatus: "error" | "success" | "loading";
} {
  const publicClient = usePublicClient();
  const hyperdriveModel = useReadHyperdriveModel(hyperdriveAddress);

  const queryEnabled =
    !!hyperdriveAddress && !!hyperdriveModel && !!publicClient;
  const { data: vaultRate, status: vaultRateStatus } = useQuery({
    enabled: queryEnabled,
    queryKey: makeQueryKey("vaultRate", {
      hyperdriveAddress,
    }),
    queryFn: queryEnabled
      ? async () => {
          const rate = await hyperdriveModel.getYieldSourceRate();
          return {
            vaultRate: rate,
            formatted: formatRate(rate),
          };
        }
      : undefined,
  });

  return { vaultRate, vaultRateStatus };
}
