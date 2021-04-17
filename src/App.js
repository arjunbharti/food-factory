import React from "react";
import './App.css';
import { useState } from "react";

const foodDB = {
  junk: [
    {
      name: "Momos",
      rating: "5/5" 
    },
    {
      name: "Pizza",
      rating: "4/5"
    }
  ],
  healthy: [
    {
      name: "Oats",
      rating: "3/5"
    },
    {
      name: "Sprouts",
      rating: "2/5"
    }
  ],
  liquid: [
    {
      name: "Protein Shake",
      rating: "5/5"
    },
    {
      name: "Veg soup",
      rating: "4/5"
    }
  ]
};


export default function App() {
  const [selectedfood, setfood] = useState("junk");
  function foodClickHandler(food) {
    setfood(food);
  }
  return (
    <div className="App">
      <h1> Food Factory </h1>
      <p style={{ fontSize: "smaller" }}>
     
        Welcome to my fun food world
      </p>

      <div>
        {Object.keys(foodDB).map((food) => (
          <button onClick={() => foodClickHandler(food)}
          style={{
            cursor: "pointer",
            background: "red",
            borderRadius: "0.5rem",
            padding: "0.5rem  1rem",
            border: "1px solid red",
            margin: "1rem 0.3rem"
          }}
          >{food}</button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedfood].map((food) => (
            <li key={food.name}
            className="card"
            style={{
              listStyle: "none",
              padding: "1rem",
              border: "1px solid red",
              width: "70%",
              margin: "1rem 0rem",
              borderRadius: "0.5rem"
            }}
            >
              
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}