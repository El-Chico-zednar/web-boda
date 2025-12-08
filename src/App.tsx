import Hero from './components/Hero';
// import ParallaxSection from './components/ParallaxSection';
import Gift from './components/Gift';
import Timeline from './components/Timeline';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      {/* <ParallaxSection /> */}
      <Timeline />
      <RSVP />
      <Gift />
      <Footer />
    </div>
  );
}

export default App;
