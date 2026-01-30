export default function NextSteps() {
  return (
    <section
      id="nextsteps"
      className="min-h-screen bg-gradient-to-br from-[#0B0618] via-black to-[#0B0618] text-white px-16 py-24"
    >
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-20 tracking-wide">
        Next Steps
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Book Now */}
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl text-center hover:scale-105 transition duration-300 shadow-xl">
          <img
            src="https://cdn-icons-png.flaticon.com/512/741/741407.png"
            alt="Book Now"
            className="w-20 mx-auto mb-6 drop-shadow-lg"
          />

          <h2 className="text-xl font-semibold mb-3">
            Book Now
          </h2>

          <p className="text-gray-300 text-sm">
            Schedule your Honda test drive instantly.
          </p>
        </div>

        {/* Find Dealer */}
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl text-center hover:scale-105 transition duration-300 shadow-xl">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Find Dealer"
            className="w-20 mx-auto mb-6 drop-shadow-lg"
          />

          <h2 className="text-xl font-semibold mb-3">
            Find a Dealer
          </h2>

          <p className="text-gray-300 text-sm">
            Locate authorized Honda dealerships near you.
          </p>
        </div>

        {/* Contact Us */}
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl text-center hover:scale-105 transition duration-300 shadow-xl">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3059/3059446.png"
            alt="Contact Us"
            className="w-20 mx-auto mb-6 drop-shadow-lg"
          />

          <h2 className="text-xl font-semibold mb-3">
            Contact Us
          </h2>

          <p className="text-gray-300 text-sm">
            Get assistance from Honda experts.
          </p>
        </div>

      </div>
    </section>
  );
}
