import aboutImg from '../assets/about-us.jpg'
import './About.css'

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-content">
                    <h2 className="about-title">
                        We help teams build the business of their dreams
                    </h2>
                    <p className="about-text">
                        From digital marketing and branding to automotive care and retail, we bring innovation, quality, and dedication to every venture. Our portfolio spans AM Media, AM Garage, and Mobile Store—each built to deliver real results and lasting trust.
                    </p>
                    <p className="about-text">
                        We combine strategy, creativity, and hands-on execution so your brand stands out and your customers keep coming back. Whether you need a stronger online presence, reliable service, or a seamless shopping experience, we’re here to make it happen.
                    </p>
                </div>
                <div className="about-image">
                    <img src={aboutImg} alt="Our creative team collaborating" />
                </div>
            </div>
        </section>
    )
}
