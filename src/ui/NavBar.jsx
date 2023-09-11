import {
  faBars,
  faBasketShopping,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function NavBar() {
  const [openMenuNav, setOpenMenuNav] = useState(false);

  function handleMenuNav() {
    setOpenMenuNav(!openMenuNav);
  }

  return (
    <div className="fixed z-50 w-full">
      <nav className="flex w-full items-center justify-between bg-header-pattern bg-cover bg-center bg-no-repeat px-5 py-6 md:px-8">
        <div className="flex items-center gap-2">
          <img src="/playhub-logo.png" alt="PlayHub Logo" />
          <h1 className="text-2xl font-bold text-gray-200 md:text-3xl">
            PlayHub
          </h1>
        </div>
        <div className=" flex items-center gap-9">
          <div className="ml-4 hidden h-11 w-14 cursor-pointer items-center justify-center rounded-md bg-black shadow-4xl md:flex ">
            <FontAwesomeIcon
              icon={faSearch}
              className="font-black text-yellow-600"
            />
          </div>
          {!openMenuNav ? (
            <FontAwesomeIcon
              icon={faBars}
              className={` text-4xl text-gray-200  transition-transform md:hidden ${
                openMenuNav ? "rotate-0" : "rotate-180"
              }`}
              onClick={handleMenuNav}
            />
          ) : (
            <FontAwesomeIcon
              icon={faXmark}
              className={` text-4xl text-gray-200 transition-transform md:hidden ${
                openMenuNav ? "rotate-0" : "rotate-180"
              }`}
              onClick={handleMenuNav}
            />
          )}
        </div>
      </nav>
      <ul
        className={`bg-menu-nav px-7 transition-all duration-700 md:hidden ${
          openMenuNav ? "h-60 w-full" : "h-0 overflow-hidden"
        } `}
      >
        <li className="">HOME</li>
        <li>STORE</li>
        <li>OVERVIEW</li>
        <li>COMMUNITY</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
}

export default NavBar;
