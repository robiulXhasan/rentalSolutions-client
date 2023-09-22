import React, { useEffect, useState } from "react";
const Category = ({ categ}) => {
  const { title, icon } = categ;
  const [add, setAdd] = useState([]);

  useEffect(() => {
    fetch(`https://rental-solutions-server.vercel.app/categoryWiseData?category=${title}`)
      .then((res) => res.json())
      .then((data) => {
        setAdd(data.length);
      });
  }, []);

  return (
    <div className="bg-white text-center p-5 rounded-lg shadow">
      <img className="mx-auto" src={icon} alt="" />
      <p>{title}</p>
      <span>{add} adds</span>
    </div>
  );
};
export default Category;
