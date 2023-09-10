import Button from "./Button";

function AboutStory() {
  return (
    <>
      <h3 className="mt-11 text-sm font-bold text-area-gray">ABOUT STORY</h3>
      <h3 className="mt-2 text-3xl font-bold text-white">
        Your Gateway to <span className="text-yellow-600">Gaming </span>
        Excellence
      </h3>
      {/* <img src="/title_bar.png" alt="Title Bar" className="mt-6" /> */}
      <div className="mt-5 flex flex-col gap-5">
        <p className="text-sm font-medium text-area-gray">
          Welcome to the ultimate destination for gamers and enthusiasts alike –
          PlayHub. We've created a virtual paradise for all things gaming, where
          the world of video games unfolds before your eyes.
        </p>
        <p className=" text-sm font-medium text-area-gray">
          Dive into our vast and meticulously curated game databases, which span
          across all genres and platforms, from classic retro titles to the
          latest cutting-edge releases. Whether you're a seasoned gamer, a
          nostalgic aficionado, or a casual player looking for your next
          adventure, our website is your one-stop haven.
        </p>
        <Button
          className={
            "mt-4 w-fit rounded-md bg-yellow-600 px-4 py-4 text-sm font-bold"
          }
        >
          READ MORE
        </Button>
      </div>
    </>
  );
}

export default AboutStory;
