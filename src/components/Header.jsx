import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="hadder">
        <div className="kalviumBook">
          <img
            className="logo"
            src="https://kalvium.com/wp-content/uploads/2022/07/fav.png"
            alt=""
          />
          <h1>Kalvium Book</h1>
        </div>
        <div className="Register">
          <Link to="/forms">
            <button className="Register-btn">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
