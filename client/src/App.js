import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import pages from "./Pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/basic" element={<pages.Basic />} />
          <Route exact path="/" element={<pages.Api />} />
          <Route exact path="/advance" element={<pages.Advance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
