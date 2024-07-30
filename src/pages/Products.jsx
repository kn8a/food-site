import React, { useState } from 'react';
import { Box, Heading, Text, Image, SimpleGrid, Container, Button, VStack, HStack, Tag, Wrap } from '@chakra-ui/react';

const ProductCard = ({ name, image, description, categories }) => (
  <Box borderWidth={1} borderRadius="lg" overflow="hidden" p={4}>
    <VStack spacing={4} align="start">
      <Image src={`/products/${image}.jpg`} alt={name} borderRadius="md" w="full" />
      <Heading as="h3" size="md">
        {name}
      </Heading>
      <Text>{description}</Text>
      <Wrap>
        {categories.map((category, index) => (
          <Tag key={index} colorScheme="green">{category}</Tag>
        ))}
      </Wrap>
      <Button colorScheme="green">Learn More</Button>
    </VStack>
  </Box>
);

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    {
      name: "Classic Hummus",
      description: "Our smooth and creamy classic hummus, perfect for dipping or spreading.",
      categories: ["Hummus", "Dips"],
      image: "hummus"
    },
    {
      name: "Spicy Hummus",
      description: "Classic hummus with a spicy kick, great for those who like it hot.",
      categories: ["Hummus", "Dips", "Spicy"],
      image: 'spicy-hummus'
    },
    {
      name: "Beetroot Hummus",
      description: "A vibrant and healthy twist on traditional hummus, made with fresh beetroots.",
      categories: ["Hummus", "Dips", "Veggie"],
      image: "beetroot-hummus"
    },
    {
      name: "Eggplant Salad",
      description: "A delicious blend of roasted eggplants, olive oil, and Mediterranean spices.",
      categories: ["Eggplant", "Salads", "Veggie"],
      image: "eggplant"
    },
    {
      name: "Baba Ghanoush",
      description: "A smoky eggplant dip blended with tahini, lemon, and garlic.",
      categories: ["Eggplant", "Dips"],
      image: "baba-ghanoush"
    },
    {
      name: "Tahini",
      description: "Creamy tahini made from roasted sesame seeds, ideal for dressings and dips.",
      categories: ["Dips"],
      image: "tahini"
    },
    {
      name: "To-Go Hummus",
      description: "Our classic hummus in a convenient to-go package with pretzels for dipping.",
      categories: ["To-Go", "Hummus", "Dips"],
      image: "to-go-hummus"
    },
    {
      name: "Carrot Salad",
      description: "Shredded carrots with a tangy dressing, a refreshing and healthy option.",
      categories: ["Veggie", "Salads"],
      image: "carrot"
    },
    {
      name: "Coleslaw",
      description: "Crisp cabbage and carrots in a creamy dressing, perfect for sandwiches or as a side.",
      categories: ["Veggie", "Salads"],
      image: 'coleslaw'
    },
    {
      name: "Matbucha",
      description: "A spicy tomato and pepper dip, a staple in Mediterranean cuisine.",
      categories: ["Dips", "Spicy"],
      image: "matbucha"
    },
    {
      name: "Turkish Salad",
      description: "Finely chopped vegetables in a zesty tomato-based sauce.",
      categories: ["Salads", "Veggie"],
      image: 'turkish'
    },
    {
      name: "Tabbouleh",
      description: "A refreshing herb salad with bulgur wheat, tomatoes, and a lemony dressing.",
      categories: ["Salads", "Veggie"],
      image: "tabbouleh"
    }
  ];

  const categories = ['All', ...new Set(products.flatMap(product => product.categories))];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.categories.includes(selectedCategory));

  return (
    <Container maxW="1200px" py={[5, 10]}>
      <VStack spacing={[5, 8]}>
        <Heading as="h1" size={["xl", "2xl"]} textAlign="center">
          Our Products
        </Heading>
        <Text fontSize={["lg", "xl"]} textAlign="center">
          Discover our wide range of authentic Mediterranean salads and dips
        </Text>
        <HStack spacing={4} wrap="wrap" justify="center">
          {categories.map(category => (
            <Button 
              key={category}
              onClick={() => setSelectedCategory(category)}
              colorScheme="green"
              variant={selectedCategory === category ? "solid" : "outline"}
            >
              {category}
            </Button>
          ))}
        </HStack>
        <SimpleGrid columns={[1, null, 2, 3]} spacing={[5, 8, 10]} w="full">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Products;