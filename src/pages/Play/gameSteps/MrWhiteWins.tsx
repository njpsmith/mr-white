import type { Player } from "../../../types/types";
import NewGameButtons from "../../../components/NewGameButtons/NewGameButtons";

export const MrWhiteWins = ({
  currentEliminatedPlayer,
  resetGame,
}: {
  currentEliminatedPlayer: Player;
  resetGame: () => void;
}) => {
  return (
    <section className="pt-16 pb-16 mb-16 md:pb-24 md:mb-24 border-divider">
      <div className="px-5 mb-12 container-narrow text-center">
        <h2 className="font-semibold tracking-tight | mt-8 md:mt-12 | text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
          {currentEliminatedPlayer?.playerName} was a Civilian. <br />
          Mr. White Wins!
        </h2>
        <p>Only two players remain, so Mr. White is the winner.</p>

        <NewGameButtons resetGame={resetGame} />
      </div>
    </section>
  );
};

export default MrWhiteWins;
