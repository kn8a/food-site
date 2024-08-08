
import {
  Box,
  Image,
  Flex,
  Text,
  VStack,
  HStack,
  Container,
  Divider,
  Link as ChakraLink,
  Icon,
} from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa"

import Logo from "../assets/images/logo-dark.png"

const Footer = () => {
  return (
    <Box
      as='footer'
      bgGradient='linear(to-b, green.900, black)'
      color='white'
      py={8}
    >
      <Container maxW='1200px'>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify='space-between'
          align={{ base: "center", md: "start" }}
          mb={8}
        >
          <VStack
            align={{ base: "center", md: "start" }}
            mb={{ base: 6, md: 0 }}
          >
            <Image src={Logo} maxH='60px' mb={2} />
            <Text fontSize='sm' textAlign={{ base: "center", md: "left" }}>
              Authentic Mediterranean Salads
            </Text>
            <Text fontSize='sm' textAlign={{ base: "center", md: "left" }}>
              Producer Since 1924
            </Text>
          </VStack>

          <VStack
            align={{ base: "center", md: "start" }}
            mb={{ base: 6, md: 0 }}
          >
            <Text fontWeight='bold' mb={2} color={"green.400"}>
              Quick Links
            </Text>
            {["Home", "About", "Products", "Global Reach"].map((item) => (
              <ChakraLink
                as={RouterLink}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                key={item}
                fontSize='sm'
              >
                {item}
              </ChakraLink>
            ))}
          </VStack>

          <VStack align={{ base: "center", md: "start" }}>
            <Text fontWeight='bold' mb={2} color={"green.400"}>
              Get in touch
            </Text>
            {[
              { icon: FaPhone, text: "+12-3-456-7890" },
              { icon: FaEnvelope, text: "sales@hummusandsalads.com" },
              { icon: FaGlobe, text: "www.hummusandsalads.com" },
            ].map((item, index) => (
              <HStack
                key={index}
                justify={{ base: "center", md: "flex-start" }}
                width='100%'
              >
                <Icon as={item.icon} boxSize={4} />
                <Text fontSize='sm'>{item.text}</Text>
              </HStack>
            ))}
            <HStack
              pt={2}
              spacing={4}
              justify={{ base: "center", md: "flex-start" }}
              width='100%'
            >
              {[FaFacebook, FaTwitter, FaYoutube, FaLinkedin].map(
                (SocialIcon, index) => (
                  <Icon
                    as={SocialIcon}
                    boxSize={5}
                    key={index}
                    cursor='pointer'
                  />
                )
              )}
            </HStack>
          </VStack>
        </Flex>

        <Divider borderColor='green.700' mb={4} />

        <Flex
          direction={{ base: "column", md: "row" }}
          justify='space-between'
          align='center'
          color='green.600'
        >
          <Text
            textAlign={{ base: "center", md: "left" }}
            mb={{ base: 2, md: 0 }}
            fontSize='xs'
          >
            &copy; {new Date().getFullYear()} Hummus & Salads. All rights
            reserved.
          </Text>
          <HStack spacing={4}>
            <ChakraLink as={RouterLink} to='/privacy-policy' fontSize='xs'>
              Privacy Policy
            </ChakraLink>
            <ChakraLink as={RouterLink} to='/terms-of-service' fontSize='xs'>
              Terms of Service
            </ChakraLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
