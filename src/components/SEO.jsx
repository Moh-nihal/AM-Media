import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type, image, url }) {
    const defaultTitle = "AJMAL MUKHTAR \u2013 AM Garage & AM Media | Automotive Services & Creative Media";
    const defaultDescription = "Professional automotive repair and maintenance at AM Garage, along with creative media, branding, and digital solutions from AM Media.";
    const defaultImage = "/IMG-20260306-WA0432.svg"; // Fallback image (usually preferred to have a proper OG image like a JPG/PNG of the site preview)
    const defaultUrl = "https://ajmalmukhtar.com"; // Replace with actual domain

    const seoTitle = title ? `${title} | AJMAL MUKHTAR` : defaultTitle;
    const seoDescription = description || defaultDescription;
    const seoImage = image || defaultImage;
    const seoUrl = url || defaultUrl;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{seoTitle}</title>
            <meta name='description' content={seoDescription} />

            {/* Open Graph metadata */}
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:type" content={type || 'website'} />
            <meta property="og:url" content={seoUrl} />
            <meta property="og:image" content={seoImage} />

            {/* Twitter metadata */}
            <meta name="twitter:creator" content={name || 'Ajmal Mukhtar'} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
            <meta name="twitter:image" content={seoImage} />
        </Helmet>
    );
}
