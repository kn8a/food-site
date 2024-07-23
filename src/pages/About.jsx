import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid, Container, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const About = () => {
  return (
    <Container maxW="1200px" py={10}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center">
        About Hummus & Salads
      </Heading>

      <SimpleGrid columns={[1, null, 2]} spacing={10} mb={10}>
        <Box>
          <Image src="/factory.jpg" alt="Hummus & Salads Factory" borderRadius="md" />
        </Box>
        <Box>
          <Text fontSize="lg" mb={4}>
            Today, Hummus & Salads is a market leader, one of the 3 largest Chilled Salads 
            producers, with a capacity of 1500 tons per month. Our commitment to quality and 
            authenticity has made us a trusted name in Mediterranean cuisine since 1924.
          </Text>
          <Text fontSize="lg">
            We take pride in our wide range of over 100 different recipes and flavors, catering 
            to diverse tastes and preferences across the globe.
          </Text>
        </Box>
      </SimpleGrid>

      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4}>
          Our Production Process
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            25 Tons of fresh vegetables and raw materials arrive at our facility daily
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            All products are made from fresh, locally sourced vegetables, herbs, and spices
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Vegetables are inspected, sanitized, cut, chopped, ground, cooked, and chilled
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Most of our products are Gluten-Free and Vegan
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Shelf life of 75-90 days
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Available in all packaging sizes from 100g up to 3kg
          </ListItem>
        </List>
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Our Certifications
        </Heading>
        <Text fontSize="lg" mb={4}>
          We maintain the highest standards of quality and safety, as evidenced by our certifications:
        </Text>
        <SimpleGrid columns={[2, null, 5]} spacing={5} justifyItems="center">
          <Image src="/kosher.png" alt="Kosher Certified" h="80px" />
          <Image src="/ou.png" alt="OU Certified" h="80px" />
          <Image src="/fssc22000.png" alt="FSSC 22000 Certified" h="80px" />
          <Image src="/haccp.png" alt="HACCP Certified" h="80px" />
          <Image src="/vegan.png" alt="Vegan Friendly" h="80px" />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default About;