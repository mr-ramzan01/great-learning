import { Box, Flex, Heading, Text, Image, Icon, Button } from "@chakra-ui/react";
import React from "react";
import { MdCheckCircleOutline } from "react-icons/md";

function SetsUsApart() {
  const contentData = [
    {
      title: "Industry Leaders as Training Experts",
      icon: MdCheckCircleOutline,
      content: [
        {
          text: "You will be trained by industry leaders who have established successful careers in your chosen field and are willing to share their knowledge and wisdom with you.",
        },
      ],
    },
    {
      title: "Hands-On Practical Training",
      icon: MdCheckCircleOutline,
      content: [
        {
          text: "Our major focus while giving training is on providing Hands-On Practical Training so that you don’t just understand the concepts but become proficient in them.",
        },
      ],
    },
    {
      title: "100% Placement Assistance",
      icon: MdCheckCircleOutline,
      content: [
        {
          text: "100% Placement Assistance: After you complete your chosen training program with us, you will be able to perform the job role with expertise. In addition, we'll connect you with reputable employment opportunities.",
        },
      ],
    },
    {
      title: "24/7 Career Support",
      icon: MdCheckCircleOutline,
      content: [
        {
          text: "24/7 Career Support: No matter what stage of your career you are in, we are always available to help you with any issues pertaining to the training that you have taken from us.",
        },
      ],
    },
  ];

  return (
    <Box mt={{ base: "50px", md: "60px" }} p={8} bg="#fff">
      <Flex flexDir="column" alignItems="center">
        <Heading textAlign={"center"} color="#b9292f" mb={4}>
          Upskill Nexus Higlights
        </Heading>
        <Text w={{ base: "full", md: "70%" }} textAlign={{ base: "justify", md: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita sequi nemo nisi saepe doloremque non, assumenda commodi fuga quo illo nihil sunt iusto tenetur corrupti dicta, vero quos alias?
        </Text>
      </Flex>

      <Flex flexDir="column" gap="5" align="center" justify="center" maxW="1200px">
        <Flex
          flexDir={{ base: "column-reverse", md: "row" }}
          justify="space-between"
          alignItems="center"
          // bg='blue'
          gap={5}
          p={{ base: 3, md: 4 }}
        >
          {/* Left Side (Content) */}
          <Box flex="1" py={4} textAlign={{ base: "start", md: "left" }} mb={{ base: 5, md: 0 }}>
            {contentData.map((content, index) => (
              <Flex key={index}>
                <Box>
                  <Icon color="#b9292f" boxSize={6} mr={2} as={content.icon} />
                </Box>
                <Box>
                  <Heading color="#000" px={{ base: 1, md: 0 }} fontSize={{ base: "xl", md: "1xl" }}>
                    {content.title}
                  </Heading>
                  <Flex mb={4}>
                    {content?.content.map((item, itemIndex) => (
                      <React.Fragment key={itemIndex}>
                        <Text>{item.text}</Text>
                      </React.Fragment>
                    ))}
                  </Flex>
                </Box>
              </Flex>
            ))}
          </Box>

          {/* Right Side (Image) */}
          {/* <Box> */}
          <Image src="/img5.jpg" alt="Training Image" maxW={{ base: "100%", md: "50%" }} boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)" />
          {/* </Box> */}
        </Flex>

        <Button border="1px solid #b9292f" bg="#b9292f" color="#fff" _hover={{ bg: "#fff", color: "#b9292f" }}>
          Explore Our Courses
        </Button>
      </Flex>

      {/* <Flex flexDir="column" gap="20px" mt="5">
        <Heading textAlign={"center"} size="lg">
          Our trainees now work for big brands in 80% of cases.
        </Heading>
        <Box p="4" textAlign={"center"} border={"2px solid #b9292f"} borderRadius={8} mt="3">
          <Heading color="#b9292f" size="md">
            60% of our learners transformed their careers
          </Heading>
          <Text>Alumni Career Transitions in The Industry for degree & PG programs</Text>
        </Box>
      </Flex> */}
    </Box>
  );
}

export default SetsUsApart;
