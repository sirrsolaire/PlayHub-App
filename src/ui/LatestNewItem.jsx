import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LatestNewItem({ title, content, image, date, comments, likes }) {
  return (
    <div className="mb-5 bg-latest-bg md:flex md:gap-4 md:px-2 md:py-4">
      <img src={image} alt="" className="md:w-1/4" />
      <div className=" flex flex-col gap-2 px-3 py-4 ">
        <h3 className="text-lg font-bold text-white">{title}</h3>
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
