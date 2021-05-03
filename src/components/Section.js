import React from "react";
import Dish from "./Dish";

function Section({ name, meals }) {
  return (
    meals.length > 0 && (
      <div className="category">
        <h3>{name}</h3>
        <div className="dish-container">
          {meals.map((dish) => (
            <Dish
              key={dish.id}
              title={dish.title}
              description={dish.description}
              price={dish.price}
              popular={dish.popular}
              picture={dish.picture}
            />
          ))}
        </div>
      </div>
    )
  );
}

export default Section;
