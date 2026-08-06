type NewGameButtonsProps = {
  resetGame: ({ useExistingPlayers }: { useExistingPlayers: boolean }) => void;
};

const NewGameButtons = ({ resetGame }: NewGameButtonsProps) => {
  return (
    <div>
      <button
        className="btn btn-primary block w-full max-w-[600px] mx-auto"
        onClick={() => resetGame({ useExistingPlayers: true })}
      >
        Next round, same players →
      </button>
      <button
        className="btn btn-secondary block w-full max-w-[600px] mt-6 mx-auto"
        onClick={() => resetGame({ useExistingPlayers: false })}
      >
        New game
      </button>
    </div>
  );
};

export default NewGameButtons;
