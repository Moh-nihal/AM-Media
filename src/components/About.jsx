import aboutImg from '../assets/about-us.jpg'
import './About.css'

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-content">
                    <h2 className="about-title">
                        Ajmal Mukhtar <span className="about-subtitle">— Entrepreneur & Founder</span>
                    </h2>
                    <p className="about-text">
                        Ajmal Mukhtar is an entrepreneur dedicated to delivering quality services across multiple industries. Through his ventures — AM Garage, AM Media, and a Mobile Store — he focuses on providing reliable automotive care, creative media solutions, and the latest mobile technology.
                    </p>
                    <p className="about-text">
                        AM Garage stands at the heart of his work, offering professional vehicle repair, maintenance, and automotive solutions with a strong emphasis on quality workmanship, transparency, and customer trust.
                    </p>
                    <p className="about-text">
                        With a commitment to professionalism and customer satisfaction, his goal is to build dependable services that people can rely on.
                    </p>
                </div>
                <div className="about-image">
                    <img src={aboutImg} alt="Our creative team collaborating" />
                </div>
            </div>
        </section>
    )
}
