import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Signup from './components/Signup';
import Signin from './components/Signin';


function App() {
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;

