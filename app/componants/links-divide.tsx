import React from "react";
import { ChakraProvider, Container, Text, Link, Box } from "@chakra-ui/react";
import theme from "../themes";

const LinksDivide = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Container size="lg">
          <Box textAlign="center" mb="30">
            <Text
              fontSize="20px"
              color="#333"
              fontWeight="bold"
              lineHeight="120%"
              mb="1">
              The Outcome for Participants of the Program
            </Text>
            <Text
              fontSize="16px"
              color="#333"
              fontWeight="normal"
              lineHeight="120%"
              mb="1">
              The graduates of this program will own products (Full-Stack App
              Templates, AR and VR Experiences, and APIs) that are marketed
              globally by the Panaverse DAO and, if they like, will also be able
              to start off by offering services at a rate of $50 per hour
              ($96,000 per year). This would give Pakistani professionals and
              students a fantastic opportunity to better their financial
              situation while also giving the economy a much-needed boost by
              expanding software exports.
            </Text>
          </Box>
          <Box textAlign="center" mb="25">
            <Text
              fontSize="16px"
              color="#333"
              fontWeight="bold"
              lineHeight="120%"
              mb="1">
              Top 5 Metaverse jobs that will rule the future of tech industry
            </Text>
            <Link
              fontSize="14px"
              color="#333"
              fontWeight="normal"
              lineHeight="120%"
              target="_blank"
              href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms">
              https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms
            </Link>
          </Box>
          <Box textAlign="center" mb="25">
            <Text
              fontSize="16px"
              color="#333"
              fontWeight="bold"
              lineHeight="120%"
              mb="1">
              Blockchain Developer Salary - Jun 2022
            </Text>
            <Link
              fontSize="14px"
              color="#333"
              fontWeight="normal"
              lineHeight="120%"
              target="_blank"
              href="https://web3.career/web3-salaries/blockchain-developer">
              https://web3.career/web3-salaries/blockchain-developer
            </Link>
          </Box>
          <Box textAlign="center" mb="25">
            <Text
              fontSize="16px"
              color="#333"
              fontWeight="bold"
              lineHeight="120%"
              mb="1">
              Web3 Salaries Soar to $750,000 for Rank-and-File Devs
            </Text>
            <Link
              fontSize="14px"
              color="#333"
              fontWeight="normal"
              lineHeight="120%"
              target="_blank"
              href="https://thedefiant.io/web3-soaring-salaries">
              https://thedefiant.io/web3-soaring-salaries
            </Link>
          </Box>
          <Box textAlign="center" mb="25">
            <Text
              fontSize="16px"
              color="#333"
              fontWeight="bold"
              lineHeight="120%"
              mb="1">
              The Metaverse, Blockchain Gaming, and NFTs: Navigating the
              Internet’s Uncharted Waters
            </Text>
            <Link
              fontSize="14px"
              color="#333"
              fontWeight="normal"
              lineHeight="120%"
              target="_blank"
              href="https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022">
              https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022{" "}
            </Link>
          </Box>
          <Box textAlign="center" mb="25">
            <Text
              fontSize="16px"
              color="#333"
              fontWeight="bold"
              lineHeight="120%"
              mb="1">
              How To Become Metaverse Developer: Scope, Skills, and Salary
            </Text>
            <Link
              fontSize="14px"
              color="#333"
              fontWeight="normal"
              lineHeight="120%"
              target="_blank"
              href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer#">
              https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer
            </Link>
          </Box>
        </Container>
      </ChakraProvider>
    </>
  );
};

export default LinksDivide;
