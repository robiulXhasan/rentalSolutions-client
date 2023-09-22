import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/images/logo.svg";
import { FaRegUserCircle } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allproperties">All Properties</Link>
      </li>
      <li>
        <Link to="/addproperty">Add Property</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link>Contact Us</Link>
      </li>
      {user && (
        <>
          <li className="block md:hidden">
            {" "}
            <Link>Dashboard</Link>
          </li>
          <li onClick={logOut} className="block md:hidden">
           <Link>Log out</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 px-[4%]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg">{navItems}</ul>
      </div>
      <div className="navbar-end text-lg  ">
        {user ? (
          user.photoURL ? (
            <img src={user.photoURL} alt="" srcset="" />
          ) : (
            <>
              <FaRegUserCircle className="text-3xl me-1" />
              <span className="me-1">{user?.displayName}</span>
            </>
          )
        ) : (
          <Link to="/login" className="btn bg-violet-400 text-white border hover:text-violet-500 hover:border-violet-500 ">Login </Link>
        )}

        {user && (
          <div className="dropdown dropdown-left ms-2  hidden md:block">
            <label tabIndex={0} className="">
              <MdKeyboardArrowDown />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content mt-10 z-[1] menu p-2 shadow bg-base-100 rounded w-52"
            >
              <li>
                <Link>Dashboard</Link>
              </li>
              <li>
                <button onClick={logOut} className="">
                  Log out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
