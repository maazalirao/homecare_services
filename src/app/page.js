import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import SpecializedCare from '../components/SpecializedCare';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Careers from '../components/Careers';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-700 text-white px-4 py-2 rounded-lg z-50 font-medium"
      >
        Skip to main content
      </a>
      
      <Navbar />
      <div className="w-full bg-white text-[#0d2c4b] py-2.5 text-center mt-[72px] border-b">
        <p className="text-sm md:text-base font-medium whitespace-nowrap">
          NY's Top-Rated Home Care Agency <span className="ml-1 text-yellow-500">✨</span>
        </p>
      </div>
      <main id="main-content" className="flex-grow w-full">
        <HeroSection />
        <About />
        <Services />
        <HowItWorks />
        <SpecializedCare />
        <Stats />
        <Testimonials />
        <Careers />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
