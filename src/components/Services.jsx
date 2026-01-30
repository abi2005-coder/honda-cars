export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen bg-[#0B0618] text-white px-20 py-24"
    >

      <h1 className="text-4xl font-bold mb-10">
        Services
      </h1>

      <div className="grid grid-cols-3 gap-10">

        <div className="bg-white/10 p-8 rounded-xl">
          <h2 className="text-xl font-semibold">Book Test Drive</h2>
          <p className="text-gray-400 mt-2">
            Schedule your Honda experience instantly.
          </p>
        </div>

        <div className="bg-white/10 p-8 rounded-xl">
          <h2 className="text-xl font-semibold">Service Booking</h2>
          <p className="text-gray-400 mt-2">
            Hassle-free car service appointments.
          </p>
        </div>

        <div className="bg-white/10 p-8 rounded-xl">
          <h2 className="text-xl font-semibold">Dealer Locator</h2>
          <p className="text-gray-400 mt-2">
            Find authorized Honda dealers near you.
          </p>
        </div>

      </div>

    </section>
  )
}
