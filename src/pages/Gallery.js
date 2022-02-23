import badmintonCourt1 from "../assets/badminton_court1.jpg";
import badmintonCourt2 from "../assets/badminton_court2.jpg";
import badmintonCourt3 from "../assets/badminton_court3.jpg";
import badmintonCourt4 from "../assets/badminton_court4.jpg";
import badmintonCourt5 from "../assets/badminton_court5.jpg";

function Gallery() {
  return (
    <div>
        <div>
            <h3>Badminton Area</h3>
            <ul>
                <li>3 courts</li>
                <li>Carpetted Floor</li>
            </ul>
        </div>
      <div>
        <img src={badmintonCourt1} className="img-wrap" />
        <img src={badmintonCourt2} className="img-wrap" />
        <img src={badmintonCourt3} className="img-wrap" />
        <img src={badmintonCourt4} className="img-wrap" />
        <img src={badmintonCourt5} className="img-wrap" />
      </div>
    </div>
  );
}

export default Gallery;
