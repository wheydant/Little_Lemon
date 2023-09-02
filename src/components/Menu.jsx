import React from 'react';
import recipes from '../recipes';

function Menu() {
  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h2>This weeks specials!</h2>
        <button>Order Menu</button>
      </div>

      <div className='cards'>
        {
          recipes.map(recipe => <div key={recipe.id} className='menu-items'>
            <img src={recipe.image} alt='image'/>
            <div className='menu-content'>
              <div className='heading'>
                <h3>{recipe.title}</h3>
                <p>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className='orderBtn'>Order Now</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Menu;