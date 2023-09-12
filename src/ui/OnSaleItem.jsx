import {
  faLinux,
  faPlaystation,
  faWindows,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiNintendoswitch } from "react-icons/si";

function OnSaleItem({ title, image, meta, platforms, ratingCount }) {
  console.log(platforms);
  return (
    <div className="relative mt-12 ">
      <img
        src={image}
        alt="in sale"
        className="object-cent h-96 w-full object-cover "
      />

      <div className="absolute bottom-0 z-30 flex w-full flex-col gap-1 bg-area-sale-bg px-4 py-3 shadow-games">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {platforms.includes("Xbox One") && (
              <FontAwesomeIcon
                icon={faXbox}
                className=" text-lg text-white opacity-40"
              />
            )}
            {platforms.includes("PlayStation 4") && (
              <FontAwesomeIcon
                icon={faPlaystation}
                className=" text-lg text-white opacity-40"
              />
            )}
            {platforms.includes("Nintendo Switch") && (
              <SiNintendoswitch className=" text-lg text-white opacity-40" />
            )}
            {platforms.includes("Linux") && (
              <FontAwesomeIcon
                icon={faLinux}
                className="text-lg text-white opacity-40"
              />
            )}
            {platforms.includes("PC") && (
              <FontAwesomeIcon
                icon={faWindows}
                className="text-lg text-white opacity-40"
              />
            )}
          </div>
          <span className="flex h-6 w-8 items-center justify-center  rounded-sm  border-2 border-yellow-600 font-medium text-yellow-600 shadow-2xl">
            {meta}
          </span>
        </div>

        <h2 className="mt-3 flex justify-between  text-lg font-semibold text-gray-200">
          {title}
        </h2>
        <span className=" w-fit rounded-md bg-slate-800 px-1.5  text-sm font-semibold text-gray-200">
          + {ratingCount}
        </span>
      </div>
    </div>
  );
}

export default OnSaleItem;
