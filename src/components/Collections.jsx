import sedanImg from "../assets/sedan.png";
import suvImg from "../assets/suv.png";

export default function Collections() {
  return (
    <section
      id="collections"
      className="min-h-screen bg-black text-white px-20 py-24"
    >
      <h1 className="text-4xl font-bold mb-16 tracking-wide">
        Collections
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Sedan Card */}
        <div className="group bg-white/10 rounded-2xl overflow-hidden hover:scale-105 transition duration-300">

          <img
            src={sedanImg}
            alt="Sedan"
            className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-2">
              Sedan Series
            </h2>

            <p className="text-gray-300">
              Luxury comfort meets performance engineering.
            </p>
          </div>

        </div>

        {/* SUV Card */}
        <div className="group bg-white/10 rounded-2xl overflow-hidden hover:scale-105 transition duration-300">

          <img
            src={suvImg}
            alt="SUV"
            className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-2">
              SUV Series
            </h2>

            <p className="text-gray-300">
              Power, space and adventure combined.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
