import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Collections from "./components/Collections"
import About from "./components/About"
import NextSteps from "./components/NextSteps"


function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Services />
      <Collections />
      <About />
      <NextSteps />
    </div>
  )
}

export default App
