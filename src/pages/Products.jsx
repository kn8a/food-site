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


/**
 * The Products component renders a list of products with a filter by category
 * and a details drawer for each product.
 *
 * The component takes the following props:
 *
 * - `addToCart`: A function that adds a product to the cart with the quantity
 *   specified in the `quantity` property of the product.
 * - `cartToggle`: A function that toggles the cart drawer open or closed.
 *
 * The component has the following state:
 *
 * - `selectedCategory`: The currently selected category, defaulting to "All".
 * - `selectedProduct`: The product currently shown in the details drawer, or
 *   null if the drawer is closed.
 * - `isDrawerOpen`: Whether the details drawer is currently open.
 *
 * The component renders a heading and a paragraph of text describing the
 * products, a list of categories as buttons which filter the products, and a
 * grid of products with a details drawer for each product.
 */

const Products = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)


  const categories = [
    "All",
    ...new Set(products.flatMap((product) => product.categories)),
  ]

  // Filter the products list based on the currently selected category.
  // If the selected category is "All", then show all products.
  // Otherwise, only show products that have the selected category
  // in their categories array.
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) =>
        product.categories.includes(selectedCategory)
      )


  /**
   * Opens the product drawer and sets the selected product to the one passed
   * in as an argument.
   * @param {Object} product - The product to show in the drawer
   */

  const handleLearnMore = (product) => {
    setSelectedProduct(product)
    setIsDrawerOpen(true)
  }



  /**
   * Closes the product drawer and resets the selected product to null
   */
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
