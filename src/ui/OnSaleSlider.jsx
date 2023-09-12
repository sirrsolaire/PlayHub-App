import Slider from "react-slick";
import OnSaleItem from "./OnSaleItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@tanstack/react-query";
import { fetchOnSaleGames } from "../apis/onSaleApi";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 900,
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
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 2400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
  ],
};

function OnSaleSlider() {
  const { data } = useQuery({
    queryKey: ["onSaleItem"],
    queryFn: fetchOnSaleGames,
  });

  return (
    <Slider {...settings}>
      {data?.map((game) => (
        <OnSaleItem
          key={game.id}
          title={game.name}
          image={game.background_image}
          meta={game.metacritic}
          platforms={game.platforms.map((game) => game.platform.name)}
          ratingCount={game.ratings_count}
        />
      ))}
    </Slider>
  );
}

export default OnSaleSlider;
