export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-12 py-6 text-white">

      {/* Logo */}
      <h1 className="text-red-600 font-bold text-xl cursor-pointer">
        HΞ
      </h1>

      {/* Menu */}
      <div className="flex gap-10 text-sm tracking-widest uppercase">

        <span
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="hover:text-red-500 cursor-pointer"
        >
          Services
        </span>

        <span
          onClick={() =>
            document
              .getElementById("collections")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="hover:text-red-500 cursor-pointer"
        >
          Collections
        </span>

        <span
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="hover:text-red-500 cursor-pointer"
        >
          About Us
        </span>

      </div>

    </nav>
  )
}
