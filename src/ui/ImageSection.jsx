import Button from "./Button";

function ImageSection() {
  return (
    <section className="flex h-screen flex-col items-center justify-center overflow-y-hidden bg-landing-image bg-cover bg-center bg-no-repeat">
      <div className=" flex flex-col items-center">
        <h1 className=" text-6xl font-bold text-gray-200">HUNTER</h1>
        <h1 className=" text-6xl font-bold text-white text-yellow-600">
          KILLER
        </h1>
        <p className="mt-5 px-5 text-center font-medium text-white">
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
