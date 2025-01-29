/* eslint-disable @typescript-eslint/no-unused-vars */
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";



const Navbar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Products",
      link: "/product",
    },
    
  ];
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-[#fea928]/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            {/* <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-[#fea928] absolute top-1/2 -translate-y-1/2 right-3" />
            </div> */}
             {/* role base show*/}
          
            <Link to='/signin' className="bg-gradient-to-r from-[#fea928] to-[#ed8900] transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group">
              Sign In
            </Link>
            <Link to='/signup' className="bg-gradient-to-r from-[#fea928] to-[#ed8900] transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group">
            Sign Up
            </Link>
            <Link to='/signup' className="bg-gradient-to-r from-[#fea928] to-[#ed8900] transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group">
              Sign Out
            </Link>
          
            {/* order button */}
            <button
              // onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-[#fea928] to-[#ed8900] transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode/>
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center py-2">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:[#fea928] duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
         
        </ul>
      </div>
    </div>
  );
}

export default Navbar