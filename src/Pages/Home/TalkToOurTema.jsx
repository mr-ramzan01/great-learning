import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { hoverStyle } from "../../style/button.style";

const TalkToOurTema = () => {
  return (
    <Flex justify={"center"}>
      <Flex justify={"center"} borderRadius={"md"} border="1px solid #b9292f" bg="#b9292f" my="50px" p="5" w="95%">
        <Flex flexDir={{ base: "column", md: "row" }} justify={"space-between"} alignItems={{ base: "center", md: "start" }} w="90%">
          <Box color="#fff" flexDir="column" align="space-between" justify={"center"}>
            <Text>Got more questions?</Text>
            <Heading fontWeight={"bold"}>Talk to our team directly.</Heading>
            <Text>A program advisor will get in touch with you shortly.</Text>
          </Box>
          <Button _hover={hoverStyle} border="1px solid #fff" color="#fff" bg="#b9292f">
            Contact Us
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TalkToOurTema;
