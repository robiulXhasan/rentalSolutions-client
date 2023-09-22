import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaBed, FaBath, FaSquare } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TopListingProperty = () => {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    fetch("https://rental-solutions-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProperty(data.slice(0, 10)));
  }, []);
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-5">
      <div className="text-center top-listing-title my-5">
        <h1 className="text-4xl font-bold">Top Listing Property</h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {property.map((pro,index) => (
          <SwiperSlide key={index}>
            <div className="card card-compact bg-white mb-14 shadow-xl border border-violet-400">
              <figure>
                <img src={pro.image} className=" object-cover object-center h-44" alt="..." />
              </figure>
              <div className="card-body">
                <p className="fw-bold">{pro.title}</p>

                <span className="flex items-center justify-start gap-2">
                  <ImLocation2 className="" />
                  {pro.area}, {pro.city}
                </span>
                <p className="text-start"> Property Type: {pro.category}</p>
                <div className="flex justify-between gap-4">
                  <span className="flex items-center gap-2">
                    <FaBed className="text-violet-400" /> {pro.room}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaBath className="text-violet-400" /> {pro.bath}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaSquare className="text-violet-400" /> {pro.propertySize}{" "}
                    sqft.
                  </span>
                </div>
                <div className=" text-start">
                  <span className="">
                    Available From:{" "}
                    <b className="text-violet-400">{pro.month}</b>
                  </span>
                </div>
                <div className=" text-start">
                  <span>
                    Rent: <span className="text-violet-400">{pro.rent}</span> TK
                    / month
                  </span>
                </div>
                <div className="text-center ">
                  <Link
                    to={`/details/${pro._id}`}
                    className=" btn w-full border-0 border-violet-400 border-b-4"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: {
            width: 0,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          400: {
            width: 400,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          520: {
            width: 520,
            slidesPerView: 2,
            spaceBetween: 10,
          },
          960: {
            width: 950,
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1290: {
            width: 1290,
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1110: {
            width: 1110,
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        {property.map((pro) => (
          <SwiperSlide>
          <div className="card bg-base-100 shadow-xl">
          <figure><img src={pro.image} className="card-img-top" alt="..." /></figure>
          <div className="card-body">
          <p className="fw-bold">{pro.title}</p>

<span className="flex  items-center gap-2 -mt-8"> 
<ImLocation2 className="" />
{pro.area}, {pro.city}
</span>
<p className="text-start"> Property Type: {pro.category}</p>
<div className="flex justify-between gap-4">
<span className="flex items-center gap-2">
  <FaBed className="text-violet-400" /> {pro.room}
</span>
<span className="flex items-center gap-2">
  <FaBath className="text-violet-400" /> {pro.bath}
</span>
<span className="flex items-center gap-2">
  <FaSquare className="text-violet-400" />{" "}
  {pro.propertySize} sqft.
</span>
</div>
<div className=" text-start">
<span className="">
  Available From:{" "}
  <b className="text-violet-400">{pro.month}</b>
</span>
</div>
<div className=" text-start">
<span>
  Rent: <span className="text-violet-400">{pro.rent}</span>{" "}
  TK / month
</span>
</div>
<div className="text-center ">
<Link to={`/details/${pro._id}`} className="details btn w-full border-0 border-violet-400 border-b-4">
  View Details
</Link>
</div>
</div>
            
              
          </div>
        </SwiperSlide>
        ))}
      </Swiper> */}
      <div className="text-center mt-2 mb-4">
        <Link
          to="/allproperties"
          className="btn border-0 border-violet-400 border-b-4 px-10"
        >
          View All Property
        </Link>
      </div>
    </div>
  );
};

export default TopListingProperty;

// import { FaBed, FaBath, FaSquare } from "react-icons/fa";
// import { ImLocation2 } from "react-icons/im";
// import React, { useEffect, useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import 'swiper/css/navigation';

// import "swiper/css/pagination";

// // import required modules
// import { Navigation, Pagination } from "swiper/modules";
// import { Link } from "react-router-dom";

// const TopListingProperty = () => {
//   const [property, setProperty] = useState([]);
//   useEffect(() => {
//     fetch("top-listing-property.json")
//       .then((res) => res.json())
//       .then((data) => setProperty(data));
//   }, []);
//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span className="' + className + '">' + (index + 1) + "</span>";
//     },
//   };

//   return (
//     <div className="w-11/12 md:w-10/12 mx-auto">
//     <h1 className="text-center text-4xl font-bold my-5">
//         Top Listing Property
//     </h1>
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={10}
//         slidesPerGroup={1}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         breakpoints={{
//           0: {
//             width: 0,
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           400: {
//             width: 400,
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           520: {
//             width: 520,
//             slidesPerView: 2,
//             spaceBetween: 10,
//           },
//           960: {
//             width: 950,
//             slidesPerView: 3,
//             spaceBetween: 10,
//           },
//           1290: {
//             width: 1290,
//             slidesPerView: 4,
//             spaceBetween: 10,
//           },
//           1110: {
//             width: 1110,
//             slidesPerView: 4,
//             spaceBetween: 10,
//           },
//         }}
//         className="mySwiper"
//       >
//         {property.map((pro) => (
//           <SwiperSlide>
//             <div className="card bg-base-100 shadow-xl">
//             <figure><img src={pro.image} className="card-img-top" alt="..." /></figure>
//             <div className="card-body">
//             <p className="fw-bold">{pro.title}</p>

// <span>
//   <ImLocation2 className="text-violet-400" />
//   {pro.area}, {pro.city}
// </span>
// <p> Property Type: {pro.category}</p>
// <div className="d-flex justify-content-start gap-4">
//   <span>
//     <FaBed className="property-des-style" /> {pro.room}
//   </span>
//   <span>
//     <FaBath className="property-des-style" /> {pro.bath}
//   </span>
//   <span>
//     <FaSquare className="property-des-style" />{" "}
//     {pro.propertySize} sqft.
//   </span>
// </div>
// <div className="mt-2">
//   <span>
//     Available From:{" "}
//     <b className="property-des-style">{pro.month}</b>
//   </span>
// </div>
// <div className="mt-2">
//   <span>
//     Rent: <span className="property-des-style">{pro.rent}</span>{" "}
//     TK
//   </span>
// </div>
// <div className="text-center mt-2">
//   <Link to={`/details/${pro._id}`} className="details">
//     View Details
//   </Link>
// </div>
// </div>

//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default TopListingProperty;
