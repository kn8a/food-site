import React from 'react';
import { Box, Text, VStack, Container } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" bg="green.700" color="white" py={[4, 6]}>
      <Container maxW="1200px">
        <VStack spacing={[2, 4]} align={["center", "start"]}>
          <Text textAlign={["center", "left"]}>&copy; 2024 Hummus & Salads. All rights reserved.</Text>
          <Text textAlign={["center", "left"]}>Contact: International Sales</Text>
          <Text textAlign={["center", "left"]}>+0-000-0000 | sales@hummusandsalalds.com</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;