import React, { useEffect, useState } from "react";
import SearchArea from "../../../Shared/Hero/SearchArea";
import SortingArea from "../SortingArea/SortingArea";
import Posts from "../Posts/Posts";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import { BsFillGridFill, BsListUl } from "react-icons/bs";
import axios from "axios";

const AllProperties = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [grid, setGrid] = useState(true);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(9);

  const location = useLocation();
  const bannerSearchData = location?.state?.data;

  //products sort from side area
  const handleSideBarSearch = async (data) => {
    console.log(data);
    const priceRange = data?.price;
    const city = data?.city;
    const rentType = data?.category;
    const bed = data?.bed;
    const wash = data?.washRoom;
    const month = data?.month;
    setLoading(true);
    const res = await axios.get(
      `https://rental-solutions-server.vercel.app/products-collection?price=${priceRange}&city=${city}&rentType=${rentType}&bed=${bed}&wash=${wash}&month=${month}`
    );
    setPosts(res.data);
    setLoading(false);
  };
  //products sort from banner area
  useEffect(() => {
    if (bannerSearchData?.city) {
      const fetchData = async () => {
        setLoading(true);
        const res = await axios.get(
          `https://rental-solutions-server.vercel.app/sortProducts?city=${bannerSearchData?.city}&area=${bannerSearchData?.area}&category=${bannerSearchData?.category}`
        );
        setPosts(res.data);
        setLoading(false);
      };
      fetchData();
    } else {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get("https://rental-solutions-server.vercel.app/products");
        setPosts(res.data);
        setLoading(false);
      };

      fetchPosts();
    }
  }, [bannerSearchData]);
  // const { data: posts = [], refetch } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: async () => {
  //     if (bannerSearchData) {
  //       setLoading(true);
  //       const res = await fetch(
  //         `https://rent-us-bd.vercel.app/sortProducts?city=${bannerSearchData?.city}&area=${bannerSearchData?.area}&rent=${bannerSearchData?.category}`
  //       );
  //       setLoading(false);

  //       return res.json();
  //     }

  //       const res = await fetch(
  //         "https://rent-us-bd.vercel.app/productCollection")

  //       return res.json();

  //   },
  //});

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://rental-solutions-server.vercel.app/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoading(false);
  //       setPosts(data);
  //     });

  // const fetchPosts = async () => {
  //   setLoading(true);
  //   const res = await axios.get("https://rent-us-bd.vercel.app/productCollection");
  //   setPosts(res.data);
  //   console.log(res.data);
  //   setLoading(false);
  // }
  // fetchPosts();
  // }, []);
  // Get current posts
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="mb-32 md:mb-0 ">
        <div className="bg-green-950 md:relative h-[280px]">
        <div className="md:absolute w-full  md:top-[30%]"><SearchArea /></div>
        </div>
       
        
      </div>
      <div className="w-11/12  mx-auto mt-10">
        {/* <h3 className="mt-10 font-bold text-3xl text-violet-500  my-5">
          Search results:-
        </h3> */}
        <div className="md:grid grid-cols-4">
          <div className="col-span-1">
            <SortingArea handleSideBarSearch={handleSideBarSearch} />
          </div>
          <div className="col-span-3 md:ms-10">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-3xl text-violet-500">
                Property For Rent
              </h3>

              <div className="flex items-center  gap-10">
                <div className="flex gap-3 text-xl">
                  <BsFillGridFill
                    onClick={() => setGrid(true)}
                    className={`${
                      grid == true ? "bg-violet-100" : "bg-white"
                    } p-1 text-2xl`}
                  />
                  <BsListUl
                    onClick={() => setGrid(false)}
                    className={`${
                      grid == false ? "bg-violet-100" : "bg-white"
                    } p-1 text-2xl`}
                  />
                </div>
                <p className="text-violet-500 font-bold">
                  {posts.length} results.
                </p>{" "}
              </div>
            </div>
            <div>
              <Posts posts={currentItems} loading={loading} grid={grid}></Posts>
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< Previous"
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
