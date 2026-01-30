import car from "../assets/car.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={car}
        alt="Honda Car"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest">
          HONDA SF-26
        </h1>

        <p className="mt-4 text-gray-300 tracking-wide">
          Future Drive Mobility
        </p>

        {/* Discover Button */}
        <button
          onClick={() =>
            document
              .getElementById("collections")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-8 px-8 py-3 border border-white rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition duration-300"
        >
          DISCOVER →
        </button>

      </div>
    </section>
  );
}
