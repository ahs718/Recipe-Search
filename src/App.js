import "./App.css";
import Recipe from "./Recipe";
import { useEffect, useState } from "react";

const App = () => {
  const APP_ID = "8f8b763a";
  const APP_KEY = "3a6016099ad73dbd54eda2b5b713ca56";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  // Asynchronously fetches api data based off of search query
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  // Update search bar while user types
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // Gets search after form is submitted and sets it to query
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  
  // Invokes the function to fetch the API data whenever the state of query is updated
  useEffect(() => {
    getRecipes();
  }, [query]);

  // Implement the recipe component into html
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
