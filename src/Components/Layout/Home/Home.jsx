import React from "react";
import Homebanner from "./Homebanner";
import Chefs from "../../Chefs/Chefs";
import CookingTips from "../../CookingTips/CookingTips";
import PhotoGallery from "../../PhotoGallery/PhotoGallery";

const Home = () => {
  return (
    <div>
      <Homebanner></Homebanner>
      <Chefs></Chefs>
      <CookingTips></CookingTips>
      <PhotoGallery></PhotoGallery>
    </div>
  );
};

export default Home;
