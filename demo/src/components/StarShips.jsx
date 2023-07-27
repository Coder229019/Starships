import { useState, useEffect } from "react";
export default function StarShips() {
  const [starships, setStarShips] = useState([]);
  console.log("inside the main function");

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log("json", json))
      .catch((error) => {
        console.log("Error fetching starships:", error);
      });
  }, []);

  return (
    <div className="container">
      {starships.map((star) => {
        return <div key={star.name}>{star.name}</div>;
      })}
    </div>
  );
}
