import React from "react";
import {
  Box,
  Text,
  ChakraProvider,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import theme from "../themes";

const CoreCourses = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container size="lg">
        <SimpleGrid columns={{ base: 1, md: 4, sm: 2 }} spacing={10}>
          <Box bg="#F5EDF7" p="5" borderRadius="10">
            <Text
              fontSize="22px"
              color="#333"
              fontWeight="bold"
              lineHeight="120%"
              mb="3"
              textAlign="left">
              Core Courses (Common in All Specializations):
            </Text>
            <Text
              fontSize="16px"
              color="#333"
              fontWeight="normal"
              lineHeight="150%"
              mb="10"
              textAlign="left">
              Every participant of the program will start by completing the
              following three core courses:
            </Text>
          </Box>
          <Box border="1px" borderColor="gray.200" p="5" borderRadius="10">
            <Text
              fontSize="20px"
              color="#333"
              fontWeight="bold"
              lineHeight="150%">
              Quarter I (Core)
            </Text>
            <Text
              fontSize="15px"
              color="#333"
              fontWeight="normal"
              lineHeight="150%">
              CS-101: Object-Oriented Programming using TypeScript
            </Text>
          </Box>
          <Box border="1px" borderColor="gray.200" p="5" borderRadius="10">
            <Text
              fontSize="20px"
              color="#333"
              fontWeight="bold"
              lineHeight="150%">
              Quarter II (Core)
            </Text>
            <Text
              fontSize="15px"
              color="#333"
              fontWeight="normal"
              lineHeight="150%">
              W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud
              Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for
              Terraform
            </Text>
          </Box>
          <Box border="1px" borderColor="gray.200" p="5" borderRadius="10">
            <Text
              fontSize="20px"
              color="#333"
              fontWeight="bold"
              lineHeight="150%">
              Quarter III (Core)
            </Text>
            <Text
              fontSize="15px"
              color="#333"
              fontWeight="normal"
              lineHeight="150%">
              $-101: Dollar Making Bootcamp - Full-Stack Template and API
              Product Development
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
};

export default CoreCourses;
