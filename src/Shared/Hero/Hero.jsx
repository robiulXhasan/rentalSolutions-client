import React from "react";
import SearchArea from "./SearchArea";

const Hero = () => {
  return (
    <div className="flex justify-center mx-auto">
      <div className="hero-title">
        <p className="text-2xl md:text-5xl mb-2 ">Rent a Property Easily</p>
        <span className="text-sm md:text-2xl  ">Rent your desired property from us</span>
      </div>
      <SearchArea/>
    </div>
  );
};

export default Hero;
