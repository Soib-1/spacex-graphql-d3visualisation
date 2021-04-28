import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Heading } from "@chakra-ui/layout";

const SomeText = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Heading as="h2" fontSize="3xl">
        Choose graph type
      </Heading>
    </>
  );
};

export default SomeText;
