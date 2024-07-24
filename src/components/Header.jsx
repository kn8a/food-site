import React from 'react';
import { Box, Flex, Image, IconButton, useDisclosure, VStack, HStack, Button, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon, InfoOutlineIcon, StarIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { FaHome, FaGlobe } from 'react-icons/fa';
import Logo from '../assets/images/logo.png';

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const navItems = [
    { name: 'Home', path: '/', icon: FaHome },
    { name: 'About', path: '/about', icon: InfoOutlineIcon },
    { name: 'Products', path: '/products', icon: StarIcon },
    { name: 'Global Reach', path: '/global-reach', icon: FaGlobe },
  ];

  return (
    <Box as="header" bgGradient="linear(to-r, yellow.100, green.100)" py={4} boxShadow="md" position="relative">
      <Flex maxW="1200px" mx="auto" alignItems="center" justifyContent="space-between" px={[4, 8]}>
        <Image src={Logo} alt="Hummus & Salads Logo" h={["50px", "75px", "100px", "140px"]} />
        <HStack display={{ base: 'none', md: 'flex' }} as="nav" spacing={4}>
          {navItems.map((item, index) => (
            <Button
              key={index}
              as={RouterLink}
              to={item.path}
              colorScheme="green"
              variant="ghost"
              size="lg"
              fontWeight="bold"
              _hover={{ bg: 'green.100' }}
              leftIcon={<Icon as={item.icon} />}
            >
              {item.name}
            </Button>
          ))}
        </HStack>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="outline"
          colorScheme="green"
          size="lg"
          aria-label="Toggle Navigation"
          zIndex="dropdown"
        />
      </Flex>
      {isOpen && (
        
        <VStack
          display={{ base: 'flex', md: 'none' }}
          position="fixed"
          top="0"
          left="0"
          right="0"
          p={4}
          bgGradient="linear(to-r, yellow.100, green.100)"
          spacing={4}
          zIndex={1}
           // Padding top to prevent menu from overlapping with the header
           pt={20}
        >

          
          {navItems.map((item, index) => (
            <Button
              key={index}
              as={RouterLink}
              to={item.path}
              colorScheme="green"
              variant="solid"
              size="lg"
              w="full"
              onClick={onToggle}
              leftIcon={<Icon as={item.icon} />}
            >
              {item.name}
            </Button>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default Header;