import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#0a0a0b] text-zinc-100 min-h-screen font-sans overflow-x-hidden">
      <Navbar />
      <main className="max-w-[1100px] mx-auto px-8">
        <Hero />
        <hr className="border-zinc-800" />
        <About />
        <hr className="border-zinc-800" />
        <Skills />
        <hr className="border-zinc-800" />
        <Projects />
        <hr className="border-zinc-800" />
        <Experience />
        <hr className="border-zinc-800" />
        <Education />
        <hr className="border-zinc-800" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
