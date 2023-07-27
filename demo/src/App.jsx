import { useState } from "react";
import NavBar from "./components/NavBar";
import StarShips from "./components/StarShips";

function App() {
  // const url = "https://swapi.dev/api/starships/";
  console.log("hello APP");

  return (
    <div className="main">
      <NavBar />
      <StarShips />
    </div>
  );
}

export default App;
