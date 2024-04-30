import { Box, Flex, Text, Heading, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid } from '@chakra-ui/react';
import { FaBusinessTime } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" justify="center" mb={10}>
        <FaBusinessTime size="3em" />
        <Heading as="h1" size="xl" mt={5}>Business Dashboard</Heading>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200">
          <StatLabel>Sales</StatLabel>
          <StatNumber>$30,000</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23% since last month
          </StatHelpText>
        </Stat>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200">
          <StatLabel>Revenue</StatLabel>
          <StatNumber>$45,000</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            35% since last month
          </StatHelpText>
        </Stat>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200">
          <StatLabel>New Customers</StatLabel>
          <StatNumber>150</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            20% since last month
          </StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default Index;