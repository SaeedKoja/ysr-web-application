import "./App.css";
import "./components/global/main.css";
import { useState } from "react";
import NavBar from "../src/components/NavBar/NavBar";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import CreatePe from "./pages/Pe/Create";
import LastPe from "./pages/Pe/LastPerson";
import EditPe from "./pages/Pe/Edit";
import DetialPe from "./pages/Pe/Detials";

function App(props) {
  



    
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <Routes>
        <Route path="/Persen/Create" element={<CreatePe/>}></Route>
        <Route
          path="/Persen/LastPerson"
          element={<LastPe />}
        ></Route>
        <Route path="/Person/Edit/:id" element={<EditPe />}></Route>
        <Route path="/Persen/Detials/:id" element={<DetialPe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
