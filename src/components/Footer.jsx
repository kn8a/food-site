import React from 'react';
import { Box, Image, Flex, Text, VStack, HStack, Container, Divider, Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import Logo from "../assets/images/logo-dark.png"

const Footer = () => {
  return (
    <Box as="footer" bgGradient='linear(to-b, green.900, black)' color="white" py={8}>
      <Container maxW="1200px">
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="start" mb={8}>
          <VStack align={{ base: 'center', md: 'start' }} mb={{ base: 6, md: 0 }}>
            <Image src={Logo} maxH={"60px"}></Image>
            <Text>Authentic Mediterranean Salads</Text>
            <Text>Producer Since 1974</Text>
          </VStack>
          <VStack align={{ base: 'center', md: 'start' }} mb={{ base: 6, md: 0 }}>
            <Text fontWeight="bold" mb={2}>Quick Links</Text>
            <RouterLink to="/" style={{ color: 'white' }}>Home</RouterLink>
            <RouterLink to="/about" style={{ color: 'white' }}>About Us</RouterLink>
            <RouterLink to="/products" style={{ color: 'white' }}>Products</RouterLink>
            <RouterLink to="/global-reach" style={{ color: 'white' }}>Global Reach</RouterLink>
          </VStack>
          <VStack align={{ base: 'center', md: 'start' }}>
            <Text fontWeight="bold" mb={2}>Contact Us</Text>
            <HStack>
              <FaPhone />
              <Text>+12-3-456-7890</Text>
            </HStack>
            <HStack>
              <FaEnvelope />
              <Text>sales@hummusandsalads.com</Text>
            </HStack>
            <HStack>
              <FaGlobe />
              <Text>www.hummusandsalads.com</Text>
            </HStack>
          </VStack>
        </Flex>
        <Divider borderColor="green.700" mb={4} />
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
          <Text textAlign={{ base: 'center', md: 'left' }} mb={{ base: 2, md: 0 }}>
            &copy; {new Date().getFullYear()} Hummus & Salads. All rights reserved.
          </Text>
          <HStack spacing={4}>
            <ChakraLink as={RouterLink} to="/privacy-policy">Privacy Policy</ChakraLink>
            <ChakraLink as={RouterLink} to="/terms-of-service">Terms of Service</ChakraLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;