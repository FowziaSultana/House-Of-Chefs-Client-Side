import { handler } from "daisyui";
import React from "react";
import ReactStars from "react-rating-stars-component";
import "./Recipes.css";
import { toast } from "react-hot-toast";

const Recipes = ({ recipes }) => {
  const {
    chef_id,
    cooking_method,
    ingredients,
    rating,
    recipe_id,
    recipe_name,
  } = recipes;
  const handleFabourite = (id) => {
    const eleId = id.recipe_id;
    const ele = document.getElementById(eleId);
    ele.classList.add("checked");
    if (ele.classList.contains("checked")) {
      toast.success("Your fabourite recipe is listed");
      ele.disabled = true;
    }
  };

  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <div className="flex items-center gap-2">
          <span>Ratings</span>{" "}
          <ReactStars count={rating} size={24} isHalf={true} color="#fbbf24" />,
        </div>
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
        <div className="rating justify-end">
          <input
            id={recipe_id}
            type="radio"
            onClick={() => handleFabourite({ recipe_id })}
            name="rating-1"
            className="mask mask-heart"
          />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
