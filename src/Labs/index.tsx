import "./labs.css";
import HeadingsAndParagraphs from "./Lab 1/headingsandpara";
import Lists from "./Lab 1/lists";
import Forms from "./Lab 1/forms";
import Navbar from "./Lab 1/navbar";
import Table from "./Lab 1/tables";
import Images from "./Lab 1/images";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import LabsNavbar from "./labsNavbar";
import Lab1 from "./Lab 1";
import Lab2 from "./Lab 2";

const LabWork = () => {
  return (
    <div className="lab-work">
      <div className="top-buttons">
        <Link to="/" className="back-button">
          Back to Landing Page
        </Link>
        <div></div>
        <Link to="../kanbas" className="kanbas-button">
          Go to Kanbas
        </Link>
      </div>

      <h1>Lab Work</h1>
      {/* <div className="headings">
        <h1>Shreyans Mulkutkar</h1>
        <h4>CS5610 - 20596</h4>
      </div> */}
      {/* <h2>Lab 1</h2> */}

      <LabsNavbar />

      <Routes>
        <Route
          path="/"
          element={<h3>Use the above navbar to view different components.</h3>}
        />
        <Route path="lab1/*" element={<Lab1 />} />
        <Route path="lab2/*" element={<Lab2 />} />
      </Routes>

      {/* <Routes>
                <Route path="/" element={<h3>Use the above navbar to view different components.</h3>} />
                <Route path="headingsandpara" element={<HeadingsAndParagraphs />} />
                <Route path="lists" element={<Lists />} />
                <Route path="tables" element={<Table />} />
                <Route path="forms" element={<Forms />} />
                <Route path="images" element={<Images />} />
            </Routes> */}
    </div>
  );
};

export default LabWork;
