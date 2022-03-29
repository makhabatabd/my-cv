import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className={"menu"}>
      <ul>
        <li>
          <a href="#works">My Works</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
