import { useState } from "react"
import { ChakraProvider, Box, useDisclosure } from "@chakra-ui/react"
import { HashRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import GlobalReach from "./pages/GlobalReach"
import theme from "./theme"
import ContactUs from "./pages/ContactUs"
import "./App.css"
import CartDrawer from "./components/CartDrawer"

const App = () => {

  const [cart, setCart] = useState([])
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  const addToCart = (item) => {
    
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        cartItem => cartItem.id === item.id && cartItem.selectedOption.size === item.selectedOption.size
      )
      
      if (existingItemIndex > -1) {
        // Item exists, increase quantity
        const updatedCart = [...prevCart]
        updatedCart[existingItemIndex].quantity += item.quantity
        return updatedCart
      } else {
        // New item, add to cart with quantity 1
        return [...prevCart, { ...item }]
      }
    })
  }

  const removeFromCart = (itemId, size) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === itemId && item.selectedOption.size === size)))
  }

  const updateQuantity = (itemId, size, newQuantity) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === itemId && item.selectedOption.size === size) {
        return { ...item, quantity: newQuantity }
      }
      return item
    }))
  }

  const totalBoxes = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box
          minHeight='100vh'
          display='flex'
          flexDirection='column'
          justifyContent={"center"}
          w={"100vw"}
          alignSelf={"center"}
        >
          <Header cartItemCount={cart.length} cartToggle={onToggle}/>
          <Box flex={1}>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/products' element={<Products addToCart={addToCart}/>} />
              <Route path='/global-reach' element={<GlobalReach />} />
              <Route path='/contact' element={<ContactUs />} />
            </Routes>
          </Box>
          <Footer />
          <CartDrawer
            isOpen={isOpen}
            onClose={onClose}
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
