import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Insights() {
  const allInsights = [
    {
      date: '27, JANUARY, 2025',
      title: 'WHAT ARE YOUR FOCUS AREAS AS A UI UX AGENCY',
      image: '/images/insights/i1.png',
      content: (
        <>
          <h4 className="font-semibold mb-1">Key Focus Areas</h4>
          <p className="mb-2">
            Our agency is dedicated to delivering human-centered design solutions that are intuitive and accessible.
          </p>
          <p className="mb-2">
            We balance user needs and business goals, ensuring every interface we create is functional, elegant, and scalable.
          </p>
          <ul className="list-disc list-inside mb-2 text-gray-700">
            <li>Deep user research and empathy mapping</li>
            <li>Consistent design systems</li>
            <li>Accessibility-first design approach</li>
            <li>Iterative prototyping and testing</li>
          </ul>
          <p>
            By focusing on these areas, we build products that users love and businesses trust.
          </p>
        </>
      ),
    },
    {
      date: '28, JANUARY, 2025',
      title: 'HOW DO YOU MEASURE SUCCESS IN YOUR DESIGNS?',
      image: '/images/insights/i2.png',
      content: (
        <>
          <h4 className="font-semibold mb-1">Measuring Success</h4>
          <p className="mb-2">
            Success in UI/UX design is not just about visual appeal — it’s about how effectively a product solves user problems.
          </p>
          <p className="mb-2">
            We rely on both qualitative and quantitative methods:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>User satisfaction surveys (e.g., NPS, SUS)</li>
            <li>Behavior analytics: heatmaps, funnels, click rates</li>
            <li>Task success rates and error tracking</li>
            <li>Engagement metrics and retention</li>
          </ul>
          <p>
            These insights help us iterate and refine designs for better outcomes.
          </p>
        </>
      ),
    },
    {
      date: '30, JANUARY, 2025',
      title: 'WHAT TOOLS DO YOU USE FOR PROTOTYPING?',
      image: '/images/insights/i3.png',
      content: (
        <>
          <h4 className="font-semibold mb-1">Our Prototyping Toolbox</h4>
          <p className="mb-2">
            We use a combination of tools to match the needs of each project and client:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Figma for collaborative design and prototyping</li>
            <li>Framer for high-fidelity interactive prototypes</li>
            <li>Adobe XD for quick wireframing</li>
            <li>ProtoPie for advanced micro-interactions</li>
          </ul>
          <p>
            Choosing the right tool ensures our prototypes effectively communicate design intent to stakeholders and developers.
          </p>
        </>
      ),
    },
    {
      date: '01, FEBRUARY, 2025',
      title: 'HOW TO BALANCE AESTHETICS AND USABILITY',
      image: '/images/insights/i4.png',
      content: (
        <>
          <h4 className="font-semibold mb-1">Finding the Balance</h4>
          <p className="mb-2">
            We believe that beautiful design should never compromise functionality. Our process ensures:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Usability testing at every stage</li>
            <li>Visual hierarchy to guide users intuitively</li>
            <li>Design consistency through systems and guidelines</li>
          </ul>
          <p>
            This approach helps us deliver interfaces that delight users while helping them achieve their goals.
          </p>
        </>
      ),
    },
    {
      date: '03, FEBRUARY, 2025',
      title: 'TRENDS IN UI DESIGN FOR 2025',
      image: '/images/insights/i5.png',
      content: (
        <>
          <h4 className="font-semibold mb-1">Top UI Trends</h4>
          <p className="mb-2">
            The design landscape is evolving rapidly. In 2025, we expect to see:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Adaptive dark and light modes</li>
            <li>Micro-interactions with sound and haptics</li>
            <li>Glassmorphism and soft UI aesthetics</li>
            <li>AI-powered personalization</li>
          </ul>
          <p>
            Staying ahead of these trends ensures we deliver future-ready designs.
          </p>
        </>
      ),
    },
    {
      date: '05, FEBRUARY, 2025',
      title: 'HOW TO CONDUCT USER TESTING EFFECTIVELY',
      image: '/images/insights/i6.png',
      content: (
        <>
          <h4 className="font-semibold mb-1">Effective User Testing</h4>
          <p className="mb-2">
            Our process combines qualitative and quantitative feedback:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Recruiting representative users</li>
            <li>Using task-based scenarios</li>
            <li>Combining moderated and unmoderated tests</li>
            <li>Analyzing patterns, not just individual comments</li>
          </ul>
          <p>
            This helps us create products that truly resonate with users.
          </p>
        </>
      ),
    },
    {
      date: '07, FEBRUARY, 2025',
      title: 'ACCESSIBILITY TIPS FOR DESIGNERS',
      image: '/images/insights/i7.png',
      content: (
        <>
          <h4 className="font-semibold mb-1">Accessibility First</h4>
          <p className="mb-2">
            We embed accessibility best practices from day one:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Ensure color contrast meets WCAG standards</li>
            <li>Design for keyboard and screen reader navigation</li>
            <li>Provide alt text for images</li>
            <li>Test with real users using assistive tech</li>
          </ul>
        </>
      ),
    },
    {
      date: '10, FEBRUARY, 2025',
      title: 'MICRO-INTERACTIONS THAT DELIGHT USERS',
      image: '/images/insights/i8.png',
      content: (
        <>
          <h4 className="font-semibold mb-1">Power of Micro-interactions</h4>
          <p className="mb-2">
            Thoughtful animations can create a delightful and informative experience:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Loading spinners that reflect progress</li>
            <li>Button tap feedback</li>
            <li>Subtle hover effects</li>
            <li>Animated transitions between states</li>
          </ul>
        </>
      ),
    },
    {
      date: '12, FEBRUARY, 2025',
      title: 'BUILDING DESIGN SYSTEMS THAT SCALE',
      image: '/images/insights/i9.png',
      content: (
        <>
          <h4 className="font-semibold mb-1">Scaling with Design Systems</h4>
          <p className="mb-2">
            A robust design system provides consistency and accelerates delivery:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Reusable components</li>
            <li>Consistent patterns and tokens</li>
            <li>Guidelines for designers and developers</li>
            <li>Versioning and documentation</li>
          </ul>
          <p>
            This ensures scalable, maintainable design at enterprise level.
          </p>
        </>
      ),
    },
  ]


  const [showAll, setShowAll] = useState(false)
  const [selectedInsight, setSelectedInsight] = useState(null)

  const visibleInsights = showAll ? allInsights : allInsights.slice(0, 3)

  return (
    <section id="insights" className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        <span className="text-lime-500">INSIGHTS</span> LOOK INTO IT
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {visibleInsights.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{
              scale: 1.07,
              background:
                'linear-gradient(to bottom right, #ecfccb, #d9f99d, #bef264)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              transition: { duration: 0.1 },
            }}
            className="relative rounded-3xl p-6 shadow-md bg-white cursor-pointer"
          >
            <div className="rounded-2xl overflow-hidden mb-4 shadow-inner">
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <p className="text-xs text-gray-500 mb-2">{insight.date}</p>
            <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-4">
              {insight.title}
            </h3>
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                className="flex items-center gap-1 border border-black text-black px-3 py-1 rounded-full text-sm hover:bg-black hover:text-white transition"
                onClick={() => setSelectedInsight(insight)}
              >
                See More →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.1, y: -2, transition: { duration: 0.1 } }}
            className="bg-black text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-800 transition"
            onClick={() => setShowAll(true)}
          >
            View all Insights
          </motion.button>
        </div>
      )}

      <AnimatePresence>
        {selectedInsight && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-lg w-full relative shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-lg text-gray-600 hover:text-black transition"
                onClick={() => setSelectedInsight(null)}
                aria-label="Close"
              >
                ×
              </button>
              <img
                src={selectedInsight.image}
                alt={selectedInsight.title}
                className="w-full h-56 object-cover rounded-xl mb-4"
              />
              <p className="text-xs text-gray-500 mb-2">{selectedInsight.date}</p>
              <h3 className="text-xl font-bold mb-3">{selectedInsight.title}</h3>
              <div className="text-sm text-gray-700 space-y-2">
                {selectedInsight.content}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
