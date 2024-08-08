/* eslint-disable react/prop-types */
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  Wrap,
  Tag,
  Button,
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
        View Details
      </Button>
    </VStack>
  </Box>
)

export default ProductCard
