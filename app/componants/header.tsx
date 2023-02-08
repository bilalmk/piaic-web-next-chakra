"use client";
import React from "react";
import Link from "next/link";
import { Box, ChakraProvider } from "@chakra-ui/react";

import Logo from "./logo";
//import Logo from "./logo";

const Header = () => {
  const menuStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "white",
  };

  return (
    <>
      <ChakraProvider>
        <Box
          bg="#401a4b"
          borderBottom="1px solid #fff"
          pb="5"
          textAlign="center">
          <Logo props={["white", "white", "primary.500", "primary.500"]} />
          <Box>
            <Link href="/" style={menuStyle}>
              Home
            </Link>
            <Link href="/syllabus" style={menuStyle}>
              Syllabus
            </Link>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
};

export default Header;
