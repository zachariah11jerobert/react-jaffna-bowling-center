import GamesItem from "../GamesItem/GamesItem";
import "./games-container.scss";

import badminton from "../../assets/badminton.jpg";
import bowling from "../../assets/bowling.png";
import tableTennis from "../../assets/table-tennis.jpg";
const GamesContainer = () => {
  return (
    <div>
      <GamesItem image={badminton} info={"Badminton"} />
      <GamesItem image={bowling} info={"Bowling"} />
      <GamesItem image={tableTennis} info={"Table Tennis"} />
    </div>
  );
};

export default GamesContainer;
