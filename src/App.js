import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Section4 from './Section4/Section4';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Product from './pages/Product';
import Room from './pages/Room';
import Aboutus from './pages/About';
import Course from './Course';
import Home from './pages/Home'
import Contact from './pages/Contact';
import Addtocart from './pages/Addtocart';
import CheckOut from './pages/CheckOut';
import CartFunction from './project/CartFunction';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      
      <div className="App">
     
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<Section4/>} />
        <Route path="product" element={< Product/>}/>
        <Route path="Room" element={<Room />}/>
        <Route path="Aboutus" element={<Aboutus />}/>
        <Route path="Contactus" element={<Contact />}/>
        <Route path="Course" element={<Course/>} />
        <Route path="Cart" element={<Addtocart />} />
        <Route path="CheckOut" element={<CheckOut />}/>
        <Route path="/CartFunction" element={<CartFunction />}/>
        <Route exact path="/Login" component={<Login />} />
       </Routes>
    </BrowserRouter>
      </div>
    );
  }
}
export default App;

// const express = require('express');
// const database = require('./database');
// const app = express();

// // Import routes, middleware, etc.

// // Connect to MongoDB
// database.connect();

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });

