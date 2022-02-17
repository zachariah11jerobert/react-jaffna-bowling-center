import GamesContainer from "../components/GamesContainer/GamesContainer";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <>
      <section id="courousel">
        <Hero />
      </section>
      <section id="book-now">
        <div className="d-flex flex-row jc-spacearound">
          <div>Badminton</div>
          <div>Table Tennis</div>
          <div>Bowling</div>
        </div>
      </section>
      <section id="games-section">
        <GamesContainer/>
      </section>
    </>
  );
}

export default Home;
