
import { Instagram, Linkedin, Dribbble } from 'lucide-react'

const menuItems = [
  { label: 'HOME', href: '#home' },
  { label: 'CLIENTS', href: '#clients' },
  { label: 'SERVICES', href: '#services' },
  { label: 'OUR WORK', href: '#ourwork' },
  { label: 'MEET OUR CLIENT', href: '#meetourclient' },
  { label: 'INSIGHTS', href: '#insights' },
  { label: 'FAQ', href: '#faq' },
  { label: 'CONTACT US', href: '#contactus' },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

      
        <div className="flex flex-col justify-between space-y-8">

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 text-sm font-semibold tracking-wider">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-lime-400 transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="text-lime-500 font-extrabold text-3xl mt-4">
            doodle.UX
          </div>

          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-lime-400 transition">Bē</a>
            <a href="#" className="hover:text-lime-400 transition"><Instagram size={18} /></a>
            <a href="#" className="hover:text-lime-400 transition"><Dribbble size={18} /></a>
            <a href="#" className="hover:text-lime-400 transition"><Linkedin size={18} /></a>
          </div>

          <div className="flex flex-wrap space-x-4 text-xs text-gray-500">
            <a  className="hover:text-lime-400 transition">Privacy Policy</a>
            <a  className="hover:text-lime-400 transition">Terms & Conditions</a>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0191229178756!2d-122.41941518468177!3d37.77492977975844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c4f4e0b1d%3A0x37c71bb27f8b2b9!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1616589278631!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        © 2025 DoodleUX UI/UX Design Agency Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  )
}
