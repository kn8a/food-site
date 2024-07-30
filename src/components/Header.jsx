import React from "react"
import {
  Box,
  Flex,
  Image,
  IconButton,
  useDisclosure,
  VStack,
  Text,
  HStack,
  Button,
  Icon,
} from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import {
  HamburgerIcon,
  CloseIcon,
  InfoOutlineIcon,
  StarIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons"
import { FaHome, FaGlobe, FaLeaf, FaEnvelope } from "react-icons/fa"
import Logo from "../assets/images/logo-dark.png"
import { color } from "framer-motion"

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()

  const navItems = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "About", path: "/about", icon: InfoOutlineIcon },
    { name: "Products", path: "/products", icon: FaLeaf },
    { name: "Global Reach", path: "/global-reach", icon: FaGlobe },
    { name: "Contact", path: "/contact", icon: FaEnvelope },
  ]

  return (
    <Box
      as='header'
      bgGradient='linear(to-r, green.900, black)'
      py={4}
      boxShadow='md'
      position='relative'
    >
      <Flex
        maxW='1200px'
        mx='auto'
        alignItems='center'
        justifyContent='space-between'
        px={[4, 8]}
      >
        <Image
          src={Logo}
          alt='Hummus & Salads Logo'
          h={["50px", "75px", "100px", "100px"]}
        />
        <Flex direction={"column"} flex={1} justifyContent={"right"} pl={4}>
          <HStack
            display={{ base: "none", md: "flex" }}
            as='nav'
            spacing={4}
            justifyContent={"right"}
          >
            {navItems.map((item, index) => (
              <Button
                key={index}
                as={RouterLink}
                to={item.path}
                colorScheme='green'
                variant='ghost'
                size='md'
                fontWeight='bold'
                _hover={{ bg: "green.900", color: "green.100" }}
                leftIcon={<Icon as={item.icon} />}
              >
                
                {item.name}
              </Button>
            ))}
          </HStack>
          <Flex
            h={"2px"}
            bgGradient='linear(to-r, green.900, green.800, black)'
            w={"100%"}
          ></Flex>
        </Flex>

        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant='outline'
          colorScheme='green'
          size='lg'
          aria-label='Toggle Navigation'
          zIndex='dropdown'
        />
      </Flex>
      {isOpen && (
        <VStack
          display={{ base: "flex", md: "none" }}
          position='fixed'
          top='0'
          left='0'
          right='0'
          p={4}
          bgGradient='linear(to-r, green.900, black)'
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
              colorScheme='green'
              variant='ghost'
              size='lg'
              w='full'
              onClick={onToggle}
              leftIcon={<Icon as={item.icon} />}
            >
              <Text
                 
                >{item.name}</Text>
            </Button>
          ))}
        </VStack>
      )}
    </Box>
  )
}

export default Header
