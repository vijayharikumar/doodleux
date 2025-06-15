'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!formData.firstName) newErrors.firstName = 'First name is required'
    if (!formData.lastName) newErrors.lastName = 'Last name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required'
    if (!formData.message) newErrors.message = 'Message is required'

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true)
      
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubmitting(false)
      setSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        message: '',
      })
    } else {
      setSuccess(false)
    }
  }

  return (
    <section id='contactus' className="bg-lime-50 rounded-3xl py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-black">
        LET’S TURN YOUR <span className="text-lime-500">IDEA</span> INTO <span className="text-lime-500">REALITY</span>
      </h2>

      {success && (
        <div className="max-w-4xl mx-auto mb-4 text-green-600 font-medium text-center">
          Submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-4 bg-lime-50 p-8 rounded-2xl shadow-xl">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <p className={`text-sm ${errors.firstName ? 'text-red-500' : 'invisible'}`}>
              {errors.firstName || 'placeholder'}
            </p>
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <p className={`text-sm ${errors.lastName ? 'text-red-500' : 'invisible'}`}>
              {errors.lastName || 'placeholder'}
            </p>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <p className={`text-sm ${errors.email ? 'text-red-500' : 'invisible'}`}>
              {errors.email || 'placeholder'}
            </p>
          </div>
          <div>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <p className={`text-sm ${errors.mobile ? 'text-red-500' : 'invisible'}`}>
              {errors.mobile || 'placeholder'}
            </p>
          </div>
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Hello there, I would like to talk about how to..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
            rows={5}
          />
          <p className={`text-sm ${errors.message ? 'text-red-500' : 'invisible'}`}>
            {errors.message || 'placeholder'}
          </p>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full border border-black text-black bg-white px-6 py-4 rounded-full hover:bg-black hover:text-white transition shadow-lg flex items-center justify-center"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </form>
    </section>
  )
}
