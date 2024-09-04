/**
 * The main App component.
 *
 * This component renders the main structure of the application including the
 * header, footer, and main content area. It also renders the CartDrawer and
 * manages its state.
 *
 * The App component uses Chakra UI's `ChakraProvider` component to provide
 * theme and color scheme context to the application.
 *
 * The App component renders a `Router` component which handles client-side
 * routing. The `Router` component renders a `Box` component with the main
 * content area. The `Box` component renders a `Routes` component which renders
 * the appropriate page component based on the URL.
 *
 * The App component also renders a `CartDrawer` component which is a modal
 * drawer component that displays the items in the cart and allows the user to
 * update the quantity of items in the cart.
 *
 * The App component manages the state of the cart using the `useState` hook.
 * The `addToCart` function adds an item to the cart, the `removeFromCart`
 * function removes an item from the cart, and the `updateQuantity` function
 * updates the quantity of an item in the cart.
 */

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
import Checkout from "./pages/Checkout"


const App = () => {
  const [cart, setCart] = useState([])
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedOption.size === item.selectedOption.size
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
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === itemId && item.selectedOption.size === size)
      )
    )
  }

  const updateQuantity = (itemId, size, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === itemId && item.selectedOption.size === size) {
          return { ...item, quantity: newQuantity }
        }
        return item
      })
    )
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
          <Header cartItemCount={cart.length} cartToggle={onToggle} />
          <Box flex={1}>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route
                path='/products'
                element={
                  <Products addToCart={addToCart} cartToggle={onToggle} />
                }
              />
              <Route path='/global-reach' element={<GlobalReach />} />
              <Route path='/checkout' element={<Checkout cart={cart} closeDrawer={onClose}/>} />
              <Route path='/contact' element={<ContactUs />} />
            </Routes>
          </Box>
          <Footer />
          <CartDrawer
            onOpen={onOpen}
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
