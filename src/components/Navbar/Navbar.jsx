import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/image 1.svg";
import { Dropdown } from "flowbite-react"; // استيراد Dropdown من flowbite-react
import { FaChevronDown, FaFacebook, FaInstagram } from "react-icons/fa"; // سهم لتحت من react-icons
import { IoLogoWhatsapp } from "react-icons/io";

const CustomLink = ({ to, title, className = "" }) => {
      const location = useLocation();
  
  return (
    <Link
      to={to}
      className={`${className} relative group no-underline text-[#445F2D]  end-0  hover:text-green-500 ${location.pathname === to ? 'border-b-2 border-green-500' : ''}`}
    >
      {title}
    </Link>
  );
};

const CustomMobileLink = ({ to, title, className = "", toggle }) => {
      const location = useLocation();
  
  const handelClick = () => {
    toggle();
  };

  return (
    <Link
      to={to}
      className={`${className} relative group text-bold text-lg no-underline text-[#445F2D] my-2 ${location.pathname === to ? 'border-b-2 border-blue-500' : ''}`}
      onClick={handelClick}
    >
      {title}

      {/* <span className={`absolute left-0 group-hover:w-full 
      transition-[width] ease duration-300
      -bottom-0.5  h-[1px] inline-block dark:bg-dark bg-light`}>&nbsp;</span> */}
    </Link>
  );
};

const Navbar = () => {
  // const [mode , setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handelClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative  bg-light z-50 lg:px-16 md:px-12 sm:px-8  w-full px-32 py-8 font-medium flex items-center justify-between fixed">
      <button
        className="hidden lg:flex  flex-col justify-center items-center"
        onClick={handelClick}
      >
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center flex-wrap">
          <CustomLink
            to="/contactUs"
            title="تواصل معنا"
            className="mx-7 text-bold text-lg "
          />

          <Dropdown
            label={
              <div className="flex items-center mx-7 text-bold text-lg text-[#445F2D] ">
                <FaChevronDown className="mr-2" /> المنتجات
              </div>
            }
            inline
            arrowIcon={false} // عشان نتحكم في السهم بنفسنا
          >
            <Dropdown.Item
              className="text-center hover:bg-light/90 !text-[#445F2D] no-underline text-bold text-lg"
              as={Link}
              to="/products/pesticides"
            >
              مبيدات
            </Dropdown.Item>
            <Dropdown.Item
              className="text-center hover:bg-light/90 !text-[#445F2D] no-underline text-bold text-lg"
              as={Link}
              to="/products/fertilizers"
            >
              سماد
            </Dropdown.Item>
          </Dropdown>
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <CustomLink
            to="/about"
            title="عن الشركه"
            className="mx-7 text-bold text-lg "
          />

          <CustomLink
            to="/"
            title="الرئيسيه "
            className="mx-7 text-bold text-lg "
          />
        </nav>
      </div>

      {isOpen ? (
        <div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 min-w-[70vw] flex flex-col  justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              to="/"
              title="الرئيسيه"
              className=""
              toggle={handelClick}
            />
            <CustomMobileLink
              to="/about"
              title="عن الشركه"
              className=""
              toggle={handelClick}
            />

            <Dropdown
              label={
                <div className="flex items-center mx-7 text-bold text-lg text-[#445F2D] ">
                  <FaChevronDown className="mr-2" /> المنتجات
                </div>
              }
              inline
              arrowIcon={false} // عشان نتحكم في السهم بنفسنا
            >
              <Dropdown.Item
                className="text-center hover:bg-light/90 !text-[#445F2D] no-underline text-bold text-lg"
                as={Link}
                to="/products/pesticides"
              >
                مبيدات
              </Dropdown.Item>
              <Dropdown.Item
                className="text-center hover:bg-light/90 !text-[#445F2D] no-underline text-bold text-lg"
                as={Link}
                to="/products/fertilizers"
              >
                سماد
              </Dropdown.Item>
            </Dropdown>

            
            <CustomMobileLink
              to="/contactUs"
              title="تواصل معنا"
              className=""
              toggle={handelClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-3">
            <motion.a
              href="https://github.com/zyadessa2"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm-mx-1  rounded-full "
            >
              <FaFacebook className="text-2xl" />
            </motion.a>
            <motion.a
              className="w-6 mx-3 sm-mx-1"
              href="https://www.linkedin.com/in/ziad-essa/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoLogoWhatsapp className="text-2xl text-green-500" />
            </motion.a>
            <motion.a
              className="w-7 ml-3 sm-mx-1"
              href="https://wa.me/201066958945"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram className="text-2xl text-red-500" />
            </motion.a>
          </nav>
        </div>
      ) : null}

      <div className="absolute bg-light rounded-2xl left-[50%] top-2 translate-x-[-50%]">
        <Link to={'/'}>
        <img src={logo} alt="حصاد للتقنيه الزراعيه المتطوره" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
