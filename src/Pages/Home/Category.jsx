import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Category = ({ categ, setTotalAdd, totalAdd }) => {
  const { title, icon, adds } = categ;
  const [add, setAdd] = useState()
  const navigate = useNavigate()
//   const handleCategory = () => {
//     navigate("/homeSortProperty", { state: { data: { title } } })
//   }

//   useEffect(() => {
//     fetch(`https://rent-us-bd.vercel.app/categoryWiseData?title=${title}`)
//       .then(res => res.json())
//       .then(data => {
//         setAdd(data.length)
//         setTotalAdd(totalAdd + data.length)
//       })


//   }, [])

  return (
   
      <div className="bg-white text-center p-5 rounded-lg shadow" >
        <img className="mx-auto" src={icon} alt="" />
        <p>{title}</p>
        <span>0 {add} adds</span>
   
    </div>
  );
};
export default Category;
