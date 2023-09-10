import AreaSection from "../ui/AreaSection";
import BrandSlider from "../ui/BrandSlider";
import CurstomerFeedback from "../ui/CurstomerFeedback";
import Features from "../ui/Features";
import ImageSection from "../ui/ImageSection";
import LatestNew from "../ui/LatestNew";
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
      <Features />
      <LatestNew />
      <CurstomerFeedback />
    </div>
  );
}

export default HomePage;
