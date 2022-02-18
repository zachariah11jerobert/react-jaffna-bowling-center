import GamesContainer from "../components/GamesContainer/GamesContainer";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <>
      <section id="section-call-now">
        <div className="bg-theme-red ">
          <h3>Call for Details : 0774441916</h3>
        </div>
      </section>
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
