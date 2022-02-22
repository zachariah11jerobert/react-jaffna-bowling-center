import "./bookslotcontainer.scss";
import badminton from "../../assets/badminton.jpg";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";

const slots = [
  { bookStatus: "e", bookText: "Book Now" },
  { bookStatus: "c", bookText: "Confirmed" },
  { bookStatus: "ca", bookText: "Cancelled" },
  { bookStatus: "r", bookText: "Reserved" },
  { bookStatus: "e", bookText: "Book Now" },
  { bookStatus: "e", bookText: "Book Now" },
  { bookStatus: "e", bookText: "Book Now" },
  { bookStatus: "e", bookText: "Book Now" },
  { bookStatus: "e", bookText: "Book Now" },
  { bookStatus: "e", bookText: "Book Now" },
  { bookStatus: "e", bookText: "Book Now" },
  { bookStatus: "e", bookText: "Book Now" },
  { bookStatus: "e", bookText: "Book Now" },
  { bookStatus: "e", bookText: "Book Now" },
  { bookStatus: "e", bookText: "Book Now" },
  { bookStatus: "e", bookText: "Book Now" },
];

function todayDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + "-" + mm + "-" + yyyy;

  return today;
}

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
          <li key={i} className="bg-gray mt-2 slot-container fw-500">
            {pad(6 + i)} - {pad(7 + i)} {6 + i > 11 ? "PM" : "AM"}
          </li>
        );
      })}
    </ul>
  );
};

const Court = () => {
  return (
    <ul>
      {slots.map((slot, i) => {
        return (
          <li
            key={i}
            className="d-flex flex-row jc-center bg-gray mt-2 ml-2 slot-container-court"
          >
            {slot.bookStatus == "e" ? (
              <button className="btn-book bg-black">{slot.bookText}</button>
            ) : (
              <span> {slot.bookText}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const BookSlotContainer = () => {
  return (
    <>
      <IconContext.Provider value={{ size: "2rem" }}>
        <div>
          <img src={badminton} className="img-wrap" />
        </div>

        <div className="bookslot-container">
          <div className="time-slots">
            <div className="h-40 pt-3 pb-3 bg-theme-orange">
              <FaIcons.FaCalendar /> ( 2022 - feb - 01)
            </div>
            <TimeSlots />
          </div>
          <div className="court-slots">
            <div className="h-40  pt-3 pb-3 d-flex flex-row jc-center bg-theme-orange">
              <FaIcons.FaChevronCircleLeft />
              <h3 className="ml-20 mr-20">Court 1/3</h3>
              <FaIcons.FaChevronCircleRight />
            </div>
            <Court />
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default BookSlotContainer;
