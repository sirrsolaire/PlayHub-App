import Button from "./Button";

function ImageSection() {
  return (
    <section className="flex h-screen flex-col items-center justify-center overflow-y-hidden bg-landing-image bg-cover bg-center bg-no-repeat ">
      <div className=" flex flex-col items-center xl:mt-24">
        <span className="mb-5 hidden items-center gap-3 text-2xl font-bold text-yellow-600 before:block before:h-2.5 before:w-32  before:rounded-l-full  before:bg-white after:block after:h-2.5 after:w-32 after:rounded-r-full after:bg-white md:flex lg:text-3xl">
          GAMES
        </span>
        <div className="flex flex-col items-center gap-1 md:flex-row md:gap-4">
          <h1 className=" text-6xl font-bold text-gray-200 md:text-7xl lg:text-8xl">
            HUNTER
          </h1>
          <h1 className=" text-6xl font-bold  text-yellow-600 md:text-7xl lg:text-8xl">
            KILLER
          </h1>
        </div>
        <p className="mt-5 px-5 text-center font-medium text-white md:px-20 lg:px-32 lg:text-lg lg:font-semibold xl:px-64">
          Welcome to PlayHub, where gaming dreams come to life! Dive into a
          world of limitless possibilities as you embark on epic adventures,
          engage in heart-pounding battles, and explore immersive virtual
          realms.
        </p>
      </div>
      <Button
        className={
          "mt-10 w-fit rounded-md bg-yellow-600  px-4 py-4 text-lg font-bold"
        }
      >
        Visit Gamepedia
      </Button>
    </section>
  );
}

export default ImageSection;
