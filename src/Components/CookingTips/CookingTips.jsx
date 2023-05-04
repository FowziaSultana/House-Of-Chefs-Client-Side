import React from "react";
import { toast } from "react-hot-toast";

const CookingTips = () => {
  const handleMore = () => {
    toast((t) => (
      <span>
        For more tips follow this{" "}
        <b>
          <a href="https://www.realsimple.com/food-recipes/cooking-tips-techniques/kitchen-tips-techniques">
            link{" "}
          </a>
        </b>
      </span>
    ));
  };
  return (
    //tips for cooking ,extra required div
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/Ybjxsp6/bg-1.png")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content  text-neutral-content">
          <div className=" border border-amber-200 p-7 lg:px-12 lg:py-9">
            <h1 className="mb-5 text-center text-3xl lg:text-5xl font-bold text-amber-500">
              Cooking Tips!!
            </h1>
            <ul className="mb-5 list-decimal text-lg leading-loose text-amber-200">
              <li>
                Use fresh herbs: Thai cooking relies heavily on fresh herbs like
                basil, cilantro, and lemongrass. Use them generously to bring
                out the distinct flavors of Thai cuisine.
              </li>
              <li>
                Balance flavors: Thai food is all about balancing sweet, sour,
                spicy, and salty flavors. Taste and adjust the seasoning
                accordingly.
              </li>
              <li>
                Use fish sauce: Fish sauce is a staple in Thai cuisine and adds
                a unique umami flavor to dishes. Use it sparingly to avoid
                overpowering other flavors.
              </li>
              <li>
                Use coconut milk: Coconut milk adds richness and creaminess to
                Thai curries and soups. Choose a good quality brand for best
                results.
              </li>
              <li>
                Cook vegetables quickly: Thai stir-fries and curries often
                include vegetables, which should be cooked quickly to retain
                their crunch and vibrant color.
              </li>
            </ul>
            <div className="text-center">
              {" "}
              <button onClick={handleMore} className=" btn btn-primary">
                More tips
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingTips;
