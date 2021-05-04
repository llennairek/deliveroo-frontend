import React, { useState } from "react";
import Star from "../assets/img/Star";

function Dish({
  id,
  title,
  description,
  price,
  popular,
  picture,
  cart,
  setCart,
}) {
  const [anim, setAnim] = useState(0);
  const handleClick = () => {
    setAnim(1);
    const isPresent = cart.map((item) => item.id).indexOf(id);
    if (isPresent === -1) {
      setCart([...cart, { title, price, id, quantity: 1 }]);
    } else {
      const newArray = [...cart];
      newArray[isPresent].quantity += 1;
      setCart(newArray);
    }
  };
  return (
    <div
      className="dish"
      onClick={handleClick}
      anim={anim}
      onAnimationEnd={() => setAnim(0)}
    >
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
