import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Cancel2 = () => {
  return (
    <Flex flexDirection={"column"} gap={10}>
      <Heading textAlign={"center"}>
        CANCELLATION AND REFUNDS: SELF PACED LEARNING
      </Heading>
      <Box>
        <Text
          textAlign={"start"}
          // paddingX={{ base: "15px", sm: "15px", md: "10px", lg: "5px" }}
          paddingX={[4, 10, 10, 20]}
          fontSize={["15px", "17px", "20px"]}
        >
          No refund will be done for self-paced courses.
        </Text>
        <Text
          textAlign={"start"}
          // paddingX={{ base: "15px", sm: "15px", md: "10px", lg: "5px" }}
          paddingX={[4, 10, 10, 20]}
          fontSize={["15px", "17px", "20px"]}
        >
          No refund will be provided and access will be revoked. If anytime
          found course is been shared with others / multiple users or intention
          of course purchase is to copy the material / content and account will
          be blocked at the same time.
        </Text>
      </Box>
    </Flex>
  );
};

export default Cancel2;
