import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid, Container, VStack } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container maxW="1200px" py={[5, 10]}>
      <VStack spacing={[5, 10]}>
        <Box textAlign="center">
          <Heading as="h1" size={["xl", "2xl"]} mb={[2, 4]}>
            Welcome to Hummus & Salads
          </Heading>
          <Text fontSize={["lg", "xl"]}>
            Authentic Mediterranean Salads producer Since 1974
          </Text>
        </Box>

        <SimpleGrid columns={[1, null, 2]} spacing={[5, 10]} w="full">
          <Box>
            <Image src="https://via.placeholder.com/600x400.png?text=Hummus+Salads+Hummus" alt="Hummus & Salads Hummus" borderRadius="md" w="full" />
          </Box>
          <Box>
            <Heading as="h2" size={["lg", "xl"]} mb={[2, 4]}>
              Our Story
            </Heading>
            <Text fontSize={["md", "lg"]}>
            Hummus & Salads is a pioneer producer and marketer of Premium Chilled Hummus Salads, 
              Dips & Mediterranean range to the retail & food service markets all over the world. 
              With over 100 different recipes and flavors, we've been exporting worldwide since 1972 
              to the US, Canada, Europe & Russia.
            </Text>
          </Box>
        </SimpleGrid>

        <Box w="full">
          <Heading as="h2" size={["lg", "xl"]} mb={[2, 4]} textAlign="center">
            Our Certifications
          </Heading>
          <SimpleGrid columns={[2, 3, 5]} spacing={5} justifyItems="center">
            <Image src="https://via.placeholder.com/80x80.png?text=Kosher" alt="Kosher Certified" />
            <Image src="https://via.placeholder.com/80x80.png?text=OU" alt="OU Certified" />
            <Image src="https://via.placeholder.com/80x80.png?text=FSSC+22000" alt="FSSC 22000 Certified" />
            <Image src="https://via.placeholder.com/80x80.png?text=HACCP" alt="HACCP Certified" />
            <Image src="https://via.placeholder.com/80x80.png?text=Vegan" alt="Vegan Friendly" />
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;