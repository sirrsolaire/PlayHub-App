import {
  faFacebookF,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBarDesktop() {
  return (
    <>
      <header className="hidden h-14 items-center justify-between bg-menu-nav px-5 lg:flex">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-area-gray">
            Next Steam Sale
          </p>
          <span className="w-fit  -skew-x-6 bg-yellow-600 px-3 py-16 text-lg font-bold">
            00
          </span>
          <span className="text-sm font-semibold text-area-gray">Days</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3 after:mr-1 after:text-xs after:text-yellow-600 after:content-['|']">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-xs font-black text-area-gray"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-xs font-black text-area-gray"
            />
            <FontAwesomeIcon
              icon={faPinterestP}
              className="text-xs font-black text-area-gray"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-xs font-black text-area-gray "
            />
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-xs font-black text-yellow-600"
            />
            <p className="text-xs font-medium text-area-gray">
              info@playhub.com
            </p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faUser}
              className=" bg-yellow-600 px-3.5 py-2.5 text-xs font-black text-black"
            />
            <span className="bg-login-bg border-t-2 border-yellow-600 px-3 py-[7px] text-xs font-semibold text-white">
              LOGIN
            </span>
          </div>
        </div>
      </header>
      <nav className="fixed z-50 hidden w-full items-center justify-between bg-header-pattern bg-cover bg-center bg-no-repeat px-5 lg:flex">
        <div className="flex items-center gap-2">
          <img src="/playhub-logo.png" alt="PlayHub Logo" />
          <h1 className="text-2xl font-bold text-gray-200 md:text-3xl">
            PlayHub
          </h1>
        </div>
        <div className=" flex items-center gap-4">
          <ul className="flex">
            <li className="nav-list">HOME</li>
            <li className="nav-list">GAMEPEDIA</li>
            <li className="nav-list">OVERVIEW</li>
            <li className="nav-list">COMMUNITY</li>
            <li className="nav-list">CONTACT</li>
          </ul>
          <div className="ml-4 hidden h-11 w-14 cursor-pointer items-center justify-center rounded-md bg-black shadow-4xl md:flex ">
            <FontAwesomeIcon
              icon={faSearch}
              className="font-black text-yellow-600"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBarDesktop;
