export const PreVote = ({ nextStep }) => {
  return (
    <section className="pt-16 pb-16 mb-16 md:pb-24 md:mb-24 border-divider">
      <div className="px-5 mb-12 container-narrow text-center">
        <h2 className="font-semibold tracking-tight | mt-8 md:mt-12 | text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
          Describe your word in one sentence.
        </h2>
        <p>
          Go round the table. When you're ready to vote, hit the vote button.
        </p>

        <button className="btn btn-primary" onClick={() => nextStep()}>
          Vote for Mr. White →
        </button>
      </div>
    </section>
  );
};

export default PreVote;
