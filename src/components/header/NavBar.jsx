"use client";
import { NavBarData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, {   useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
 
   
  return (
    <nav className="  w-full fixed top-0 left-0 right-0 m-auto shadow-xl  z-50 bg-white ">
      <section className=" px-3 py-4 md:px-10  flex-btw items-center">
        <div >
          <Link href={'/'}>
          <Image
            className="  sm:block hidden cursor-pointer "
            src={'/assets/icons/logo.png'}
            quality={100}
            width={170}
            alt="logo"
            height={45}
          />
          <Image
            className=" block md:hidden cursor-pointer "
            src={'/assets/icons/logo.png'}
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
                <li className=" hover:font-bold transition-all duration-200 cursor-pointer mx-5 text-[18px] font-medium text-black">
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
          
          {

            !showMenu?  <MenuIcon /> :<CloseIcon/>
          }
          
        </div>
      </section>
      <div
  className={` h-screen w-[200px] bg-primary absolute p-3 py-5 transition-all duration-700 ${
    showMenu ? `right-0` : `-right-[200px]`
  }`}
>
  <ul className="w-full text-white text-xs">
    {NavBarData.map((item) => (
      <Link
        href={item.path}
        key={item.id}
         
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <li className="py-2 border-b-[1px] mt-2 pl-3">{item.title}</li>
      </Link>
    ))}
  </ul>
</div>

    </nav>
  );
};
