import Divider from "./Divider";
import NewsContent from "./NewsContent";

function FeaturesNews({ className }) {
  return (
    <div className={className}>
      <div className="w-fit -skew-x-6 bg-yellow-600 px-4 py-0.5">
        <span className="w-full text-xs font-bold md:text-sm">NEWS</span>
      </div>
      <h3 className="text-lg font-bold text-white md:text-xl xl:text-lg">
        Your Source for the Latest Gaming News
      </h3>
      <p className="mb-5 text-[15px] font-medium text-area-gray md:text-base xl:text-sm">
        We understand that being a true gamer means staying up-to-date with the
        ever-evolving world of video games.
      </p>
      <Divider />
      <NewsContent tag="RPG" image="/news-1.jpeg" alt="Disco Elysium Banner">
        Disco Elysium: New Gameplay Features Revealed!
      </NewsContent>
      <Divider />
      <NewsContent tag="SHOOTER" image="/news-2.jpeg" alt="EFT Banner">
        Escape From Tarkov: Latest Updates and Tactical Insights!
      </NewsContent>
      <Divider />
      <NewsContent tag="ARPG" image="/news-3.avif" alt="Diablo 4 Banner">
        Diablo 4: People stop playing Diablo 4!
      </NewsContent>
    </div>
  );
}

export default FeaturesNews;
