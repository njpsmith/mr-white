import { categories } from "../../constants/categories";
import GameSetup from "./gameSteps/GameSetup";
import AssignRolesAndWords from "./gameSteps/AssignRolesAndWords";
import NoWordsRemaining from "./gameSteps/NoWordsRemaining";
import { PreVote } from "./gameSteps/PreVote";
import { Vote } from "./gameSteps/Vote";
import { IncorrectGuess } from "./gameSteps/IncorrectGuess";
import { CorrectGuess } from "./gameSteps/CorrectGuess";
import { MrWhiteWins } from "./gameSteps/MrWhiteWins";
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
    currentEliminatedPlayer,
    allPlayersHaveNames,

    decreasePlayerCount,
    increasePlayerCount,
    editPlayerCount,
    setCurrentPlayerName,

    nextStep,
    toggleCategory,
    handleCurrentPlayerNameSubmit,
    handleSubmitRevealWord,
    handleRevealWordButton,
    startRound,
    resetWordList,
    eliminatePlayer,
    resetGame,
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
          decreasePlayerCount={decreasePlayerCount}
          increasePlayerCount={increasePlayerCount}
          editPlayerCount={editPlayerCount}
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
            {/* selectedWord civilianWord: {selectedWord?.civilianWord} <br />
            selectedWord undercoverWord: {selectedWord?.undercoverWord} <br />
            Stage 3 */}
          </div>
          <AssignRolesAndWords
            playerCount={playerCount}
            currentPlayerNumber={currentPlayerNumber}
            currentPlayerName={currentPlayerName}
            setCurrentPlayerName={setCurrentPlayerName}
            handleSubmit={handleCurrentPlayerNameSubmit}
            revealWord={revealWordToPlayer}
            handleRevealWordButton={handleRevealWordButton}
            handleSubmitRevealWord={handleSubmitRevealWord}
            players={players}
            allPlayersHaveNames={allPlayersHaveNames}
          />
        </>
      )}

      {gameStep === "stage_3_pre_vote" && <PreVote nextStep={nextStep} />}

      {gameStep === "stage_4_vote" && (
        <Vote players={players} eliminatePlayer={eliminatePlayer} />
      )}

      {gameStep === "stage_5_reveal_mr_white_found" && (
        <CorrectGuess
          resetGame={resetGame}
          currentEliminatedPlayer={currentEliminatedPlayer}
        />
      )}
      {gameStep === "stage_5_reveal_incorrect_guess" && (
        <IncorrectGuess
          nextStep={nextStep}
          currentEliminatedPlayer={currentEliminatedPlayer}
        />
      )}

      {gameStep === "gameOver_mr_white_wins" && (
        <MrWhiteWins
          currentEliminatedPlayer={currentEliminatedPlayer}
          resetGame={resetGame}
        />
      )}

      {/* <pre>{JSON.stringify(playerNames, null, 2)}</pre> */}
    </>
  );
};

export default Play;
