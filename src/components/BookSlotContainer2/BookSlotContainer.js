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
  return num;
}

const TimeSlots = () => {
  return (
    <IconContext.Provider value={{ size: "1.2rem" }}>
      <ul>
        {[...Array(16)].map((e, i) => {
          return (
            <li
              key={i}
              className="d-flex flex-row jc-space-around al-center bg-gray mt-2  slot-container fw-500"
            >

              <span>
           
           
                {6 + i > 11 ? `${i-6} PM` : `${6+i} AM`}
              </span>
            </li>
          );
        })}
      </ul>
    </IconContext.Provider>
  );
};

const Court = () => {
  return (
    <ul>
      {slots.map((slot, i) => {
        return (
          <li
            key={i}
            className="d-flex flex-row jc-center al-center bg-gray mt-2 ml-2 slot-container-court"
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
          <img src={badminton} className="img-wrap" alt="baminton" />
        </div>

        <div className="bookslot-container">
          <div className="time-slots">
            <div className="d-flex flex-row jc-center al-center h-40 pt-3 pb-3 bg-theme-orange">
             
            </div>
            <TimeSlots />
          </div>
          <div className="court-slots">
            <div className="d-flex flex-row jc-center al-center h-40  pt-3 pb-3 bg-theme-orange">
              <h3 className="ml-20 mr-20">Court 1</h3>
            </div>
            <Court />
          </div>
          <div className="court-slots">
            <div className="d-flex flex-row jc-center al-center h-40  pt-3 pb-3 bg-theme-orange">
              <h3 className="ml-20 mr-20">Court 2</h3>
            </div>
            <Court />
          </div>
          <div className="court-slots">
            <div className="d-flex flex-row jc-center al-center h-40  pt-3 pb-3 bg-theme-orange">
              <h3 className="ml-20 mr-20">Court 3</h3>
            </div>
            <Court />
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default BookSlotContainer;
