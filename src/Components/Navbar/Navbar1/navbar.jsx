import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BlackLogo from "../../../Images/Logo.png";
import WhiteLogo from "../../../Images/White_Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State to track small screen
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // const toggleAboutDropdown = () => {
  //   setShowAboutDropdown(!showAboutDropdown);
  // };

  const toggleProductsDropdown = () => {
    setShowProductsDropdown(!showProductsDropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Check if screen is small on initial load
    const isSmall = window.innerWidth <= 770; // Adjust the breakpoint as needed
    setIsSmallScreen(isSmall);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle resize event
  const handleResize = () => {
    const isSmall = window.innerWidth <= 770; // Adjust the breakpoint as needed
    setIsSmallScreen(isSmall);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      // className={`p-2 top-0 w-full z-10 transition-all ${isScrolled || isSmallScreen ? "bg-black mt-0 fixed" : "bg-transparent fixed mt-5"}`}
      className={`p-2 top-0 w-full z-10 transition-all ${isScrolled || isSmallScreen ? "bg-[#006429] mt-0" : "bg-transparent mt-5"} ${isSmallScreen ? "" : "fixed"}`}
    >
      <div className="container mx-auto lg:flex lg:justify-around lg:items-center sm:justify-between">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              className={`h-28 w-auto z-20 ${isSmallScreen && 'py-3'}`}
              src={isScrolled || isSmallScreen ? WhiteLogo : BlackLogo}
              alt="Logo"
            />
          </Link>

          <button
            className="lg:hidden text-black focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`lg:flex lg:items-center sm:flex-column ${isOpen ? "block" : "hidden"
            }`}
        >
          <div className="Home_Page sm:py-2">
            {[
              { to: "/", label: "Home" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-md px-3 text-lg font-bold ${isScrolled ? 'text-white hover:text-green-800' : 'text-[#0BAD49]'
                  } ${location.pathname === item.to && "text-[#0BAD49]"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="relative About_Page sm:py-2"
            // onMouseEnter={toggleAboutDropdown}
            // onMouseLeave={toggleAboutDropdown}
          >
            <Link
              to="/aboutUs"
              className={`rounded-md px-3 text-lg font-bold ${isScrolled ? 'text-white hover:text-green-800' : 'text-white hover:text-[#0BAD49]'
                } ${location.pathname === "/aboutUs" && "text-[#0BAD49]"
                }`}
            >
              About Us
            </Link>
            {/* {showAboutDropdown && (
              <div className="absolute top-full left-0 bg-white shadow-md py-2 px-3 whitespace-nowrap rounded-lg">
                <Link to="/aboutUs/profile">
                  <h1 className="text-lg hover:text-[#006428] py-1">Company Profile</h1>
                </Link>
                <hr />
                <Link to="/aboutUs/factory">
                  <h1 className="text-lg hover:text-[#006428] py-1">Factory</h1>
                </Link>
                <hr />
                <Link to="/aboutUs/catalog">
                  <h1 className="text-lg hover:text-[#006428] py-1">Catalog</h1>
                </Link>
                <hr />
              </div>
            )} */}
          </div>
          <div className="relative Product_Page sm:py-2"
            onMouseEnter={toggleProductsDropdown}
            onMouseLeave={toggleProductsDropdown}
          >
            <Link
              to="/product"
              className={`rounded-md px-3 text-lg font-bold ${isScrolled ? 'text-white hover:text-green-800' : 'text-white hover:text-green-800'
                } ${location.pathname === "/product" && "text-green-800"
                }`}
            >
              Products
            </Link>
            {showProductsDropdown && (
              <div className="absolute top-full left-0 bg-white shadow-md py-2 px-3 rounded-md whitespace-nowrap">
                <Link to="/product"><p className="hover:text-[#006428] text-lg pr-5">Socket</p></Link>
                <Link to="/product"><p className="hover:text-[#006428] text-lg pr-5">Wrench</p></Link>
                <Link to="/product"><p className="hover:text-[#006428] text-lg pr-5">Air Compressor</p></Link>
                <Link to="/product"><p className="hover:text-[#006428] text-lg pr-5">Hammer</p></Link>
                <Link to="/product"><p className="hover:text-[#006428] text-lg pr-5">Grease Gun</p></Link>
                <Link to="/product"><p className="hover:text-[#006428] text-lg pr-5">Tape Measure</p></Link>
                <Link to="/product"><p className="hover:text-[#006428] text-lg pr-5">Compass</p></Link>
                <Link to="/product"><p className="hover:text-[#006428] text-lg pr-5">Riveter</p></Link>
                <Link to="/product"><p className="hover:text-[#006428] text-lg pr-5">Electronic Tools</p></Link>
                <Link to="/product"><p className="hover:text-[#006428] text-lg pr-5">Cutting Tools</p></Link>
                <Link to="/product"><p className="hover:text-[#006428] text-lg pr-5">Others...</p></Link>
              </div>
            )}
          </div>
          <div className="lg:flex-grow sm:flex-1 flex flex-col lg:flex-row py-0">
            {[
              { to: "/contactUs", label: "Contact Us" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-md px-3 py-2 text-lg font-bold ${isScrolled ? 'text-white hover:text-green-800' : 'text-white hover:text-green-800'
                  } ${location.pathname === item.to && "text-green-800"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

};

export default Navbar;
