import AboutStory from "./AboutStory";
import OnSaleSlider from "./OnSaleSlider";

function AreaSection() {
  return (
    <section className="bg-area-bg bg-cover bg-center px-4 py-[120px] md:px-20 2xl:px-24">
      <p className="mb-3 text-sm font-bold text-area-gray lg:text-base">
        FEATURED GAMES
      </p>
      <h1 className="text-4xl font-extrabold text-green-200 lg:text-5xl">
        Pick & <span className="text-yellow-600">Discover</span>
      </h1>
      <OnSaleSlider />
      <AboutStory />
    </section>
  );
}

export default AreaSection;
