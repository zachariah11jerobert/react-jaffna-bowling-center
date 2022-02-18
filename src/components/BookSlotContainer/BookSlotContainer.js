import "./bookslotcontainer.scss";

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
    <div className="bookslot-container">
      <div className="time-slots">
        <div>xxx</div>
        <TimeSlots />
      </div>
      <div className="court-slots">
        <div>Court 1/3</div>
        <Court />
      </div>
    </div>
  );
};

export default BookSlotContainer;
