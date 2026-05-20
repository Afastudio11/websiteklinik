import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import KlinikDetail from './components/KlinikDetail';
import AIDetail from './components/AIDetail';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#EFEFEF]">
      <Hero />
      <About />
      <Features />
      <KlinikDetail />
      <AIDetail />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
