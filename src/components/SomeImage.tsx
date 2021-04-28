import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Center, Flex, Link, Text } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";

import HelperImage from "./HelperImage";

interface GraphBoxConfig {
  type: string;
}

const GraphTypeBox = ({type} : GraphBoxConfig) =>{
  return(
    <>
      <Box w="30%" bg={useColorModeValue("white","blackAlpha.500")} borderRadius="10" m="10" p="3rem" boxShadow="lg">
         <Text align="center">{type}</Text>

        
      </Box>
    </>
  )
}

const SomeImage = () => {
  
  const graphTypes = [
    {
      type: "Public"
    },
    {
      type: "Private"
    }
  ]

  return (
    <>
        <Flex>
         {graphTypes.map((graph) => (
            <GraphTypeBox {...graph} />
          ))}
        </Flex>
    </>
  );
};

export default SomeImage;
