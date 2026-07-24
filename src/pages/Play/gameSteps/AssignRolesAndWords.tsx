const AssignRolesAndWords = ({}) => (
  <>
    <section className="pt-16 pb-16 mb-16 md:pb-24 md:mb-24 border-divider">
      <div className="px-5 container-narrow">
        <h2 className="font-semibold tracking-tight | mt-8 md:mt-12 | text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
          Pass to Player 1
        </h2>

        <p>Enter your name</p>

        <input type="text" name="player_1_name" placeholder="Enter name..." />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      Player X of Y
    </section>
  </>
);

export default AssignRolesAndWords;
