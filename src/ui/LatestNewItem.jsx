import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LatestNewItem({ title, content, image, date, comments, likes }) {
  return (
    <div className="bg-latest-bg mb-5 ">
      <img src={image} alt="" />
      <div className=" flex flex-col gap-2 px-3 py-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faClock} className="text-yellow-600" />
            <span className="text-article-text text-sm font-medium">
              {date}
            </span>
          </div>
          <div className="flex items-center gap-1 ">
            <FontAwesomeIcon icon={faComment} className=" text-yellow-600" />
            <span className="text-article-text text-sm font-medium">
              {comments}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faHeart} className="text-yellow-600" />
            <span className="text-article-text text-sm font-medium">
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
