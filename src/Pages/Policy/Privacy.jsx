import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const pData = [
  { h: "Information We Collect", p: "We may collect various types of information, including but not limited to:", size: "lg" },
  { h: "Billing Information", p: "This includes your name, email address, phone number, and any other information you provide when you contact us, register for courses, or use our services.", size: "md" },
  { h: "Billing Information", p: "If you make a payment for our services, we may collect billing details such as billing address and credit card information. Please note that we do not store credit card information; it is securely processed by our payment providers.", size: "md" },
  { h: "Usage Information", p: "We may collect data about your interactions with our website, including your IP address, browser type, referring website, and the pages you visit.", size: "md" },
  { h: "Cookies and Tracking Technologies", p: "We use cookies and similar tracking technologies to gather information about your preferences, enhance your user experience, and analyze website usage. You can manage cookie settings through your browser.", size: "md" },
  { h: "How We Use Your Information?", p: "We use your information for the following purposes:", size: "md" },
  { h: "Communication", p: "We use your contact information to respond to your inquiries, provide information about our services, and send updates related to our courses.", size: "md" },
];

const Privacy = () => {
  return (
    <Flex py="5" bg="gray.50" flexDir={"column"} align="center">
      <Heading textAlign={"center"}>Privacy Policy</Heading>
      <Box w={{ base: "90%", md: "80%" }} p="5">
        <Text>At Teckostar, we are committed to safeguarding your privacy and protecting your personal information. This Privacy Policy outlines how we collect, use, and protect the data you provide to us when you use our website, services, or interact with us. By using our website and services, you agree to the terms of this Privacy Policy.</Text>

        {/* <Heading size="lg">Information We Collect</Heading>
        <Text>We may collect various types of information, including but not limited to:</Text> */}

        <Flex flexDir="column" gap="20px">
          {pData.map((ele, i) => (
            <Box boxShadow={"md"} key={i} bg="gray.100" p="3" borderRadius={"5px"}>
              <Heading size={ele.size} color="gray.700">
                {ele.h}
              </Heading>
              <Text maxW="99%">{ele.p}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Privacy;
