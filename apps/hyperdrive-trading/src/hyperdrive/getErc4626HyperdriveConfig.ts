import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { SupportedChainId } from "src/chains/supportedChains";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrive/formatHyperdriveName";
import { TokenConfig } from "src/token/TokenConfig";
import { getTokenIconUrl } from "src/token/tokenIconsUrls";
import { yieldSources } from "src/yieldSources/yieldSources";
import { Address, PublicClient } from "viem";
import { erc20ABI } from "wagmi";

export async function getErc4626HyperdriveConfig({
  hyperdriveAddress,
  publicClient,
  yieldSource,
}: {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  yieldSource: keyof typeof yieldSources;
}): Promise<HyperdriveConfig> {
  const { positionDuration, baseToken: baseTokenAddress } =
    await publicClient.readContract({
      abi: IHyperdrive.abi,
      functionName: "getPoolConfig",
      address: hyperdriveAddress,
    });

  const chainId = (await publicClient.getChainId()) as SupportedChainId;
  const baseToken: TokenConfig = {
    address: baseTokenAddress,
    decimals: await publicClient.readContract({
      address: baseTokenAddress,
      abi: erc20ABI,
      functionName: "decimals",
    }),
    name: await publicClient.readContract({
      address: baseTokenAddress,
      abi: erc20ABI,
      functionName: "name",
    }),

    symbol: await publicClient.readContract({
      address: baseTokenAddress,
      abi: erc20ABI,
      functionName: "symbol",
    }),

    iconUrl: getTokenIconUrl({ address: baseTokenAddress, chainId }),
  };

  // TODO: This should be specific to the yield source
  const sharesToken: TokenConfig = {
    name: "",
    symbol: "",
    decimals: 0,
    address: "0x",
  };

  const termLengthMS = Number(positionDuration) * 1000;
  const name = formatHyperdriveName({
    termLengthMS,
    baseTokenSymbol: baseToken.symbol,
    yieldSourceShortName: yieldSources[yieldSource].shortName,
  });

  return {
    address: hyperdriveAddress,
    termLengthMS,
    name,
    yieldSource,
    withdrawOptions: {
      // Base token withdrawals are enabled in a 4626 hyperdrive, because, for
      // example, sDAI can be converted back to DAI in a single transaction by
      // the DSR smart contract.
      isBaseTokenWithdrawalEnabled: true,
    },
    baseToken,
    sharesToken,
  };
}
