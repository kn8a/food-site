/* eslint-disable react/prop-types */
import { useState } from "react"
import {
  Heading,
  Text,
  SimpleGrid,
  Container,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react"
import ProductCard from "../components/ProductCard"
import ProductDrawer from "../components/ProductDrawer"
import products from "../products"

const Products = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)


  const categories = [
    "All",
    ...new Set(products.flatMap((product) => product.categories)),
  ]

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) =>
          product.categories.includes(selectedCategory)
        )

  const handleLearnMore = (product) => {
    setSelectedProduct(product)
    setIsDrawerOpen(true)
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
    setSelectedProduct(null)
  }

  return (
    <Container maxW='1200px' py={[5, 10]}>
      <VStack spacing={[5, 8]}>
        <Heading as='h1' size={["xl", "2xl"]} textAlign='center'>
          Our Products
        </Heading>
        <Text fontSize={["lg", "xl"]} textAlign='center'>
          Discover our wide range of authentic Mediterranean salads and dips
        </Text>
        <HStack spacing={4} wrap='wrap' justify='center'>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              colorScheme='green'
              variant={selectedCategory === category ? "solid" : "outline"}
            >
              {category}
            </Button>
          ))}
        </HStack>
        <SimpleGrid columns={[1, null, 2, 3]} spacing={[5, 8, 10]} w='full'>
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onLearnMore={handleLearnMore}
              addToCart={props.addToCart}
            />
          ))}
        </SimpleGrid>
      </VStack>
      <ProductDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        product={selectedProduct}
        addToCart={props.addToCart}
        cartToggle={props.cartToggle}
      />
    </Container>
  )
}

export default Products
