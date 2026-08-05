import type { Player } from "../../../types/types";

export const MrWhiteWins = ({
  currentEliminatedPlayer,
  resetGame,
}: {
  resetGame: () => void;
  currentEliminatedPlayer: Player;
}) => {
  return (
    <section className="pt-16 pb-16 mb-16 md:pb-24 md:mb-24 border-divider">
      <div className="px-5 mb-12 container-narrow text-center">
        <h2 className="font-semibold tracking-tight | mt-8 md:mt-12 | text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
          {currentEliminatedPlayer?.playerName} was a Civilian. Therefore, Mr.
          White Wins!
        </h2>
        <p>Only two players remain, so Mr. White is the winner.</p>
        <button className="btn btn-primary" onClick={() => resetGame()}>
          Play again →
        </button>
      </div>
    </section>
  );
};

export default MrWhiteWins;
