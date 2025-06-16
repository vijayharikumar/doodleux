import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Clients() {
  const [sectionKey, setSectionKey] = useState(0)

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#clients') {
        setSectionKey(prev => prev + 1)
      }
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const logos = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    src: `/images/clients/c${(i % 24) + 1}.png`,
    alt: `Client ${i + 1}`,
  }))

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8, rotate: -5 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 20,
        delay: i * 0.01,
      },
    }),
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="clients" className="bg-white py-20 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-14">
        TRUSTED BY 50+ GLOBAL CLIENTS
      </h2>

      <motion.div
        key={sectionKey}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 px-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }} 
      >
        {logos.map((logo, i) => (
          <motion.div
            key={logo.id}
            custom={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.12,
              rotate: 0,
              y: -8,
              background: 'linear-gradient(135deg, #D9F99D, #BBF7D0)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
            }}
            transition={{
              duration: 0.15,
              ease: 'easeOut',
            }}
            className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all flex items-center justify-center cursor-pointer"
          >
            <motion.img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto object-contain"
              whileHover={{ scale: 1.08 }}
              transition={{
                duration: 0.15,
                ease: 'easeOut',
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
