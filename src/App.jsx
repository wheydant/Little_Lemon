import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Navigation, Hero, BookingForm, Hightlight, ConfirmationBooking, Testimonials, About, Footer, Main} from './components';
function App() {
  return (
      <>
        <Navigation/>
        <Main />
        <Testimonials />
        <About />
        <Footer />
      </>
  );
}

export default App;
