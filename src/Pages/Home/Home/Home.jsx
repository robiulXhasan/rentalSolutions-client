import React, { useEffect, useState } from "react";
import Hero from "../../../Shared/Hero/Hero";
import Banner from "../Banner";
import Category from "../Category";
import TopListingProperty from "./TopListingProperty";

const Home = () => {
  const [category, setCategory] = useState([]);
  const  [totalAdd,setTotalAdd]=useState(0);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  useEffect(()=>{
    fetch('https://rental-solutions-server.vercel.app/products')
    .then(res=>res.json())
    .then(data=>setTotalAdd(data))
  })

  return (
    <div>
      <Banner className="" />
      <Hero className="" />
      <section className="pt-5 md:pt-0 pb-10 bg-violet-100">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <div className="category-title pt-32 md:pt-20 ">
            <p className="text-4xl font-bold text-center">
              Top Categories
            </p>
            <p className="text-xl text-center my-2 ">
              <span className="font-bold text-violet-600">{category.length}</span> categories <span className="font-bold text-violet-600">{totalAdd.length}</span> ads
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 ">
            {category.map((categ) => (
              <Category
                key={categ.id}
                categ={categ}
              ></Category>
            ))}
          </div>
        </div>
      </section>

      <TopListingProperty />
    </div>
  );
};

export default Home;
