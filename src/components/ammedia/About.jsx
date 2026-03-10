import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, CheckCircle2, TrendingUp, Zap } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const highlights = [
    {
      icon: Play,
      title: 'Video Production',
      description: 'Cinematic storytelling that captivates audiences',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: CheckCircle2,
      title: 'Brand Identity',
      description: 'Complete visual identity packages',
      color: 'from-secondary to-secondary-dark',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven strategies that convert',
      color: 'from-primary to-secondary',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: '48-hour turnaround available',
      color: 'from-secondary to-primary',
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-stone-100 dark:bg-[#0d0b0a] relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(129,140,248,0.6) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }} />
        <div className="absolute -left-32 top-1/4 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/8 to-transparent dark:from-indigo-500/6 dark:to-transparent rounded-full blur-3xl" />
        <div className="absolute -right-24 bottom-1/3 w-[320px] h-[320px] bg-gradient-to-bl from-rose-500/6 to-transparent dark:from-rose-500/5 dark:to-transparent rounded-full blur-3xl" />
        <div className="absolute right-[8%] top-[15%] w-24 h-24 text-indigo-400/6 dark:text-indigo-400/4">
          <Play className="w-full h-full" strokeWidth={1.5} />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&h=1000&fit=crop"
                    alt="Creative professionals at ALLAYAL Media"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        'linear-gradient(135deg, rgba(129,140,248,0.25) 0%, transparent 50%, rgba(251,113,133,0.2) 100%)',
                        'linear-gradient(225deg, rgba(251,113,133,0.2) 0%, transparent 50%, rgba(129,140,248,0.25) 100%)',
                        'linear-gradient(135deg, rgba(129,140,248,0.25) 0%, transparent 50%, rgba(251,113,133,0.2) 100%)',
                      ],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-400 to-rose-400 opacity-20 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-400 to-indigo-400 opacity-20 blur-3xl" />
              </div>

              <motion.div
                className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-white/95 dark:bg-[#0A0807]/95 backdrop-blur-xl
            border border-stone-200 dark:border-indigo-400/30 rounded-2xl p-4 sm:p-6 shadow-2xl max-w-[240px] sm:max-w-[280px]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(129,140,248,0.6)' }}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-rose-400 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-2xl sm:text-3xl font-display font-bold bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">
                      500+
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400">
                      Projects Delivered
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-indigo-500 dark:text-indigo-400 text-sm font-semibold uppercase tracking-wider">
              About AM Media
            </span>

            <motion.h2 className="text-[2rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              <span className="text-stone-900 dark:text-white">We Turn</span><br />
              <span className="bg-gradient-to-r from-indigo-500 to-rose-500 dark:from-indigo-400 dark:to-rose-400 bg-clip-text text-transparent">
                Ideas Into
              </span><br />
              <span className="text-stone-900 dark:text-white">Visual Stories</span>
            </motion.h2>

            <div className="space-y-4 text-base sm:text-lg text-stone-700 dark:text-slate-300">
              <p>
                <span className="text-stone-900 dark:text-white font-semibold">
                  AM Media
                </span>{" "}
                is a creative powerhouse based in the UAE, serving clients across the GCC and India.
              </p>
              <p>
                We blend artistic excellence with strategy to deliver visuals that don't just
                look good — they convert.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="group p-4 sm:p-5 bg-white/80 dark:bg-gradient-to-br dark:from-[#0A0807] dark:to-[#0A0807]/80
                border border-stone-200 dark:border-indigo-400/10 rounded-xl hover:border-indigo-400/30
                transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105"
                  >
                    <div className="inline-flex w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-400 to-rose-400 mb-3">
                      <Icon className="m-auto w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-stone-900 dark:text-white font-semibold mb-1 text-base sm:text-base">
                      {highlight.title}
                    </h3>
                    <p className="text-base sm:text-sm text-stone-700 dark:text-slate-300 sm:text-stone-600 sm:dark:text-slate-400">
                      {highlight.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            <motion.button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="mt-6 px-8 py-4 rounded-xl font-semibold text-white
          bg-gradient-to-r from-indigo-500 to-rose-500
          shadow-[0_0_30px_rgba(129,140,248,0.35)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
