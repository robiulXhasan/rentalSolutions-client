import React from 'react';
import { FaRegSquare, FaCar, FaBed, FaBath } from "react-icons/fa";
import { TbCurrencyTaka, TbToolsKitchen2 } from "react-icons/tb";
import { GiElevator } from "react-icons/gi"
const PropertyDescription = ({product}) => {
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
        <div className="shadow-lg p-5 rounded-lg border border-violet-100">
      <p className="text-2xl font-bold text-violet-500 my-4 ">Description</p>

      <div className=" md:grid grid-cols-2 gap-5 mb-4">
        <div className='md:border-e border-violet-500 md:pe-5'>
        <div className='grid grid-cols-5 border-b  items-center md:p-2'>
          <h5 className="font-bold  col-span-2">Property Type :</h5>
          <span className='flex  items-center col-span-3 '>{category}</span>
        </div>
        <div className='grid grid-cols-5 border-b  items-center md:p-2'>
          <h5 className="font-bold  col-span-2">Property Size :</h5>
          <span className='flex  items-center col-span-3 '>
            <FaRegSquare className="font-awesome-icon me-2" /> {propertySize}{" "}
            sq.Ft
          </span>
        </div>
        <div className='grid grid-cols-5 border-b  items-center md:p-2'>
          <h5 className="font-bold  col-span-2">Rent :</h5>
          <span className='flex  items-center col-span-3 '>
            <TbCurrencyTaka className="font-awesome-icon me-2" /> {rent}
          </span>
        </div>
        <div className='grid grid-cols-5 border-b  items-center md:p-2'>
          <h5 className="font-bold  col-span-2">Garages :</h5>
          <span className='flex  items-center col-span-3 '>
            <FaCar className="font-awesome-icon me-2" /> {garage}
          </span>
        </div>

        <div className='grid grid-cols-5 border-b  items-center md:p-2'>
          <h5 className="font-bold  col-span-2">Room :</h5>
          <span className='flex  items-center col-span-3 '>
            <FaBed className="font-awesome-icon me-2" /> {room}
          </span>
        </div>
        </div>
       <div>
       <div className='grid grid-cols-5 border-b  items-center md:p-2'>
          <h5 className="font-bold  col-span-2">Bath :</h5>
          <span className='flex  items-center col-span-3 '>
            <FaBath className="font-awesome-icon me-2" /> {bath}
          </span>
        </div>
        <div className='grid grid-cols-5 border-b  items-center md:p-2'>
          <h5 className="font-bold  col-span-2">Kitchen :</h5>
          <span className='flex  items-center col-span-3 '>
            <TbToolsKitchen2 className="font-awesome-icon me-2" />
            {kitchen}
          </span>
        </div>
        <div className='grid grid-cols-5 border-b  items-center md:p-2'>
          <h5 className="font-bold  col-span-2">Gas :</h5>
          <span className='flex  items-center col-span-3 '>{gas}</span>
        </div>
        <div className='grid grid-cols-5 border-b  items-center md:p-2'>
          <h5 className="font-bold  col-span-2">Elevator :</h5>
          <span className='flex  items-center col-span-3 '>
            <GiElevator className="font-awesome-icon me-2" />
            {elevator}
          </span>
        </div>
       </div>
      </div>
    </div>
    );
};

export default PropertyDescription;