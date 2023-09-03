import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Navigation, Hero, BookingForm, Menu, ConfirmationBooking, Testimonials, About, Footer, Main} from './components';
function App() {
  return (
      <>
        <Navigation/>
        <Main />
        <Menu />
        <Footer />
      </>
  );
}

export default App;
