import AreaSection from "../ui/AreaSection";
import BrandSlider from "../ui/BrandSlider";
import ImageSection from "../ui/ImageSection";
import NavBar from "../ui/NavBar";
import RateSection from "../ui/RateSection";

function HomePage() {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <ImageSection />
      <BrandSlider />
      <AreaSection />
      <RateSection />
    </div>
  );
}

export default HomePage;
