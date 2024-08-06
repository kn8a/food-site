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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

const CartDrawer = ({ isOpen, onClose, cart, removeFromCart, updateQuantity }) => {
  const totalPrice = cart.reduce((sum, item) =>
    sum + (item.selectedOption.price * item.selectedOption.productsPerBox * item.quantity), 0
  )

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
                <HStack key={`${item.id}-${item.selectedOption.size}`} justify="space-between">
                  <Image src={`/food-site/products/${item.image}.jpg`} boxSize="50px" objectFit="cover" />
                  <VStack align="start">
                    <Text fontWeight="bold">{item.name}</Text>
                    <Text fontSize="sm">{item.selectedOption.size} - {item.selectedOption.productsPerBox} per box</Text>
                  </VStack>
                  <Text>${(item.selectedOption.price * item.selectedOption.productsPerBox * item.quantity).toFixed(2)}</Text>
                  <NumberInput
                    value={item.quantity}
                    onChange={(valueString) => updateQuantity(item.id, item.selectedOption.size, parseInt(valueString))}
                    min={1}
                    max={99}
                    width="70px"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Button onClick={() => removeFromCart(item.id, item.selectedOption.size)} size="sm" colorScheme='red'>
                    X
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