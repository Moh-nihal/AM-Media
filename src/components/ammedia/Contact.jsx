import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MessageCircle, Phone, Mail, MapPin, AtSign } from 'lucide-react'
import { ToastContainer, toast } from 'react-toastify'
import { sendContactEmail } from '../../services/email'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const formRef = useRef(null)

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await sendContactEmail(formData)
      toast.success('Your message has been sent successfully! We will get back to you soon.', { position: 'top-center' })
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Failed to send message. Please try again.', { position: 'top-center' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in your services.${formData.name ? `\n\nName: ${formData.name}` : ''}${formData.email ? `\nEmail: ${formData.email}` : ''}${formData.phone ? `\nPhone: ${formData.phone}` : ''}${formData.message ? `\nMessage: ${formData.message}` : ''}`
    )
    window.open(`https://wa.me/971524090337?text=${message}`, '_blank')
  }

  return (
    <section id="contact" ref={ref} className="section-padding bg-stone-100 dark:bg-[#0d0b0a] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div key={i} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/10 dark:border-indigo-400/8" style={{ width: 80 + i * 100, height: 80 + i * 100 }} animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.35, 0.15] }} transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeOut', delay: i * 0.3 }} />
        ))}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-400/5 dark:text-indigo-400/4 w-[220px] h-[220px]">
          <AtSign className="w-full h-full" strokeWidth={0.5} />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-display font-bold mb-4 leading-tight bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">Let's Talk</h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-700 dark:text-slate-300 max-w-2xl mx-auto sm:text-stone-600 sm:dark:text-slate-400">Ready to bring your vision to life? Get in touch with us today.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-400 to-rose-400"><MessageCircle className="w-6 h-6 text-white" /></div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold dark:text-white mb-2">WhatsApp</h3>
                  <p className="text-stone-600 dark:text-slate-400 mb-2">+971 52 409 0337</p>
                  <button onClick={handleWhatsApp} disabled={isSubmitting} className="text-indigo-500 hover:text-rose-500 transition-colors disabled:opacity-50">Send Message →</button>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-rose-400 to-indigo-400"><Phone className="w-6 h-6 text-white" /></div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold dark:text-white mb-2">Phone</h3>
                  <p className="text-stone-600 dark:text-slate-400 mb-2">+971 52 409 0337</p>
                  <a href="tel:+971524090337" className="text-rose-500 hover:text-indigo-500 transition-colors">Call Now →</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-400 to-rose-400"><Mail className="w-6 h-6 text-white" /></div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold dark:text-white mb-2">Email</h3>
                  <p className="text-stone-600 dark:text-slate-400 mb-2">info@ajmalmukhtar.com</p>
                  <a href="mailto:info@ajmalmukhtar.com" className="text-indigo-500 hover:text-rose-500 transition-colors">Send Email →</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-rose-400 to-indigo-400"><MapPin className="w-6 h-6 text-white" /></div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold dark:text-white mb-2">Location</h3>
                  <a href="https://share.google/13bPnJSwscuix90np" target="_blank" rel="noopener noreferrer" className="text-rose-500 hover:text-indigo-500 transition-colors inline-flex items-center gap-1">Get Directions →</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'phone'].map((field) => (
                <div key={field}>
                  <label className="block font-semibold mb-2 capitalize dark:text-white">{field}</label>
                  <input required={field !== 'phone'} type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'} name={field} value={formData[field]} onChange={handleChange} className="w-full px-4 py-3 text-base rounded-lg bg-white dark:bg-[#0A0807] border border-stone-200 dark:border-indigo-400/20 focus:border-indigo-500 focus:outline-none" />
                </div>
              ))}
              <div>
                <label className="block font-semibold mb-2 dark:text-white">Message</label>
                <textarea required name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 text-base rounded-lg bg-white dark:bg-[#0A0807] border border-stone-200 dark:border-indigo-400/20 focus:border-rose-500 focus:outline-none resize-none" />
              </div>
              <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-500 to-rose-500 disabled:opacity-50">{isSubmitting ? 'Sending...' : 'Send Message'}</motion.button>
              <p className="text-base sm:text-sm text-center text-stone-600 dark:text-slate-400">Or contact us directly via WhatsApp, Phone, or Email</p>
            </form>
          </motion.div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={4000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" style={{ zIndex: 9999 }} />
    </section>
  )
}

export default Contact
