import React from "react";
import { FaBath, FaBed, FaSquare } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Posts = ({ posts, loading }) => {
  console.log(posts);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="grid grid-cols-3 gap-5 mb-10">
      {posts.map((post) => (
        <div
          key={post._id}
          className="card card-compact   bg-white shadow-xl border border-violet-400"
        >
          <figure>
            <img
              src={post.image}
              className="  object-cover w-full object-center h-36"
              alt="..."
            />
          </figure>
          <div className="card-body">
            <p className="font-bold">{post.title}</p>

            <span className="flex items-center justify-start gap-2">
              <ImLocation2 className="" />
              {post.area}, {post.city}
            </span>
            <p className="text-start"> Property Type: {post.category}</p>
            <div className="flex justify-between gap-4">
              <span className="flex items-center gap-2">
                <FaBed className="text-violet-400" /> {post.room}
              </span>
              <span className="flex items-center gap-2">
                <FaBath className="text-violet-400" /> {post.bath}
              </span>
              <span className="flex items-center gap-2">
                <FaSquare className="text-violet-400" /> {post.postspertySize}{" "}
                sqft.
              </span>
            </div>
            <div className=" text-start">
              <span className="">
                Available From: <b className="text-violet-400">{post.month}</b>
              </span>
            </div>
            <div className=" text-start">
              <span>
                Rent: <span className="text-violet-400">{post.rent}</span> TK /
                month
              </span>
            </div>
            <div className="text-center ">
              <Link
                to={`/details/${post._id}`}
                className=" btn w-full border-0 border-violet-400 border-b-4"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
