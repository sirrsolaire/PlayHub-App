import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LatestNewItem({ title, content, image, date, comments, likes }) {
  return (
    <div className="mb-5 bg-latest-bg min-[430px]:flex md:flex md:items-center md:gap-4 md:px-2 md:py-4 xl:py-2 ">
      <img
        src={image}
        alt=""
        className="object-cover object-center min-[430px]:w-40 md:w-1/5 lg:w-1/6 xl:w-1/3 2xl:w-1/5"
      />
      <div className=" flex flex-col gap-2 px-3 py-4">
        <h3 className="text-lg font-bold text-white lg:text-xl">{title}</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faClock} className="text-yellow-600" />
            <span className="text-sm font-medium text-article-text">
              {date}
            </span>
          </div>
          <div className="flex items-center gap-1 ">
            <FontAwesomeIcon icon={faComment} className=" text-yellow-600" />
            <span className="text-sm font-medium text-article-text">
              {comments}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faHeart} className="text-yellow-600" />
            <span className="text-sm font-medium text-article-text">
              {likes}
            </span>
          </div>
        </div>
        <p className="mt-1 text-sm font-medium italic text-area-gray">
          {content}
        </p>
      </div>
    </div>
  );
}

export default LatestNewItem;
