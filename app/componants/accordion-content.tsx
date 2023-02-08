import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ChakraProvider,
  Container,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import theme from "../themes";

const AccordionContent = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container size="lg">
        <SimpleGrid columns={{ base: 1, md: 2, sm: 1 }} gap={0}>
          <Box>
            <Image
              src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/home5-1.png"
              alt="text"
            />
          </Box>
          <Box>
            <Accordion defaultIndex={[0]}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                      The Program in a Nutshell: Earn While You Learn
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontWeight="normal" fontSize="15px">
                  In this brand-new type of curriculum, students will learn how
                  to make money and boost exports in the classroom and will
                  begin doing so within six months of the programs beginning. It
                  resembles a cross between a corporate venture and an
                  educational project.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                      Program of Studies
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontWeight="normal" fontSize="15px">
                  This curriculum is intended for beginners who want to learn
                  software development from the ground up. The first three
                  quarters are shared by all specialties and are dedicated to
                  studying Object-Oriented Programming and cutting-edge
                  Full-Stack Web 2.0 development. It is going to be a
                  fifteen-month-long hybrid program that includes both onsite
                  and online classes and is divided into five quarters of 13
                  weeks each. The emphasis will be on hands-on learning by
                  educating students to produce projects. To accommodate
                  everyone, courses will be held primarily on weekends or after
                  6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid
                  teaching format, with core onsite classes complemented by
                  online Zoom laboratories and recorded videos.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
};

export default AccordionContent;
