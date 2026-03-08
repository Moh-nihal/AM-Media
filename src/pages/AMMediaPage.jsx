import Hero from '../components/ammedia/Hero'
import About from '../components/ammedia/About'
import WhyChooseUs from '../components/ammedia/WhyChooseUs'
import Packages from '../components/ammedia/Packages'
import Team from '../components/ammedia/Team'
import Contact from '../components/ammedia/Contact'
import Footer from '../components/ammedia/Footer'
import SEO from '../components/SEO'

const AMMediaPage = () => (
  <>
    <SEO
      title="AM Media"
      description="Elevate your brand with AM Media's professional digital marketing and creative services."
      url="https://ajmalmukhtar.com/am-media"
    />
    <Hero />
    <About />
    <WhyChooseUs />
    <Packages />
    <Team />
    <Contact />
    <Footer />
  </>
)

export default AMMediaPage
