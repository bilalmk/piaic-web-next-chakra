"use client";
import Header from "./componants/header";
import theme from "./themes";

import React from "react";
import {
  Box,
  Text,
  Grid,
  Container,
  Button,
  Link,
  ChakraProvider,
} from "@chakra-ui/react";

import hero_bg from "../hero_bg.jpg";
import LinksDivide from "./componants/links-divide";
import SpecializedTracks from "./componants/specialized-tracks";
import CoreCourses from "./componants/core-courses";
import AccordionContent from "./componants/accordion-content";
import Certified from "./componants/certified";
import Footer from "./componants/footer";

function Home() {
  const sectionStyle = {
    width: "100%",
    height: "500px",
    backgroundImage: `url(${hero_bg.src})`,
    BorderTop: "1px solid #fff",
  };
  return (
    <>
      <Header />
      <Box
        w="100%"
        h="400px"
        style={sectionStyle}
        backgroundPosition="center"
        backgroundRepeat="no-repeat">
        <ChakraProvider theme={theme}>
          <Container size="lg">
            <Grid templateColumns="repeat(1, 1fr)" gap={0}>
              <Box textAlign="center" pt="20">
                <Text
                  fontSize="50px"
                  color="#fff"
                  fontWeight="bold"
                  lineHeight="100%">
                  Presidential Initiative for Artificial Intelligence and
                  Computing (PIAIC)
                </Text>
                <Button colorScheme="gray" mt="10">
                  <Link color="#000" href="#">
                    More Information
                  </Link>
                </Button>
              </Box>
            </Grid>
          </Container>
        </ChakraProvider>
      </Box>
      <Certified />
      <AccordionContent />
      <Box bg="#F5EDF7" w="100%" h="100"></Box>
      <CoreCourses />
      <SpecializedTracks />
      <LinksDivide />
      <Footer />
    </>
  );
}

export default Home;
