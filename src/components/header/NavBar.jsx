"use client";
import { NavBarData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, {   useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
 
   
  return (
    <nav className="  w-full  z-50 bg-white">
      <section className=" px-3 py-5 md:px-10  flex-btw items-center">
        <div>
          <Image
            className=" cursor-pointer "
            src={'/assets/icons/logo.png'}
            quality={100}
            width={200}
            alt="logo"
            height={45}
          />
        </div>
        <div>
          <ul className=" hidden 2xl:flex justify-between">
            {NavBarData.map((item) => (
              <Link className=" " href={item.path} key={item.id}>
                <li className=" hover:font-bold cursor-pointer mx-5 text-[22px] font-medium text-black">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setShowMenu((prev) => !prev)}
          className=" lg:hidden flex  "
        >
          <MenuIcon />
        </div>
      </section>
      <div
        className={`h-fit w-[200px] bg-gray-800 absolute p-3 py-5 ${
          showMenu ? `right-0` : `hidden`
        }  transition-all duration-500`}
      >
        <ul className="w-full  text-white text-xs">
          {NavBarData.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <li className="py-2 pl-3">{item.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};
