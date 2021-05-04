import React, { useState } from "react";
import Section from "./Section";
import Aside from "./Aside";

function Main({ categories }) {
  const [cart, setCart] = useState([]);
  return (
    <main>
      <div className="content container">
        <div className="main-content">
          {categories.map((item, index) => (
            <Section
              key={index}
              name={item.name}
              meals={item.meals}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
        <Aside cart={cart} setCart={setCart} />
      </div>
    </main>
  );
}

export default Main;
