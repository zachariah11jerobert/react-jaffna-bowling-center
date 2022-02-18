import { Link } from "react-router-dom";
import "./games-item.scss";

const GamesItem = ({ image, info }) => {
  return (
    <div className="games-container">
      {/* <div className="overlay"></div> */}
      <div className="game-top bg-theme-red pl-20">
        <div className="game-top-left">
          <h3>{info}</h3>
        </div>
        <div className="game-top-right pr-10">
          <h3>More Info</h3>
        </div>
      </div>
      <div>
        <img src={image} />
      </div>
      <div className="game-bottom">
        {/* <button>Book Now</button> */}
        <span className="tiles bg-theme-orange">
          <Link to="/booknow">Book Now</Link>
        </span>
      </div>
    </div>
  );
};

export default GamesItem;
