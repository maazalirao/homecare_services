import Navbar from '../../components/Navbar';
import Apply from '../../components/Apply';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Apply for Care | Special Touch Home Care',
  description: 'Apply for compassionate home care services. Our team of professionals is ready to provide the support you need.',
};

export default function ApplyPage() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <div className="pt-24 pb-8 bg-primary-50">
          <div className="container-custom">
            <h1 className="heading-1 text-center text-primary-900">Apply for Care</h1>
            <p className="text-center text-lg text-primary-700 mt-4 max-w-3xl mx-auto">
              Take the first step toward receiving quality home care services. Fill out the form below and we'll contact you within one business day.
            </p>
          </div>
        </div>
        <Apply />
      </main>
      <Footer />
    </div>
  );
} 