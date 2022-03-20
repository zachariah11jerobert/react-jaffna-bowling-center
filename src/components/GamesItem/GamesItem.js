import { Link } from "react-router-dom";
import "./games-item.scss";

const GamesItem = ({ image, info, bookingLink }) => {
  return (
    <div className="games-container">
      {/* <div className="overlay"></div> */}
      <div className="game-top bg-theme-red pl-20">
        <div className="game-top-left">
          <h3>{info}</h3>
        </div>
        <div className="game-top-right pr-10">
          <Link to={`/gallery`} className="link-title">More Info</Link>
        </div>
      </div>
      <div>
        <img src={image} alt="games item"/>
      </div>

      <div className="game-bottom">
        {bookingLink && (
          <span className="tiles bg-theme-orange">
            <Link to={`/booknow/${bookingLink}`} className="link-title">Book Now</Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default GamesItem;
