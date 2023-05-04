import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import SingleChef from "../SingleChef/SingleChef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch(
      "https://b7a10-chef-recipe-hunter-server-side-fowzia-sulta-fowziasultana.vercel.app/chefs"
    )
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div className="mt-8 container mx-auto">
      {chefs ? (
        <div className="grid grid-cols-1 lg:grid-cols-3  place-items-center gap-y-12">
          {chefs.map((aChef) => (
            <SingleChef key={aChef.ChefId} aChef={aChef}></SingleChef>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Chefs;
