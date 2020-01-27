import React from "react";
import "./App.css";

const animals = [
  { label: "Horse" },
  { label: "Turtle" },
  { label: "Elephant" },
  { label: "Monkey" }
];

const App = () => {
  const animalsInHTML = animals.map((singleAnimal, i) => {
    return <li key={i}>{singleAnimal.label}</li>;
  });

  return <ul>{animalsInHTML}</ul>;
};

export default App;
