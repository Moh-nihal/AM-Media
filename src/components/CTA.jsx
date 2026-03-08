import './CTA.css'

export default function CTA() {
    return (
        <section className="cta section" id="contact">
            <div className="container">
                <h2 className="cta-title">Get a professional website today!</h2>
                <p className="cta-subtitle">
                    Let us bring your vision to life with a beautifully designed, high-performance website.
                </p>
                <a href="#contact" className="btn-primary">
                    Make a Website
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
            </div>
        </section>
    )
}
