import { Hero } from "./components/Hero"
import Navbar from "./components/Navbar"
import "./App.css"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Project"
import { Contact } from "./components/contact"

function App() {


  return (
    <>
    <Navbar />
    <Hero />
    <Skills />
    <Projects />
    <Contact />
    </>
  )
}

export default App
