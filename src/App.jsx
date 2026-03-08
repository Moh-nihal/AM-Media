import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import About from './components/About'
import Reviews from './components/Reviews'
import WhyUs from './components/WhyUs'
import Contact from './components/ammedia/Contact'
import Footer from './components/Footer'
import AMMediaPage from './pages/AMMediaPage'
import PortfolioPage from './pages/PortfolioPage'

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <About />
      <Reviews />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  const { pathname, hash } = useLocation()

  // Scroll to top when navigating to a new page (e.g. AM Media, Portfolio)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Scroll to section when hash is present (e.g. #contact, #about)
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [pathname, hash])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/am-media" element={<AMMediaPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </>
  )
}
