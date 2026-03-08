import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { X, Play, ImageIcon } from 'lucide-react'
import { portfolioItems, categories } from '../../data/portfolio'

const safeSrc = (src) => (typeof src === 'string' ? encodeURI(src) : src)
const ITEMS_PER_PAGE = 12

function shuffle(array) {
  const out = [...array]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

const ModalEscape = ({ onClose }) => {
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])
  return null
}

const AutoPlayVideo = ({ src }) => {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const inView = useInView(containerRef, { amount: 0.4 })
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    inView ? video.play().catch(() => {}) : video.pause()
  }, [inView])
  return (
    <div ref={containerRef} className="relative w-full aspect-[9/16] bg-stone-900 overflow-hidden">
      <video ref={videoRef} src={safeSrc(src)} muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  )
}

const ImagePreview = ({ src, alt }) => (
  <div className="relative w-full bg-stone-800 overflow-hidden">
    <img src={safeSrc(src)} alt={alt} loading="lazy" className="block w-full transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
  </div>
)

const ModalVideo = ({ src, poster }) => {
  const videoRef = useRef(null)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = 0
    video.muted = true
    video.play().catch(() => {})
  }, [src])
  return <video ref={videoRef} src={safeSrc(src)} poster={safeSrc(poster)} controls loop playsInline className="w-full h-auto max-h-[80vh] rounded-lg" />
}

const Portfolio = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  const shuffledItems = useMemo(() => shuffle(portfolioItems), [])
  const filteredItems = selectedCategory === 'All' ? shuffledItems : shuffledItems.filter((i) => i.category === selectedCategory)

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE)
  }, [selectedCategory])

  const visibleItems = filteredItems.slice(0, visibleCount)
  const hasMore = filteredItems.length > visibleCount

  return (
    <section ref={sectionRef} id="portfolio" className="px-4 sm:px-6 lg:px-16 pt-28 pb-24 bg-stone-100 dark:bg-[#0f0d0c]">
      <div className="max-w-7xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-12">
          <p className="text-sm uppercase tracking-widest text-stone-500">Selected work</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">Visual stories across reels,<br className="hidden sm:block" />posts & motion</h2>
          <nav className="mt-6 flex flex-wrap gap-3">
            {categories.map((cat) => {
              const active = selectedCategory === cat
              return (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-1.5 rounded-full text-sm transition ${active ? 'bg-stone-900 text-white dark:bg-white dark:text-black' : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-300'}`}>
                  {cat}
                </button>
              )
            })}
          </nav>
        </motion.header>

        <motion.div className="columns-2 md:columns-3 lg:columns-4 [column-gap:0.75rem]" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
          <AnimatePresence initial={false}>
            {visibleItems.map((item) => (
              <motion.div key={item.id} layout onClick={() => setSelectedItem(item)} className="break-inside-avoid mb-3 group cursor-pointer rounded-xl overflow-hidden bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow hover:shadow-xl transition">
                <div className="relative">
                  {item.video ? (
                    <>
                      <AutoPlayVideo src={item.video} />
                      <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 rounded-md flex items-center gap-1">
                        <Play className="w-3.5 h-3.5 text-white" fill="currentColor" />
                        <span className="text-[10px] uppercase text-white">Reel</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <ImagePreview src={item.image} alt={item.title} />
                      <div className="absolute bottom-2 left-2 px-2 py-1 bg-white/90 rounded-md flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                        <ImageIcon className="w-3.5 h-3.5 text-stone-600" />
                        <span className="text-[10px] uppercase text-stone-600">Image</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-3 border-t border-stone-100 dark:border-stone-700">
                  <span className="text-[10px] uppercase tracking-wider text-indigo-500">{item.category}</span>
                  <h3 className="mt-1 text-sm font-semibold text-stone-900 dark:text-white line-clamp-2">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <div className="mt-16 flex justify-center">
            <button onClick={() => setVisibleCount((c) => Math.min(filteredItems.length, c + ITEMS_PER_PAGE))} className="px-10 py-3 text-sm uppercase tracking-widest bg-stone-900 text-white dark:bg-white dark:text-black hover:opacity-80">Load more</button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div className="fixed inset-0 z-50 bg-black/95 overflow-y-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ModalEscape onClose={() => setSelectedItem(null)} />
            <button type="button" onClick={() => setSelectedItem(null)} aria-label="Close modal" className="fixed top-20 right-6 z-[999] w-11 h-11 flex items-center justify-center rounded-full bg-white text-black shadow-lg hover:scale-105 transition">
              <X className="w-6 h-6" />
            </button>
            <div className="min-h-screen flex flex-col items-center pt-20 pb-8 px-4">
              <div className="w-full max-w-xl mx-auto">
                {selectedItem.video ? <ModalVideo src={selectedItem.video} poster={selectedItem.image} /> : <img src={safeSrc(selectedItem.image)} alt={selectedItem.title} className="w-full h-auto rounded-lg" />}
              </div>
              <div className="mt-4 w-full max-w-xl mx-auto text-white pb-4">
                <p className="text-xs uppercase tracking-widest text-white/60">{selectedItem.category}</p>
                <h2 className="mt-1 text-xl font-semibold">{selectedItem.title}</h2>
                {selectedItem.description && <p className="mt-2 text-sm text-white/80">{selectedItem.description}</p>}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio
