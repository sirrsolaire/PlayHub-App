import { useQuery } from "@tanstack/react-query";
import { fetchOnSaleGames } from "../apis/onSaleApi";
import Slider from "react-slick";
import { settings } from "./OnSaleSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rate } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
function RateSection() {
  const { data } = useQuery({
    queryKey: ["onSaleItem"],
    queryFn: fetchOnSaleGames,
  });
  return (
    <section className="bg-rate-section-bg bg-cover bg-center bg-no-repeat px-4 py-[120px] md:px-14">
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm font-bold text-area-gray md:text-base">
          CREATE YOUR OWN LIBRARY
        </p>
        <h2 className="flex flex-col items-center text-3xl font-bold text-white md:flex-row md:justify-center md:gap-2 md:text-4xl">
          Rate And Create <span className="text-yellow-600">Library</span>
        </h2>
        {/* <img src="/title_bar.png" alt="Title Bar" className="mt-3" /> */}
      </div>
      <div className=" mt-14 border-t-4 border-yellow-600">
        <Slider {...settings}>
          {data?.map((game) => (
            <div key={game.id} className="relative">
              <img
                src={game.background_image}
                alt=""
                className="h-[400px] w-full object-cover object-center"
              />
              <div className="absolute bottom-0 z-50 flex  w-full flex-col items-center bg-area-sale-bg py-5 shadow-4xl">
                <h3 className="text-lg font-bold text-white">{game.name}</h3>
                <Rate
                  defaultValue={2.5}
                  style={{ fontSize: 10 }}
                  className="text-yellow-600"
                  allowClear={false}
                />
                <div className="flex gap-3">
                  <button
                    className={
                      "rounded-md bg-yellow-600 px-3 py-3 text-xs font-bold"
                    }
                  >
                    + ADD
                  </button>
                  <button
                    className={
                      "rounded-md  border-2 border-gray-400 px-3 py-3 text-xs font-semibold text-white"
                    }
                  >
                    <FontAwesomeIcon icon={faComments} />
                    <span className="ml-2">COMMENTS</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default RateSection;
