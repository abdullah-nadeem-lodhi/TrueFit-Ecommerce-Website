import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory.jsx'
import LoginSignup from './Pages/LoginSignup.jsx'
import Shop from './Pages/Shop.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/mens" element={<ShopCategory category="mens" />} />
      <Route path="/womens" element={<ShopCategory category="womens" />} />
      <Route path="/kids" element={<ShopCategory category="kids" />} />
      <Route path="/product" element={<Product />}>
        <Route path=":productId" element={<Product />} />
      </Route>
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={<LoginSignup />} />
    </Routes>
    <Footer />
    
    </BrowserRouter>
    </>
  )
}

export default App
