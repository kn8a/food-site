import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid, Container, Stat, StatLabel, StatNumber, StatHelpText, VStack } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import WorldMap from "react-svg-worldmap";

const data = [
  { year: 2023, value: 3.6 },
  { year: 2024, value: 4.13 },
  { year: 2025, value: 4.73 },
  { year: 2026, value: 5.43 },
  { year: 2027, value: 6.22 },
  { year: 2028, value: 7.13 },
  { year: 2029, value: 8.18 },
  { year: 2030, value: 9.38 },
  { year: 2031, value: 10.21 }
];



const GlobalReach = () => {
  return (
    <Container maxW="1200px" py={[5, 10]}>
      <VStack spacing={[5, 10]}>
        <Heading as="h1" size={["xl", "2xl"]} textAlign="center">
          Our Global Reach
        </Heading>

        <SimpleGrid columns={[1, null, 2]} spacing={[5, 10]} w="full">
          <Box>
            <Heading as="h2" size={["lg", "xl"]} mb={[2, 4]}>
              International Presence
            </Heading>
            <Text fontSize={["md", "lg"]} mb={4}>
            Hummus & Salads has been exporting worldwide since 1972, reaching markets in:
            </Text>
            <SimpleGrid columns={2} spacing={4}>
              <Box>
                <Text fontWeight="bold">• United States</Text>
                <Text fontWeight="bold">• Canada</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">• Europe</Text>
                <Text fontWeight="bold">• Asia</Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box >
            <Image src='/public/map.JPG'></Image>
          </Box>
        </SimpleGrid>

        <Box w="full">
          <Heading as="h2" size={["lg", "xl"]} mb={[2, 4]}>
            Market Growth
          </Heading>
          <Text fontSize={["md", "lg"]} mb={[3, 6]}>
            The global hummus market is experiencing significant growth. Here's the projected market size from 2023 to 2031:
          </Text>
          <Box h={["300px", "400px"]}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
          <Text fontSize="sm" textAlign="center" mt={2}>
            Global Hummus Market Size Projection (USD Billion)
          </Text>
        </Box>

        <SimpleGrid columns={[1, null, 3]} spacing={[5, 10]} w="full">
          <Stat>
            <StatLabel>Market Size 2023</StatLabel>
            <StatNumber>$3.6 Billion</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Projected Market Size 2031</StatLabel>
            <StatNumber>$10.21 Billion</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>CAGR 2024-2031</StatLabel>
            <StatNumber>14.7%</StatNumber>
            <StatHelpText>Compound Annual Growth Rate</StatHelpText>
          </Stat>
        </SimpleGrid>

        <Box w="full">
          <Heading as="h2" size={["lg", "xl"]} mb={[2, 4]}>
            Our Partners
          </Heading>
          <SimpleGrid columns={[2, null, 4]} spacing={5}>
            <Image src="/public/partners/costco.jpg" alt="US Partner" h={'60px'}/>
            <Image src="/public/partners/publix.jpg" alt="France Partner" h={'60px'}/>
            <Image src="/public/partners/Tesco.jpg" alt="UK Private Label" h={'60px'}/>
            <Image src="/public/partners/wellcome.jpg" alt="Leading Israeli Chain" h={'60px'}/>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default GlobalReach;