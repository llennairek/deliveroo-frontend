import React from "react";

function Dish({ title, description, price, popular, picture }) {
  return (
    <div className="dish">
      <div className="dish-description">
        <h4>{title}</h4>
        <p>{description}</p>
        <span>{price}€</span>
        {popular && <span className="popular">Populaire</span>}
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
