import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Bookstore</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-book">Add Book</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
