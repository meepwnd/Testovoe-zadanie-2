import React from "react";
import AuthButton from "./AuthButton";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <ul className="nav justify-content-center">
      <li className="nav-link">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-link">
        <Link to="/news">News</Link>
      </li>
      <li className="nav-link">
        <Link to="/profile">Profile</Link>
      </li>
      <li className="nav-link ml-auto">
        <AuthButton />
      </li>
    </ul>
  </header>
);

export default Header;
