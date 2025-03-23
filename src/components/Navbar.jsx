import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { FaV, FaVideo } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import Avatar from "react-avatar";
import yt from "../assets/yt.png";

const Navbar = () => {
  return (  
    <div className="fixed top-0 w-[100%] bg-white flex justify-between px-6 py-2">
      <div className="  flex items-center space-x-6 cursor-pointer">
        <AiOutlineMenu className="h-[24px] w-[26px]" />{" "}
        <img src={yt} className="w-28 h-10 cursor-pointer" />
      </div>
      <div className="  flex w-[35%]  items-center">
        <div className="w-[100%] px-3 py-2 border rounded-l-full">
          <input
            type="text"
            placeholder="search"
            className="outline-none  w-full"
          />
        </div>
        <button className="px-4 py-2 bg-gray-100 border rounded-r-full  cursor-pointer ">
          <IoSearchOutline className="h-[24px] w-[26px] " />
        </button>
        <button className="px-2 py-2 bg-gray-100 ml-3 rounded-full cursor-pointer ">
          <IoMdMic className="h-[24px] w-[24px] " />
        </button>
      </div>
      <div className=" flex items-center space-x-5">
        <FaVideo className="h-[24px] w-[24px]  cursor-pointer" />
        <FaBell className="h-[24px] w-[24px] cursor-pointer" />
        <Avatar
          size="38"
          round={true}
          src="https://img.freepik.com/premium-vector/
avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid"
    style={{cursor: "pointer"}}    />
      </div>
    </div>
  );
};

export default Navbar;
