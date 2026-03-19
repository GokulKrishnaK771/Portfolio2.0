import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedProjects from './components/projects/FeaturedProjects'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import CaseStudyINEL from './components/casestudy/CaseStudyINEL'
import MarqueeScroll from './components/MarqueeScroll'

const Home = () => (
  <>
    <Navbar />
    <HeroSection />
    <MarqueeScroll />
    <FeaturedProjects />
    <About />
    <Experience />
    <Footer />
  </>
)

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/casestudy/india-nippon" element={<CaseStudyINEL />} />
    </Routes>
  )
}

export default App