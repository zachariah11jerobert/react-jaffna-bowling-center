import GamesItem from "../GamesItem/GamesItem";
import "./games-container.scss";

import badminton from "../../assets/badminton.jpg";
import bowling from "../../assets/bowling.png";
import tableTennis from "../../assets/table-tennis.jpg";
import chess from '../../assets/chess.jpeg';
import kidsarea from '../../assets/kids-area.jpg';
const GamesContainer = () => {
  return (
    <div>
      <GamesItem image={badminton} info={"Badminton"} bookingLink="badminton" />
      <GamesItem image={bowling} info={"Bowling"} bookingLink="bowling" />
      <GamesItem image={tableTennis} info={"Table Tennis"} bookingLink="tabbletennis" />
      <GamesItem image={chess} info={"Chess"} />
      <GamesItem image={kidsarea} info={"Kids Playing Area"} />
    </div>
  );
};

export default GamesContainer;
