/* eslint-disable react/prop-types */
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
  Flex,
  HStack,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"
// import Checkout from "../pages/Checkout"
import { Link as RouterLink } from "react-router-dom"

const CartDrawer = ({
  isOpen,
  onClose,
  cart,
  removeFromCart,
  updateQuantity,
}) => {

  // Calculate the total price of the items in the cart
  // by summing the price of each item multiplied by its
  // quantity and the number of products per box
  const totalPrice = cart.reduce(
    (sum, item) =>
      sum +
      item.selectedOption.price *
        item.selectedOption.productsPerBox *
        item.quantity,
    0
  )

  // Calculate the total weight of the items in the cart
  // by summing the weight of each item multiplied by its
  // quantity and the weight of each box
  const totalWeight = cart.reduce(
    (sum, item) => sum + item.selectedOption.boxWeight * item.quantity,
    0
  )



  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='md' >
      <DrawerOverlay />
      <DrawerContent bg='white'>
        <DrawerCloseButton color='white' size={"lg"} />
        <DrawerHeader bg='green.800' color='white'>
          Your Order
        </DrawerHeader>

        <DrawerBody p={2}>
          {cart.length === 0 ? (
            <VStack justifyContent={"left"}>
              <Text color='gray.600'>There are no products in the order</Text>
              {/* <Button colorScheme='green'>Go to products</Button> */}
            </VStack>
          ) : (
            <VStack spacing={4} align='stretch'>
              {cart.map((item) => (
                <HStack
                  key={`${item.id}-${item.selectedOption.size}`}
                  justify='space-between'
                  py={2}
                  px={0}
                  m={0}
                  borderBottom='1px'
                  borderColor='gray.200'
                >
                  <Image
                    src={`/food-site/products/${item.image}`}
                    boxSize='60px'
                    objectFit='cover'
                    borderRadius='md'
                  />
                  <VStack align='start' flex={1}>
                    <Text fontWeight='bold' color='green.800'>
                      {item.name}
                    </Text>
                    <Text fontSize='sm' color='gray.600'>
                      {item.selectedOption.size} -{" "}
                      {item.selectedOption.productsPerBox} per box
                    </Text>
                  </VStack>
                  <Text fontWeight='bold' color='green.600'>
                    $
                    {(
                      item.selectedOption.price *
                      item.selectedOption.productsPerBox *
                      item.quantity
                    ).toFixed(2)}
                  </Text>
                  <NumberInput
                    value={item.quantity}
                    onChange={(valueString) =>
                      updateQuantity(
                        item.id,
                        item.selectedOption.size,
                        parseInt(valueString)
                      )
                    }
                    min={1}
                    max={99}
                    size='sm'
                    maxW='70px'
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Button
                    onClick={() =>
                      removeFromCart(item.id, item.selectedOption.size)
                    }
                    size='sm'
                    colorScheme='red'
                    variant='outline'
                  >
                    X
                  </Button>
                </HStack>
              ))}
            </VStack>
          )}
        </DrawerBody>

        <DrawerFooter borderTop='1px' borderColor='gray.200'>
          <VStack width='100%' align='stretch' spacing={4}>
            <Flex justifyContent={"center"} gap={4}>
              <Text color='green.800'>Total Weight:</Text>
              <Text color='green.600' fontSize='lg'>
                {(totalWeight / 1000).toFixed(1)} Kg
              </Text>
            </Flex>
            <HStack justify='space-between'>
              <Text fontWeight='bold' color='green.800' fontSize='lg'>
                Order Total:
              </Text>
              <Text fontWeight='bold' color='green.600' fontSize='x-large'>
                ${totalPrice.toFixed(2)}
              </Text>
            </HStack>
            <Button as={RouterLink} to={'/checkout'} colorScheme='green' width='100%' size='lg'>
              Checkout
            </Button>
          </VStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default CartDrawer
