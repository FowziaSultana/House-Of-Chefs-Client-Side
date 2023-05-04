import React from "react";

const Recipes = ({ recipes }) => {
  const {
    chef_id,
    cooking_method,
    ingredients,
    rating,
    recipe_id,
    recipe_name,
  } = recipes;
  // rating
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <p>
          <span className="font-semibold">Ingredients: </span>
          <span>
            {ingredients.map((i) => (
              <span>{i},</span>
            ))}{" "}
          </span>
        </p>
        <p></p>
        <p>
          <span className="font-semibold">Cooking Methods: </span>
          {cooking_method}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
