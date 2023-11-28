import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import AboutHead from "../../Components/About/AboutHead";
import OurVision from "../../Components/About/OurVision";
import OurMission from "../../Components/About/OurMission";

const About = () => {
  return (
    <Flex flexDirection={"column"} gap={10}>
      {/* heading  */}
      <AboutHead />
      {/* our vision  */}
      <OurVision />
      {/* our mission  */}
      <OurMission />
    </Flex>
  );
};

export default About;
