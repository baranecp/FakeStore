import './App.css'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import ShoppingCart from './components/ShoppingCart'

function App() {


  return (
    <ShoppingCartProvider>
      <Navbar />
      <ProductList />
      <ShoppingCart />
    </ShoppingCartProvider>
  )
}

export default App
