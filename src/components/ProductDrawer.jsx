import React, { useState, useEffect } from "react";
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
} from "@chakra-ui/react";

const ProductDrawer = ({ isOpen, onClose, product, addToCart, cartToggle }) => {
    if (!product) return null
  
    const [quantities, setQuantities] = useState({})
    const [total, setTotal] = useState(0)
  
    useEffect(() => {
      const initialQuantities = product.options.reduce((acc, option) => {
        acc[option.size] = 0
        return acc
      }, {})
      setQuantities(initialQuantities)
    }, [product])
  
    useEffect(() => {
      const newTotal = product.options.reduce((sum, option) => {
        return sum + (quantities[option.size] || 0) * option.price * option.productsPerBox
      }, 0)
      setTotal(newTotal)
    }, [quantities, product])
  
    const handleQuantityChange = (size, value) => {
      setQuantities(prev => ({ ...prev, [size]: value }))
    }
  
    const handleAddToCart = () => {
      product.options.forEach(option => {
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
          <DrawerHeader>{product.name}</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align='start'>
              <Image
                src={`/food-site/products/${product.image}.jpg`}
                alt={product.name}
                borderRadius='md'
                w='full'
              />
              <Text>{product.detailedDescription}</Text>
              <Heading as='h4' size='sm'>Ingredients</Heading>
              <Text>{product.ingredients}</Text>
              <Heading as='h4' size='sm'>Shelf Life</Heading>
              <Text>{product.shelfLife}</Text>
              <Heading as='h4' size='sm'>Available Sizes</Heading>
              <Table variant='simple' mb={4} p={0}>
                <Thead p={0} m={0}>
                  <Tr p={0} m={0}>
                    <Th p={0} >Size</Th>
                    <Th p={0} m={0}>Items per Box</Th>
                    <Th p={0} m={0}>Price per Box</Th>
                    <Th p={0} m={0}>Boxes</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {product.options.map((option, index) => (
                    <Tr key={index}>
                      <Td p={0} m={0} py={2}>
                        <Text>{option.size}</Text>
                        <Text fontSize="smaller">${option.price.toFixed(2)} per item</Text>
                      </Td>
                      <Td p={0} m={0}>{option.productsPerBox}</Td>
                      <Td p={0} m={0}>${(option.price * option.productsPerBox).toFixed(2)}</Td>
                      <Td p={0} m={0}>
                        <NumberInput 
                        maxW={20}
                          min={0} 
                          max={99} 
                          value={quantities[option.size] || 0}
                          onChange={(valueString) => handleQuantityChange(option.size, parseInt(valueString))}
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
            <HStack spacing={4} width="100%" justifyContent="space-between">
              <Text fontWeight="bold">Total: ${total.toFixed(2)}</Text>
              <Button colorScheme='green' onClick={handleAddToCart}>
                Add to Order
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }

  export default ProductDrawer;