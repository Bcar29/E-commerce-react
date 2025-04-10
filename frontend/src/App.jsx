import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// import des composants
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Signup from './components/Signup';
import Signin from './components/Signin';
import ProductDetail from './components/productDetail';
import CartContent from './components/CartContent';
import GraphAchatsMois from './components/Test';
import CartValidation from './components/cartValidation';
import PurchaseHistory from './components/PurchaseHistory';


import { OrderProvider } from './context/OrderContext';

const url = `http://127.0.0.1:8000/types/`

function App() {

  const [donnes, setDonnes] = useState([])
  // chargement des donnes du panier
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  }
  );


  // recuperation des types de produits dans la base de données
  useEffect(() => {
    axios.get(url)
      .then(resp => {
        setDonnes(resp.data)
      })
  }, [])

  // Sauvegarder le panier à chaque ajout ou suppression
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  if (donnes.length) {
    
    return (
      <BrowserRouter>
        <Header cart={cart} donnes={donnes}/>

        <ToastContainer />

        <OrderProvider>
          <Routes>
            <Route path="/" element={<Home donnes={donnes} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<CartValidation cart={cart} setCart={setCart} />} />
            <Route path="/graph" element={<GraphAchatsMois />} />
            <Route path="/history" element={<PurchaseHistory />} />
            <Route path="/test" element={<CartContent cart={cart} setCart={setCart} />} />
            <Route path="/product/:id" element={<ProductDetail donnes={donnes} setCart={setCart} />} />
          </Routes>
        </OrderProvider>
        <Footer />

      </BrowserRouter>
    );
  }
}

export default App;

