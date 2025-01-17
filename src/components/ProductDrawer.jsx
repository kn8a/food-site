/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

/**
 * A drawer that displays a product with its image, description, ingredients, and
 * available sizes. The user can select the quantity of each size and add the
 * product to the cart.
 *
 * @param {boolean} isOpen - Whether the drawer is open or not.
 * @param {function} onClose - A function to call when the drawer is closed.
 * @param {object} product - The product to display in the drawer.
 * @param {function} addToCart - A function to add a product to the cart with
 *   the quantity specified in the `quantity` property of the product.
 * @param {function} cartToggle - A function to toggle the cart drawer open or
 *   closed.
 */

import { useState, useEffect } from "react"
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
  VStack,
  Image,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Button,
  Divider,
} from "@chakra-ui/react"


const ProductDrawer = ({ isOpen, onClose, product, addToCart, cartToggle }) => {
  if (!product) return null

  const [quantities, setQuantities] = useState({})
  const [total, setTotal] = useState(0)


  // Reset the quantities to 0 when the product changes
  useEffect(() => {
    const initialQuantities = product.options.reduce((acc, option) => {
      // For each size, set the quantity to 0
      acc[option.size] = 0
      return acc
    }, {})
    setQuantities(initialQuantities)
  }, [product])

  // Recalculate the total when the quantities change
  useEffect(() => {
    const newTotal = product.options.reduce((sum, option) => {
      // For each size, add the quantity multiplied by the price and
      // products per box to the total
      return (
        sum +
        (quantities[option.size] || 0) * option.price * option.productsPerBox
      )
    }, 0)
    setTotal(newTotal)
  }, [quantities, product])


  const handleQuantityChange = (size, value) => {
    setQuantities((prev) => ({ ...prev, [size]: value }))
  }


  /**
   * Adds the selected quantities of the product to the cart and closes the
   * drawer.
   */
  const handleAddToCart = () => {
    product.options.forEach((option) => {
      const quantity = quantities[option.size]
      if (quantity > 0) {
        addToCart({ ...product, selectedOption: option, quantity })
      }
    })
    onClose()
    cartToggle()
  }

  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='md'>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader color='green.600'>{product.name}</DrawerHeader>
        <DrawerBody>
          <VStack spacing={4} align='start'>
            <Image
              src={`/food-site/products/${product.image}`}
              alt={product.name}
              borderRadius='md'
              w='full'
            />
            <Text>{product.detailedDescription}</Text>
            <Divider></Divider>
            <VStack align={"start"}>
              <Heading as='h4' size='sm' color='green.600'>
                Ingredients:
              </Heading>
              <Text>{product.ingredients}</Text>
            </VStack>
            <Divider></Divider>
            <VStack align={"start"}>
              <Heading as='h4' size='sm' color='green.600'>
                Shelf Life:
              </Heading>
              <Text>{product.shelfLife}</Text>
            </VStack>
            <Divider></Divider>

            <Heading as='h4' size='sm' color='green.600'>
              Available Sizes:
            </Heading>
            <Table variant='simple' mb={4} p={0}>
              <Thead p={0} m={0}>
                <Tr p={0} m={0}>
                  <Th p={0}>Size</Th>
                  <Th p={0} m={0}>
                    Items per Box
                  </Th>
                  <Th p={0} m={0}>
                    Price per Box
                  </Th>
                  <Th p={0} m={0}>
                    Boxes
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {product.options.map((option, index) => (
                  <Tr key={index}>
                    <Td p={0} m={0} py={2}>
                      <Text>{option.size}</Text>
                      <Text fontSize='smaller'>
                        ${option.price.toFixed(2)} per item
                      </Text>
                    </Td>
                    <Td p={0} m={0}>
                      {option.productsPerBox}
                    </Td>
                    <Td p={0} m={0}>
                      ${(option.price * option.productsPerBox).toFixed(2)}
                    </Td>
                    <Td p={0} m={0}>
                      <NumberInput
                        maxW={20}
                        min={0}
                        max={99}
                        value={quantities[option.size] || 0}
                        onChange={(valueString) =>
                          handleQuantityChange(
                            option.size,
                            parseInt(valueString)
                          )
                        }
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </VStack>
        </DrawerBody>
        <DrawerFooter>
          <HStack spacing={4} width='100%' justifyContent='space-between'>
            <Text fontWeight='bold' color={"green.600"}>
              Total: ${total.toFixed(2)}
            </Text>
            <Button colorScheme='green' onClick={handleAddToCart}>
              Add to Order
            </Button>
          </HStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default ProductDrawer
