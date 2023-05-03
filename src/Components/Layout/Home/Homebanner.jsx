import React from "react";
import img1 from "../../../assets/image/banner-thumb.png";

const Homebanner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  bg-black text-white place-items-center px-5 ">
      <div className="">
        <h1 className="text-amber-500 font-bold text-3xl md:text-5xl lg:leading-tight">
          HOUSE OF THE CHEFS <br></br>THE CHRONICLES BEGIN...
        </h1>
        <p className="text-sm md:text-lg my-5">
          "Discover the Master Chefs behind our culinary creations! <br></br>{" "}
          Meet our talented team and learn about their backgrounds,<br></br> and
          specialties. Join us on a gastronomic journey!"
        </p>
        <button className="btn-primary">Explore</button>
      </div>
      <div>
        <img src={img1}></img>
      </div>
    </div>
  );
};

export default Homebanner;
