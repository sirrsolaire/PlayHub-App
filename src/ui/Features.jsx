import Divider from "./Divider";
import NewsContent from "./NewsContent";

function Features() {
  return (
    <section className="bg-features-bg flex flex-col items-center  bg-cover bg-center bg-no-repeat px-4 py-[120px]">
      <p className="mb-2 text-sm font-bold text-area-gray">
        WHAT WE GIVE PLAYERS
      </p>
      <h2 className=" flex flex-col items-center  text-3xl font-bold text-white">
        Why Choose Us <span className="text-yellow-600">PlayHub</span>
      </h2>
      <img src="/title_bar.png" alt="Title bar" className="mt-6" />
      <div className="bg-news-bg-color mt-12 flex flex-col gap-5 rounded-2xl px-6 py-10">
        <div className="w-fit -skew-x-6 bg-yellow-600 px-4 py-0.5">
          <span className="w-full text-xs font-bold">NEWS</span>
        </div>
        <h3 className="text-lg font-bold text-white ">
          Your Source for the Latest Gaming News
        </h3>
        <p className="mb-5 text-[15px] font-medium text-area-gray">
          We understand that being a true gamer means staying up-to-date with
          the ever-evolving world of video games.
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
    </section>
  );
}

export default Features;
