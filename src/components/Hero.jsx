import heroImg from '../assets/hero-img.svg'
import './Hero.css'

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title animate-fade-in-up">
                        Excellence in <br />
                        <div style={{ display: 'inline-block' }}>
                            Every Service <br />
                            <span className="hero-title-highlight">- Ajmal Mukhtar</span>
                        </div>
                    </h1>
                    <p className="hero-subtitle">
                        Experience the AM standard. We bring innovation, quality, and dedication to automotive care, media, and mobile retail.
                    </p>

                </div>
                <div className="hero-image">
                    <img src={heroImg} alt="Web design collaboration illustration" />
                </div>
            </div>
        </section>
    )
}
