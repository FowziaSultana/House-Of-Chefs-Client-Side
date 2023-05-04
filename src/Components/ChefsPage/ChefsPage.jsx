import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import Recipes from "../Recipes/Recipes";
import LazyLoad from "react-lazy-load";
import { AuthContext } from "../../Providers/AuthProvider";
import Loader from "../Shared/Loader/Loader";

const ChefsPage = () => {
  const [recipes, setRecipes] = useState([]);
  const aChef = useLoaderData();
  const {
    ChefId,
    ChefName,
    ChefPicture,
    Likes,
    NumberOfRecipes,
    YearsOfExperience,
    Bio,
  } = aChef;
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    fetch(
      `https://b7a10-chef-recipe-hunter-server-side-fowzia-sulta-fowziasultana.vercel.app/recipes/${ChefId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoad(false);
      });
  }, [ChefId]);

  // if (load) {
  //   return (
  //     <div
  //       className=" inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  //       role="status"
  //     >
  //       <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
  //         Loading...
  //       </span>
  //     </div>
  //   );
  // }

  //private route for single chefs details view
  return (
    <div>
      <header className="bg-black">
        <div className="container mx-auto w-full  grid grid-cols-1 md:grid-cols-8 gap-3 place-items-center mb-5 p-7">
          <div className="md:col-span-3 ">
            <LazyLoad threshold={0.95}>
              <img
                className="w-full max-h-96 rounded-xl"
                src={ChefPicture}
              ></img>
            </LazyLoad>
          </div>
          <div className="md:col-span-5 bg-amber-400 p-9 rounded-2xl">
            <h1 className="text-2xl font-semibold">{ChefName}</h1>
            <p className="py-3">{Bio}</p>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="grid grid-cols-1">
                <span>
                  {" "}
                  <span className="text-lg font-medium">
                    Years of Experience:{" "}
                  </span>
                  {YearsOfExperience}
                </span>
                <span>
                  {" "}
                  <span className="text-lg font-medium">
                    Number of Recipes:{" "}
                  </span>
                  {NumberOfRecipes}
                </span>
              </div>
              <div className="flex gap-2 items-center mr-5  mt-3 md:mt-0">
                <span>
                  <FaThumbsUp />
                </span>{" "}
                <span>{Likes}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto my-7">
        <h1 className="text-center text-4xl font-bold text-amber-400 my-5">
          Chefs Choice
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {recipes ? (
            recipes.map((rec) => (
              <Recipes key={rec.recipe_id} recipes={rec}></Recipes>
            ))
          ) : (
            <h1>No recipes here</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChefsPage;
