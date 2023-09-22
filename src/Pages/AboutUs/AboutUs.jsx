import React from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { BiCategory, BiFileFind, BiPhoneCall } from "react-icons/bi";
import { BsUiChecks, BsSortAlphaDown } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div>
      <div className="p-8 md:p-16 tracking-tight    bg-gradient-to-r from-[#7b6ef1] to-[#ecebf3] text-center  text-xl md:text-5xl font-bold ">
        <p className="">Our Mission is to find the Best </p>
        <p className="">Property for you.</p>
        
       
      </div>
      <div className=" w-11/12 mx-auto">
        <div className="flex justify-center items-center gap-4 my-10">
            <div className="w-6 md:w-12 h-3 md:h-4 bg-violet-500"></div>
        <h1 className="text-2xl md:text-4xl text-center font-medium">
          Reason to Choose Us
        </h1>
        <div className="w-6 md:w-12 h-3 md:h-4 bg-violet-500"></div>
        </div>


        <div className="text-center grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-5 rounded-lg shadow-lg border border-violet-500 ">
            <BiMessageSquareAdd className="text-5xl mb-4 font-extrabold mx-auto text-violet-500" />
            <p>Owner can easily add their property</p>
            <span>
              "By using this website property owner can easily add their
              property with property specification and details."
            </span>
          </div>
          <div className="p-5 rounded-lg shadow-lg border border-violet-500 ">
            <BsSortAlphaDown className="text-5xl mb-4 font-extrabold mx-auto text-violet-500" />
            <p>Renter Can sort property Easily</p>
            <span>
              Renter can easily sort their desire property based on the property
              specification and details."
            </span>
          </div>
          <div className="p-5 rounded-lg shadow-lg border border-violet-500 ">
            <BiCategory className="text-5xl mb-4 font-extrabold mx-auto text-violet-500" />
            <p>Categorized property in different category</p>
            <span>
              "All the property are categorized in their respective category for
              easily foundable by renter."
            </span>
          </div>
          <div className="p-5 rounded-lg shadow-lg border border-violet-500 ">
            <BiFileFind className="text-5xl mb-4 font-extrabold mx-auto text-violet-500" />
            <p>Help to find best property in your desire area</p>
            <span>
              "It will help renters to found their desire property in their
              selected area or where they want to rent."
            </span>
          </div>
          <div className="p-5 rounded-lg shadow-lg border border-violet-500 ">
            <BiPhoneCall className="text-5xl mb-4 font-extrabold mx-auto text-violet-500" />
            <p>Communication between property owner & renter</p>
            <span>
              "The renter can easily communicate with the property owner through
              phone call, email and messaging."
            </span>
          </div>
          <div className="p-5 rounded-lg shadow-lg border border-violet-500 ">
            <BsUiChecks className="text-5xl mb-4 font-extrabold mx-auto text-violet-500" />
            <p>Choose your desire property & save your time</p>
            <span>
              "This application will help you to choose your desire property
              from your home and save your time."
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
