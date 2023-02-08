import React from "react";
import {
  Box,
  ChakraProvider,
  Container,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import theme from "../themes";

const Certified = () => {
  return (
    <Box bg="#F5EDF7" w="100%">
      <ChakraProvider theme={theme}>
        <Container size="lg">
          <Box>
            <Text
              fontSize="25px"
              color="#333"
              fontWeight="bold"
              lineHeight="150%"
              mb="10"
              textAlign="center">
              Certified Web 3.0 and Metaverse Developer
            </Text>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2, sm: 1 }} gap={10}>
            <Box>
              <Text
                fontSize="20px"
                color="#333"
                fontWeight="normal"
                lineHeight="150%">
                The internet is without a doubt the most important technological
                development in human history. Web3, 3D Metaverse, AI, IoT,
                Cloud, and Edge technologies expand the internet as we know it
                by introducing novel features and advancements. Metaverse will
                make use of all aspects of modern technology, including 3D, VR,
                AR, AI, blockchain, cloud and edge computing, voice computing,
                ambient computing, and more.
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="20px"
                color="#333"
                fontWeight="normal"
                lineHeight="150%">
                Citi is the latest Wall Street business to give a positive
                prognosis for Web 3.0 and the Metaverse, terms used to depict a
                future internet vision centered on decentralized technologies
                and virtual worlds. Citi stated in a March 2022 research paper
                that the metaverse economy might have a total addressable market
                of up to $13 trillion and five billion people by 2030.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </ChakraProvider>
    </Box>
  );
};

export default Certified;
