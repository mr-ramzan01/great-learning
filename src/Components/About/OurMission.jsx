import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const OurMission = () => {
  return (
    <Box>
      <Text
        marginY={10}
        textAlign={"center"}
        fontSize={"33px"}
        fontWeight={700}
        textColor={"red.600"}
      >
        Our Mission
      </Text>
      <Flex justifyContent={"space-around"} flexDirection={"row-reverse"}>
        {/* one  */}
        <Flex mt={10} flexDirection={"column"} w={"600px"}>
          <Text fontSize={"18px"} textColor={"gray.500"} fontWeight={600}>
            Empowering Digitech Futures, Shaping Success
          </Text>
          <Text fontSize={"21px"} textColor={"gray.600"} fontWeight={600}>
            Our mission at UpskillNexus is to be the beacon of transformation in
            the realm of digital technology and employability skills training.
            We are committed to cultivating a dynamic learning environment where
            individuals, regardless of their background or current career stage,
            can acquire the essential digital technological skills and
            employability skills, strategic insights, and unwavering confidence
            needed to not only secure employment but to thrive and excel in
            their chosen professional journeys.
          </Text>
          {/* <Button
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
        </Button> */}
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
      <Box paddingX={20} mt={3}>
        <Text fontSize={"21px"} textColor={"gray.600"} fontWeight={600}>
          Through practical, innovative and personalized training, we aspire to
          bridge the gap between education and employment, fostering a community
          of empowered individuals ready to make a lasting impact on the global
          workforce. At UpskillNexus, we believe that by investing in the
          personal growth and employability of individuals, we contribute to
          building a brighter, more resilient future for both our learners and
          the industries they serve.
        </Text>
      </Box>
    </Box>
  );
};

export default OurMission;
