import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    text: `We loved how they approached our project. They conducted thorough research before designing. 
    The final product was clean, intuitive, and stunning. Would highly recommend them for my other clients. 
    Engagement and conversions have improved significantly. Absolutely worth the investment!`,
    name: 'Sophia Williams',
    role: 'Product Designer',
    profileImg: '/images/clients/profile1.png',
    videoImg: '/images/clients/client1.png',
  },
  {
    text: `Their team exceeded expectations. The communication was clear, and the final result truly aligned with our vision. 
    We’ve seen a positive response from our users since the launch.`,
    name: 'Liam Johnson',
    role: 'Marketing Lead',
    profileImg: '/images/clients/profile2.png',
    videoImg: '/images/clients/client2.png',
  },
  {
    text: `Absolutely phenomenal work! The design speaks for itself. We’re grateful for the attention to detail and dedication throughout the process.`,
    name: 'Emily Davis',
    role: 'Founder & CEO',
    profileImg: '/images/clients/profile3.png',
    videoImg: '/images/clients/client3.png',
  },
  {
    text: `From start to finish, it was a seamless experience. The product launch was a success thanks to their expertise.`,
    name: 'Noah Smith',
    role: 'CTO',
    profileImg: '/images/clients/profile4.png',
    videoImg: '/images/clients/client4.png',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1)
    }, 3000) 
    return () => clearInterval(interval)
  }, [current]) 

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      borderColor: '#84cc16',
    }),
    center: {
      x: 0,
      opacity: 1,
      borderColor: '#a3e635',
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      borderColor: '#84cc16',
    }),
  }

  const t = testimonials[current]

  return (
    <section id='meetourclient' className="bg-black bg-grid-small-white/[0.05] py-16 px-6 overflow-hidden">
      <div className="max-w-screen-lg mx-auto relative">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          WHAT OUR <span className="text-lime-400">CLIENTS</span> SAY
        </h2>

        <div className="relative flex items-center justify-center">
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow transition hover:bg-lime-400 active:bg-lime-400"
          >
            <ArrowLeft size={20} className="text-black" />
          </button>

          <div className="relative w-full max-w-4xl h-[400px] md:h-[340px]">
            <AnimatePresence custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: 'easeInOut',
                  borderColor: { duration: 0.6, ease: 'linear' },
                }}
                className="absolute top-0 left-0 w-full h-full bg-gray-50 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-lg border-4"
              >
                <div className="flex-1 text-left">
                  <div className="text-lime-400 text-5xl leading-none mb-4">“</div>
                  <p className="text-gray-700 mb-4">{t.text}</p>
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      src={t.profileImg}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-black">{t.name}</p>
                      <p className="text-gray-500 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 relative">
                  <img
                    src={t.videoImg}
                    alt={`${t.name} testimonial video thumbnail`}
                    className="w-72 h-52 md:w-96 md:h-64 rounded-xl object-cover shadow-md"
                  />
                  <div className="absolute inset-0 flex items-center cursor-pointer justify-center">
                    <div className="bg-black/50 rounded-full p-3 hover:scale-110 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        className="w-8 h-8"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow transition hover:bg-lime-400 active:bg-lime-400"
          >
            <ArrowRight size={20} className="text-black" />
          </button>
        </div>
      </div>
    </section>
  )
}
