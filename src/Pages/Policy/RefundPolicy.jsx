import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const RefundPolicy = () => {
  const data = [
    {
      title: "General Plicy",
      arr: [
        {
          no: "1.1",
          tit: "Course Fees",
          p: "We offer a range of courses and services, nearly all of which require payment. Course fees are as described on the website.",
        },
        {
          no: "1.2",
          tit: "Refund Eligibility",
          p: "Our refund policy applies to paid courses only. Ineligible for refunds are free courses, digital downloads, and services that have already commenced or been provided.",
        },
      ],
    },
    {
      title: "Refund Requests",
      arr: [
        {
          no: "2.1",
          tit: "Timing",
          p: "To request a refund, you must do so within the specified refund period for the course you have enrolled in. The refund period is outlined on the course page on our website.",
        },
        {
          no: "2.1",
          tit: "Request Process",
          p: "To initiate a refund request, please contact our customer support team and provide the following information:",
          list: ["Your full name and contact information", "Course name and date of purchase", "Reason for the refund request"],
        },
        {
          no: "2.3",
          tit: "Processing Time",
          p: "We aim to process refund requests promptly. You will be notified once your request has been received and is under review.",
        },
      ],
    },
    {
      title: "Refund Criteria",
      arr: [
        {
          no: "3.1",
          tit: "Full refunds will be provided under the following circumstances:",
          list: ["You request a refund within the eligible refund period."],
        },
        {
          p: "You have not accessed more than 25% of the course content, as determined by our records.",
        },
        {
          no: "3.2",
          tit: "In some cases, we may offer partial refunds, taking into consideration your progress through the course and the nature of the services provided.",
        },
      ],
    },
  ];
  return (
    <>
      <Flex py="5" bg="gray.50" flexDir={"column"} align="center">
        <Heading textAlign={"center"}>Refund Policy</Heading>

        <Flex flexDir={"column"} gap="20px" py="5" w="80%">
          {data.map((ele, i) => (
            <Box boxShadow={"md"} bg="gray.100" key={i} p="3" borderRadius={"10px"}>
              <Heading size="lg" color="gray.700">
                {i + 1}
                {". "}
                {ele?.title}
              </Heading>
              {ele?.arr?.map((el, ind) => (
                <Box key={ind}>
                  <Text position="relative" left="30px" maxW="99%">
                    <b>{el?.no}</b>
                    <b> {el?.tit}</b> {el?.p}
                  </Text>
                  {el?.list
                    ? el?.list?.map((li, index) => (
                        <Box key={index} position="relative" left="40px">
                          <ul>
                            <li>{li}</li>
                          </ul>
                        </Box>
                      ))
                    : //
                      null}
                </Box>
              ))}
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default RefundPolicy;
