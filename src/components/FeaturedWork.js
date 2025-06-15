import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye } from 'lucide-react'

export default function FeaturedWork() {
  const [previewImage, setPreviewImage] = useState(null)

  useEffect(() => {
    document.body.style.overflow = previewImage ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [previewImage])

  const cards = [
    {
      title: 'Furni Cart - Furniture App',
      desc: 'Transforming furniture shopping into a seamless and personalized experience through our innovative mobile application.',
      img: '/images/featuredwork/work1.png',
    },
    {
      title: 'Easy Pay - UPI Payment App',
      desc: 'Transformative mobile application, redefining the way we handle payments. Seamlessly integrating with the (UPI), Easy Payment sets out to revolutionize the user experience for conducting transactions.',
      img: '/images/featuredwork/work2.png',
    },
    {
      title: 'Leafy Buy - Plant Reselling App',
      desc: 'Resale Plant platform blooms with the essence of community, connecting plant lovers with kind neighbors and nurturing nurseries.',
      img: '/images/featuredwork/work3.png',
    },
    {
      title: 'BikeMent - Bike Services App',
      desc: 'The Bike Service Booking Mobile App is a platform designed to make the process of booking bike services convenient and user-friendly.',
      img: '/images/featuredwork/work4.png',
    },
    {
      title: 'Edu Connect - E Learning App',
      desc: 'Innovative mobile app transforming e-learning. It offers a user-friendly platform with personalized recommendations, interactive lessons, and progress tracking.',
      img: '/images/featuredwork/work5.png',
    },
    {
      title: 'Turf Tracer - Turf Booking App',
      desc: 'The project is an innovative sports turf booking application designed to simplify the process of reserving sports fields and facilities. Catering to a diverse audience, the application offers a user-friendly platform for athletes, coaches, parents, and event organizers.',
      img: '/images/featuredwork/work6.png',
    },
  ]

  const cardVariants = {
    hidden: (i) => ({
      opacity: 0,
      y: 50,
      scale: 0.95,
      rotate: i % 2 === 0 ? -5 : 5,
    }),
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.8, 0.25, 1],
      },
    }),
  }

  return (
    <section id="ourwork" className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-lime-500">FEATURED</span> WORK
      </h2>
      <div className="flex flex-col gap-12 max-w-screen-lg mx-auto">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.05,
              rotate: 1,
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              background: 'linear-gradient(to bottom right, #ecfccb, #d9f99d, #bef264)',
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
            className="relative bg-white rounded-2xl border border-lime-100 shadow-lg flex items-center gap-6 p-4 md:p-6 transition-all"
          >
            <div
              className="flex-shrink-0 relative group cursor-pointer"
              onClick={() => setPreviewImage(c.img)}
            >
              <img
                src={c.img}
                alt={c.title}
                className="w-56 h-40 md:w-72 md:h-48 object-cover rounded-xl border-2 border-lime-500 shadow-md"
              />
              <div className="absolute inset-0 rounded-xl border-2 border-lime-400 opacity-20"></div>

              {/* Eye icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black bg-opacity-30 rounded-full p-2">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </div>

            </div>

            <div className="flex-1 relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {c.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {c.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full p-4"
            >
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 text-black rounded-full w-8 h-8 flex items-center justify-center text-lg"
                aria-label="Close"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
