import { Link } from 'react-router-dom'
import buildingIcon from '../assets/building.svg'
import shoppingIcon from '../assets/shopping-bag.svg'
import blogIcon from '../assets/blog.svg'
import portfolioIcon from '../assets/portfolio.svg'
import './Features.css'

const features = [
    {
        icon: buildingIcon,
        title: 'Local Business',
        desc: 'AM Garage, Mobile Store, and AM Media.',
    },
    {
        icon: shoppingIcon,
        title: 'Online Store',
        desc: 'General Trading and Cosmetics.',
    },
    {
        icon: blogIcon,
        title: 'Blogging',
        desc: 'AM Mukhtar Blog.',
    },
    {
        icon: portfolioIcon,
        title: 'Portfolio',
        desc: 'Click to see detailed portfolio.',
        path: '/portfolio',
    },
]

export default function Features() {
    return (
        <section className="features section">
            <div className="container">
                <div className="features-grid">
                    {features.map((f) => {
                        const content = (
                            <>
                                <div className="feature-icon">
                                    <img src={f.icon} alt={f.title} />
                                </div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </>
                        )
                        return (
                            <div className="feature-card" key={f.title}>
                                {f.path ? (
                                    <Link to={f.path} className="feature-card-link">
                                        {content}
                                    </Link>
                                ) : (
                                    content
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
