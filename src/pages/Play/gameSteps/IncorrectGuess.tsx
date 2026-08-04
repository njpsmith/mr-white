import type { Player } from "../../../types/types";

export const IncorrectGuess = ({
  nextStep,
  currentEliminatedPlayer,
}: {
  nextStep: () => void;
  currentEliminatedPlayer: Player;
}) => {
  return (
    <section className="pt-16 pb-16 mb-16 md:pb-24 md:mb-24 border-divider">
      <div className="px-5 mb-12 container-narrow text-center">
        <h2 className="font-semibold tracking-tight | mt-8 md:mt-12 | text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
          {currentEliminatedPlayer?.playerName} was a Civilian :(
        </h2>
        <p>Mr. White still hides amongst you...</p>
        <button className="btn btn-primary" onClick={() => nextStep()}>
          Continue →
        </button>
      </div>
    </section>
  );
};

export default IncorrectGuess;
