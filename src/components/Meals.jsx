import { use, useEffect } from "react";
import { useState } from "react";

export default function Meals() {
  const [availableMeals, setAvailableMeals] = useState([]);

  useEffect(() => {
    async function fetchingData() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
      }

      const meals = await response.json();

      setAvailableMeals(meals);
    }

    fetchingData();
  }, []);

  return (
    <ul id="meals">
      {availableMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
