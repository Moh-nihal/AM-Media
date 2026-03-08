import avatarImg from '../assets/avatar.png'
import './Reviews.css'

export default function Reviews() {
    return (
        <section className="reviews section" id="reviews">
            <div className="container">
                <div className="review-card">
                    <div className="review-author-top">
                        <img src={avatarImg} alt="Wade Warren" className="review-avatar-img" />
                    </div>
                    <p className="review-quote">
                        &ldquo;The best part is that Astra comes with hundreds of professionally designed
                        templates for just about every industry, makes it super easy for non-techy
                        users to build a website.&rdquo;
                    </p>
                    <span className="review-name">Wade Warren</span>
                </div>
            </div>
        </section>
    )
}
