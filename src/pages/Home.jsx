import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid, Container, VStack, Flex } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container maxW="1200px" >
      <VStack spacing={[5, 10]}>
        <Box textAlign="center">
        <Flex
      bgImage={"/public/hummus-bowl1.jpg"}
      w={'100vw'}
      h={"500px"}
      bgPosition={'center'}
      bgSize={'cover'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Flex gap={4} direction={'column'} alignItems={'center'} px={8} py={10} backgroundColor={'rgba(0, 30, 0, 0.7)'} rounded={16}>
        <Heading as="h1" size={["xl", "2xl"]} mb={[2, 4]} color={'white'}>
          Welcome to Hummus & Salads
        </Heading>
        <Text fontSize={["lg", "xl"]} color={'white'}>
          Authentic Mediterranean Salads producer Since 1974
        </Text>
      </Flex>
    </Flex>
        {/* <Image fit={'cover'} src='/public/hummus-bowl1.jpg' h={"400px"} w={'100vw'}></Image> */}
          
        </Box>

        <SimpleGrid columns={[1, null, 2]} spacing={[5, 10]} w="full">
          <Box>
            <Image src="/public/products/hummus-salads.jpg" alt="Hummus & Salads Hummus" borderRadius="md" w="full" />
          </Box>
          <Box>
            <Heading as="h2" size={["lg", "xl"]} mb={[2, 4]}>
              Our Story
            </Heading>
            <Text fontSize={["md", "lg"]}>
            Hummus & Salads is a pioneering producer and marketer of premium chilled hummus, salads, dips, and a wide range of Mediterranean products. We serve both the retail and food service markets across the globe. With over 100 different recipes and flavors, our diverse and high-quality offerings cater to a wide array of tastes and preferences. Since 1972, we have been exporting our products worldwide, including to the US, Canada, Europe, and Asia, consistently delivering the rich and authentic flavors of Mediterranean cuisine to our international customers.
            </Text>
          </Box>
        </SimpleGrid>

        <Box w="full">
          <Heading as="h2" size={["lg", "xl"]} mb={[2, 4]} textAlign="center">
            Our Certifications
          </Heading>
          <SimpleGrid columns={[2, null, 4]} spacing={5} justifyItems="center">
      <VStack>
        <Image src="public/certs/kosher.png" alt="Kosher Certified" h="80px" />
        <Text fontSize={'small'}>Kosher Certified</Text>
      </VStack>
      <VStack>
        <Image src="public/certs/fssc.png" alt="FSSC 22000 Certified" h="80px" />
        <Text fontSize={'small'}>FSSC 22000 Certified</Text>
      </VStack>
      <VStack>
        <Image src="public/certs/haccp.png" alt="HACCP Certified" h="80px" />
        <Text fontSize={'small'}>HACCP Certified</Text>
      </VStack>
      <VStack>
        <Image src="public/certs/vegan.png" alt="Vegan Friendly" h="80px" />
        <Text fontSize={'small'}>Vegan Friendly</Text>
      </VStack>
    </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;