import React from 'react';
import recipes from '../recipes';
import Swal from 'sweetalert2';

function Menu() {
  const handleOrder = (id) => {
    console.log(id, "is clicked");
    Swal.fire({
      title: 'Are you sure about the order?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, order it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Ordered!',
          'Your order has been placed.',
          'success'
        )
      }
    })

  }
  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h2>This weeks specials!</h2>
        <button onClick={() => handleOrder(0)}>Order Menu</button>
      </div>

      <div className='cards'>
        {
          recipes.map(recipe => <div key={recipe.id} className='menu-items'>
            <img src={recipe.image} alt='image'/>
            <div className='menu-content'>
              <div className='heading'>
                <h3>{recipe.title}</h3>
                <p className='menu-price'>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className='orderBtn'onClick={() => handleOrder(recipe.id)}>Order Now</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Menu;