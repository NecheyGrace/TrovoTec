import React from "react";
import { IoNotifications, IoPersonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-20 px-20 shadow-lg bg-slate-200">
      <div className="flex">
        <div className="flex items-center justify-center px-2 mr-2 rounded-md shadow-md bg-amber-500">
          <h3 className="text-2xl text-white">T</h3>
        </div>
        <h3 className="text-amber-500 font-[Om] text-2xl">
          Trevo<span className="text-white">Tech</span>
        </h3>
      </div>
      <div className="flex items-center ">
        <ul className="flex space-x-8 text-white font-[Pl] mr-12">
          <li className="cursor-pointer hover:text-amber-500">Home</li>
          <li className="cursor-pointer hover:text-amber-500">Company</li>
          <li className="cursor-pointer hover:text-amber-500">Users</li>
          <li className="cursor-pointer hover:text-amber-500">Settings</li>
        </ul>
        <IoNotifications
          size={22}
          className="mr-10 text-white cursor-pointer hover:text-amber-500"
        />
        <div className="flex">
          <div className="flex items-center justify-center w-10 h-10 shadow-lg cursor-pointer group rounded-3xl hover:text-amber-500">
            <IoPersonOutline
              size={22}
              className="text-white group-hover:text-amber-500"
            />
          </div>
          <h4 className="text-white font-[Pl] ml-2 mt-2">Admin</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
