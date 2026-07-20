import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./styles/App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div>
        <h2>What is Mr. White?</h2>
        <p>
          Mr White is a social deduction party game where players give one-line
          clues about a secret word, then vote to eliminate who they think
          doesn't belong. Most players are Civilians sharing the same word. One
          is the Undercover with a similar word. One is Mr White — who gets no
          word at all and must bluff.
        </p>

        <p>
          The Mr. White game is a brilliant social deduction game designed for
          small and medium groups. The premise is simple: most players are
          Civilians who share a secret word. One player is the Undercover, who
          gets a similar but slightly different word. Finally, one player is the
          elusive Mister White — who gets no word at all and must bluff their
          way through every single round to avoid being caught.
        </p>
        <p>
          During gameplay, everyone goes around the circle giving one clue about
          their word. Then, the group debates and votes to eliminate who they
          think is the impostor. Civilians win the mister white game online by
          eliminating every infiltrator. Conversely, Mr White and the Undercover
          win by surviving until they equal the Civilians in number. If Mr White
          gets voted out, they are granted one final guess to identify the
          Civilian word — get it right, and the infiltrators steal the round.
        </p>
        <p>
          What makes the mr white undercover game completely different from
          traditional games like Mafia, Spyfall, or Werewolf is the unique word
          pairing mechanic. You are not just hiding your secret identity; you
          are actively hiding what you know (or don't know). Because Mr White
          has no word at all, every clue given is a calculated, high-stakes
          risk.
        </p>
        <h2>Mastering the Roles: Strategy Guide</h2>
        <p>
          Succeeding in the mr white game offline or online requires sharp wits
          and careful word choice depending on your assigned role:
        </p>
        <ul>
          <li>
            <strong>The Civilian Strategy:</strong> Your goal is to give a clue
            that is specific enough to prove to other Civilians that you know
            the word, but vague enough so that Mr White cannot easily guess what
            the word is. The
          </li>
          <li>
            <strong>Undercover Strategy:</strong> Since your word is similar to
            the Civilian word (e.g., "Ocean" vs "Sea"), your goal is to blend
            in. Listen to the clues carefully; if you suspect you are the
            Undercover online, pivot your clues to match the group consensus
            without sounding suspicious.
          </li>

          <li>
            <strong>The Mister White Strategy:</strong> Playing as mr.white is
            the ultimate test of bluffing. You play completely blind. You must
            carefully dissect the clues given before your turn, confidently
            provide a generic but plausible clue, and prepare to guess the real
            word if you are caught.
          </li>
        </ul>
      </div>

      <section>
        <h2>How to Play</h2>

        <p>Mr. White can be played with one phone.</p>

        <ol>
          <li>
            Pass the phone around. Each player reveals their role and word, then
            hides it and hands the phone to the next person. Nobody else sees
            anything.
          </li>
          <li>
            Clues: Go round the table. Each player says one short clue about
            their word. Civilians describe the real one. The Undercover
            describes the wrong one. Mr White bluffs.
          </li>
          <li>
            Vote: Debate, accuse, then agree on one player to eliminate. Their
            role is revealed to the table.
          </li>
          <li>
            Win: Civilians win by voting out every Undercover and Mr White.
            Infiltrators win by reaching equal numbers with the civilians. A
            caught Mr White gets one final guess at the Civilian word — get it
            right and the round is stolen.
          </li>
        </ol>

        <h3>Ready?</h3>
        <a href="/play">
          <button className="btn btn-primary tn-xl">Start a game →</button>
        </a>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
