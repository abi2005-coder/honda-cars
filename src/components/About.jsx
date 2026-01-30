import aboutVideo from "../assets/honda.mp4";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-[#0B0618] to-black text-white px-20 py-24"
    >
      {/* Text Section */}
      <div className="max-w-3xl mb-20">
        <h1 className="text-4xl font-bold mb-6">About Honda</h1>

        <p className="text-gray-300 leading-relaxed">
          Honda is a global mobility brand driven by innovation and engineering
          excellence. Our vision is to create sustainable and intelligent
          vehicles for the future.
        </p>
      </div>

      {/* Video Section */}
      <div className="flex justify-center">
        <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <video
            src={aboutVideo}
            autoPlay
            muted
            loop
            controls
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
