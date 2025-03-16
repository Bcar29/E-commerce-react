import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Signup from './components/Signup';
import Signin from './components/Signin';
import ProductDetail from './components/productDetail';

import CartContent from './components/CartContent';
import GraphAchatsMois from './components/test';

const url = `http://127.0.0.1:8000/types/`

function App() {

  const [donnes, setDonnes] = useState([])
  // chargement des donnes du panier
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  }
  );
  



  // recuperation des données de la base de données
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

    // Fonction pour ajouter un produit au panier
    const addToCart = (product) => {
      setCart((prevCart) => {
        // Vérifier si le produit existe déjà dans le panier
        const productExisting = prevCart.find((item) => item.name === product.name);
        console.log(productExisting)
    
        if (productExisting) {
          // Mettre à jour la quantité si le produit existe déjà
          toast.info("Quantité mise à jour 🛒", { position: "top-right", autoClose: 2000 });
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          // Ajouter un nouveau produit s'il n'existe pas encore
          toast.success("Produit ajouté au panier ✅", { position: "top-right", autoClose: 2000 });
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    };



    return (

      <BrowserRouter>

        <Header cart={cart}/>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home donnes={donnes} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/graph" element={<GraphAchatsMois />} />
          <Route path="/test" element={<CartContent cart={cart} setCart={setCart}/>} />
          <Route path="/product/:id" element={<ProductDetail donnes={donnes} addToCart={addToCart}/>} />

        </Routes>
        <Footer />

      </BrowserRouter>
    );
  }

}

export default App;

