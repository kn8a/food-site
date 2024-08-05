import { useState } from "react"
import { ChakraProvider, Box } from "@chakra-ui/react"
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

const App = () => {

  const [cart, setCart] = useState([])

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
          <Header cartItemCount={cart.length}/>
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
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
