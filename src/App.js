import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import BookNow from "./pages/BookNow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="aboutus" element={<AboutUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="booknow" element={<BookNow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
