import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

  const menuItems = [
    'HOME',
    'CLIENTS',
    'SERVICES',
    'OUR WORK',
    'MEET OUR CLIENT',
    'INSIGHTS',
    'FAQ',
    'CONTACT US',
  ]

  return (
    <section id='home' className="bg-darkbg text-white min-h-screen flex flex-col px-6 text-center relative overflow-hidden scroll-smooth">

      {/* Top Bar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-3 z-20
                   bg-gradient-to-r from-black/70 via-black/50 to-black/70
                   backdrop-blur-lg shadow-lg rounded-b-xl"
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <Menu
            className="w-8 h-8 cursor-pointer transition-transform duration-300"
            onClick={() => setMenuOpen(true)}
          />
        </motion.div>

        <a
          href="#"
          className="text-xl font-bold tracking-wide hover:text-lime-400 transition-colors duration-300"
        >
          doodle.UX
        </a>

        <motion.a
          href="#contactus"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-darkbg text-sm font-semibold rounded-full px-4 py-1.5 hover:bg-gray-200 transition"
        >
          Contact Us
        </motion.a>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'linear' }} 
            className="fixed top-0 left-0 w-64 h-full bg-gradient-to-br from-darkbg via-gray-900 to-darkbg
                       text-white z-30 shadow-2xl border-r border-gray-700"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="flex justify-between items-center p-6 border-b border-gray-700"
            >
              <span className="text-xl font-bold">doodle.UX</span>
              <motion.div whileHover={{ rotate: 90 }}>
                <X
                  className="w-8 h-8 cursor-pointer transition-transform duration-300"
                  onClick={() => setMenuOpen(false)}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-start justify-start space-y-6 text-lg font-semibold mt-12 px-6"
            >
              {menuItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ scale: 1.05, opacity: 0.8 }}
                  className="hover:text-lime-400 transition-colors duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="flex flex-col items-center justify-center flex-grow mt-32 md:mt-40"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight">
          CRAFTING <span className="text-lime-400">BRANDS</span> <br />
          AND DIGITAL <span className="text-lime-400">EXPERIENCE</span>
        </h1>
        <p className="text-sm md:text-lg text-gray-400 mt-4">
          ⚡ UI UX DESIGN AGENCY
        </p>
        <motion.img
          src="/images/HomeImage.png"
          alt="User interface dashboard with branding highlights"
          className="mt-12 w-full max-w-4xl rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
      </motion.div>
    </section>
  )
}

export default Hero
