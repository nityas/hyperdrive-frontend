import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { MarketStatistics, MarketTableRowData } from "src/ui/markets/types";

// TODO: stubbed function for now
// ideally fetched from an api
function getMarketStatistics(
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  market: Hyperdrive,
): Promise<MarketStatistics> {
  return Promise.resolve({
    liquidity: "$100M",
    longAPR: "1.25%",
    shortAPR: "1.25%",
    lpAPR: "1.25%",
  });
}

export function useMarketRowData(
  markets: Hyperdrive[] | undefined,
): UseQueryResult<MarketTableRowData[]> {
  const queryEnabled = !!markets;
  return useQuery<MarketTableRowData[]>({
    queryKey: markets,
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          return await Promise.all(
            markets.map(async (market) => {
              const stats = await getMarketStatistics(market);
              return {
                market,
                ...stats,
              };
            }),
          );
        }
      : undefined,
  });
}
