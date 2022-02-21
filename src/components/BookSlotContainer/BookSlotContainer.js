import "./bookslotcontainer.scss";
import badminton from "../../assets/badminton.jpg";

function pad(num) {
  num = num.toString();
  while (num.length < 2) num = "0" + num;
  num = num + " : 00";
  return num;
}

const TimeSlots = () => {
  return (
    <ul>
      {[...Array(16)].map((e, i) => {
        return (
          <li key={i} className="bg-gray mt-2 slot-container">
            {pad(6 + i)} - {pad(7 + i)}
          </li>
        );
      })}
    </ul>
  );
};

const Court = () => {
  return (
    <ul>
      {[...Array(16)].map((e, i) => {
        return (
          <li key={i} className="bg-gray mt-2 ml-2 slot-container-court">
            X
          </li>
        );
      })}
    </ul>
  );
};

const BookSlotContainer = () => {
  return (
    <>
      <div>
        <img src={badminton} className="img-wrap" />
      </div>

      <div className="bookslot-container pt-3 pb-3 bg-theme-orange">
        <div className="time-slots">
          <h3>Time Slots</h3>
        </div>
        <div className="court-slots">
          <div className="d-flex flex-row jc-spacearound">
            <span>{"<"}</span>
            <h3>Court 1/3</h3>
            <span>{">"}</span>
          </div>
        </div>
      </div>

      <div className="bookslot-container">
        <div className="time-slots">
          <TimeSlots />
        </div>
        <div className="court-slots">
          <Court />
        </div>
      </div>
    </>
  );
};

export default BookSlotContainer;
