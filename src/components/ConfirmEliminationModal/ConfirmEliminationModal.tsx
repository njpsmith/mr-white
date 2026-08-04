import {
  Button,
  Dialog,
  DialogPanel,
  // DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";

export const ConfirmEliminationModal = ({
  isOpen,
  player,
  onConfirm,
  onCancel,
}) => {
  return (
    <>
      <Dialog open={isOpen} onClose={onCancel}>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <DialogBackdrop
            transition
            className="
        fixed inset-0
        bg-black/50
        transition-opacity
        duration-300
      "
          />

          <DialogPanel
            transition
            className="
        relative
        rounded-xl
        bg-white
        py-8
        px-10
        shadow-xl
        transition-all
        duration-300
        data-[closed]:scale-95
        data-[closed]:opacity-0
      "
          >
            <h3>Eliminate {player?.playerName}?</h3>

            <div className="mt-4">
              <Button
                className="btn btn-primary w-full mb-4"
                onClick={() => onConfirm()}
              >
                Eliminate!
              </Button>
              <Button
                className="btn btn-secondary w-full"
                onClick={() => onCancel()}
              >
                Cancel
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default ConfirmEliminationModal;
