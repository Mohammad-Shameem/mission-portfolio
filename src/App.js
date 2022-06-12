import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home/Home";

import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/project/:id"
          element={<ProjectDetails></ProjectDetails>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
