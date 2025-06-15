import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      title: 'UX Problem Solving',
      description:
        'We dive deep into user behavior to identify friction points and create intuitive, user-centered solutions. Our goal is to enhance usability and drive engagement across digital products.',
      image: '/images/services/service1.png',
    },
    {
      title: 'Branding and Identity',
      description:
        'We create memorable brand identities that resonate with your target audience, including logos, color schemes, and visual language that define your brand’s personality.',
      image: '/images/services/service2.png',
    },
    {
      title: 'Website & Web App Design',
      description:
        'We design modern, responsive websites and web apps with a focus on aesthetics and performance. Every interface is tailored to meet business goals and user needs.',
      image: '/images/services/service3.png',
    },
    {
      title: 'Mobile App Design',
      description:
        'We craft intuitive, user-friendly mobile app interfaces, optimizing for both performance and design to ensure a smooth experience across devices.',
      image: '/images/services/service4.png',
    },
    {
      title: 'Development',
      description:
        'From front-end to back-end, we offer comprehensive development services to bring your digital solutions to life with cutting-edge technology.',
      image: '/images/services/service5.png',
    },
    {
      title: 'On-Demand Design Support',
      description:
        'Whether it’s a quick fix or a long-term partnership, our on-demand design support provides you with expert solutions whenever you need them.',
      image: '/images/services/service6.png',
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="services" className="bg-gray-100 py-24 px-6 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-20">
        <span className="text-lime-500">SERVICES</span> WE OFFER
      </h2>

      <motion.div
        className="flex gap-12 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 25,
          ease: 'linear',
        }}
      >
        {[...services, ...services].map((service, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.07,
              background: 'linear-gradient(to bottom right, #ecfccb, #d9f99d, #bef264)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
            }}
            transition={{
              duration: 0.1,
              ease: 'linear',
            }}
            className="bg-white rounded-3xl shadow-md p-8 flex-shrink-0 w-80 flex flex-col items-start text-left cursor-pointer"
          >
            <div className="bg-lime-100 rounded-2xl p-4 shadow-inner mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="h-38 w-38 object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
