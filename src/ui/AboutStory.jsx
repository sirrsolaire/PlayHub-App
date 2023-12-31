import Button from "./Button";

function AboutStory() {
  return (
    <div className="mt-16 flex items-center 2xl:mt-36">
      <div>
        <h3 className="mt-11 text-sm font-bold text-area-gray md:text-base lg:text-sm 2xl:text-base">
          ABOUT STORY
        </h3>
        <h3 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Your Gateway to <span className="text-yellow-600">Gaming </span>
          Excellence
        </h3>
        <div className="mt-5 flex flex-col gap-5">
          <p className="text-sm font-medium text-area-gray md:text-base ">
            Welcome to the ultimate destination for gamers and enthusiasts alike
            – PlayHub. We've created a virtual paradise for all things gaming,
            where the world of video games unfolds before your eyes.
          </p>
          <p className=" text-sm font-medium text-area-gray  md:text-base">
            Dive into our vast and meticulously curated game databases, which
            span across all genres and platforms, from classic retro titles to
            the latest cutting-edge releases. Whether you're a seasoned gamer, a
            nostalgic aficionado, or a casual player looking for your next
            adventure, our website is your one-stop haven.
          </p>
          <Button
            className={
              "mt-4 w-fit rounded-md bg-yellow-600 px-4 py-4 text-sm font-bold md:self-center lg:self-start "
            }
          >
            READ MORE
          </Button>
        </div>
      </div>
      <img
        src="/desktop-aside.jpg"
        alt="Cyberpunk 2077 image"
        className="ml-12 hidden h-96 lg:flex xl:ml-28 2xl:w-fit"
      />
    </div>
  );
}

export default AboutStory;
