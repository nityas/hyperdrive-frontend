import { ReactElement } from "react";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { OpenLongPositionForm } from "src/ui/trading/components/OpenLongPositionForm";
import { OrderType } from "src/ui/trading/types";
import { match } from "ts-pattern";

interface LongPositionFormProps {
  market: HyperdriveMarket;
  order: OrderType;
}

export function LongPositionForm({
  order,
  market,
}: LongPositionFormProps): ReactElement {
  return match(order)
    .with("Open", () => <OpenLongPositionForm market={market} />)
    .with("Close", () => <></>)
    .exhaustive();
}