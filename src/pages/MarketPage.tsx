import { LongPositionForm } from "components/LongPositionForm";
import { MarketActionButtonGroup } from "components/MarketActionsButtonGroup";
import { getMarketByAddress } from "hyperdrive/getMarketByAddress";
import { MarketAction, OrderType } from "hyperdrive/types";
import { useHyperdriveConfig } from "hyperdrive/useHyperdriveConfig";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function MarketPage() {
  const params = useParams();
  const config = useHyperdriveConfig();
  const marketAddress = params.address;
  const market = getMarketByAddress(marketAddress, config);

  const [marketAction, setMarketAction] = useState<MarketAction>("LONG");
  const [orderType, setOrderType] = useState<OrderType>("OPEN");

  return (
    <div className="flex flex-col items-center w-full max-w-5xl px-10 m-auto mt-16 gap-y-12">
      <div className="flex items-center text-white gap-x-4">
        <h2 className="text-3xl font-Akira">USDC Market</h2>
        <div className="flex p-2 rounded-lg h-fit max-h-fit bg-racing-green">
          <span className="text-xs font-bold text-black ">Lending</span>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-md text-white gap-y-10">
        <MarketActionButtonGroup
          selectedAction={marketAction}
          selectedOrderType={orderType}
          onMarketActionChange={(newAction) => setMarketAction(newAction)}
          onOrderTypeChange={(newOrder) => setOrderType(newOrder)}
        />
        {market && <LongPositionForm order={orderType} market={market} />}
      </div>
    </div>
  );
}