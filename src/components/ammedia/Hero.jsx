import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, ArrowDown, Camera, Video, Music2, Image as ImageIcon, Share2, Hash } from 'lucide-react'

const storyRings = [
  { id: 's1', size: 200, x: 3, y: 12, round: 'full', d: 9, delay: 0 },
  { id: 's2', size: 150, x: 88, y: 18, round: 'full', d: 11, delay: 1.5 },
  { id: 's3', size: 130, x: 12, y: 68, round: '2xl', d: 10, delay: 0.5 },
  { id: 's4', size: 170, x: 85, y: 62, round: 'full', d: 8, delay: 2 },
  { id: 's5', size: 110, x: 48, y: 4, round: 'full', d: 12, delay: 0.8 },
  { id: 's6', size: 95, x: 72, y: 82, round: '2xl', d: 7, delay: 1 },
]

const socialIcons = [
  { id: 'cam', Icon: Camera, x: 12, y: 22, size: 88, d: 14, delay: 0 },
  { id: 'vid', Icon: Video, x: 82, y: 28, size: 76, d: 13, delay: 2 },
  { id: 'mus', Icon: Music2, x: 6, y: 58, size: 92, d: 15, delay: 1 },
  { id: 'img', Icon: ImageIcon, x: 90, y: 72, size: 80, d: 12, delay: 0.6 },
  { id: 'sh', Icon: Share2, x: 52, y: 88, size: 70, d: 11, delay: 1.2 },
]

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 bg-gradient-to-br from-stone-100 via-stone-50 to-indigo-50/50 dark:from-[#0A0807] dark:via-[#0d0b0a] dark:to-[#141211]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-500/10 dark:text-indigo-400/5"
          style={{ width: 280, height: 280 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Hash className="w-full h-full" strokeWidth={0.5} />
        </motion.div>

        {storyRings.map((r) => (
          <motion.div
            key={r.id}
            className={`absolute ${r.round === '2xl' ? 'rounded-2xl' : 'rounded-full'}`}
            style={{
              width: r.size,
              height: r.size,
              left: `${r.x}%`,
              top: `${r.y}%`,
              background: 'radial-gradient(circle at 50% 50%, transparent 65%, rgba(129,140,248,0.14) 78%, rgba(251,113,133,0.1) 92%, transparent 100%)',
              boxShadow: '0 0 0 1px rgba(129,140,248,0.12), 0 0 40px rgba(129,140,248,0.08)',
            }}
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.7, 1, 0.7],
              rotate: r.round === '2xl' ? [0, 3, 0] : 0,
            }}
            transition={{
              duration: r.d,
              delay: r.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {socialIcons.map(({ id, Icon, x, y, size, d, delay }) => (
          <motion.div
            key={id}
            className="absolute text-indigo-500/10 dark:text-indigo-400/8"
            style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
            animate={{
              y: [0, 12, 0],
              x: [0, -8, 0],
              opacity: [0.06, 0.11, 0.06],
            }}
            transition={{
              duration: d,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon className="w-full h-full" strokeWidth={1} />
          </motion.div>
        ))}

        <motion.div
          className="absolute rounded-2xl bg-gradient-to-br from-indigo-500/6 to-rose-500/4 dark:from-indigo-500/5 dark:to-rose-500/3 border border-indigo-400/10 dark:border-indigo-400/8"
          style={{ width: 140, height: 180, left: '4%', top: '35%' }}
          animate={{ opacity: [0.5, 0.9, 0.5], y: [0, 6, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-2xl bg-gradient-to-br from-rose-500/5 to-indigo-500/5 dark:from-rose-500/4 dark:to-indigo-500/4 border border-rose-400/10 dark:border-rose-400/8"
          style={{ width: 120, height: 160, right: '6%', top: '42%' }}
          animate={{ opacity: [0.5, 0.85, 0.5], y: [0, -8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(129,140,248,0.08),transparent_55%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(129,140,248,0.06),transparent_55%)]" />

      <motion.div
        className="container-custom relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-[2.25rem] leading-tight sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-5 sm:mb-6"
          variants={itemVariants}
        >
          <span className="block text-stone-900 dark:text-white">We turn</span>
          <span className="block bg-gradient-to-r from-indigo-500 to-rose-500 dark:from-indigo-400 dark:to-rose-400 bg-clip-text text-transparent">
            ideas into visuals
          </span>
          <span className="block text-stone-900 dark:text-white">that sell.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-lg md:text-2xl text-stone-700 dark:text-slate-200 mb-8 sm:mb-12 max-w-3xl mx-auto px-1 font-medium sm:font-normal"
          variants={itemVariants}
        >
          Creative agency specializing in video production, graphic design, and digital marketing
          for businesses across GCC and India.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-2"
          variants={itemVariants}
        >
          <motion.a
            href="https://wa.me/971545994816"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex px-6 py-3.5 sm:px-7 sm:py-3.5 bg-gradient-to-r from-indigo-500 to-rose-500 text-white text-base font-semibold rounded-full shadow-[0_4px_20px_rgba(129,140,248,0.35)] hover:shadow-[0_6px_28px_rgba(129,140,248,0.45)] transition-shadow duration-300 touch-manipulation"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="flex items-center gap-2.5">
              <MessageCircle size={18} strokeWidth={2.5} />
              WhatsApp Us
            </span>
          </motion.a>

          <motion.a
            href="tel:+971545994816"
            className="inline-flex px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full text-base font-semibold bg-white/80 dark:bg-white/5 backdrop-blur-sm border-2 border-indigo-400/60 dark:border-indigo-400/50 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-500/15 dark:hover:bg-indigo-400/15 hover:border-indigo-400 transition-all duration-300 touch-manipulation"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="flex items-center gap-2.5">
              <Phone size={18} strokeWidth={2.5} />
              Call Us
            </span>
          </motion.a>

          <motion.a
            href="mailto:info@allayal.com"
            className="inline-flex px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full text-base font-semibold bg-white/80 dark:bg-white/5 backdrop-blur-sm border-2 border-rose-400/60 dark:border-rose-400/50 text-rose-600 dark:text-rose-300 hover:bg-rose-500/15 dark:hover:bg-rose-400/15 hover:border-rose-400 transition-all duration-300 touch-manipulation"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="flex items-center gap-2.5">
              <Mail size={18} strokeWidth={2.5} />
              Email Us
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-indigo-500 dark:text-indigo-400 w-8 h-8 drop-shadow-[0_0_15px_rgba(129,140,248,0.6)]" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
