import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Text,
  useToast,
  Image,
  Collapse,
} from '@chakra-ui/react';

const ContactUs = () => {
  const [contactMethod, setContactMethod] = useState('');
  const [isPhoneMethodSelected, setIsPhoneMethodSelected] = useState(false);
  const toast = useToast();

  const handleContactMethodChange = (e) => {
    setContactMethod(e.target.value);
    setIsPhoneMethodSelected(e.target.value === 'Phone');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: "Message sent.",
      description: "We've received your message and will get back to you soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box bg="green.50" minHeight="100vh" py={12}>
      <Container maxW="6xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          bg="white"
          rounded="xl"
          overflow="hidden"
          shadow="xl"
        >
          <Image
            src="/cust-service.jpg"
            alt="Mediterranean salad"
            objectFit="cover"
            w={{ base: 'full', md: '40%' }}
            h={{ base: '400px', md: 'auto' }}
          />
          <Box p={8} w={{ base: 'full', md: '60%' }}>
            <Heading as="h2" size="lg" color="green.700" mb={2}>
              Contact Us
            </Heading>
            <Text fontSize="md" color="gray.600" mb={6}>
              We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
            </Text>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input placeholder="John Doe" focusBorderColor="green.400" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email Address</FormLabel>
                  <Input type="email" placeholder="john@example.com" focusBorderColor="green.400" />
                </FormControl>
                <FormControl>
                  <FormLabel>Preferred Contact Method</FormLabel>
                  <Select placeholder="Select method" onChange={handleContactMethodChange} focusBorderColor="green.400">
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                  </Select>
                </FormControl>
                <Collapse in={isPhoneMethodSelected} animateOpacity>
                  <VStack spacing={4} align="flex-start" width="full">
                    <FormControl>
                      <FormLabel>Phone Number</FormLabel>
                      <Input type="tel" placeholder="(123) 456-7890" focusBorderColor="green.400" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Preferred Contact Time</FormLabel>
                      <Input type="time" focusBorderColor="green.400" />
                    </FormControl>
                  </VStack>
                </Collapse>
                <FormControl isRequired>
                  <FormLabel>Your Message</FormLabel>
                  <Textarea placeholder="Enter your message here" focusBorderColor="green.400" />
                </FormControl>
                <Button type="submit" colorScheme="green" size="lg" width="full">
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactUs;