const NoWordsRemaining = ({ resetWordList }: { resetWordList: () => void }) => {
  return (
    <section className="pt-16 pb-16 mb-16 md:pb-24 md:mb-24 border-divider">
      <div className="px-5 container-narrow">
        <h2 className="font-semibold tracking-tight | mt-8 md:mt-12 | text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
          No words remaining!
        </h2>
        <p>Reset word list?</p>
        <button className="btn btn-primary" onClick={() => resetWordList()}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default NoWordsRemaining;
