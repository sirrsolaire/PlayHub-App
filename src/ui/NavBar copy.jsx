import { faBasketShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  return (
    <nav className="bg-header-pattern flex  flex-col items-center justify-between bg-cover bg-center">
      <div className="flex items-center gap-2 ">
        <img src="/playhub-logo.png" alt="PlayHub Logo" className="w-10" />
        <h1 className="text-3xl font-bold text-gray-200">PlayHub</h1>
      </div>
      <ul className="flex flex-col  items-center text-sm font-semibold text-gray-200">
        <li>HOME</li>
        <li>STORE</li>
        <li>OVERVIEW</li>
        <li>COMMUNITY</li>
        <li>CONTACT</li>
        <div className="relative">
          <FontAwesomeIcon
            icon={faBasketShopping}
            className=" cursor-pointer px-6 py-11"
          />
          <span className="absolute right-4 top-9 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-600 font-bold text-black">
            0
          </span>
        </div>
        <div className="shadow-4xl ml-4 flex  h-12 w-14 cursor-pointer items-center justify-center rounded-md bg-black">
          <FontAwesomeIcon
            icon={faSearch}
            className="font-black text-yellow-600"
          />
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
