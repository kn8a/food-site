import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react"

const CartDrawer = ({ isOpen, onClose, cart, removeFromCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your Cart</DrawerHeader>

        <DrawerBody>
          {cart.length === 0 ? (
            <Text>Your cart is empty</Text>
          ) : (
            <VStack spacing={4} align="stretch">
              {cart.map((item) => (
                <HStack key={item.id} justify="space-between">
                  <Image src={item.image} boxSize="50px" objectFit="cover" />
                  <Text>{item.name}</Text>
                  <Text>${item.price.toFixed(2)}</Text>
                  <Button onClick={() => removeFromCart(item.id)} size="sm">
                    Remove
                  </Button>
                </HStack>
              ))}
            </VStack>
          )}
        </DrawerBody>

        <DrawerFooter>
          <VStack width="100%" align="stretch">
            <HStack justify="space-between">
              <Text fontWeight="bold">Total:</Text>
              <Text fontWeight="bold">${totalPrice.toFixed(2)}</Text>
            </HStack>
            <Button colorScheme="green" width="100%">
              Checkout
            </Button>
          </VStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default CartDrawer