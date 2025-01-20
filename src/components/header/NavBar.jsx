"use client";
import { NavBarData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
import { serviceDropDown } from "@/constants";

export const NavBar = () => {

  const [dropDown, setDropDown] = useState(true)
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)

  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

  const toggleCompanyDropdown = () => {
    setIsCompanyDropdownOpen((prev) => !prev);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const closeDropdown = () => setDropDown(false);
    window.addEventListener('click', closeDropdown);
    return () => window.removeEventListener('click', closeDropdown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll()
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const isHome = pathname === "/"
  const isProductPage = pathname.startsWith('/products/')



  return (
    <nav className={` lg:px-10 2xl:px-16  w-full fixed z-50 top-0 left-0 right-0 m-auto  md:h-[80px]  transition-colors duration-200 ease-in-out ${isHome || isScrolled ? 'bg-white' : 'bg-transparent'} ${isProductPage ? 'text-white' : 'text-black'} `}>
      <div
        className={`h-screen w-[250px] z-50 bg-primary absolute p-3 py-5 transition-all duration-700 ${showMenu ? `right-0` : `-right-[300px]`
          }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white text-lg"
          onClick={() => setShowMenu(false)}
        >
          <CloseIcon />
        </button>

        <ul className={` w-full  mt-7  text-[16px]`}>
          <Link
            href='/services'
            className=""
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <li className="py-2 border-b-[1px] mt-2 pl-3 ">Services</li>
          </Link>

          
          <li
            className="py-2 border-b-[1px] mt-2 pl-3 cursor-pointer"
            onClick={toggleCompanyDropdown}
          >
            Company
          </li>
          {isCompanyDropdownOpen && (
            <ul className="pl-6 bg-primary text-white">
              <li className="py-2 border-b">
                <Link href="/company" onClick={() => setShowMenu(false)}>
                  About Us
                </Link>
              </li>
              <li className="py-2 border-b">
                <Link href="/case-study/Warehouse360" onClick={() => setShowMenu(false)}>
                  Case Study
                </Link>
              </li>
            </ul>
          )}
          {NavBarData.map((item) => (
            item.title === "Products" ? (
              // Dropdown Item for Products
              <div key={item.id}>
                <div
                  className=" cursor-pointer py-2  border-b-[1px] mt-2 pl-3"
                  onClick={handleDropdownToggle}
                >
                  {item.title}
                </div>
                {isDropdownOpen && (
                  <ul className="bg-primary pl-6  mt-2">
                    {item.dropdownItems.map((dropdownItem) => (
                      <li key={dropdownItem.id} className="px-4 py-2 text-white border-b hover:text-primary hover:bg-gray-100">
                        <Link onClick={() => setShowMenu((prev) => !prev)} href={dropdownItem.path || "#"}>{dropdownItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>) : (
              <Link
                href={item.path}
                key={item.id}
                className=""
                onClick={() => setShowMenu((prev) => !prev)}
              >
                <li className="py-2 border-b-[1px] mt-2 pl-3 ">{item.title}</li>
              </Link>
            )
          ))}
        </ul>
      </div>

      <section className=" px-3 py-3 md:px-10  flex-btw items-center">
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
        <div className="relative">
          <ul className=" hidden xl:flex justify-between">
            <div className={` group cursor-pointer mx-5 font-medium  hover:text-primary py-5 hover:-translate-y-1 transition-all duration-300 ${isScrolled ? 'text-black' : isProductPage ? 'text-white' : 'text-black'}`}>Company
              <ul className="absolute top-16  bg-white shadow-lg border-black min-w-[200px] group-hover:opacity-100 group-hover:flex flex-col hidden group-hover:transition-opacity duration-300 ease-in-out ">
                <li className="block px-4 py-2 text-black hover:text-primary hover:bg-gray-100">
                  <Link href="/company">
                    <h1 className="font-medium">About Us</h1>
                  </Link>
                </li>
                <li className="block px-4 py-2 text-black hover:text-primary hover:bg-gray-100">
                  <Link href="/case-study/Warehouse360">
                    <h1 className="font-medium">Case Study</h1>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={` group cursor-pointer mx-5 font-medium  hover:text-primary py-5 hover:-translate-y-1 transition-all duration-300 ${isScrolled ? 'text-black' : isProductPage ? 'text-white' : 'text-black'}`}>Services
              <ul className="absolute top-16 -left-40 bg-white shadow-lg border-black min-w-[620px] group-hover:opacity-100 group-hover:grid grid-cols-2 gap-3 hidden group-hover:transition-opacity duration-300 ease-in-out ">
                {serviceDropDown.map((item, index) => (<li key={index} className="block px-4 py-2 text-black  hover:bg-[#A1B5BF]">
                  <Link href="/services">
                    <h1 className="font-medium py-1">{item}</h1>
                  </Link>
                </li>))}

              </ul>
            </div>
            {NavBarData.map((item) => (
              item.title === "Products" ? (

                <div className="group" key={item.id}>
                  <div

                    className={`cursor-pointer mx-5 font-medium  hover:text-primary py-5  
                  hover:-translate-y-1 transition-all duration-300  ${isScrolled ? 'text-black' : isProductPage ? 'text-white' : 'text-black'}`}
                  >
                    {item.title}
                  </div>


                  <ul className="absolute top-16 -right-10 bg-white shadow-lg border-black min-w-[200px] group-hover:opacity-100 group-hover:flex hidden group-hover:transition-opacity duration-300 ease-in-out">
                    {item.dropdownItems.map((dropdownItem) => (
                      <li
                        key={dropdownItem.id}
                        className="block px-4 py-2 text-black hover:text-primary hover:bg-gray-100 border-r"

                      >
                        <Link href={dropdownItem.path || "#"}>
                          <div className=" flex flex-col gap-2">
                            <div className="h-48 w-36">
                              <Image src={`/assets/images/${dropdownItem.img}`} alt="image" height={1000} width={1000} quality={100} className="h-full w-full object-cover shadow-lg" />
                            </div>
                            <h1 className="font-semibold">{dropdownItem.title}</h1>
                            <h2 className="text-sm">{dropdownItem.subtitle}</h2>
                          </div>
                        </Link>
                      </li>
                    ))}
                    <li className="p-3 text-black hover:text-primary">
                      <Link href='/allproducts'>
                        <div className=" flex flex-col gap-2">
                          <div className="h-48 w-40">
                            <Image src='/assets/images/AllProducts.svg' alt="image" height={1000} width={1000} quality={100} className="h-full w-full object-contain" />
                          </div>
                          <h1 className="font-semibold text-center">View All</h1>

                        </div>
                      </Link>
                    </li>
                  </ul>

                </div>
              ) : (

                <Link
                  className=""
                  href={item.path}
                  key={item.id}

                >
                  <li
                    className={`${pathname === item.path && "text-primary"
                      } hover:text-primary hover:-translate-y-1 transition-all duration-300 py-5
                cursor-pointer mx-5 font-medium ${isScrolled ? 'text-black' : isProductPage ? 'text-white' : 'text-black'}`}
                  >
                    {item.title}
                  </li>
                </Link>
              )
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