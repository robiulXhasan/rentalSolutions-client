import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropertyDescription from "./PropertyDescription";
import PropertyAddress from "./PropertyAddress";
import PropertyFeatures from "./PropertyFeatures";
import { MdLocationOn } from "react-icons/md";
import useAuth from "../../hooks/useAuth";

const Details = () => {
    const {user}=useAuth()
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://rental-solutions-server.vercel.app/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
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

  console.log(propertySize);

  return (
    <div>
      <section className="w-11/12 mx-auto my-5">
        <h3>{title}</h3>
        <p>
          <MdLocationOn className="font-awesome-icon me-2" /> {area}, {city}
        </p>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2">
            <img
              className="h-auto md:h-[500px] object-cover w-full object-center"
              src={image}
              alt=""
            />
          </div>
          <div className="col-span-1">
            <h2 className="text-2xl text-violet-500">Manage By:- </h2>
            <h5>RentUs</h5>
            {user?.email!=email&& <><p className="mt-3 text-lg">
              Contact With property owner for more information
            </p>

            <div className="grid grid-cols-2  gap-3 mt-2">
              <button className="btn">
                <a href={"tel:" + phone}>Call</a>
              </button>
              <button className="btn">
                {/* <Link to={`/conversations/${_id}`}>Message</Link> */}
                <Link >Message</Link>
              </button>
              {/* <button className="btn">
                <a href={"mailto:" + email}>Email</a>
              </button> */}

              
            </div></>}

            
          </div>
        </div>
        <div className="features-section mt-3">
          <div className="features">
            <PropertyDescription product={product}></PropertyDescription>
          </div>
          <div className="features">
            <PropertyAddress product={product}></PropertyAddress>
          </div>
          <div className="features">
            <PropertyFeatures product={product}></PropertyFeatures>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
