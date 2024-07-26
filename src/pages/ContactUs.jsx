import React, { useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Text, Textarea, VStack, Select, useDisclosure, Collapse } from '@chakra-ui/react';

const ContactUs = () => {
  const [contactMethod, setContactMethod] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleContactMethodChange = (e) => {
    setContactMethod(e.target.value);
    if (e.target.value === 'Phone') {
      onOpen();
    } else {
      onClose();
    }
  };

  return (
    <Container maxW="600px" py={[5, 10]}>
      <VStack spacing={[5, 10]}>
        <Heading as="h1" size={["xl", "2xl"]} textAlign="center">
          Contact Us
        </Heading>
        <Text fontSize={["md", "lg"]} textAlign="center">
          We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.
        </Text>
        <Box w="full">
          <FormControl id="name" mb={5}>
            <FormLabel>Your Name</FormLabel>
            <Input type="text" placeholder="Enter your name" />
          </FormControl>
          <FormControl id="email" mb={5}>
            <FormLabel>Your Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl id="phone" mb={5}>
            <FormLabel>Your Phone Number</FormLabel>
            <Input type="tel" placeholder="Enter your phone number" />
          </FormControl>
          <FormControl id="contact-method" mb={5}>
            <FormLabel>Best Method of Contact</FormLabel>
            <Select placeholder="Select method" onChange={handleContactMethodChange}>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
            </Select>
          </FormControl>
          <Collapse in={isOpen} animateOpacity>
            <FormControl id="contact-date" mb={5}>
              <FormLabel>Preferred Contact Date</FormLabel>
              <Input type="date" placeholder="Select a date" />
            </FormControl>
            <FormControl id="contact-time" mb={5}>
              <FormLabel>Preferred Contact Time</FormLabel>
              <Input type="time" placeholder="Select a time" />
            </FormControl>
          </Collapse>
          <FormControl id="message" mb={5}>
            <FormLabel>Your Message</FormLabel>
            <Textarea placeholder="Enter your message" />
          </FormControl>
          <Button colorScheme="green" size="md" fontWeight="bold" w="full">
            Submit
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default ContactUs;