import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHTTP.js";
import Error from "./Error.jsx";

const requestConfig = {};

export default function Meals() {
  const {
    data: availableMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/mealsss", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals." message={error} />;
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
