import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Navbar.styled";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <h4>Home</h4>
      </Link>
    </Nav>
  );
};

export default Navbar;
