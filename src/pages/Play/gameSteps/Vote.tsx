import { useState } from "react";
import type { Player } from "../../../types/types";
import { ConfirmEliminationModal } from "../../../components/ConfirmEliminationModal/ConfirmEliminationModal";

export const Vote = ({
  players,
  eliminatePlayer,
}: {
  players: Player[];
  eliminatePlayer: () => void;
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [playerToEliminate, setPlayerToEliminate] = useState<Player | null>(
    null,
  );

  const openModal = (player: Player) => {
    setPlayerToEliminate(player);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const confirmElimination = () => {
    if (!playerToEliminate) return;

    eliminatePlayer(playerToEliminate);
    closeModal();
  };

  return (
    <section className="pt-16 pb-16 mb-16 md:pb-24 md:mb-24 border-divider">
      <div className="px-5 mb-12 container-narrow text-center">
        <h2 className="font-semibold tracking-tight | mt-8 md:mt-12 | text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
          Who is Mr. White?
        </h2>
        <p>Select the player who gets the most votes</p>

        <div className="elimination-wrapper">
          {players.map((player, index: number) => {
            if (player.eliminated === false) {
              // Only display players who are not eliminated
              return (
                <button
                  key={index}
                  className="btn btn-primary w-100 mb-4"
                  onClick={() => openModal(player)}
                >
                  {player.playerName}
                </button>
              );
            } else {
              return null;
            }
          })}
        </div>

        <ConfirmEliminationModal
          isOpen={modalOpen}
          player={playerToEliminate}
          onConfirm={confirmElimination}
          onCancel={closeModal}
        />
      </div>
    </section>
  );
};

export default Vote;
