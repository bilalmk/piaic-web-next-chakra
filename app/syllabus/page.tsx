"use client";
import React from "react";
//import { Heading as tempHeading } from "../componants/heading";
import Header from "../componants/header";
import LinksDivide from "../componants/links-divide";

import {
  Box,
  Text,
  Card,
  CardHeader,
  Heading,
  SimpleGrid,
  ChakraProvider,
  Container,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import theme from "../themes";
import Footer from "../componants/footer";

const Syllabus = () => {
  const data = [
    {
      id: 1,
      title: "Web 3.0 (Blockchain) and Metaverse Specialization",
      desc: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
      quarteriv:
        "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
      quarterv:
        "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
    },
    {
      id: 2,
      title: "Artificial Intelligence (AI) and Deep Learning Specialization",
      desc: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
      quarteriv:
        "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
      quarterv: "AI-361: Deep Learning and MLOps",
    },
    {
      id: 3,
      title: "Cloud-Native Computing Specialization",
      desc: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
      quarteriv: "CN-351: Certified Kubernetes Application Developer (CKAD)",
      quarterv: "CN-361: Developing Multi-Cloud APIs using CDK for Terraform",
    },
    {
      id: 4,
      title: "Ambient Computing and IoT Specialization",
      desc: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
      quarteriv:
        "AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices",
      quarterv: "AC-361: Embedded Programming using C and Rust",
    },
    {
      id: 5,
      title: "Genomics and Bioinformatics Specialization",
      desc: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
      quarteriv: "Bio-351: Python for Biologists",
      quarterv: "Bio-361: Bioinformatics with Python",
    },
    {
      id: 6,
      title: "Network Programmability and Automation Specialization",
      desc: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
      quarteriv: "NPA-351: CCNA 200-301 Certification",
      quarterv: "NPA-361: Network Programmability and Automation",
    },
  ];
  return (
    <>
      <Header />
      <Box bg="#F5EDF7" w="100%">
        <ChakraProvider theme={theme}>
          <Container size="lg">
            <Box bg="#F5EDF7" p="5" borderRadius="10" textAlign="center">
              <Text
                fontSize="22px"
                color="#333"
                fontWeight="bold"
                lineHeight="120%"
                mb="3">
                Specialized Tracks
              </Text>
              <Text
                fontSize="16px"
                color="#333"
                fontWeight="normal"
                lineHeight="150%"
                mb="10">
                After completing the first three quarters the participants will
                select one or more specializations consisting of two courses
                each
              </Text>
            </Box>
            <SimpleGrid spacing={4} templateColumns="repeat(3, 1fr)">
              {data.map((data) => (
                <Card
                  key={data.id}
                  borderTop="2px solid #8447AB"
                  borderTopRadius="0"
                  p="10">
                  <CardHeader borderTopRadius="0">
                    <Heading size="md" textAlign="center">
                      {data.title}
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text
                      fontSize="15px"
                      color="#333"
                      fontWeight="normal"
                      lineHeight="150%">
                      {data.desc}
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Box
                      bg="#F5EDF7"
                      p="5"
                      borderRadius="10"
                      textAlign="center">
                      <Text
                        fontSize="20px"
                        color="#333"
                        fontWeight="bold"
                        lineHeight="150%">
                        Quarter IV
                      </Text>
                      <Text
                        fontSize="15px"
                        color="#333"
                        fontWeight="normal"
                        lineHeight="150%">
                        {data.quarteriv}
                      </Text>
                      <Text
                        fontSize="20px"
                        color="#333"
                        fontWeight="bold"
                        lineHeight="150%">
                        Quarter V
                      </Text>
                      <Text
                        fontSize="15px"
                        color="#333"
                        fontWeight="normal"
                        lineHeight="150%">
                        {data.quarterv}
                      </Text>
                    </Box>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          </Container>
        </ChakraProvider>
      </Box>
      <LinksDivide />
      <Footer />
    </>
  );
};

export default Syllabus;
