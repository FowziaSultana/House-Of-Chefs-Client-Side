import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import SingleChef from "../SingleChef/SingleChef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div className="mt-8 container mx-auto">
      {chefs ? (
        <div className="grid grid-cols-1 lg:grid-cols-3  place-items-center gap-y-12">
          {chefs.map((aChef) => (
            <SingleChef aChef={aChef}></SingleChef>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Chefs;
