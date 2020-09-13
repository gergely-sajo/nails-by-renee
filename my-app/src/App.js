import React from 'react';

import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import MyWork from './components/MyWork'
import Testimonials from './components/Testimonials'
import Prices from './components/Prices'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

import useSticky from './hooks/useSticky';

import './styles/App.css';

function App() {
  const { isSticky, element } = useSticky()

  return (
    <div>
      <Header sticky={isSticky}/>
      <Hero element={element}/>
      <Services />
      <MyWork />
      <Testimonials />
      <Prices />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
