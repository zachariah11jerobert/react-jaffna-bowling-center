import "./games-item.scss";

const GamesItem = ({ image, info }) => {
  return (
    <div className="games-container">
      {/* <div className="overlay"></div> */}
      <div className="game-top">
        <div className="game-top-left">
          <h3>{info}</h3>
        </div>
        <div className="game-top-right">
          <h3>More Info</h3>
        </div>
      </div>
      <img src={image} />

      <div className="game-botom pl-10">
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default GamesItem;
