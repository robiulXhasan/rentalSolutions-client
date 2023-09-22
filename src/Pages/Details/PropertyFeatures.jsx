import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const PropertyFeatures = () => {
  return (
    <div className="shadow-lg  mt-10 border rounded-xl p-8">
      <p className="text-2xl font-semibold  text-violet-500 mb-4">Features</p>
      <div className="all-features grid grid-cols-2 gap-2">
        <div className="flex items-center">
          <FaCheckCircle className="text-xl text-violet-500 me-2" /> 24/7 hours CC TV
          coverage
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="text-xl text-violet-500 me-2" />
          24/7 hours Gas & Electricity
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="text-xl text-violet-500 me-2" />
          Generator backup
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="text-xl text-violet-500 me-2" />
          Guard facilities
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="text-xl text-violet-500 me-2" />
          Road side view
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="text-xl text-violet-500 me-2" />
          WiFi facilities
        </div>
       
      </div>
    </div>
  );
};

export default PropertyFeatures;
