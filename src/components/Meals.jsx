import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHTTP.js";

const requestConfig = {};

export default function Meals() {
  const {
    data: availableMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p>Fetching meals...</p>;
  }

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
