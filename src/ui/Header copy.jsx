import {
  faFacebookF,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className=" flex justify-between bg-gray-900 px-72">
      <div className="flex h-14 items-center  ">
        <h4 className="flex h-full items-center gap-2 text-xs font-semibold text-[#a5a5a5]">
          Exclusive Black Friday! Offer{" "}
          <span className=" flex h-full items-center bg-yellow-600 bg-cover bg-center bg-no-repeat px-3 text-xl font-bold text-black ">
            00
          </span>{" "}
          Days
        </h4>
      </div>
      <div className="flex items-center gap-4 text-xs text-[#a5a5a5]">
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faPinterestP} />
        <FontAwesomeIcon icon={faLinkedinIn} />
        <span className="text-yellow-600">|</span>
        <FontAwesomeIcon icon={faEnvelope} className="text-yellow-600" />
        <p>info@playhub.com</p>
        <div className="flex cursor-pointer">
          <div className="flex h-8 w-10 items-center justify-center bg-yellow-600">
            <FontAwesomeIcon icon={faUser} className="text-black" />
          </div>
          <span className="flex h-8 w-14 items-center justify-center border-t border-t-yellow-600 bg-black font-medium  text-white">
            LOGIN
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
