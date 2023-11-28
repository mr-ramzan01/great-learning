import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { hoverStyle } from "../../style/button.style";

const Explore = () => {
  return (
    <>
      <Flex mt={"0px"} height={"50vh"} bg="#f8f8f8" p="2">
        <Flex flexDir={"column"} align={{ base: "center", md: "start" }} justify={"center"} p="0 30px" maxW={{ base: "100%", md: "50%" }}>
          <Heading>Meet Our Industry Experts</Heading>
          <Text textAlign={{ base: "justify", md: "start" }}>Start your online learning journey at Great Learning Academy for free with our short-term basic courses across various in-demand domains.</Text>
          <Button _hover={{ hoverStyle }} bg="#b9292f" color="#fff">
            Free Webinar
          </Button>
        </Flex>
        <Box height={"100%"} width="50%" bg="red">
          <Image src="/professional.jpg" height="100%" width={"100%"} />
        </Box>
      </Flex>
    </>
  );
};

export default Explore;

{
  /* <Flex flexDir={"column"} align={{ base: "center", md: "start" }} justify={"center"} p="0 30px" maxW={{ base: "100%", md: "50%" }}>
          <Heading>Meet Our Industry Experts</Heading>
          <Text textAlign={{ base: "justify", md: "start" }}>Start your online learning journey at Great Learning Academy for free with our short-term basic courses across various in-demand domains.</Text>
          <Button _hover={{ hoverStyle }} bg="#b9292f" color="#fff">
            Free Webinar
          </Button>
        </Flex> */
}
