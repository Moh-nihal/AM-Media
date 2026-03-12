import aboutImg from '../assets/AjmalMukthar.jpeg'
import './About.css'

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-content">
                    <h2 className="about-title">
                        Ajmal Mukhtar <span className="about-subtitle">— Entrepreneur, Business Strategist & Media Professional</span>
                    </h2>
                    
                    <p className="about-text" style={{ marginTop: '1.5rem' }}>
                        Growing up in Dubai gave me early exposure to opportunities, innovation, and entrepreneurship. This laid the foundation for a lifelong journey building businesses across various industries since 2004.
                    </p>

                    <div className="ventures-grid">
                        <div className="venture-card">
                            <span className="venture-year">2004 – 2009</span>
                            <h4 className="venture-name">Construction</h4>
                        </div>
                        <div className="venture-card">
                            <span className="venture-year">2010 – 2013</span>
                            <h4 className="venture-name">Real Estate</h4>
                        </div>
                        <div className="venture-card">
                            <span className="venture-year">2013 – Present</span>
                            <h4 className="venture-name">AM Garage (Auto Repair)</h4>
                        </div>
                        <div className="venture-card">
                            <span className="venture-year">2022 – Present</span>
                            <h4 className="venture-name">Mobile & Electronics</h4>
                        </div>
                        <div className="venture-card" style={{ gridColumn: '1 / -1' }}>
                            <span className="venture-year">2023 – Present</span>
                            <h4 className="venture-name">AM Media & Digital Marketing</h4>
                        </div>
                    </div>

                    <p className="about-text" style={{ marginBottom: '1.5rem' }}>
                        <strong>Vision & Values:</strong> Driven by hard work and consistency, I aim to build businesses that not only succeed but create meaningful impact for clients, partners, and communities.
                    </p>

                    <div className="about-socials">
                        <a href="#contact" className="about-btn">Contact Me</a>
                        <div className="social-links-about">
                            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://www.instagram.com/amgarage?igsh=MXM3OWM5azlhaDFneg==" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://www.facebook.com/share/1GofVbhr3m/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </div>
                    </div>
                </div>
                <div className="about-image sticky-image">
                    <img src={aboutImg} alt="Ajmal Mukhtar" />
                </div>
            </div>
        </section>
    )
}
