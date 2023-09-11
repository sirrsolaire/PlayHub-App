import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faHeadphones,
  faLocationDot,
  faPaperPlane,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="bg-footer-bg relative bg-cover bg-center bg-no-repeat ">
      <div className="px-4 md:px-14">
        <div className="bg-footer-container relative -top-12 flex flex-col items-center justify-center gap-5 rounded-[3.5rem] px-5 py-5 ">
          <h2 className="text-2xl font-bold text-white">
            Our <span className="text-yellow-600">Newsletter</span>
          </h2>
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email..."
                className=" bg-footer-input w-full -skew-x-[10deg] py-4 pl-12 placeholder:text-sm placeholder:font-semibold"
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-0 top-[52%] ml-5 translate-y-[-50%] text-sm text-yellow-600"
              />
            </div>
            <button className="flex -skew-x-[10deg] items-center bg-yellow-600 px-6 py-4 text-sm font-bold ">
              SUBSCRIBE
              <FontAwesomeIcon icon={faPaperPlane} className="ml-2 text-xs" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 md:justify-center">
          <img src="/playhub-logo.png" alt="PlayHub Logo" />
          <h1 className="text-2xl font-bold text-gray-200">PlayHub</h1>
        </div>
        <div className="mt-11 flex flex-col gap-4 ">
          <p className="text-footer-text   text-[15px] font-medium">
            Explore the world of gaming with our extensive game databases.
          </p>
          <p className="text-footer-text flex items-center gap-2 text-[15px]  font-medium">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-footer-text"
            />
            Address: zarzurt Z15 Street West new king
          </p>
          <p className="text-footer-text  flex items-center gap-2 text-[15px]  font-medium">
            <FontAwesomeIcon icon={faHeadphones} className="text-footer-text" />
            Phone: +90 1234 12342 1234
          </p>
          <p className="text-footer-text  flex items-center gap-2 text-[15px]  font-medium">
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              className="text-footer-text"
            />
            Email: info.playhub.com
          </p>
        </div>
      </div>

      <p className="bg-copyright-text mt-10 flex items-center justify-center gap-1 px-4 py-6 text-sm font-medium text-area-gray">
        Copyright © 2023 <span className="text-yellow-600">PlayHub</span> All
        rights reserved
      </p>
    </footer>
  );
}

export default Footer;
