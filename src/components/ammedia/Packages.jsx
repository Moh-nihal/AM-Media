import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Video, MessageCircle, AlertTriangle } from 'lucide-react'
import { packages } from '../../data/packages'

const Packages = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleContact = (packageName) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${packageName} package. Can you provide more details?`)
    window.open(`https://wa.me/971524090337?text=${message}`, '_blank')
  }

  return (
    <section
      ref={ref}
      id="packages"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-rose-50/20 dark:from-[#0A0807] dark:via-[#0d0b0a] dark:to-[#0A0807]"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-rose-400/15 dark:bg-stone-900/30 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-[450px] h-[450px] rounded-full bg-stone-400/10 dark:bg-stone-800/20 blur-3xl"
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-rose-300/8 dark:bg-stone-900/25 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {[[15, 20], [85, 75], [50, 10], [20, 80], [80, 25]].map(([x, y], i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-rose-400/35 dark:bg-stone-500/20"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(251,113,133,0.04)_50%,transparent_60%)] dark:bg-[linear-gradient(105deg,transparent_40%,rgba(30,27,25,0.4)_50%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(255deg,transparent_45%,rgba(168,162,158,0.03)_55%,transparent_65%)] dark:bg-[linear-gradient(255deg,transparent_45%,rgba(20,18,17,0.3)_55%,transparent_65%)]" />
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #fb7185 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
        <div className="absolute inset-0 opacity-0 dark:opacity-[0.05]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #a8a29e 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-rose-500/8 to-transparent dark:from-stone-800/30 dark:to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stone-400/5 to-transparent dark:from-stone-800/30 dark:to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-display font-bold mb-3 leading-tight
            bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">
            Our Packages
          </h2>
          <p className="text-stone-700 dark:text-slate-300 text-base sm:text-lg max-w-xl mx-auto sm:text-stone-600 sm:dark:text-slate-400">
            Everything you need to grow your brand
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, pkgIndex) => {
            const Icon = pkg.icon || Video
            return (
              <motion.div
                key={pkg.id}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + pkgIndex * 0.15 }}
              >
                <div className="relative rounded-2xl overflow-hidden h-full
                  bg-white dark:bg-[#0d0b0a]
                  border border-stone-200 dark:border-indigo-400/20
                  shadow-xl dark:shadow-indigo-500/5">
                  <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-gradient-to-b from-indigo-500 via-rose-500 to-indigo-500" />
                  <div className="p-6 sm:p-8 pl-8 sm:pl-10 flex flex-col h-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900 dark:text-white">
                            {pkg.name}
                          </h3>
                          <p className="text-stone-500 dark:text-slate-400 text-sm mt-0.5">
                            {pkg.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-display font-bold bg-gradient-to-r from-indigo-600 to-rose-600 dark:from-indigo-400 dark:to-rose-400 bg-clip-text text-transparent">
                          {pkg.price}
                        </span>
                        {pkg.price !== 'Custom' && (
                          <span className="text-stone-500 dark:text-slate-400 text-sm">/ project</span>
                        )}
                      </div>
                    </div>
                    <div className="grid gap-2.5 mb-6 flex-1">
                      {pkg.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3 py-2 px-3 rounded-lg
                            bg-stone-50 dark:bg-white/5 hover:bg-stone-100 dark:hover:bg-white/10
                            transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.2 + index * 0.05 }}
                        >
                          <Check className="w-5 h-5 text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span className="text-stone-700 dark:text-slate-300 text-sm leading-snug">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    {pkg.warning && (
                      <div className="flex items-center gap-2 mb-6 px-3 py-2.5 rounded-lg bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20">
                        <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        <span className="text-amber-700 dark:text-amber-400 text-sm font-medium">{pkg.warning}</span>
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-4 border-t border-stone-200 dark:border-indigo-400/10">
                      <motion.button
                        onClick={() => handleContact(pkg.name)}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold
                          bg-gradient-to-r from-indigo-500 to-rose-500 text-white
                          hover:from-indigo-600 hover:to-rose-600
                          transition-all duration-300 shadow-lg shadow-indigo-500/25"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Get Started
                      </motion.button>
                      <button
                        onClick={() => handleContact('Custom')}
                        className="text-stone-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium flex items-center gap-2 justify-center"
                      >
                        Need a custom package?
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-8 text-sm text-stone-500 dark:text-slate-500"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <span>500+ projects delivered</span>
          <span>48hr turnaround</span>
          <span>GCC & India</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Packages
