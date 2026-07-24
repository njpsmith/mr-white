import logo from "../../assets/images/detective.svg";

const Home = () => {
  return (
    <>
      <section className="hero text-center pt-16 pb-16 mb-16 md:pb-24 md:mb-24 border-divider">
        <div className="px-5 mx-auto max-w-3xl">
          <img
            src={logo}
            alt="Mr White Logo"
            width="100"
            className="mx-auto w-[70px] sm:w-[100px]"
          />

          <h1 className="font-semibold tracking-tight | mt-8 md:mt-12 | text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
            The Mr. White Game
          </h1>
          <div className="max-w-[60ch] mx-auto">
            <p>A.K.A. Signore White. Debuted in Castiglioncello.</p>
            <p>
              The social deduction party game for friends. Pass one phone around
              and let the mystery begin. Play online for free.
            </p>
          </div>

          <div className="flex gap-5 items-center justify-center mt-8">
            <a href="#how-to-play">
              <button className="btn btn-xl btn-secondary">How to play</button>
            </a>
            <a href="/play">
              <button className="btn btn-xl btn-primary">Play now →</button>
            </a>
          </div>
        </div>
      </section>

      {/* <section className="pb-16 mb-16 md:pb-24 md:mb-24 border-divider">
        <div className="px-5 max-w-[75ch] mx-auto">
          <h2>What is Mr. White?</h2>
          <p>
            Mr White is a social deduction party game where players give
            one-line clues about a secret word, then vote to eliminate who they
            think doesn't belong. Most players are Civilians sharing the same
            word.
            One is the Undercover with a similar word. One is Mr White — who gets no word at all and must bluff.
            One is Mr White — with a similar word and must bluff.
          </p>

<p>
            The Mr. White game is a brilliant social deduction game designed for
            small and medium groups. The premise is simple: most players are
            Civilians who share a secret word. One player is the Undercover, who
            gets a similar but slightly different word. Finally, one player is
            the elusive Mister White — who gets no word at all and must bluff
            their way through every single round to avoid being caught.
          </p>
<p>
            During gameplay, everyone goes around the circle giving one clue
            about their word. Then, the group debates and votes to eliminate who
            they think is the impostor. Civilians win the mister white game
            online by eliminating every infiltrator. Conversely, Mr White and
            the Undercover win by surviving until they equal the Civilians in
            number. If Mr White gets voted out, they are granted one final guess
            to identify the Civilian word — get it right, and the infiltrators
            steal the round.
          </p> 
          <p>
            What makes the mr white undercover game completely different from
            traditional games like Mafia, Spyfall, or Werewolf is the unique
            word pairing mechanic. You are not just hiding your secret identity;
            you are actively hiding what you know (or don't know). Because Mr
            White has no word at all, every clue given is a calculated,
            high-stakes risk.
          </p> 
          <h2>Mastering the Roles: Strategy Guide</h2>
          <p>
            Succeeding in the mr white game offline or online requires sharp
            wits and careful word choice depending on your assigned role:
          </p>
          <ul>
            <li>
              <strong>The Civilian Strategy:</strong> Your goal is to give a
              clue that is specific enough to prove to other Civilians that you
              know the word, but vague enough so that Mr White cannot easily
              guess what the word is. The
            </li>
            <li>
              <strong>Undercover Strategy:</strong> Since your word is similar
              to the Civilian word (e.g., "Ocean" vs "Sea"), your goal is to
              blend in. Listen to the clues carefully; if you suspect you are
              the Undercover online, pivot your clues to match the group
              consensus without sounding suspicious.
            </li>

            <li>
              <strong>The Mister White Strategy:</strong> Playing as mr.white is
              the ultimate test of bluffing. You play completely blind. You must
              carefully dissect the clues given before your turn, confidently
              provide a generic but plausible clue, and prepare to guess the
              real word if you are caught.
            </li>
          </ul>
        </div>
      </section> */}

      <section
        className="pb-16 mb-16 md:pb-24 md:mb-24 border-divider scroll-mt-[100px]"
        id="how-to-play"
      >
        <div className="px-5 max-w-[75ch] mx-auto">
          <h2>How to Play</h2>

          <p>Mr. White can be played with one phone.</p>

          <ol>
            <li>
              Pass the phone around. Each player reveals their role and word,
              then hides it and hands the phone to the next person. Keep your
              word secret.
            </li>
            <li>
              Go round the table. Each player says one short clue about their
              word. Civilians describe the real one.
              {/* The Undercover describes the wrong one.  */} Mr White bluffs.
            </li>
            <li>
              Vote to eliminate one player. Their role is revealed to the table.
            </li>
            <li>
              If they are Mr. White, the game ends. If they are a civilian, the
              game continues until Mr. White is found.
            </li>
            {/* <li>
              Win: Civilians win by voting out every Undercover and Mr White.
              Infiltrators win by reaching equal numbers with the civilians. A
              caught Mr White gets one final guess at the Civilian word — get it
              right and the round is stolen.
            </li> */}
          </ol>

          <h2 className="mt-16">Ready?</h2>
          <a href="/play">
            <button className="btn btn-primary">Start a game →</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
