import React from "react";

const PropertyAddress = ({ product }) => {
  const {
    address,
    area,
    bath,
    category,
    city,
    details,
    elevator,
    email,
    garage,
    gas,
    image,
    image1,
    image2,
    kitchen,
    month,
    name,
    phone,
    propertySize,
    rent,
    room,
    title,
    _id,
  } = product;
  return (
    <div className="shadow-lg p-5 rounded-lg border border-violet-100 mt-10">
      <p className="text-2xl font-bold text-violet-500 mb-4">Address</p>
      <div className="md:grid grid-cols-2 gap-5">
       <div className="md:border-e border-violet-500 md:pe-5">
       <div className="grid grid-cols-5 border-b md:p-2">
          <h6 className="font-bold col-span-2">Address :</h6>
          <span className="col-span-3 ">{address}</span>
        </div>
        <div className="grid grid-cols-5 border-b md:p-2">
          <h6 className="font-bold col-span-2">Area : </h6>

          <span className="col-span-3 ">{area}</span>
        </div>
        <div className="grid grid-cols-5 border-b md:p-2">
          <h6 className="font-bold col-span-2">City :</h6>

          <span className="col-span-3 ">{city}</span>
        </div>
       </div>
        <div>
        <div className="grid grid-cols-5 border-b md:p-2">
         
         <h6 className="font-bold col-span-2">Country :</h6>
      
         <span className="col-span-3 ">Bangladesh</span>
      
     </div>
     <div className="grid grid-cols-5 border-b md:p-2">
       <h6 className="font-bold col-span-2">Zip/Postal Code :</h6>

       <span className="col-span-3 ">1800</span>
     </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyAddress;
