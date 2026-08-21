import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import WhyHireMe from './components/WhyHireMe';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quart',
      offset: 60,
      delay: 0,
    });
  }, []);

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased overflow-x-hidden">
      <Navbar />
      <main className="w-full min-h-screen pt-20">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Leadership />
        {/* <Certifications /> */}
        <Achievements />
        <WhyHireMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
