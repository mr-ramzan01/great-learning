import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const AboutHead = () => {
  return (
    <Flex mt={10} justifyContent={"space-around"}>
      {/* one  */}
      <Flex flexDirection={"column"} w={"600px"}>
        <Text fontSize={"18px"} textColor={"gray.500"} fontWeight={600}>
          ABOUT US
        </Text>
        <Text fontSize={"24px"} textColor={"gray.600"} fontWeight={600}>
          UpskillNexus is a higher education initiative invested in providing
          growth-oriented individuals with high-quality authentic and practical
          training in the field of digital technology. With our courses, career
          aspirants can develop their critical digital technology skills along
          with employability skills for success in today's business world.
        </Text>
        <Button
          mt={5}
          rounded={"4"}
          bgColor={"red.500"}
          width={"fit-content"}
          colorScheme="teal"
          size="md"
          paddingY="15px"
          paddingX={20}
        >
          Sign Up for Free
        </Button>
      </Flex>
      {/* two  */}
      <Box
        height={"400px"}
        borderRadius={"71% 29% 70% 30% / 53% 62% 38% 47%"}
        width={"400px"}
        bgColor={"red"}
        backgroundImage="url('https://i.pinimg.com/564x/c7/71/92/c771926a82d18208ac80eebfef4de3be.jpg')"
        backgroundPosition="cover"
        // backgroundRepeat="no-repeat"
      ></Box>
    </Flex>
  );
};

export default AboutHead;
