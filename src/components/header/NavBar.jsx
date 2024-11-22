"use client";
import { NavBarData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  return (
    <nav className=" lg:px-10 2xl:px-16  w-full fixed z-50 top-0 left-0 right-0 m-auto shadow-xl md:h-[80px]     bg-white ">
      <div
        className={`h-screen w-[250px] z-50 bg-primary absolute p-3 py-5 transition-all duration-700 ${
          showMenu ? `right-0` : `-right-[300px]`
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white text-lg"
          onClick={() => setShowMenu(false)}
        >
          <CloseIcon />
        </button>

        <ul className="w-full  mt-7 text-white text-[16px]">
          {NavBarData.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              className="bg-black"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <li className="py-2 border-b-[1px] mt-2 pl-3">{item.title}</li>
            </Link>
          ))}
        </ul>
      </div>

      <section className=" px-3 py-4 md:px-10  flex-btw items-center">
        <div>
          <Link href={"/"}>
            <Image
              className="  sm:block hidden cursor-pointer "
              src={"/assets/icons/logo-2.svg"}
              quality={100}
              width={170}
              alt="logo"
              height={45}
            />
            <Image
              className=" block sm:hidden cursor-pointer "
              src={"/assets/icons/logo-2.svg"}
              quality={100}
              width={100}
              alt="logo"
              height={45}
            />
          </Link>
        </div>
        <div>
          <ul className=" hidden xl:flex justify-between">
            {NavBarData.map((item) => (
              <Link className=" " href={item.path} key={item.id}>
                <li
                  className={`${
                    pathname === item.path && `text-primary`
                  }  hover:text-primary hover:-translate-y-1  transition-all duration-300
                 cursor-pointer mx-5  font-medium text-black`}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setShowMenu((prev) => !prev)}
          className="  xl:hidden flex   "
        >
          {!showMenu ? <MenuIcon /> : <CloseIcon />}
        </div>
      </section>
    </nav>
  );
};
