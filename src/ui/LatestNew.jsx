import data from "../data/latestNews.json";
import LatestNewItem from "./LatestNewItem";
import SectionTitles from "./SectionTitles";

function LatestNew() {
  return (
    <section className="bg-latest-news-bg  bg-cover bg-center bg-no-repeat px-4 py-[120px]">
      <SectionTitles firstWord="Latest News" secondWord="Articles" />
      <div className=" shadow-article bg-article-bg px-3 py-7">
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
