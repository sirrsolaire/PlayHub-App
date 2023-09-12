import FeaturesNews from "./FeaturesNews";

function Features() {
  return (
    <section className="flex flex-col items-center bg-features-bg  bg-cover bg-center bg-no-repeat px-4 py-[120px] md:px-14 2xl:px-24">
      <p className="mb-2 text-sm font-bold text-area-gray md:text-base">
        WHAT WE GIVE PLAYERS
      </p>
      <h2 className=" flex flex-col items-center  text-3xl font-bold text-white md:flex-row md:gap-2 md:text-4xl">
        Why Choose Us <span className="text-yellow-600">PlayHub</span>
      </h2>
      <div className="flex gap-5">
        <FeaturesNews className="mt-12 flex flex-col gap-5 rounded-2xl bg-news-bg-color px-6 py-10 md:max-w-xl" />
        <FeaturesNews className="mt-12 hidden flex-col gap-5 rounded-2xl bg-news-bg-color px-6 py-10 md:max-w-xl xl:flex" />
        <FeaturesNews className="mt-12 hidden flex-col gap-5 rounded-2xl bg-news-bg-color px-6 py-10 md:max-w-xl  xl:flex" />
      </div>
      <div className=" flex flex-col gap-12 pt-20  md:flex-row md:flex-wrap md:justify-center lg:mt-5 2xl:mt-12 2xl:gap-28">
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
