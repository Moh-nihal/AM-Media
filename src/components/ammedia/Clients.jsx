import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { clients } from '../../data/clients'

const Clients = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const duplicatedClients = [...clients, ...clients]

  return (
    <section id="clients" ref={ref} className="section-padding bg-gradient-to-b from-stone-50 via-white to-stone-50 dark:from-[#0A0807] dark:via-[#0d0b0a] dark:to-[#0A0807] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/8 to-transparent dark:from-indigo-500/6 dark:to-transparent rounded-full blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 w-80 h-80 bg-gradient-to-bl from-rose-500/6 to-transparent dark:from-rose-500/5 dark:to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-display font-bold mb-4 leading-tight bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">
            Our Clients
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-700 dark:text-slate-300 max-w-2xl mx-auto">
            Trusted by leading brands across GCC and India
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-stone-50 via-stone-50/80 to-transparent dark:from-[#0A0807] dark:via-[#0A0807]/80 z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-stone-50 via-stone-50/80 to-transparent dark:from-[#0A0807] dark:via-[#0A0807]/80 z-10 pointer-events-none" />

          <motion.div
            className="flex w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' } }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="group flex-shrink-0 flex flex-col items-center justify-center min-w-[140px] sm:min-w-[180px] md:min-w-[250px] px-4 sm:px-6 md:px-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="relative w-48 h-48 sm:w-36 sm:h-36 md:w-52 md:h-52 mb-3 sm:mb-5 flex items-center justify-center p-5 rounded-xl transition-all duration-300">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain opacity-100 md:opacity-50 md:group-hover:opacity-100 grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-display font-medium text-stone-600 dark:text-slate-400 text-sm md:text-base text-center group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {client.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Clients
