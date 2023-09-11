import { Rate } from "antd";
import SectionTitles from "./SectionTitles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function CurstomerFeedback() {
  return (
    <section className="bg-latest-news-bg bg-cover  bg-center bg-no-repeat px-4 pb-[120px] md:px-14">
      <SectionTitles firstWord="User" secondWord="Feedback" />
      <div className="relative bg-article-bg px-3 py-10 shadow-article md:px-8">
        <h2 className="text-base font-bold text-white md:text-lg">
          Large Game Database
        </h2>
        <Rate defaultValue={5} className="mb-3 md:mb-6" />
        <p className="mb-6 text-base italic text-area-gray md:mb-12 md:text-lg md:font-semibold">
          "I recently had the opportunity to explore the game database, and I
          must say, it's an incredible resource for gamers and enthusiasts
          alike. The comprehensive collection of games, spanning various
          platforms and genres, is truly impressive. Navigating through the
          database was a breeze, thanks to its intuitive user interface and
          robust search functionality. The detailed information provided for
          each game, including release dates, developer details, and gameplay
          descriptions, was invaluable for making informed gaming choices."
        </p>
        <div className="mb-12 flex items-center gap-4 ">
          <img
            src="/feedback-1.webp"
            alt="Feedback Picture"
            className="h-20 w-20 rounded-full object-cover object-center"
          />
          <div className="flex flex-col">
            <span className=" font-semibold text-white md:text-lg">
              Sir Solaire
            </span>
            <span className="text-sm font-medium italic text-yellow-600 md:text-base">
              Founder
            </span>
          </div>
        </div>
        <div className="mb-5 flex gap-2">
          <button>
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="text-feedback-button border-feedback-button border-[3px] px-3 py-2 text-xs"
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-feedback-button border-feedback-button border-[3px] px-3 py-2 text-xs"
            />
          </button>
        </div>
        <img
          src="/quote.png"
          alt="Quote symbol"
          className="absolute bottom-0 right-0 mb-2 mr-2 w-1/3 md:mb-10 md:mr-10 md:w-1/6"
        />
      </div>
    </section>
  );
}

export default CurstomerFeedback;
