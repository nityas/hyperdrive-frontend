import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { SupportedChainId } from "src/chains/supportedChains";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { TokenConfig } from "src/token/TokenConfig";
import { getTokenIconUrl } from "src/token/tokenIconsUrls";
import { yieldSources } from "src/yieldSources/yieldSources";
import { Address, PublicClient } from "viem";
import { formatHyperdriveName } from "./formatHyperdriveName";

export async function getStethHyperdriveConfig({
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

  // The baseToken address for the stethHyperdrive market is the ETH magic
  // number. It signifies that the base asset is actually native ETH. However,
  // in this market you can deposit either native Eth or stETH. To get the stETH
  // token, we need to use the stethHyperdrive.lido() address, which is the same
  // thing as stETH.
  const baseToken: TokenConfig = {
    address: baseTokenAddress,
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
    iconUrl: getTokenIconUrl({ address: baseTokenAddress, chainId }),
  };

  // This is specific to the yield source
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
      // You can't withdraw ETH from the stETH hyperdrive, since converting
      // stETH back to ETH is a multi-step, multi-day process in Lido. Users of
      // stETH hyperdrive will need to withdraw as stETH (sharesToken), and
      // unwind back to ETH themselves.
      isBaseTokenWithdrawalEnabled: false,
    },
    baseToken,
    sharesToken,
  };
}
