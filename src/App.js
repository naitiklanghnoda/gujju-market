import React from 'react';
import './App.css'; // Import your CSS file for styling
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Switch
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import OrderNow from './components/OrderNow';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/productlist" element={<ProductList/>} />
            <Route path="/order" element={<OrderNow/>} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
