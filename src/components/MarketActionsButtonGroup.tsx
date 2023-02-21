import classNames from "classnames";
import { MarketAction, OrderType } from "hyperdrive/types";

interface MarketActionButtonGroupProps {
  selectedAction: MarketAction;
  selectedOrderType: OrderType;
  onMarketActionChange: (action: MarketAction) => void;
  onOrderTypeChange: (order: OrderType) => void;
}

export function MarketActionButtonGroup({
  selectedAction,
  selectedOrderType,
  onMarketActionChange,
  onOrderTypeChange,
}: MarketActionButtonGroupProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid grid-cols-3 bg-slate-800">
        <button
          className={classNames(
            "btn w-full p-4 font-bold hover:bg-racing-green hover:text-black",
            {
              "bg-lean text-black": selectedAction === "LONG",
            },
          )}
          onClick={() => onMarketActionChange("LONG")}
        >
          Long
        </button>
        <button
          className={classNames(
            "btn w-full p-4 font-bold hover:bg-racing-green hover:text-black",
            {
              "bg-lean text-black": selectedAction === "SHORT",
            },
          )}
          onClick={() => onMarketActionChange("SHORT")}
        >
          Short
        </button>
        <button
          className={classNames(
            "btn w-full p-4 font-bold hover:bg-racing-green hover:text-black",
            {
              "bg-lean text-black": selectedAction === "LP",
            },
          )}
          onClick={() => onMarketActionChange("LP")}
        >
          LP
        </button>
      </div>

      <div className="grid grid-cols-2 bg-slate-800">
        <button
          className={classNames(
            "btn w-full p-4 font-bold hover:bg-racing-green hover:text-black",
            {
              "bg-lean text-black": selectedOrderType === "OPEN",
            },
          )}
          onClick={() => onOrderTypeChange("OPEN")}
        >
          Open
        </button>
        <button
          className={classNames(
            "btn w-full p-4 font-bold hover:bg-racing-green hover:text-black",
            {
              "bg-lean text-black": selectedOrderType === "CLOSE",
            },
          )}
          onClick={() => onOrderTypeChange("CLOSE")}
        >
          Close
        </button>
      </div>
    </div>
  );
}