import { ReactElement, ReactNode } from "react";

/**
 * Layout component for the LongsTab, ShortsTab, and LpTab
 */
export function MarketDetailsTab({
  positions,
  transactionForm,
  transactionFormHeading,
}: {
  positions: ReactNode;
  transactionForm: ReactNode;
  transactionFormHeading: string;
}): ReactElement {
  return (
    <div className="flex w-full max-w-7xl flex-col items-center gap-10">
      <div className="flex w-full flex-col gap-10 xl:flex-row">
        <div className="flex flex-1 flex-col  md:px-8">
          {/* positions and faq tabs */}
          <div className="flex flex-col">{positions}</div>
        </div>

        {/* transaction form */}
        <div className="rounded-box bg-base-200 p-6 md:rounded-r-box xl:rounded-l-none">
          <h5 className="mb-3 font-bold">{transactionFormHeading}</h5>
          {transactionForm}
        </div>
      </div>
    </div>
  );
}
