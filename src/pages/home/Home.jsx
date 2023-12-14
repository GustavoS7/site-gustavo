import { About } from "../../components/about/About";
import { Hero } from "../../components/hero/hero";
import { Navbar } from "../../components/navbar/Navbar";
import { Skills } from "../../components/skills/Skills";


export function Home () {
  return (
    <div>
      <Navbar />

      <Hero />

      <About />
      
      <Skills />
    </div>
  )
}