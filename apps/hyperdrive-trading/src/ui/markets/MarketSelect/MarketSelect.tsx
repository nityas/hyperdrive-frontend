import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { MarketsTable } from "src/ui/markets/MarketsTable/MarketsTable";

const MARKETS_MODAL_KEY = "MARKETS_MODAL";

export function MarketSelect(): ReactElement {
  return (
    <Modal
      className={"w-[90vw] max-w-[90vw] p-0 md:w-[70vw] md:max-w-[70vw] md:p-4"}
      modalId={MARKETS_MODAL_KEY}
      modalContent={<MarketsModalContent />}
    >
      {({ showModal }) => (
        <label
          onClick={showModal}
          htmlFor={MARKETS_MODAL_KEY}
          className="glass daisy-btn-xs daisy-btn w-auto px-4 "
        >
          <span className="inline-flex items-center text-sm">
            Select market <ChevronRightIcon className="ml-1 h-4" />
          </span>
        </label>
      )}
    </Modal>
  );
}

function MarketsModalContent() {
  return (
    <div className="flex max-h-[70vh] flex-col items-center overflow-auto rounded bg-base-300 p-1 md:p-4">
      <h3 className="mb-4 font-lato">Markets</h3>

      <MarketsTable />
    </div>
  );
}