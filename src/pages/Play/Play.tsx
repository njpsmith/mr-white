import { categories } from "../../constants/categories";
import GameSetup from "./gameSteps/GameSetup";
import AssignRolesAndWords from "./gameSteps/AssignRolesAndWords";
import NoWordsRemaining from "./gameSteps/NoWordsRemaining";
import { useGame } from "../../features/game/hooks/useGame";

const Play = () => {
  const game = useGame();

  const {
    gameStep,
    playerCount,
    players,
    currentPlayerNumber,
    currentPlayerName,
    selectedCategories,
    selectedWord,
    revealWordToPlayer,
    fullWordList,

    setPlayerCount,
    setCurrentPlayerName,

    toggleCategory,
    // nextStep,
    // checkAllPlayerNamesEntered,
    // advanceCurrentPlayerNumber,
    handleCurrentPlayerNameSubmit,
    handleSubmitRevealWord,
    startRound,
    resetWordList,
  } = game;

  return (
    <>
      {gameStep === "no_words_remaining" && (
        <>
          <NoWordsRemaining resetWordList={resetWordList} />
        </>
      )}

      {gameStep === "stage_1_setup" && (
        <GameSetup
          playerCount={playerCount}
          setPlayerCount={setPlayerCount}
          selectedCategories={selectedCategories}
          categories={categories}
          toggleCategory={toggleCategory}
          startRound={startRound}
          fullWordList={fullWordList}
        />
      )}

      {gameStep === "stage_2_assignRolesAndWords" && (
        <>
          <div>
            selectedWord civilianWord: {selectedWord?.civilianWord} <br />
            selectedWord undercoverWord: {selectedWord?.undercoverWord} <br />
            Stage 3
          </div>
          <AssignRolesAndWords
            playerCount={playerCount}
            currentPlayerNumber={currentPlayerNumber}
            currentPlayerName={currentPlayerName}
            setCurrentPlayerName={setCurrentPlayerName}
            handleSubmit={handleCurrentPlayerNameSubmit}
            revealWord={revealWordToPlayer}
            handleSubmitRevealWord={handleSubmitRevealWord}
            players={players}
          />
        </>
      )}

      {gameStep === "stage_3_vote" && (
        <div>
          Playas:{" "}
          {players.map((p, index) => (
            <p key={index}>{p.playerName}</p>
          ))}
          selectedWord civilianWord: {selectedWord?.civilianWord} <br />
          selectedWord undercoverWord: {selectedWord?.undercoverWord} <br />
          Stage 3
        </div>
      )}

      {gameStep === "stage_4_reveal" && <div>Stage 4</div>}

      {gameStep === "stage_5_gameOver" && <div>Stage 5</div>}

      {/* <pre>{JSON.stringify(playerNames, null, 2)}</pre> */}
    </>
  );
};

export default Play;
