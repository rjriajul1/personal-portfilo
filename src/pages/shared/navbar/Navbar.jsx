import React from "react";
import { Link, NavLink } from "react-router"
import logo from '../../../assets/logo.png'
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink  className={({isActive})=> isActive ? ' underline': ''} to="/">Home</NavLink>
      </li>
      <li>
        <a href="#about">About Me</a>
      </li>
      <li>
        <a href="#skill">Skill</a>
      </li>
      <li>
        <a href="#project">Project</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      
    </>
  );
  return (
    <div className="bg-primary shadow-sm">
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
            className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
          {links}
          </ul>
        </div>
        <div className="flex items-end gap-3">
            <img className="w-16 rounded-full" src={logo} alt="" />
            <h1 className="font-bold mb-2 text-2xl">CodeByRiajul</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="https://docs.google.com/document/d/1rRHc9w-2UwdKTsyJaZTsv8_JkYmUeP51nSvRdTor5qA/edit?usp=sharing" target="_blank"><button className="btn">Resume</button></Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
