import AreaSection from "../ui/AreaSection";
import BrandSlider from "../ui/BrandSlider";
import CurstomerFeedback from "../ui/CurstomerFeedback";
import Features from "../ui/Features";
import Footer from "../ui/Footer";
import ImageSection from "../ui/ImageSection";
import LatestNew from "../ui/LatestNew";
import NavBar from "../ui/NavBar";
import NavBarDesktop from "../ui/NavBarDesktop";
import RateSection from "../ui/RateSection";

function HomePage() {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <NavBarDesktop />
      <ImageSection />
      <BrandSlider />
      <AreaSection />
      <RateSection />
      <Features />
      <LatestNew />
      <CurstomerFeedback />
      <Footer />
    </div>
  );
}

export default HomePage;
