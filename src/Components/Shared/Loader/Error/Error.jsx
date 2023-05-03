import React from "react";
import page from "../../../../assets/image/CodePen-404-Page.png";

const Error = () => {
  return (
    <div className="error">
      <div className="bg-indigo-800 relative overflow-hidden h-screen">
        <img src={page} className="absolute h-full w-full object-cover" />   {" "}
        <div className="inset-0 bg-black opacity-25 absolute">    </div>   {" "}
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                 {" "}
          <div className="w-full font-mono flex flex-col items-center relative z-10">
                                   {" "}
            <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
                              404            {" "}
            </p>
                   {" "}
          </div>
             {" "}
        </div>
      </div>
    </div>
  );
};

export default Error;
