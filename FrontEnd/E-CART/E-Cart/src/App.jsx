import React from 'react'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductDetail from './Components/ProductDetail'
import SearchItem from './Components/SearchItem'
import Cart from './Components/Cart'
const App = () => {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Product />}/>
      <Route path="/product/:id" element={<ProductDetail />}/>
      <Route path="/search/:term" element={<SearchItem />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
    </Router>
    </>
    
  )
}

export default App