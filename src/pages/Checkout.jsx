import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
  HStack,
  useSteps,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useBreakpointValue,
} from '@chakra-ui/react';

const steps = [
  { title: 'Personal Info', description: 'Your details' },
  { title: 'Shipping', description: 'Delivery address' },
  { title: 'Payment', description: 'Payment method' },
  { title: 'Review', description: 'Order summary' },
];

const Checkout = ({ cart, closeDrawer, totalPrice }) => {
  useEffect(() => {
    closeDrawer();
  },[])
  
  
    
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    paymentMethod: 'credit',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input name="firstName" value={formData.firstName} onChange={handleInputChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input name="lastName" value={formData.lastName} onChange={handleInputChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input name="email" type="email" value={formData.email} onChange={handleInputChange} />
            </FormControl>
          </VStack>
        );
      case 1:
        return (
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Address</FormLabel>
              <Input name="address" value={formData.address} onChange={handleInputChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>City</FormLabel>
              <Input name="city" value={formData.city} onChange={handleInputChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Country</FormLabel>
              <Input name="country" value={formData.country} onChange={handleInputChange} />
            </FormControl>
          </VStack>
        );
      case 2:
        return (
          <RadioGroup name="paymentMethod" value={formData.paymentMethod} onChange={(value) => handleInputChange({ target: { name: 'paymentMethod', value } })}>
            <Stack direction="column">
              <Radio value="credit">Credit Card</Radio>
              <Radio value="paypal">PayPal</Radio>
              <Radio value="bank">Bank Transfer</Radio>
            </Stack>
          </RadioGroup>
        );
      case 3:
        return (
          <VStack spacing={4} align="stretch">
            <Text fontWeight="bold">Order Summary</Text>
            {cart.map((item) => (
              <HStack key={`${item.id}-${item.selectedOption.size}`} justify="space-between">
                <Text>{item.quantity} x {item.name} - {item.selectedOption.size}</Text>
                <Text>${(item.selectedOption.price * item.selectedOption.productsPerBox * item.quantity).toFixed(2)}</Text>
              </HStack>
            ))}
            <HStack justify="space-between">
              <Text fontWeight="bold">Total:</Text>
              {/* <Text fontWeight="bold" color="green.600">${totalPrice.toFixed(2)}</Text> */}
            </HStack>
          </VStack>
        );
      default:
        return null;
    }
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.md" py={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" color="green.800">
          Checkout
        </Heading>
        <Stepper index={activeStep} colorScheme="green" orientation={isMobile ? 'vertical' : 'horizontal'}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>
              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                {!isMobile && <StepDescription>{step.description}</StepDescription>}
              </Box>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        <Box
          borderWidth={1}
          borderRadius="lg"
          p={4}
          boxShadow="md"
          bg="white"
        >
          {renderStepContent(activeStep)}
        </Box>
        <Flex justify="space-between" direction={isMobile ? 'column' : 'row'}>
          <Button
            onClick={handlePrevStep}
            isDisabled={activeStep === 0}
            colorScheme="green"
            mb={isMobile ? 2 : 0}
            width={isMobile ? '100%' : 'auto'}
          >
            {`< Previous`}
          </Button>
          {/* <Button colorScheme='green' >View Cart</Button> */}
          <Button
            onClick={activeStep === steps.length - 1 ? () => alert('Order placed!') : handleNextStep}
            colorScheme="green"
            width={isMobile ? '100%' : 'auto'}
          >
            {activeStep === steps.length - 1 ? 'Place Order' : 'Next >'}
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Checkout;