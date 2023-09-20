import { ReadHyperdrive } from "@hyperdrive/sdk";
import { ViemReadHyperdrive } from "@hyperdrive/sdk-viem";
import { useMemo } from "react";
import { sdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Address, useChainId, usePublicClient } from "wagmi";

export function useReadHyperdrive(
  address: Address,
): ReadHyperdrive | undefined {
  const { appConfig } = useAppConfig();

  const chainId = useChainId();
  const publicClient = usePublicClient();

  return useMemo(() => {
    if (!appConfig) {
      return undefined;
    }
    return new ViemReadHyperdrive({
      address,
      mathAddress: appConfig.hyperdriveMath,
      publicClient,
      cache: sdkCache,
      id: chainId.toString(),
    });
  }, [address, appConfig, chainId, publicClient]);
}