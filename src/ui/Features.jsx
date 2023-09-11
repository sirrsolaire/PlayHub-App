import Divider from "./Divider";
import NewsContent from "./NewsContent";

function Features() {
  return (
    <section className="flex flex-col items-center bg-features-bg  bg-cover bg-center bg-no-repeat px-4 py-[120px] md:px-14">
      <p className="mb-2 text-sm font-bold text-area-gray md:text-base">
        WHAT WE GIVE PLAYERS
      </p>
      <h2 className=" flex flex-col items-center  text-3xl font-bold text-white md:flex-row md:gap-2 md:text-4xl">
        Why Choose Us <span className="text-yellow-600">PlayHub</span>
      </h2>
      <div className="mt-12 flex flex-col gap-5 rounded-2xl bg-news-bg-color px-6 py-10 md:max-w-xl">
        <div className="w-fit -skew-x-6 bg-yellow-600 px-4 py-0.5">
          <span className="w-full text-xs font-bold md:text-sm">NEWS</span>
        </div>
        <h3 className="text-lg font-bold text-white md:text-xl">
          Your Source for the Latest Gaming News
        </h3>
        <p className="mb-5 text-[15px] font-medium text-area-gray md:text-base">
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
      <div className=" flex flex-col gap-12 pt-20  md:flex-row md:flex-wrap md:justify-center">
        <div className="flex  w-full justify-start gap-4 md:w-fit">
          <img src="/fact_icon-1.png" alt="Games" className="h-fit w-fit" />
          <div className="flex flex-col gap-2">
            <span className="self-end text-3xl font-bold text-white">
              500.000+
            </span>
            <p className="text-base font-semibold text-area-gray">Games</p>
          </div>
        </div>
        <div className="flex w-full   justify-start gap-4 md:w-fit">
          <img src="/fact_icon-2.png" alt="Games" className="h-fit w-fit" />
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold text-white">1000+</span>
            <p className="text-base font-semibold text-area-gray">Daily User</p>
          </div>
        </div>
        <div className="flex w-full   justify-start gap-4 md:w-fit">
          <img src="/fact_icon-3.png" alt="Games" className="h-fit w-fit" />
          <div className="flex flex-col gap-2 self-start">
            <span className="text-3xl font-bold text-white">50.000</span>
            <p className="text-base font-semibold text-area-gray">Likes</p>
          </div>
        </div>
        <div className="flex w-full  justify-start gap-4  md:w-fit md:self-center">
          <img src="/fact_icon-4.png" alt="Games" className="h-fit w-fit" />
          <div className="flex flex-col gap-2 self-start">
            <span className="text-3xl font-bold text-white">12</span>
            <p className="text-base font-semibold text-area-gray">
              Amazing Feature
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
