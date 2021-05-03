import React from "react";

function Aside() {
  return (
    <aside>
      <div>
        <button className="validate" disabled>
          Valider mon panier
        </button>
        <p>Votre panier est vide</p>
      </div>
    </aside>
  );
}

export default Aside;
