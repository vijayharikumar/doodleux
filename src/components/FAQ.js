import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const faqs = [
    {
      key: 1,
      question: "WHAT'S THE DIFFERENCE BETWEEN UI AND UX DESIGN?",
      answer:
        "UX (User Experience) design focuses on the overall feel and flow of a product—how easy, efficient, and enjoyable it is to use. UI (User Interface) design deals with the visual elements like layout, colors, typography, and interactive components. Together, they create seamless digital experiences.",
    },
    {
      key: 2,
      question: "HOW LONG DOES A TYPICAL DESIGN PROJECT TAKE?",
      answer:
        "Timelines vary based on the scope and complexity. A basic website design may take 2–4 weeks, while a complete app or web platform might take 6–12 weeks. We provide clear timelines after understanding your requirements.",
    },
    {
      key: 3,
      question: "DO YOU OFFER DEVELOPMENT SERVICES TOO?",
      answer:
        "Yes, we do! We provide end-to-end solutions—from strategy and design to full-stack development. Our team ensures the final product is pixel-perfect, responsive, and optimized for performance.",
    },
    {
      key: 4,
      question: "CAN YOU HELP REDESIGN AN EXISTING WEBSITE OR APP?",
      answer:
        "Absolutely. We specialize in UX audits and redesigns. We’ll analyze what’s working, identify pain points, and refresh the design to improve usability, engagement, and visual appeal.",
    },
    {
      key: 5,
      question: "WILL I BE INVOLVED IN THE DESIGN PROCESS?",
      answer:
        "Definitely! We believe in collaboration. You’ll be involved at every key stage—through strategy discussions, wireframes, feedback loops, and design approvals to ensure we align with your vision.",
    },
    {
      key: 6,
      question: "WHAT TOOLS DO YOU USE FOR DESIGN AND COLLABORATION?",
      answer:
        "We use industry-standard tools like Figma, Adobe XD, Sketch, and Miro. For communication and collaboration, we rely on Slack, Notion, Zoom, and project management platforms like Trello or Asana.",
    },
    {
      key: 7,
      question: "DO YOU OFFER ONGOING DESIGN SUPPORT AFTER THE PROJECT ENDS?",
      answer:
        "Yes! We offer on-demand and retainer-based design support. Whether it’s updates, new pages, or additional design assets, our team is here whenever you need us.",
    },
    {
      key: 8,
      question: "CAN YOU PROVIDE A DESIGN SYSTEM OR STYLE GUIDE?",
      answer:
        "Absolutely! We can create a comprehensive design system or style guide to ensure consistency across your product — covering components, typography, color palette, iconography, and usage guidelines.",
    },
  ]

  const [openIndex, setOpenIndex] = useState(-1)

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.8, 0.25, 1] } },
  }

  return (
    <section id="faq" className="bg-gradient-to-b from-white to-gray-50 py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        HAVE <span className="text-lime-500">QUESTIONS?</span>
      </h2>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(-1)}
            className="bg-gray-100 rounded-xl p-5 cursor-pointer transition-all"
          >
            <div className="flex justify-between items-center">
              <h3
                className={`font-semibold text-lg ${openIndex === index ? 'text-lime-500' : 'text-gray-800'
                  }`}
              >
                {faq.question}
              </h3>
              <motion.span
                initial={false}
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-2xl text-lime-600"
              >
                +
              </motion.span>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  key="answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-gray-700"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
