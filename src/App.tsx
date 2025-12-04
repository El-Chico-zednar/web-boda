import Hero from './components/Hero';
import ParallaxSection from './components/ParallaxSection';
import Timeline from './components/Timeline';
import Details from './components/Details';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <ParallaxSection />
      <Timeline />
      <Details />
      <RSVP />
      <Footer />
    </div>
  );
}

export default App;
