import React from "react";
import { Box, Center, Image } from "@chakra-ui/react";
import Logopiaic from "/public/Logo.png";

export default function Logo(props: any) {
  return (
    <Box {...props}>
      <Center
        fontSize="lg"
        fontWeight="bold"
        bg="gray"
        mb="5"
        backgroundColor="#fff">
        <Image src={Logopiaic.src} alt="" />
      </Center>
    </Box>
  );
}
