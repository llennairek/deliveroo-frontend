import React from "react";
import Star from "../assets/img/Star";

function Dish({ title, description, price, popular, picture }) {
  return (
    <div className="dish">
      <div className="dish-description">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="price">
          <span>{price}€</span>
          {popular && (
            <span className="popular">
              <Star /> Populaire
            </span>
          )}
        </div>
      </div>
      {picture && (
        <div className="dish-img-container">
          <img src={picture} alt={title} />
        </div>
      )}
    </div>
  );
}

export default Dish;
