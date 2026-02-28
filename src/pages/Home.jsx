import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';
import Offer from '../components/Offer';
import AppointmentForm from '../components/AppointmentForm';
import StickyButton from '../components/StickyButton';

function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Services />
      <BeforeAfter />
      <Testimonials />
      <Offer />
      <AppointmentForm />
      <StickyButton />
    </>
  );
}

export default Home;