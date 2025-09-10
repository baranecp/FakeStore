import './App.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
import Home from './components/Home'

import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



function App() {


  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  )
}

export default App
