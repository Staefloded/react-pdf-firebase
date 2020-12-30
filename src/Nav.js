import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper ">
        <Link to="/" href="#!" className="brand-logo left">
          PDF Viewer
        </Link>
        <ul className="right ">
          <li>
            <Link to="/dashboard" className="waves-effect waves-light btn blue">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
