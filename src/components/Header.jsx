import React from 'react';
import { Box, Flex, Link, Image, IconButton, useDisclosure, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="header" bg="green.50" py={4}>
      <Flex maxW="1200px" mx="auto" alignItems="center" justifyContent="space-between" px={[4, 0]}>
        <Image src="/api/placeholder/150/50" alt="Hummus & Salads Logo" h="50px" />
        <Flex display={['none', 'none', 'flex']} as="nav">
          <Link as={RouterLink} to="/" color="white" mx={2}>Home</Link>
          <Link as={RouterLink} to="/about" color="white" mx={2}>About</Link>
          <Link as={RouterLink} to="/products" color="white" mx={2}>Products</Link>
          <Link as={RouterLink} to="/global-reach" color="white" mx={2}>Global Reach</Link>
        </Flex>
        <IconButton
          display={['flex', 'flex', 'none']}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="outline"
          aria-label="Toggle Navigation"
        />
      </Flex>
      {isOpen && (
        <VStack display={['flex', 'flex', 'none']} p={2} bg="green.500">
          <Link as={RouterLink} to="/" color="white" w="full" textAlign="center" py={2} onClick={onToggle}>Home</Link>
          <Link as={RouterLink} to="/about" color="white" w="full" textAlign="center" py={2} onClick={onToggle}>About</Link>
          <Link as={RouterLink} to="/products" color="white" w="full" textAlign="center" py={2} onClick={onToggle}>Products</Link>
          <Link as={RouterLink} to="/global-reach" color="white" w="full" textAlign="center" py={2} onClick={onToggle}>Global Reach</Link>
        </VStack>
      )}
    </Box>
  );
};

export default Header;