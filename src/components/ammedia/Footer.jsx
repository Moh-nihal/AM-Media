import { Link } from 'react-router-dom'
import { MessageCircle, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-100 dark:bg-[#0A0807] border-t border-stone-200 dark:border-indigo-500/10 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]" style={{ backgroundImage: 'repeating-linear-gradient(105deg, transparent, transparent 2px, rgba(129,140,248,0.2) 2px, rgba(129,140,248,0.2) 3px)' }} />
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-indigo-500/8 dark:bg-indigo-500/6 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-rose-500/6 dark:bg-rose-500/5 blur-3xl" />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 bg-gradient-to-r from-indigo-500 to-rose-500 dark:from-indigo-400 dark:to-rose-400 bg-clip-text text-transparent">AM Media</h3>
            <p className="text-sm sm:text-base text-stone-600 dark:text-slate-400 mb-6 leading-relaxed">From India to the heart of the GCC, AM Media and Graphics connects creativity with culture — delivering premium-quality design, media, and digital solutions across Saudi Arabia, Kuwait, Oman, Qatar, Bahrain, and UAE.</p>
            <div className="flex gap-4 relative z-50 pointer-events-auto">
              {[
                { Icon: Instagram, link: 'https://www.instagram.com/amgarage?igsh=MXM3OWM5azlhaDFneg==', label: 'Instagram' },
                { Icon: Facebook, link: 'https://www.facebook.com/profile.php?id=61583026393077', label: 'Facebook' },
                { Icon: Linkedin, link: 'https://www.linkedin.com/in/al-layal-2216b0395/?originalSubdomain=ae', label: 'LinkedIn' },
              ].map(({ Icon, link, label }, i) => (
                <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="relative z-50 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/80 dark:bg-[#0A0807]/80 border border-stone-200 dark:border-indigo-400/20 hover:bg-indigo-50 dark:hover:bg-indigo-400/20 hover:border-indigo-300 dark:hover:border-indigo-400/40 transition-all duration-300 group pointer-events-auto touch-manipulation" aria-label={label}>
                  <Icon className="w-5 h-5 text-stone-500 dark:text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-stone-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Businesses', path: '/#services' },
                { label: 'About', path: '/#about' },
                { label: 'AM Media', path: '/am-media' },
                { label: 'Portfolio', path: '/portfolio' },
                { label: 'Why Us', path: '/#whyus' },
                { label: 'Contact', path: '/#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-stone-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-stone-900 dark:text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                <a href="https://wa.me/971524090337" target="_blank" rel="noopener noreferrer" className="text-stone-600 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors">+971 52 409 0337</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-500 dark:text-rose-400" />
                <a href="tel:+971524090337" className="text-stone-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">+971 52 409 0337</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                <a href="mailto:ammediadubai@gmail.com" className="text-stone-600 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors">ammediadubai@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-stone-200 dark:border-indigo-500/10 text-center">
          <p className="text-stone-500 dark:text-slate-500 text-sm sm:text-base">© {currentYear} AM Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
