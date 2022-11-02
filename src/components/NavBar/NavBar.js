import Logo from "../../image/Logo.png";
import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function UseState() {
  const [isvalidPe, setIsvalidPe] = useState(true);
  const [isvalidPr, setIsvalidPr] = useState(true);

  const arrowPe = (event) => {
    setIsvalidPe(false);
    event.preventDefault();
    if (isvalidPe === false) {
      setIsvalidPe(true);
    }
  };
  const arrowPr = (event) => {
    setIsvalidPr(false);
    event.preventDefault();
    if (isvalidPr === false) {
      setIsvalidPr(true);
    }
  };
  return { isvalidPe, isvalidPr, arrowPe, arrowPr };
}
const NavBar = (props) => {
  const { isvalidPe, isvalidPr, arrowPe, arrowPr } = UseState();


  return (
    <div className="SideBar">
      <div className="Side-logo">
        <img src={Logo} alt="yazan"></img>
        <h2>اليسر للارتقاء العمراني</h2>
      </div>
      <hr />
      <div className="Side-Nav">
        <ul className="list">
          <li>
            <NavLink to="/">
              <i className="bx bxs-home"></i>
              <p>الرئيسية</p>
            </NavLink>
          </li>
          <li onClick={arrowPe}>
            {/* <a href="/"> */}
            <i className="bx bxs-user"></i>
            <p>المراجع</p>
            <i className="bx bx-chevron-down arrow"></i>
            {/* </a> */}
          </li>
          <li className={`ul ${!isvalidPe ? "show" : ""}`}>
            <ul>
              <li>
                <NavLink to="/Persen/Create">
                  <i className="bx bxs-user-plus"></i>
                  <p>اضافة</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Persen/LastPerson">
                  <i className="bx bx-show-alt"></i>
                  <p>اخر إضافة </p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Persen/AllPerson">
                  <i className="bx bx-table"></i>
                  <p>عرض الكل</p>
                </NavLink>
              </li>
            </ul>
          </li>
          <li onClick={arrowPr}>
            {/* <a href="/"> */}
            <i className="bx bxs-buildings"></i>
            <p>المشاريع</p>
            <i className="bx bx-chevron-down arrow"></i>
            {/* </a> */}
          </li>
          <li className={`ul ${!isvalidPr ? "show" : ""}`}>
            <ul>
              <li>
                <a href="/">
                  <i className="bx bxs-user-plus"></i>
                  <p>اضافة</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
