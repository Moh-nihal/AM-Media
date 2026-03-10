import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Users, Award, Globe } from 'lucide-react'

const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    { icon: Clock, number: '48', unit: 'Hours', title: 'Fast Delivery', description: 'Quick turnaround without compromising quality' },
    { icon: Users, number: 'Startup', title: 'Friendly', description: 'Affordable packages tailored for growing businesses' },
    { icon: Award, number: 'Creative', title: 'Experts', description: 'Award-winning team with years of experience' },
    { icon: Globe, number: 'GCC +', title: 'India', description: 'Serving clients across GCC region and India' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section ref={ref} className="section-padding bg-stone-50 dark:bg-[#0A0807] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(129,140,248,0.06),transparent_55%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(129,140,248,0.08),transparent_55%)]" />
        {[120, 180, 240].map((r, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/10 dark:border-indigo-400/8"
            style={{ width: r * 2, height: r * 2 }}
            animate={{ scale: [1, 1.02, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-display font-bold mb-4 leading-tight bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">
            Why AM Media
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-700 dark:text-slate-300 max-w-2xl mx-auto">
            What sets us apart in the creative industry
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-5 sm:p-6 md:p-8 rounded-xl bg-white/90 dark:bg-[#0A0807]/80 border border-stone-200 dark:border-indigo-400/15 hover:border-indigo-400/40 transition-all duration-300"
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="inline-flex p-3 sm:p-4 rounded-full bg-gradient-to-br from-indigo-400 to-rose-400 mb-4 sm:mb-6">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="mb-3 sm:mb-4">
                  <span className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent block">
                    {feature.number}
                  </span>
                  <span className="text-xl sm:text-2xl font-display font-semibold text-stone-900 dark:text-white block mt-1 sm:mt-2">
                    {feature.title}
                  </span>
                </div>
                <p className="text-stone-700 dark:text-slate-300 text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
