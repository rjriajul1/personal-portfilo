import React from "react";
import { Link, NavLink } from "react-router"
import logo from '../../../assets/logo.png'
import Button from "../Button";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink  className={({isActive})=> isActive ? ' underline text-[18px] bg-red-200 rounded-xl text-primary  mr-2': ''} to="/">Home</NavLink>
      </li>
      <li className="text-[18px] hover:bg-red-200 rounded-xl hover:text-primary transition duration-500 mr-2">
        <a href="#about">About Me</a>
      </li>
      <li className="text-[18px] hover:bg-red-200 rounded-xl hover:text-primary transition duration-500 mr-2">
        <a href="#skill">Skill</a>
      </li>
      <li className="text-[18px] hover:bg-red-200 rounded-xl hover:text-primary transition duration-500 mr-2">
        <a href="#project">Project</a>
      </li>
      <li className="text-[18px] hover:bg-red-200 rounded-xl hover:text-primary transition duration-500">
        <a href="#contact">Contact</a>
      </li>
      
    </>
  );
  return (
    <div className="heading-font shadow-md bg-[#0D0D0D] ">
        <div className="navbar max-w-[1600px] mx-auto  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
          {links}
          </ul>
        </div>
        <div className="flex items-end gap-3">
            <img className="w-16 rounded-full" src={logo} alt="" />
            <h1 className="font-bold hidden md:block mb-2 text-2xl text-[#A3A3A3]">Code<span className="text-white">By</span><span className="text-primary">Riajul</span></h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold ">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Button url={'https://drive.google.com/file/d/1GrXboy1vSXVkzCiqw8gUCOja4gm-NNGl/view'}/>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
