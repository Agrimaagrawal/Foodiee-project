import React from 'react';
import './../styles/cart.css'; 
import delimg from './../assets/delete.svg';
import ladoo from './../assets/ladoo.jpg'
import Navbar from './../components/Navbar'

const CartPage = () => {
    const items = [
        {
          "name": "Cheeseburger",
          "price": 8.99,
          "quantity": 2,
          "image": "cheeseburger.jpg",
          "vegetarian": false
        },
        {
          "name": "Hyderabadi Biryani with Mirchi Ka Salan",
          "price": 12.99,
          "quantity": 1,
          "image": "margherita_pizza.jpg",
          "vegetarian": true
        },
        {
          "name": "Caesar Salad",
          "price": 6.49,
          "quantity": 3,
          "image": "caesar_salad.jpg",
          "vegetarian": true
        },
        {
          "name": "Sushi Roll Combo",
          "price": 18.99,
          "quantity": 1,
          "image": "sushi_roll_combo.jpg",
          "vegetarian": false
        },
        {
          "name": "Chicken Wings",
          "price": 10.99,
          "quantity": 2,
          "image": "chicken_wings.jpg",
          "vegetarian": false
        },
        {
          "name": "Pasta Carbonara",
          "price": 11.99,
          "quantity": 1,
          "image": "pasta_carbonara.jpg",
          "vegetarian": false
        },
        {
          "name": "Fruit Smoothie",
          "price": 4.99,
          "quantity": 2,
          "image": "fruit_smoothie.jpg",
          "vegetarian": true
        },
        {
          "name": "BBQ Ribs",
          "price": 15.99,
          "quantity": 1,
          "image": "bbq_ribs.jpg",
          "vegetarian": false
        },
        {
          "name": "Chocolate Brownie",
          "price": 3.99,
          "quantity": 4,
          "image": "chocolate_brownie.jpg",
          "vegetarian": true
        },
        {
          "name": "Vegetable Stir Fry",
          "price": 9.49,
          "quantity": 1,
          "image": "vegetable_stir_fry.jpg",
          "vegetarian": true
        }
      ]
      
    const total =1 
     const onItemRemove = () =>{
        console.log("helo world")
     }
     const onQuantityChange  = () => {
        console.log("hello");
     }
     return (<>
     <Navbar />
        <div className="cart-container">
            <h2>Cart</h2>
            <div className="cart-items">
                {items.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img src={ladoo} alt={item.name} />
                        <div className="item-details">
                            <p>{item.name}</p>
                            <span className='orange'>Price:</span><span> ${item.price}</span>
                            <div className="quantity-controls">
                                <button
                                    className="quantity-btn"
                                    onClick={() => onQuantityChange(item, item.quantity - 1)}
                                >
                                    -
                                </button>
                                <span className="quantity">{item.quantity}</span>
                                <button
                                    className="quantity-btn"
                                    onClick={() => onQuantityChange(item, item.quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <img
                                className="trash-icon"
                                src={delimg}
                                alt="Remove"
                                onClick={() => onItemRemove(item)}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-total">
                <p>Total: ${total}</p>
                <button className="checkout-btn">Checkout</button>
            </div>
        </div>
        </>
    );

};

export default CartPage;
