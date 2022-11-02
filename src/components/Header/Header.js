import React from "react";
import "./Header.css";
import User from "../../image/undraw_Male_avatar_re_tqsc(1).png";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-end">
          <p>yazaN</p>
          <img src={User} alt="" />
        </div>
        <i className="bx bx-menu"></i>
      </div>
    </div>
  );
};

export default Header;
