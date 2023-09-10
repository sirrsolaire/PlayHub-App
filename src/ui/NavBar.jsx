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
      <nav className="flex w-full items-center justify-between bg-header-pattern bg-cover bg-center bg-no-repeat px-5 py-6">
        <div className="flex items-center gap-2">
          <img src="/playhub-logo.png" alt="PlayHub Logo" />
          <h1 className="text-2xl font-bold text-gray-200">PlayHub</h1>
        </div>
        {!openMenuNav ? (
          <FontAwesomeIcon
            icon={faBars}
            className={`text-3xl text-gray-200 transition-transform ${
              openMenuNav ? "rotate-0" : "rotate-180"
            }`}
            onClick={handleMenuNav}
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            className={`text-3xl text-gray-200 transition-transform ${
              openMenuNav ? "rotate-0" : "rotate-180"
            }`}
            onClick={handleMenuNav}
          />
        )}
      </nav>
      <ul
        className={`bg-menu-nav px-7 transition-all duration-700 ${
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
