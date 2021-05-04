import React from "react";
import Counter from "./Counter";

function Aside({ cart, setCart }) {
  //function to calculate to amount before shipping cost
  const calculate = (array) => {
    const total = array
      .reduce((acc, item) => acc + parseFloat(item.price * item.quantity), 0)
      .toFixed(2);
    return total;
  };

  console.log(cart);

  return (
    <aside id="aside">
      <div>
        {cart.length > 0 ? (
          <>
            <button className="validate">Valider mon panier</button>
            <div className="cart">
              {cart.map((item, index) => {
                return (
                  <div key={item.id} className="cart-item">
                    <Counter
                      cart={cart}
                      setCart={setCart}
                      quantity={item.quantity}
                      id={item.id}
                    />
                    <p>{item.title}</p>
                    <span>{item.price} €</span>
                  </div>
                );
              })}
            </div>
            <div className="total-details">
              <div>
                <span>Sous-total</span>
                <span>
                  {calculate(cart)}
                  {" €"}
                </span>
              </div>
              <div>
                <span>Frais de livraison</span>
                <span>2.50 €</span>
              </div>
            </div>
            <div className="total">
              <span>Total</span>
              <span>{(Number(calculate(cart)) + 2.5).toFixed(2)} €</span>
            </div>
          </>
        ) : (
          <>
            <button className="validate grey" disabled>
              Valider mon panier
            </button>

            <p>Votre panier est vide</p>
          </>
        )}
      </div>
    </aside>
  );
}

export default Aside;
