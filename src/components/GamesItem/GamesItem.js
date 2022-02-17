import "./games-item.scss";

const GamesItem = ({ image, info }) => {
  return (
    <div className="games-container">
      <img src={image} />
      <div className="game-info pr-10">
        <h3>{info}</h3>
      </div>
    </div>
  );
};

export default GamesItem;
