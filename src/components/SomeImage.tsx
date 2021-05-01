import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Center, Flex, Link, Text, Wrap } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";

import HelperImage from "./HelperImage";

interface GraphBoxConfig {
  type: string;
  href: string;
}

const GraphTypeBox = ({ type, href }: GraphBoxConfig) => {
  return (
    <Link
      bg={useColorModeValue("white", "#3F444E")}
      w="md"
      borderRadius="10"
      p="3rem"
      boxShadow="md"
      minW="200px"
      _hover={{ bg: useColorModeValue("cyan.200", "cyan.600") }}
      href={href}
    >
      <Text fontSize="4xl" align="center" fontWeight="bold">
        {type}
      </Text>
    </Link>
  );
};

const SomeImage = () => {
  const graphTypes = [
    {
      type: "Public",
      href: "/public",
    },
    {
      type: "Private",
      href: "/private",
    },
  ];

  return (
    <>
      <Wrap m="20" spacing="10">
        {graphTypes.map((graph) => (
          <GraphTypeBox {...graph} />
        ))}
      </Wrap>
    </>
  );
};

export default SomeImage;
