import React from "react";
import "./Navbar.style";
import Nav, { Brand } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>{"<bbluechip/>"}</i>
        <span>Recipe</span>
      </Brand>
    </Nav>
  );
};

export default Navbar;
