import React from "react";
import style from "./recipe.module.css";

// Gets title, calories, and image from list of recipe objects
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <img className={style.image} src={image} alt="" />
      <p>
        <b>Calories:</b> {Math.round(calories)}
      </p>
      <b>Ingredients</b>
      <ul className={style.ingredients}>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
