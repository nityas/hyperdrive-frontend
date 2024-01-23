import { ReactElement } from "react";
import { useLoaderData } from "react-router-dom";
import { HyperdriveConfig } from "src/appconfig/types";
import { CommonHeadTags } from "src/ui/app/Head/CommonHeadTags";
import { useDevLogging } from "src/ui/hyperdrive/hooks/useDevLogging";
import { MarketDetailsBody } from "src/ui/markets/MarketDetailsBody/MarketDetailsBody";

export function Market(): ReactElement {
  // Safe to cast this variable because router configs this page is rendered with a valid market
  const market = useLoaderData() as HyperdriveConfig;

  useDevLogging(market);

  return (
    <div className="flex justify-center bg-base-100 px-4 py-8">
      <CommonHeadTags />
      <MarketDetailsBody hyperdrive={market} />
    </div>
  );
}
