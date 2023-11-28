import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const data = [
  {
    title: "Acceptance of Terms",
    arr: [
      {
        p: "By using our website and services, you acknowledge and agree to these Terms and our Privacy Policy. If you do not agree with any part of these Terms, please do not use our website or services.",
      },
    ],
  },
  {
    title: "Use of Website and Services",
    arr: [
      {
        h: "Eligibility:",
        p: "You must be at least 18 years old to use our website and services. If you are under 18, you may only use our website and services with the consent of a parent or legal guardian.",
      },
      {
        h: "User Account",
        p: "You may be required to create an account to access certain features of our services. You are responsible for maintaining the confidentiality of your account information.",
      },
      {
        h: "User Content",
        p: "You are responsible for the content you post or submit through our services. Content must not violate any applicable laws or infringe upon the rights of others.",
      },
    ],
  },
  {
    title: "Payment and Fees",
    arr: [
      {
        h: "Course Fees",
        p: "Some of our courses and services may require payment. Fees for courses are as described on the website. Payment is processed through trusted third-party payment providers.",
      },
      {
        h: "Refund Policy",
        p: "Our refund policy, if applicable, is outlined on our website. Please review it carefully before making a payment.",
      },
    ],
  },

  {
    title: "Intellectual Property",
    arr: [
      {
        h: "Content Ownership",
        p: "Teckostar retains all rights to the content, materials, and resources provided through our services, including but not limited to text, images, videos, and software.",
      },
      {
        h: "License",
        p: "Upon payment of course fees, you are granted a limited, non-exclusive, and non-transferable license to access and use course materials for your personal, non-commercial use.",
      },
    ],
  },

  {
    title: "Limitation of Liability",
    arr: [
      {
        p: "Teckostar makes every effort to provide accurate and reliable information and services. However, we are not responsible for any losses, damages, or consequences arising from the use or misuse of our website or services.",
      },
    ],
  },
  {
    title: "Changes to Terms",
    arr: [
      {
        p: "We reserve the right to modify, amend, or update these Terms at our sole discretion. Any changes will be posted on our website, and your continued use of our services will constitute your acceptance of the revised Terms.",
      },
    ],
  },
  {
    title: "Termination",
    arr: [
      {
        p: "Teckostar may, at its discretion, terminate or suspend your account and access to our services at any time, with or without cause.",
      },
    ],
  },
  {
    title: "Governing Law",
    arr: [
      {
        p: "These Terms are governed by the laws of our jurisdiction, and any disputes will be subject to the exclusive jurisdiction of the courts in that jurisdiction.",
      },
    ],
  },
];

const Term_condition = () => {
  return (
    <>
      <Flex py="5" bg="gray.50" flexDir={"column"} align="center">
        <Heading textAlign={"center"}>Term & Conditions</Heading>

        <Flex flexDir={"column"} gap="20px" p="5" w="80%">
          {data.map((ele, i) => (
            <Box boxShadow={"md"} bg="gray.100" key={i} p="3" borderRadius={"10px"}>
              <Heading fontSize={"25px"} color="gray.700">
                {ele?.title}
              </Heading>
              {ele?.arr?.map((el, ind) => (
                <Box key={ind}>
                  <Text position="relative" left="10px" maxW="98%">
                    <b> {el?.h}</b> {el?.p}
                  </Text>
                </Box>
              ))}
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Term_condition;
