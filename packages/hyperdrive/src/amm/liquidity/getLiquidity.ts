import { Address, Chain, PublicClient, Transport, formatUnits } from "viem";

import { getPoolInfo } from "src/amm/getPoolInfo";

/**
 * This function retrieves the market liquidity by using the following formula:
 * marketLiquidity = sharePrice * shareReserves - longsOutstanding
 *
 * @param hyperdriveAddress - The address of the hyperdrive
 * @param publicClient - The public client
 * @returns Promise that resolves with an object containing the market liquidity
 */
export async function getLiquidity(
  hyperdriveAddress: Address,
  publicClient: PublicClient<Transport, Chain>,
): Promise<{ marketLiquidity: string }> {
  const poolInfo = await getPoolInfo({
    hyperdriveAddress,
    publicClient,
  });

  const sharePrice = parseFloat(formatUnits(poolInfo.sharePrice, 18));
  const shareReserves = parseFloat(formatUnits(poolInfo.shareReserves, 18));
  const longsOutstanding = parseFloat(
    formatUnits(poolInfo.longsOutstanding, 18),
  );

  const marketLiquidity = sharePrice * shareReserves - longsOutstanding;

  return { marketLiquidity: marketLiquidity.toString() };
}
