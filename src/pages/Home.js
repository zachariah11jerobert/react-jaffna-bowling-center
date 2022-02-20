import GamesContainer from "../components/GamesContainer/GamesContainer";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <>
      <section id="courousel">
        <Hero />
      </section>

      <section id="games-section">
        <GamesContainer />
      </section>
    </>
  );
}

export default Home;
