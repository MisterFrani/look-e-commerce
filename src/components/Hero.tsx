import hero from "../../public/hero.png";

function Hero() {
  return (
    <section className="mx-auto px-11 py-4 md:py-20 bg-[#F6F6F6]  sm:px-4 lg:px-8">
      <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:text-left max-w-[1830px] mx-auto">
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h1 className="text-3xl font-bold text-black sm:text-4xl md:text-5xl ">
            Mode de top niveau à{" "}
            <span className=" text-[#74b9ff] ">prix Look !</span>
          </h1>
          <p className="mt-4 max-w-md leading-relaxed text-sm md:text-lg">
            Découvrez notre sélection exclusive de vêtements de haute qualité à
            des prix imbattables. Alliez élégance et économie avec nos dernières
            collections.
          </p>
        </div>
        <div className="w-full md:w-auto">
          <img
            src={hero}
            alt="hero"
            className="mx-auto h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
