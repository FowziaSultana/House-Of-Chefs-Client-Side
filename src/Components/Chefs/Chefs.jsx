import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import SingleChef from "../SingleChef/SingleChef";
import { AuthContext } from "../../Providers/AuthProvider";
import Loader from "../Shared/Loader/Loader";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    fetch(
      "https://b7a10-chef-recipe-hunter-server-side-fowzia-sulta-fowziasultana.vercel.app/chefs"
    )
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setLoad(false);
      });
  }, []);
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

  return (
    //here all chefs details are formed in a grid card
    <div className="my-11 container mx-auto">
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
