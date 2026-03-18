import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedProjects from './components/projects/FeaturedProjects'
import About from './components/about/About'
import Experience from './components/Experience/Experience' 
import Footer from './components/footer/Footer'

const App = () => {
  return (  
    <div>
      <Navbar /> 
      <HeroSection />
      <FeaturedProjects />
      <About />
      <Experience />
      <Footer />
    </div>
  )
}

export default App