import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import RefundHead from "../../Components/Refund/RefundHead";
import CanelRefund from "../../Components/Refund/CanelRefund";
import Cancel2 from "../../Components/Refund/Cancel2";
import Batch from "../../Components/Refund/Batch";

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
          list: [
            "Your full name and contact information",
            "Course name and date of purchase",
            "Reason for the refund request",
          ],
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
      <Flex
        p="5"
        w={{ base: "100%", md: "80%" }}
        m="auto"
        gap={10}
        flexDir={"column"}
        align="center"
      >
        <Box>
          <Text fontSize={{base: '30px', md: '40px'}} textAlign={"center"}>
            Refund Policy (Upskill Nexus)
          </Text>
          <RefundHead />
        </Box>
        <CanelRefund />
        <Cancel2 />
        <Batch />
      </Flex>
    </>
  );
};

export default RefundPolicy;
