import Navbar from './components/Navbar';
import TickerTape from './components/TickerTape';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Stack from './components/Stack';
import DSA from './components/DSA';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-black font-sans selection:bg-red-500 selection:text-white">
      <Navbar />
      <TickerTape />
      <Hero />
      <About/>
      <Education/>
      <Stack/>
      <DSA/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  );
};

export default App;