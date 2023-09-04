import React, { useEffect, useState } from "react";
import SearchArea from "../../../Shared/Hero/SearchArea";
import SortingArea from "../SortingArea/SortingArea";
import Posts from "../Posts/Posts";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";

const AllProperties = () => {
  const [posts,setPosts]=useState([])
  const [loading, setLoading] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(9);

  const location = useLocation();
  const bannerSearchData = location?.state?.data;
  //products sort from side area
  const handleSideBarSearch =(data)=>{
    console.log(data);
    const priceRange=data?.price;
    const city=data?.city;
    const rentType = data?.category;
    const bed = data?.bed;
    const wash = data?.washRoom;
    const month = data?.month;
    fetch(
      `http://localhost:5000/products-collection?price=${priceRange}&city=${city}&rentType=${rentType}&bed=${bed}&wash=${wash}&month=${month}`
    )
      .then((res) => res.json())
      .then((data) => setPosts(data));
   
  }
  //products sort from banner area
  useEffect(() => {
    if (bannerSearchData?.city) {
      setLoading(true);
      fetch(
        `http://localhost:5000/sortProducts?city=${bannerSearchData?.city}&area=${bannerSearchData?.area}&category=${bannerSearchData?.category}`
      )
        .then((res) => res.json())
        .then((data) => setPosts(data));
        setLoading(false);
    } else {
      const fetchPosts =  () => {
        setLoading(true);
         fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => setPosts(data));
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
  //   fetch("http://localhost:5000/products")
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
        <div className="bg-green-950 h-[240px]"></div>
        <SearchArea />
      </div>
      <div className="w-11/12 md:w-10/12 mx-auto mt-10">
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
              <p>
                <span className="text-violet-500 font-bold">
                  {posts.length}
                </span>{" "}
                results.
              </p>
            </div>
            <div>
              <Posts posts={currentItems} loading={loading}></Posts>
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
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
