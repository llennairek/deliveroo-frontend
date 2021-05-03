import React from "react";
import Section from "./Section";
import Aside from "./Aside";

function Main({ categories }) {
  return (
    <main>
      <div className="content container">
        <div className="main-content">
          {categories.map((item, index) => (
            <Section key={index} name={item.name} meals={item.meals} />
          ))}
        </div>
        <Aside />
      </div>
    </main>
  );
}

export default Main;
