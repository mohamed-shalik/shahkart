import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Login from './login';
import Signup from './signup';
import Home from './home';
import About from './about';
import Support from './support';
import Order from './order';
import OrderSuccess from './sucess';
import Inital from './inital';
import Payment from './payment';
import Map from './map';

function Index() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Inital />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/support' element={<Support />}/>
          <Route path='/order' element={<Order />}/>
          <Route path='/sucess' element={<OrderSuccess />}/>
          <Route path='/inital' element={<Inital />}/>
          <Route path='/payment' element={<Payment />}/>
        </Routes>
    
      </div>
    </Router>
  );
}

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
