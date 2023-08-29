import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Navigation, Hero, Hightlight, Testimonials, About, Footer} from './components';
function App() {
  return (
      <>
        <Navigation/>
        <Hero />
        <Hightlight />
        <Testimonials />
        <About />
        <Footer />
      </>
  );
}

export default App;
