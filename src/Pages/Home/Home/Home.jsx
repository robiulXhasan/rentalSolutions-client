import React, { useEffect, useState } from "react";
import Hero from "../../../Shared/Hero/Hero";
import Banner from "../Banner";
import Category from "../Category";
import TopListingProperty from "./TopListingProperty";

const Home = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <Banner />
      <Hero />
      <section className="pt-5 md:pt-0 pb-10 bg-violet-100">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <div className="category-title pt-32 md:pt-20 ">
            <p className="text-4xl font-bold text-center my-10">
              Top Categories
            </p>
            {/* <span>
              {category.length} categories {add.length} ads
            </span> */}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 ">
            {category.map((categ) => (
              <Category
                // icon={categ.category_icon}s
                key={categ.id}
                // title={categ.title}
                // adds={categ.adds}
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
