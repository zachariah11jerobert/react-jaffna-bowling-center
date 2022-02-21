import "./bookslotcontainer.scss";
import badminton from "../../assets/badminton.jpg";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";

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
        <div className="d-flex flex-row jc-center">
          <h3>Time Slots</h3>
        </div>
        <div className="court-slots">
          <div className="d-flex flex-row jc-center">
            <IconContext.Provider
              value={{ size:'2rem' }}
            >
              <FaIcons.FaChevronCircleLeft />
              <h3 className="ml-20 mr-20">Court 1/3</h3>
              <FaIcons.FaChevronCircleRight />
            </IconContext.Provider>
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
