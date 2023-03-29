import { useQuery } from "@tanstack/react-query";
import { BigNumber } from "ethers";
import { Address, useContract, useSigner } from "wagmi";
import { HyperdriveABI, HyperdriveGoerliAddresses } from "@hyperdrive/core";

const makerDsrHyperdriveAddress =
  HyperdriveGoerliAddresses.makerDsrHyperdrive as Address;

interface UseOpenShortPreviewOptions {
  hyperdrivePool: Address;
  bondAmount: bigint | undefined;
  maxDeposit: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
}

export function useOpenShortPreview({
  hyperdrivePool,
  bondAmount,
  maxDeposit,
  destination,
  asUnderlying = true,
}: UseOpenShortPreviewOptions): {
  openShortPreview: bigint | undefined;
  openShortPreviewStatus: "error" | "success" | "loading";
} {
  // There is no callStatic wagmi hook, so we gotta call the contract directly,
  // see: https://github.com/wagmi-dev/wagmi/discussions/1571
  const { data: signer } = useSigner();

  const makerDsrHyperdrive = useContract({
    abi: HyperdriveABI,
    address: hyperdrivePool,
    // In order for callStatic to work, you need a signer still, and enough
    // allowance to compute the preview. TODO: Find a way to calculate this
    // client-side so users can experiment with any values they like.
    signerOrProvider: signer,
  });

  const queryEnabled =
    !!bondAmount && !!maxDeposit && !!destination && !!makerDsrHyperdrive;

  const { data, status } = useQuery({
    queryKey: [
      "preview-open-short",
      makerDsrHyperdriveAddress,
      {
        bondAmount: bondAmount?.toString(),
        maxDeposit: maxDeposit?.toString(),
        destination: destination?.toString(),
        asUnderlying: asUnderlying?.toString(),
      },
    ],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const openShortResult =
            (await makerDsrHyperdrive.callStatic.openShort(
              BigNumber.from(bondAmount),
              BigNumber.from(maxDeposit),
              destination,
              asUnderlying,
            )) as unknown as BigNumber;
          return openShortResult.toBigInt();
        }
      : undefined,
  });
  return { openShortPreview: data, openShortPreviewStatus: status };
}