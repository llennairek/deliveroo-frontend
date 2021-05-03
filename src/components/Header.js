import React from "react";
import Logo from "../assets/img/Logo";

function Header({ name, description, picture }) {
  return (
    <header>
      <div>
        <div className="logo-container container">
          <Logo />
        </div>
      </div>
      <div className="restaurant-description container">
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className="img-container">
          <img src={picture} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
