import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <div className="container mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-700 to-transparent my-20" />
        </div>
        <Services />
        <div className="container mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-700 to-transparent my-20" />
        </div>
        <WorkExperience />
        <div className="container mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-700 to-transparent my-20" />
        </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

