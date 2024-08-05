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
    setCart(prevCart => [...prevCart, item])
  }

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId))
  }

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
          />
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
