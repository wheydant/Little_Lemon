import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../Constants/icons_assets/restauranfood.jpg'

function Hero() {
  return (
    <header>
      <section>
        <div className='banner'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterraneran restaurent, focused on traditional recipies served with a modern twist.</p>
          <div className='banner-img'>
            <img src={bannerImg} alt='Banner' />
          </div>
          <Link to="/booking"><button aria-label='on Click'>Reserve Table</button></Link>
        </div>
      </section>
    </header>
  );
}

export default Hero