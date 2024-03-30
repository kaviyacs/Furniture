// export const addToCart = (product) => {
//     return {
//       type: 'ADD_TO_CART',
//       payload: product
//     }
//   }
  
//   export const removeFromCart = (productId) => {
//     return {
//       type: 'REMOVE_FROM_CART',
//       payload: productId
//     }
//   }
  
//   export const incrementQuantity = (productId) => {
//     return {
//       type: 'INCREMENT_QUANTITY',
//       payload: productId
//     }
//   }
  
//   export const decrementQuantity = (productId) => {
//     return {
//       type: 'DECREMENT_QUANTITY',
//       payload: productId
//     }
//   }

// import React, { useState } from 'react';
// import { Card, Button } from 'react-bootstrap';

// const CartItem = ({ item }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <Card
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className={isHovered ? 'hovered-card' : ''}
//     >
//       <Card.Body>
//         <Card.Title>{item.name}</Card.Title>
//         <Card.Text>{item.description}</Card.Text>
//         <Button variant="primary">Remove</Button>
//       </Card.Body>
//     </Card>
//   );
// };

// const ShoppingCart = ({ items }) => {
//   return (
//     <div className="cart-container">
//       {items.map((item, index) => (
//         <CartItem key={index} item={item} />
//       ))}
//     </div>
//   );
// };

// export default ShoppingCart;

// import React, { useState } from 'react';
// import { Card, Button } from 'react-bootstrap';

// const ShoppingCart = ({ item }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <Card
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className={isHovered ? 'hovered-card' : ''}
//       style={{ width: isHovered ? '250px' : '200px', transition: 'width 0.3s ease' }}
//     >
//       <Card.Body>
//         <Card.Title>{item.name}</Card.Title>
//         <Card.Text>{item.description}</Card.Text>
//         <Button variant="primary">Remove</Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default ShoppingCart;
// export const addToCart = (product) => {
//   return {
//     type: 'ADD_TO_CART',
//     payload: product
//   }
// }

// export const removeFromCart = (productId) => {
//   return {
//     type: 'REMOVE_FROM_CART',
//     payload: productId
//   }
// }
// // Cart.js
// // ... (previous code)

// const Cart = () => {
//   // ... (previous code)

//   const handleDecrement = (item) => {
//     dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: item.id } });
//   };

//   // ... (remaining code)
// };
// // cartAction.js
// export const decrementQuantity = (itemId) => {
//   return {
//     type: 'DECREMENT_QUANTITY',
//     payload: {
//       id: itemId,
//     },
//   };
// };

// cartAction.js

// Action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

// Action creators
export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId
  };
};

export const decrementQuantity = (itemId) => {
  return {
    type: DECREMENT_QUANTITY,
    payload: itemId
  };
};




