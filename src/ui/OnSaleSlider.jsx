import Slider from "react-slick";
import OnSaleItem from "./OnSaleItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@tanstack/react-query";
import { fetchOnSaleGames } from "../apis/onSaleApi";

export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function OnSaleSlider() {
  const { data, isLoading } = useQuery({
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
