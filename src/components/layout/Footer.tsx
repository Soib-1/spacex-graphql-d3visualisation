import { Flex, Link, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://github.com/Soib" isExternal>
          Łukasz Cybulski
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
