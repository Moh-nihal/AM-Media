import passionateIcon from '../assets/passionate.svg'
import professionalIcon from '../assets/professional.svg'
import supportIcon from '../assets/support.svg'
import './WhyUs.css'

const reasons = [
    {
        icon: passionateIcon,
        title: 'Passionate',
        desc: 'We pour our hearts into every project, ensuring each detail is crafted with care and creativity.',
    },
    {
        icon: professionalIcon,
        title: 'Professional',
        desc: 'Our team brings years of industry experience and best practices to deliver top-quality results.',
    },
    {
        icon: supportIcon,
        title: 'Support',
        desc: 'We provide dedicated support throughout your journey from concept to launch and beyond.',
    },
]

export default function WhyUs() {
    return (
        <section className="whyus section" id="whyus">
            <div className="container">
                <h2 className="section-title">Why Choose Us</h2>
                <p className="section-subtitle">
                    We combine passion, professionalism, and dedicated support to deliver results that exceed expectations.
                </p>
                <div className="whyus-grid">
                    {reasons.map((r) => (
                        <div className="whyus-card" key={r.title}>
                            <div className="whyus-icon">
                                <img src={r.icon} alt={r.title} />
                            </div>
                            <h3>{r.title}</h3>
                            <p>{r.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
