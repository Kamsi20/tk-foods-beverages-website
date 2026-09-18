import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/public/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="   w-full h-35   fixed top-0 left-0 bg-white shadow-lg flex  px-4 lg:px-20 z-100">
      <nav className="flex  gap-37">
        <div className="flex items-center gap-4">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="lg:h-40 lg:w-70 h-30 w-45 object-contain"
              />
            </Link>
          </div>
          <div className=" hidden md:gap-10 md:flex lg:gap-15 text-black text-lg lg:ml-25 font-semibold">
            <Link to={"/"}>
              {" "}
              <p className=" hover:opacity-70 hover:text-blue-700">Home</p>
            </Link>
            <Link to={"/aboutus"}>
              {" "}
              <p className=" hover:opacity-70 hover:text-blue-700">About Us</p>
            </Link>
            <Link to={"/product"}>
              {" "}
              <p className=" hover:opacity-70 hover:text-blue-700">Products</p>
            </Link>
            <Link to={"/services"}>
              <p className=" hover:opacity-70 hover:text-blue-700">Services</p>
            </Link>
            <Link to={"/contact"}>
              {" "}
              <p className=" hover:opacity-70 hover:text-blue-700">
                Contact Us
              </p>
            </Link>
          </div>
        </div>

       
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </nav>

    
      {open && (
        <div className="md:hidden bg-white shadow-md flex flex-col  gap-4 py-4 ">
          <div
            onClick={() => setOpen(!open)}
            className=" flex flex-col gap-2   "
          >
            <div className="fixed top-0 right-0 w-[55%] h-screen bg-white z-50">
            
              <button className="absolute top-4 right-3 w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-xl">
                ×
              </button>

              
              <nav className="mt-16">
                <Link to={"/"}>
                  <a
                    href="#"
                    className="block px-4 py-3 text-[14px] text-gray-900 border-b border-gray-200 hover:bg-gray-100 transition"
                  >
                    HOME
                  </a>
                </Link>

                <Link to={"/aboutus"}>
                  <a
                    href="#"
                    className="block px-4 py-3 text-[14px] text-gray-900 border-b border-gray-200 hover:bg-gray-100 transition"
                  >
                    ABOUT US
                  </a>
                </Link>

                <Link to={"/product"}>
                  {" "}
                  <a
                    href="#"
                    className="block px-4 py-3 text-[14px] text-gray-900 border-b border-gray-200 hover:bg-gray-100 transition"
                  >
                    PRODUCTS
                  </a>
                </Link>
                <Link to={"/services"}>
                  <a
                    href="#"
                    className="block px-4 py-3 text-[14px] text-gray-900 border-b border-gray-200 hover:bg-gray-100 transition"
                  >
                    SERVICES
                  </a>
                </Link>

                <Link to={"/contact"}>
                  <a
                    href="#"
                    className="block px-4 py-3 text-[14px] text-gray-900 border-b border-gray-200 hover:bg-gray-100 transition"
                  >
                    CONTACT US
                  </a>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
