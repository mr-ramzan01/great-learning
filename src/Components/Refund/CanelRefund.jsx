import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa6";

const CanelRefund = () => {
  let mapArr = [
    {
      point: "No refund will be provided on discounted courses.",
    },
    {
      point:
        "No refund will be provided for the academic institute tie up courses.",
    },
    {
      point:
        "If the delegate doesn't turn up on the given schedule then no refund will be provided.",
    },
    {
      point:
        "If the delegate doesn't turn up on the given schedule then no refund will be provided.",
    },
    {
      point: "In the case of refund, taxes amount will not be refunded.",
    },
  ];
  return (
    <Box>
      <Heading textAlign={"center"}>
        CANCELLATION AND REFUNDS: ONLINE CLASSROOM LEARNING
      </Heading>

      <Box mt={10}>
        <Text
          textAlign={"start"}
          // paddingX={{ base: "15px", sm: "15px", md: "10px", lg: "5px" }}
          paddingX={[4, 10, 10, 20]}
          fontSize={["15px", "17px", "20px"]}
        >
          Thank you for buying our training programs. We want to make sure that
          our users have a rewarding experience while they are discovering
          information, assessing, and purchasing our training programs, whether
          it may be for online or classroom training courses.
        </Text>
        <Text
          textAlign={"start"}
          // paddingX={{ base: "15px", sm: "15px", md: "10px", lg: "5px" }}
          paddingX={[4, 10, 10, 20]}
          fontSize={["15px", "17px", "20px"]}
        >
          As with any online purchase experience, the below are the terms and
          conditions that govern the Refund Policy. When you buy a training
          program on the Upskill Nexus website you agree to our Privacy Policy
          and Terms of use policy and the points below.
        </Text>
      </Box>
      <Box>
        {mapArr.map((el, i) => (
          <Flex
            key={i}
            gap={5}
            justifyContent={"start"}
            alignItems={"center"}
            paddingX={[4, 10, 10, 20]}
          >
            <div style={{width : "30px"}}>
              <FaArrowRight style={{ width: "13px", height: "13px" }} />
            </div>
            <Text mt={4} fontSize={["14px", "16px", "18px"]}>
              {el.point}
            </Text>
          </Flex>
        ))}
      </Box>
      {/* last heading  */}
      <Box mt={5}>
        <Text
          textAlign={"start"}
          // paddingX={{ base: "15px", sm: "15px", md: "10px", lg: "5px" }}
          paddingX={[4, 10, 10, 20]}
          fontSize={["15px", "17px", "20px"]}
        >
          If the learners want to re-attend the online instructor led classes
          for the purchased course and if there is no availability of the batch
          in near future then in that case maximum refund applicable will be 10%
          of the total amount paid.
        </Text>
        <Text
          textAlign={"start"}
          // paddingX={{ base: "15px", sm: "15px", md: "10px", lg: "5px" }}
          paddingX={[4, 10, 10, 20]}
          fontSize={["15px", "17px", "20px"]}
        >
          If due to any technical reason learners are not able to access the
          self-paced videos or class recordings and already attended the
          complete course through instructor led online classes then in that
          case no refund is applicable or a can be provided with a voucher for
          the amount equivalent of the 10% amount paid by the learner at the
          time of enrollment.
        </Text>
        <Flex gap={4} paddingX={[4, 10, 10, 20]}>
          <Text textColor={"red.500"} fontSize={["15px", "17px", "20px"]}>
            Note :{" "}
          </Text>
          <Text fontSize={["15px", "17px", "20px"]}>
            All refunds will be processed within 30 working days, post review
            and approval of any such request.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default CanelRefund;
