import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Careers from '../components/Careers';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className="w-full bg-white text-[#0d2c4b] py-2.5 text-center mt-[72px] border-b">
        <p className="text-sm md:text-base font-medium whitespace-nowrap">
          NY's Largest & Highest Rated Home Care Agency <span className="ml-1 text-yellow-500">✨</span>
        </p>
      </div>
      <main>
        <HeroSection />
        <About />
        <Services />
        <Stats />
        <Testimonials />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
