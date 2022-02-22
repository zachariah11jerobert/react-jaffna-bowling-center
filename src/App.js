import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import BookNow from "./pages/BookNow";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <section id="section-call-now">
        <div className="bg-theme-red d-flex flex-row jc-end">
          <h3 className="mr-20">Call for Details : 0774441916</h3>
        </div>
      </section>
      <>
        <Navbar />
      </>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="aboutus" element={<AboutUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="booknow/:game" element={<BookNow />} />

          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
