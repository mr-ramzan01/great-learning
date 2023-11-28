import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const AboutHead = () => {
  return (
    <Flex
      mt={10}
      gap={["40px","20px","20px","20px"]}
      flexDirection={{ base: "column", md: "row", lg: "row" }}
      // flexDirection={"row"}
      justifyContent={"space-around"}
    >
      {/* one  */}
      <Flex
        flexDirection={"column"}
        paddingX={{ base: "15px", sm: "15px", md: "10px", lg: "5px" }}
        w={["auto", "auto", "600px"]}
      >
        <Text
          fontSize={"18px"}
          justifyContent={{ base: "center" }}
          textColor={"gray.500"}
          fontWeight={600}
        >
          ABOUT US
        </Text>
        <Text
          fontSize={["16px", "18px", "22px"]}
          textColor={"gray.600"}
        //   fontWeight={100}
        >
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
          size={["sm", "sm", "md"]}
          paddingY="15px"
          paddingX={20}
          fontSize={{ base: "11px", md: "14px", lg: "16px" }}
        >
          Sign Up for Free
        </Button>
      </Flex>
      {/* two  */}
      <Flex justifyContent={{ base: "center", sm: "", md: "", lg: "" }}>
        <Box
          height={["300px", "300px", "400px"]}
          borderRadius={"71% 29% 70% 30% / 53% 62% 38% 47%"}
          width={["300px", "300px", "400px"]}
          bgColor={"red"}
          backgroundImage="url('https://i.pinimg.com/564x/c7/71/92/c771926a82d18208ac80eebfef4de3be.jpg')"
          backgroundPosition="cover"
          // backgroundRepeat="no-repeat"
        ></Box>
      </Flex>
    </Flex>
  );
};

export default AboutHead;
