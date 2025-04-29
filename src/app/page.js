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
