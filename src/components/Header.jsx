/* eslint-disable react/prop-types */

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

} from "@chakra-ui/icons"
import { FaHome, FaGlobe, FaLeaf, FaEnvelope, FaShoppingCart } from "react-icons/fa"
import Logo from "../assets/images/logo-dark.png"


const Header = (props) => {
  const { isOpen, onToggle } = useDisclosure()

  const navItems = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "Products", path: "/products", icon: FaLeaf },
    { name: "About", path: "/about", icon: InfoOutlineIcon },
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
                color={"green.400"}
                variant='ghost'
                size='md'
                fontWeight='bold'
                _hover={{ bg: "green.900", color: "green.100" }}
                leftIcon={<Icon as={item.icon} />}
              >
                {item.name}
              </Button>
            ))}
            <Button
                key={"1"}
                as={RouterLink}
                // to={}
                colorScheme='green'
                color={"green.400"}
                variant='ghost'
                size='md'
                fontWeight='bold'
                _hover={{ bg: "green.900", color: "green.100" }}
                leftIcon={<Icon as={FaShoppingCart} />}
                onClick={props.cartToggle}
              >
                {`Order (${props.cartItemCount})`}
              </Button>
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
          // position='fixed'
          top='0'
          left='0'
          right='0'
          p={4}
          bgGradient='linear(to-r, green.900, black)'
          spacing={4}
          zIndex={1}
          // mt={20}
        >
          {navItems.map((item, index) => (
            <Button
              display={'flex'}
              justifyContent={'left'}
              key={index}
              as={RouterLink}
              to={item.path}
              colorScheme='green'
              color={"green.400"}
              variant='ghost'
              size='lg'
              w='full'
              onClick={onToggle}
              leftIcon={<Icon as={item.icon} />}
            >
              <Text>{item.name}</Text>
            </Button>
          ))}
          <Button
          display={'flex'}
          justifyContent={'left'}
          
          as={RouterLink}
          
          colorScheme='green'
          color={"green.400"}
          variant='ghost'
          size='lg'
          w='full'
                leftIcon={<Icon as={FaShoppingCart} />}
                onClick={props.cartToggle}
              >
                <Text>{`Order (${props.cartItemCount})`}</Text>
              </Button>
        </VStack>
      )}
    </Box>
  )
}

export default Header
