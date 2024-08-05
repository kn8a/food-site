/* eslint-disable react/prop-types */
import { useState } from "react"
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  SimpleGrid,
  Container,
  Button,
  VStack,
  HStack,
  Tag,
  Wrap,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react"

const ProductCard = ({ product, onLearnMore }) => (
  <Box borderWidth={1} borderRadius='lg' overflow='hidden' p={4}>
    <VStack spacing={4} align='start'>
      <Image
        src={`/food-site/products/${product.image}.jpg`}
        alt={product.name}
        borderRadius='md'
        w='full'
        cursor={"pointer"}
        onClick={() => onLearnMore(product)}
      />
      <Heading as='h3' size='md'>
        {product.name}
      </Heading>
      <Text>{product.description}</Text>
      <Wrap>
        {product.categories.map((category, index) => (
          <Tag key={index} colorScheme='green'>
            {category}
          </Tag>
        ))}
      </Wrap>
      <Button colorScheme='green' onClick={() => onLearnMore(product)}>
        Learn More
      </Button>
    </VStack>
  </Box>
)

const ProductDrawer = ({ isOpen, onClose, product, addToCart}) => {
  if (!product) return null

  console.log(addToCart)

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
            <Heading as='h4' size='sm'>
              Ingredients
            </Heading>
            <Text>{product.ingredients}</Text>
            <Heading as='h4' size='sm'>
              Available Sizes
            </Heading>
            <Table variant='simple' mb={4}>
              <Thead>
                <Tr>
                  <Th>Size</Th>
                  <Th>Items per Box</Th>

                  <Th>Order Box</Th>
                </Tr>
              </Thead>
              <Tbody>
                {product.options.map((option, index) => (
                  <Tr key={index}>
                    <Td>
                      <VStack>
                        <Text>{option.size}</Text>
                        <Text fontSize={"smaller"}>
                          ${option.price.toFixed(2)}
                        </Text>
                      </VStack>
                    </Td>
                    <Td>
                      <VStack>
                        <Text>{option.productsPerBox}</Text>
                        {/* <Text fontSize={'smaller'}>$ {(option.price * option.productsPerBox).toFixed(2)}</Text> */}
                      </VStack>
                    </Td>

                    <Td>
                      <Button
                        onClick={(e) => {
                          console.log(e)
                          addToCart({ ...product, selectedOption: option })
                        }}
                        id={product.id}
                        colorScheme='green'
                        minH={"60px"}
                        py={4}
                      >
                        {" "}
                        <VStack>
                          <Text>Add to Cart</Text>
                          <Text fontSize={"small"}>{`$${(
                            option.price * option.productsPerBox
                          ).toFixed(2)}`}</Text>
                        </VStack>
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Heading as='h4' size='sm'>
              Shelf Life
            </Heading>
            <Text>{product.shelfLife}</Text>
          </VStack>
        </DrawerBody>
        <DrawerFooter>
          <Button colorScheme='green' onClick={onClose}>
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const Products = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // console.log(props)

  const products = [
    {
      name: "Classic Hummus",
      id: 1000,
      description:
        "Our smooth and creamy classic hummus, perfect for dipping or spreading.",
      detailedDescription:
        "Our classic hummus is made with the finest chickpeas, tahini, olive oil, lemon juice, and a touch of garlic. It's smooth, creamy, and perfect for any occasion.",
      ingredients: "Chickpeas, tahini, olive oil, lemon juice, garlic, salt.",
      categories: ["Hummus", "Dips"],
      image: "hummus",
      shelfLife: "2 weeks",
      options: [
        { size: "200gr", productsPerBox: 28, price: 1.8 },
        { size: "300gr", productsPerBox: 18, price: 2.5 },
        { size: "500gr", productsPerBox: 12, price: 4.0 },
      ],
    },
    {
      name: "Spicy Hummus",
      id: 1001,
      description:
        "Classic hummus with a spicy kick, great for those who like it hot.",
      detailedDescription:
        "Our spicy hummus takes the classic recipe and adds a blend of hot peppers and spices to give it a kick. It's perfect for those who love a little heat in their dip.",
      ingredients:
        "Chickpeas, tahini, olive oil, lemon juice, garlic, salt, hot peppers, spices.",
      categories: ["Hummus", "Dips", "Spicy"],
      image: "spicy-hummus",
      shelfLife: "2 weeks",
      options: [
        { size: "200gr", productsPerBox: 28, price: 1.9 },
        { size: "300gr", productsPerBox: 18, price: 2.64 },
        { size: "500gr", productsPerBox: 12, price: 4.22 },
      ],
    },
    {
      name: "Beetroot Hummus",
      id: 1002,
      description:
        "A vibrant and healthy twist on traditional hummus, made with fresh beetroots.",
      detailedDescription:
        "Our beetroot hummus is made with fresh beetroots, chickpeas, tahini, and a blend of spices. It's not only delicious but also packed with nutrients.",
      ingredients:
        "Beetroots, chickpeas, tahini, olive oil, lemon juice, garlic, salt.",
      categories: ["Hummus", "Dips", "Veggie"],
      image: "beetroot-hummus",
      shelfLife: "2 weeks",
      options: [
        { size: "200gr", productsPerBox: 28, price: 2.0 },
        { size: "300gr", productsPerBox: 18, price: 2.78 },
        { size: "500gr", productsPerBox: 12, price: 4.44 },
      ],
    },
    {
      name: "Eggplant Salad",
      id: 1003,
      description:
        "A delicious blend of roasted eggplants, olive oil, and Mediterranean spices.",
      detailedDescription:
        "Our eggplant salad features roasted eggplants blended with olive oil, garlic, and a mix of Mediterranean spices. It's a perfect side dish or a healthy snack.",
      ingredients: "Eggplants, olive oil, garlic, salt, Mediterranean spices.",
      categories: ["Eggplant", "Salads", "Veggie"],
      image: "eggplant",
      shelfLife: "1 week",
      options: [
        { size: "200gr", productsPerBox: 28, price: 1.7 },
        { size: "300gr", productsPerBox: 18, price: 2.36 },
        { size: "500gr", productsPerBox: 12, price: 3.78 },
      ],
    },
    {
      name: "Baba Ghanoush",
      id: 1004,
      description:
        "A smoky eggplant dip blended with tahini, lemon, and garlic.",
      detailedDescription:
        "Our baba ghanoush is made from roasted eggplants, tahini, lemon juice, and garlic, blended to a smooth and smoky perfection.",
      ingredients: "Eggplants, tahini, lemon juice, garlic, salt, olive oil.",
      categories: ["Eggplant", "Dips"],
      image: "baba-ghanoush",
      shelfLife: "1 week",
      options: [
        { size: "200gr", productsPerBox: 28, price: 1.6 },
        { size: "300gr", productsPerBox: 18, price: 2.22 },
        { size: "500gr", productsPerBox: 12, price: 3.56 },
      ],
    },
    {
      name: "Tahini",
      id: 1005,
      description:
        "Creamy tahini made from roasted sesame seeds, ideal for dressings and dips.",
      detailedDescription:
        "Our tahini is made from the finest roasted sesame seeds, blended to a smooth and creamy texture. It's perfect for dressings, dips, and spreads.",
      ingredients: "Roasted sesame seeds, salt.",
      categories: ["Dips"],
      image: "tahini",
      shelfLife: "6 months",
      options: [
        { size: "200gr", productsPerBox: 28, price: 2.1 },
        { size: "300gr", productsPerBox: 18, price: 2.92 },
        { size: "500gr", productsPerBox: 12, price: 4.67 },
      ],
    },
    {
      name: "To-Go Hummus",
      id: 1006,
      description:
        "Our classic hummus in a convenient to-go package with pretzels for dipping.",
      detailedDescription:
        "Our to-go hummus packs our classic hummus with a side of pretzels, perfect for snacking on the go. It's convenient and delicious.",
      ingredients:
        "Chickpeas, tahini, olive oil, lemon juice, garlic, salt, pretzels.",
      categories: ["To-Go", "Hummus", "Dips"],
      image: "to-go-hummus",
      shelfLife: "2 weeks",
      options: [
        { size: "90gr", productsPerBox: 28, price: 0.6 },
        { size: "120gr", productsPerBox: 20, price: 0.9 },
      ],
    },
    {
      name: "Carrot Salad",
      id: 1007,
      description:
        "Shredded carrots with a tangy dressing, a refreshing and healthy option.",
      detailedDescription:
        "Our carrot salad is made with fresh shredded carrots and a tangy dressing. It's refreshing, healthy, and perfect as a side dish or snack.",
      ingredients: "Carrots, olive oil, vinegar, salt, pepper.",
      categories: ["Veggie", "Salads"],
      image: "carrot",
      shelfLife: "1 week",
      options: [
        { size: "200gr", productsPerBox: 28, price: 1.85 },
        { size: "300gr", productsPerBox: 18, price: 2.57 },
        { size: "500gr", productsPerBox: 12, price: 4.11 },
      ],
    },
    {
      name: "Coleslaw",
      id: 1008,
      description:
        "Crisp cabbage and carrots in a creamy dressing, perfect for sandwiches or as a side.",
      detailedDescription:
        "Our coleslaw is a classic blend of crisp cabbage and carrots in a creamy dressing. It's perfect for sandwiches or as a side dish.",
      ingredients:
        "Cabbage, carrots, mayonnaise, vinegar, sugar, salt, pepper.",
      categories: ["Veggie", "Salads"],
      image: "coleslaw",
      shelfLife: "1 week",
      options: [
        { size: "200gr", productsPerBox: 28, price: 2.3 },
        { size: "300gr", productsPerBox: 18, price: 3.19 },
        { size: "500gr", productsPerBox: 12, price: 5.11 },
      ],
    },
    {
      name: "Matbucha",
      id: 1009,
      description:
        "A spicy tomato and pepper dip, a staple in Mediterranean cuisine.",
      detailedDescription:
        "Our matbucha is a traditional Mediterranean dip made with tomatoes, peppers, garlic, and spices. It's spicy, flavorful, and perfect for dipping.",
      ingredients: "Tomatoes, peppers, garlic, olive oil, spices.",
      categories: ["Dips", "Spicy"],
      image: "matbucha",
      shelfLife: "2 weeks",
      options: [
        { size: "200gr", productsPerBox: 28, price: 1.75 },
        { size: "300gr", productsPerBox: 18, price: 2.43 },
        { size: "500gr", productsPerBox: 12, price: 3.89 },
      ],
    },
    {
      name: "Turkish Salad",
      id: 1010,
      description: "Finely chopped vegetables in a zesty tomato-based sauce.",
      detailedDescription:
        "Our Turkish salad features finely chopped vegetables in a zesty tomato-based sauce. It's a perfect blend of fresh ingredients with a flavorful twist.",
      ingredients:
        "Tomatoes, cucumbers, peppers, onions, parsley, olive oil, lemon juice, salt.",
      categories: ["Salads", "Veggie"],
      image: "turkish",
      shelfLife: "1 week",
      options: [
        { size: "200gr", productsPerBox: 28, price: 2.2 },
        { size: "300gr", productsPerBox: 18, price: 3.06 },
        { size: "500gr", productsPerBox: 12, price: 4.89 },
      ],
    },
    {
      name: "Tabbouleh",
      id: 1011,
      description:
        "A refreshing herb salad with bulgur wheat, tomatoes, and a lemony dressing.",
      detailedDescription:
        "Our tabbouleh is a refreshing herb salad made with bulgur wheat, tomatoes, parsley, mint, and a zesty lemon dressing. It's a healthy and flavorful option.",
      ingredients:
        "Bulgur wheat, tomatoes, parsley, mint, lemon juice, olive oil, salt.",
      categories: ["Salads", "Veggie"],
      image: "tabbouleh",
      shelfLife: "1 week",
      options: [
        { size: "200gr", productsPerBox: 28, price: 1.65 },
        { size: "300gr", productsPerBox: 18, price: 2.29 },
        { size: "500gr", productsPerBox: 12, price: 3.67 },
      ],
    },
  ]

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
      />
    </Container>
  )
}

export default Products
