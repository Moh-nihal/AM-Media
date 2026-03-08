import amuraImg from '../assets/Best Digital Growth Marketing Company in India _ Amura.jpeg'
import garageImg from '../assets/dream JDM garage _.jpeg'
import mobileStoreImg from '../assets/Bewertungen zu Elektronik-Shops lesen.jpeg'
import './Services.css'

const services = [
    {
        image: amuraImg,
        title: 'AM Media',
        desc: 'Comprehensive digital marketing, content creation, and brand management solutions tailored to elevate your business presence.',
    },
    {
        image: garageImg,
        title: 'AM Garage',
        desc: 'Top-tier automotive repair, regular maintenance, and custom detailing services ensuring unparalleled care for your vehicles.',
    },
    {
        image: mobileStoreImg,
        title: 'Mobile Store',
        desc: 'Your premium destination for the latest smartphones and accessories, backed by expert repair services and support.',
    },
]

export default function Services() {
    return (
        <section className="services section" id="services">
            <div className="container">
                <h2 className="section-title">My Businesses</h2>
                <div className="services-grid">
                    {services.map((s) => (
                        <div className="service-card" key={s.title}>
                            <div className="service-image">
                                <img src={s.image} alt={s.title} />
                            </div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
