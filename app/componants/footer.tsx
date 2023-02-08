"use client";
import React from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  ChakraProvider,
} from "@chakra-ui/react";
import Logo from "./logo";

const Footer = () => {
  return (
    <ChakraProvider>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Logo
                  color={["white", "white", "primary.500", "primary.500"]}
                />
              </Box>
              <Text fontSize={"sm"}>
                The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
                Panaverse DAO is a movement to spread these technolgies
                globally. It is community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
              </Text>
              <Text fontSize={"sm"}>© 2023. All rights reserved</Text>
            </Stack>
            <Stack align={"flex-start"}>
              <Text fontWeight={"500"} fontSize={"lg"} mb={2} color="#000">
                USEFUL LINKS
              </Text>
              <Link href="/" fontSize={"sm"}>
                Home
              </Link>
              <Link href="/syllabus" fontSize={"sm"}>
                Syllabus
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Text fontWeight={"500"} fontSize={"lg"} mb={2} color="#000">
                Follow Us
              </Text>
              <Link href={"#"} fontSize={"sm"}>
                Facebook
              </Link>
              <Link href={"#"} fontSize={"sm"}>
                Youtube
              </Link>
              <Link href={"#"} fontSize={"sm"}>
                Twitter
              </Link>
              <Link href={"#"} fontSize={"sm"}>
                Github
              </Link>
              <Link href={"#"} fontSize={"sm"}>
                LinkedIn
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Text fontWeight={"500"} fontSize={"lg"} mb={2} color="#000">
                CONTACT US
              </Text>
              <Text fontSize={"sm"}>Help Center</Text>
              <Text fontSize={"sm"}>+92 123 4567890</Text>
              <Text fontSize={"sm"}>abcdefghi@gmail.com</Text>
              <Text fontSize={"sm"}>Karachi, Pakistan</Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Footer;
