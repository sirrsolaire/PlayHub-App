import data from "../data/latestNews.json";
import LatestNewItem from "./LatestNewItem";
import SectionTitles from "./SectionTitles";

function LatestNew() {
  return (
    <section className="bg-latest-news-bg bg-cover bg-center  bg-no-repeat px-4 py-[120px] md:px-14 lg:px-36 xl:w-full xl:p-0">
      <SectionTitles firstWord="Latest News" secondWord="Articles" />
      <div className=" overflow-y-scroll bg-article-bg px-3 py-7 shadow-article min-[430px]:max-h-[500px] md:max-h-[700px] xl:max-h-[600px] xl:overflow-y-scroll">
        <div className="shadow-articleShadow">
          {data.map((item) => (
            <LatestNewItem
              key={item.id}
              title={item.title}
              content={item.content}
              image={item.image}
              date={item.date}
              comments={item.comments}
              likes={item.likes}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestNew;
