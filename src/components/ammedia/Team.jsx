import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail } from 'lucide-react'
import { teamMembers } from '../../data/team'

const Team = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0, margin: '0px 0px 80px 0px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="team"
      ref={ref}
      className="section-padding bg-stone-50 dark:bg-[#0A0807] relative overflow-x-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-40 top-1/4 w-[350px] h-[350px] bg-gradient-to-br from-indigo-500/8 to-transparent rounded-full blur-3xl dark:from-indigo-500/8" />
        <div className="absolute -right-32 bottom-1/4 w-[280px] h-[280px] bg-gradient-to-bl from-rose-500/6 to-transparent rounded-full blur-3xl dark:from-rose-500/6" />
      </div>

      <div className="container-custom relative z-10 w-full max-w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-display font-bold mb-3 leading-tight
            bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">
            Meet the brains
          </h2>
          <p className="text-base sm:text-lg text-stone-700 dark:text-slate-300 sm:text-stone-600 sm:dark:text-slate-400">
            These people work on making our product best.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch w-full min-w-0 overflow-visible"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const TeamCard = ({ member, variants }) => {
  const isOwner = member.role.includes('Owner') || member.role.includes('Co-Founder')
  const hasPurpleAccent = member.name

  if (isOwner) {
    return (
      <motion.div variants={variants} className="relative group h-full min-w-0 w-full">
        <div className="relative h-full min-h-0 w-full p-4 sm:p-6 md:p-8 rounded-2xl
          bg-white/80 dark:bg-[#0A0807]/80 border border-stone-200 dark:border-indigo-400/20
          shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-500 via-rose-500 to-indigo-500" />
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8 pl-4 flex-1 min-w-0">
            <div className="flex-shrink-0">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden flex-shrink-0
                ring-2 ring-indigo-500/40 dark:ring-indigo-400/30 shadow-xl group-hover:ring-indigo-500/60 transition-all duration-300">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center">
                    <span className="font-display font-bold text-white text-3xl md:text-4xl">{member.initial}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 min-w-0 pt-2 flex flex-col">
              <div className="mb-3">
                <h3 className="font-display font-bold text-stone-900 dark:text-white text-xl sm:text-2xl md:text-3xl mb-1.5">{member.name}</h3>
                <span className="inline-block px-3 py-1 rounded-md bg-gradient-to-r from-indigo-500/10 to-rose-500/10 dark:from-indigo-500/20 dark:to-rose-500/20 border border-indigo-400/30 dark:border-indigo-400/40 text-indigo-700 dark:text-indigo-300 text-sm font-semibold">
                  {member.role}
                </span>
              </div>
              <p className="text-stone-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-5 flex-grow break-words">{member.bio}</p>
              <div className="flex items-center gap-3 mt-auto">
                <a href={member.social.email} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-indigo-500 hover:bg-indigo-600 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110" aria-label={`${member.name} email`}>
                  <Mail className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div variants={variants} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-0 rounded-xl sm:rounded-none bg-white/60 dark:bg-white/5 sm:bg-transparent dark:sm:bg-transparent border border-stone-200/60 dark:border-indigo-400/10 sm:border-0 min-w-0 w-full">
      <div className="flex-shrink-0 mx-auto sm:mx-0">
        <div className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ${hasPurpleAccent ? 'ring-4 ring-indigo-500/60 dark:ring-indigo-400/50' : ''}`}>
          {member.image ? (
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center">
              <span className="font-display font-bold text-white text-2xl">{member.initial}</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-display font-bold text-stone-900 dark:text-white text-xl mb-1">{member.name}</h3>
        <p className="text-stone-600 dark:text-slate-400 text-sm mb-3">{member.role}</p>
        <div className="w-12 h-px bg-stone-300 dark:bg-gray-600 mb-4" />
        <p className="text-stone-600 dark:text-slate-400 text-sm leading-relaxed mb-4 break-words">{member.bio}</p>
        <div className="flex items-center gap-2">
          <a href={member.social.email} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${hasPurpleAccent ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-stone-200 hover:bg-stone-300 dark:bg-gray-800 dark:hover:bg-gray-700'}`} aria-label={`${member.name} email`}>
            <Mail className={`w-4 h-4 ${hasPurpleAccent ? 'text-white' : 'text-stone-700 dark:text-white'}`} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Team
