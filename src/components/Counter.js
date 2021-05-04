import React from "react";

function Counter({ cart, setCart, quantity, id }) {
  const handleClickMinus = () => {
    const indexOfDish = cart.map((item) => item.id).indexOf(id);
    const newArray = [...cart];
    if (newArray[indexOfDish].quantity > 1) {
      newArray[indexOfDish].quantity -= 1;
      setCart(newArray);
    } else {
      newArray.splice(indexOfDish, 1);
      setCart(newArray);
    }
  };
  const handleClickPlus = () => {
    const indexOfDish = cart.map((item) => item.id).indexOf(id);
    const newArray = [...cart];
    newArray[indexOfDish].quantity += 1;
    setCart(newArray);
  };
  return (
    <span>
      <button onClick={handleClickMinus} className="minus">
        &minus;
      </button>
      <span className="counter">{quantity}</span>
      <button onClick={handleClickPlus} className="plus">
        +
      </button>
    </span>
  );
}

export default Counter;
