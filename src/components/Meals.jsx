import { use, useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem.jsx";

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
        <MealItem key={meal.id} meal={meal}>
          {meal.name}
        </MealItem>
      ))}
    </ul>
  );
}
