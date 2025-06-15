import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import FeaturedWork from "./components/FeaturedWork";
import Testimonials from "./components/Testimonials";
import Insights from "./components/Insights";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Hero />
      <Clients />
      <Services />
      <FeaturedWork />
      <Testimonials />
      <Insights />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
