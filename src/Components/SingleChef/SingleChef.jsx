import React from "react";
import "./SingleChef.css";
import { Link } from "react-router-dom";

const SingleChef = ({ aChef }) => {
  const {
    ChefId,
    ChefName,
    ChefPicture,
    Likes,
    NumberOfRecipes,
    YearsOfExperience,
  } = aChef;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl ">
      <figure>
        <img className="card-img" src={ChefPicture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold">{ChefName}</h2>

        <p>
          <span className="font-bold text-amber-300"> Number Of Recipes</span> :
          <span className="font-semibold"> {NumberOfRecipes}</span>
        </p>
        <p>
          <span className="font-bold text-amber-300"> Years Of Experience</span>{" "}
          : <span className="font-semibold">{YearsOfExperience}</span>
        </p>
        <p>
          <span className="font-bold text-amber-300"> Likes</span> :{" "}
          <span className="font-semibold">{Likes}</span>
        </p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
