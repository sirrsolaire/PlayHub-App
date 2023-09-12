import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  faBattleNet,
  faPlaystation,
  faSteam,
  faWindows,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,

        initialSlide: 2,
      },
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 5,
        infinite: true,

        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 2400,
      settings: {
        slidesToShow: 5,
        infinite: true,

        slidesToScroll: 5,
      },
    },
  ],
};

function BrandSlider() {
  return (
    <section className="w-full bg-landing-slider bg-cover bg-center py-6 md:px-10 2xl:px-14">
      <Slider {...settings}>
        <FontAwesomeIcon
          icon={faSteam}
          className=" text-8xl text-white opacity-40"
        />
        <FontAwesomeIcon
          icon={faBattleNet}
          className="  text-8xl text-white opacity-40"
        />
        <FontAwesomeIcon
          icon={faWindows}
          className=" text-8xl text-white opacity-40"
        />
        <FontAwesomeIcon
          icon={faPlaystation}
          className=" text-8xl text-white opacity-40"
        />
        <FontAwesomeIcon
          icon={faXbox}
          className=" text-8xl text-white opacity-40"
        />
      </Slider>
    </section>
  );
}

export default BrandSlider;
