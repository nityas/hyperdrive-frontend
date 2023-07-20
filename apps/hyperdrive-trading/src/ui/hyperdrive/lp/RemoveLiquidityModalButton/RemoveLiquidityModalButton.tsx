import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { RemoveLiquidityForm } from "src/ui/hyperdrive/lp/RemoveLiquidityForm/RemoveLiquidityForm";

export interface RemoveLiquidityModalButtonProps {
  modalId: string;
  lpShares: bigint;
  hyperdrive: Hyperdrive;
}
export function RemoveLiquidityModalButton({
  modalId,
  lpShares,
  hyperdrive,
}: RemoveLiquidityModalButtonProps): ReactElement {
  function closeModal() {
    (window as any)[modalId].close();
  }

  return (
    <Modal
      modalId={modalId}
      modalContent={
        <div>
          <button
            className="daisy-btn-ghost daisy-btn-sm daisy-btn-circle daisy-btn absolute right-4 top-4"
            onClick={closeModal}
          >
            <XMarkIcon
              className="w-6 text-white opacity-70 hover:opacity-100 focus:opacity-100"
              title="Close position"
            />
          </button>
          <h3 className="text-h6 font-thin text-base-content">
            Remove liquidity
          </h3>
          <RemoveLiquidityForm
            hyperdrive={hyperdrive}
            lpShares={lpShares}
            onRemoveLiquidity={(e) => {
              // preventDefault since we don't want to close the modal while the
              // tx is temporarily pending the user's signature in their wallet.
              e.preventDefault();
            }}
          />
        </div>
      }
    >
      {({ showModal }) => (
        <span className="daisy-dropdown-end daisy-dropdown">
          <label
            tabIndex={0}
            className="daisy-btn-ghost daisy-btn-sm daisy-btn-circle daisy-btn"
          >
            <EllipsisHorizontalIcon width={25} height={25} />
          </label>
          <ul
            tabIndex={0}
            className="daisy-dropdown-content daisy-menu rounded-md bg-base-300 shadow"
          >
            <li className="my-1 flex cursor-pointer justify-center">
              <button onClick={showModal}>Remove liquidity</button>
            </li>
          </ul>
        </span>
      )}
    </Modal>
  );
}
