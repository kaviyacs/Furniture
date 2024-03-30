// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeFromCart } from './action/cartAction'; 
// import { Link } from 'react-router-dom';

// function Cart() {
//   const dispatch = useDispatch();
//   const cart = useSelector(state => state.cart);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [isCheckout, setIsCheckout] = useState(false);

//   const calculateProductTotal = (item) => {
//     return item.price * item.quantity;
//   }

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//   }

//   const handleRemoveFromCart = (productId, productName) => {
//     if (window.confirm(`Are you sure you want to remove ${productName} from your cart?`)) {
//       dispatch(removeFromCart(productId));
//       const message = `${productName} has been removed from your cart.`;
//       setSuccessMessage(message);
//       setTimeout(() => {
//         setSuccessMessage('');
//       }, 10);
//     }
//   }

//   return (
//     <div className='container text-center align-items-center'>
//       <div className='cart mt-5 pt-5 ps-5 mb-5 text-center'>
//         <h1>Cart</h1>
//         {successMessage && (
//           <div className="alert alert-success mt-2">{successMessage}</div>
//         )}
//         <ul className="cart-list mb-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           {cart.map(item => (
//             <li key={item.id} className="card cart-item ms-5 mb-5" style={{ width: '40rem' }}>
//               <div className='row d-flex'>
//                 <div className="col cart-item-content">
//                   <img src={item.image} alt={item.name} className="cart-image mt-3 mb-3" />
//                 </div>  
//                 <div className="col cart-details mt-2">
//                   <span className="cart-name">{item.name}</span><br/>
//                   <div className="cart-total">₹{calculateProductTotal(item)}</div>
//                   <button className='remove-btn mt-4 mb-4' onClick={() => handleRemoveFromCart(item.id, item.name)}>Remove from Cart</button>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <h2 style={{ textAlign: 'center' }}>Total Fees: ₹{calculateTotal()}</h2>
        
//         {/* Conditionally render Pay Now and Go Back buttons */}
//         {cart.length > 0 && !isCheckout ? (
//           <>
//             <button onClick={() => setIsCheckout(true)} className='ps-4 pt-2 pb-2 pe-4 mb-2'>Pay Now</button> <br />
//             <button>  
//               <Link to='/' className='goback-btn link btn '>
//                 Go Back
//               </Link>
//             </button>
//           </>
//         ) : (
//           <button>
//             <Link to='/' className='goback-btn link btn'>
//               Go Back
//             </Link>
//           </button>
//         )}

//         {isCheckout && (
//           <div className="alert alert-success mt-2">Your fees have been successfully paid!</div>
//         )}
//       </div>
//     </div>  
//   );
// }

// export default Cart;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart, removeFromCart, decrementQuantity } from './action/cartAction';
// import './Cart.css'
// import { XCircle } from 'react-bootstrap-icons';
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';  
// import {Table } from 'react-bootstrap';  

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart);
//   console.log(cartItems)
//   const dispatch = useDispatch();

//   const getTotalCost = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const handleIncrement = (item) => {
//     dispatch(addToCart(item));
//   };

//   const handleDecrement = (item) => {
//     if (item.quantity > 1) {
//       dispatch(decrementQuantity(item.id));
//     }
//   };

//   const handleRemove = (itemId) => {
//     dispatch(removeFromCart(itemId));
//   };

//   return (
//     <div className='table'>   
//     <h2>Your Cart</h2>
//   <Table  bordered center>    
//          <thead>
//           <tr>                    
//             <th>Image</th>
//             <th>Product</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>SubTotal</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map((item) => (
//             <tr key={item.id}>
//               <td>
//                 <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px' }} />
//               </td>
//               <td>{item.name}</td>
//               <td>${item.price}.00</td>
//               <td>
               
//                   <tr>
//                 <button className='buttoninc' onClick={() => handleDecrement(item)}>-</button>
//                 <button className='buttoninc2' > {item.quantity}</button>
               
//                 <button className='buttoninc' onClick={() => handleIncrement(item)}>+</button>
          
//                 </tr>
               
//               </td>
//               <td>${item.price * item.quantity}.00</td>
//               <td>
//                 <button  className="but" onClick={() => handleRemove(item.id)}><XCircle  className='XCircles'/>
//                  </button>
                 
//               </td>
//             </tr>
            
//           ))}
//  
//         </tbody>
//       </Table>

//     </div>
//   );
// };

// export default Cart;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decrementQuantity } from './action/cartAction';
import './Cart.css'
import { XCircle } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Button } from 'react-bootstrap';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)
  const dispatch = useDispatch();

  const getTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item.id));
    }
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
        
          <table className="table table-bordered">
          <thead>
           <tr>                    
             <th>Image</th>
             <th>Product</th>
             <th>Price</th>
             <th>Quantity</th>
             <th>SubTotal</th>
           </tr>
         </thead>
         <tbody>
           {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px' }} />
              </td>
              <td className='price' >{item.name}</td>
              <td className='price'>${item.price}.00</td>
              <td>
               
                  <tr>
                <button className='buttoninc' onClick={() => handleDecrement(item)}>-</button>
                <button className='buttoninc2' > {item.quantity}</button>
               
                <button className='buttoninc' onClick={() => handleIncrement(item)}>+</button>
          
                </tr>
               
              </td>
              <td className='subtot'>${item.price * item.quantity}.00
              
                <button  className="but" onClick={() => handleRemove(item.id)}><XCircle  className='XCircles'/>
                 </button>
                 
              </td>
            </tr>
            
          ))}
 
        </tbody>
          </table>
        </div>
        <div className="col-md-4">
       
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Card Totals</th>

              </tr>
      

 <tr><td>
<h3>SubTotal: ${getTotalCost()}.00</h3> 
</td></tr>
 <tr><td>
 <h3>Total: ${getTotalCost()}.00</h3> 
 </td></tr> <tr><td>
 <h4>Have a coupon?</h4> </td></tr>
 <tr><td>
 <Button className='Buttoncheck'>CHECKOUT</Button>
 </td></tr>
            </thead>
 
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
