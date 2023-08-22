import { QueryObserverOptions } from "@tanstack/query-core";
import { makeQueryKey } from "src/makeQueryKey";
import { GetOpenLongsOptions, getOpenLongs } from "@hyperdrive/core";

export function getOpenLongsQuery({
  hyperdriveAddress,
  publicClient,
  account,
  options,
}: Partial<GetOpenLongsOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getOpenLongs>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("open-longs", {
      hyperdriveAddress,
      account,
      options,
    }),
    queryFn: queryEnabled
      ? () =>
          getOpenLongs({ account, hyperdriveAddress, publicClient, options })
      : undefined,
  };
}