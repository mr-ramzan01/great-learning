import { Box, Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { hoverStyle } from "../../style/button.style";
import SocialProfileSimple from "../../Components/whyChooseComp";

const WhyChoose = () => {
  const flexData = [
    {
      name: "Vaibhav Sharma",
      text: "Head Digital Marketing Trainer",
      description: "Mr. Vaibhav Sharma is a Head Digital Marketing Trainer at Delhi Institute Of Digital Marketing. A Corporate Trainer and Industry Specialist who Conducted workshops with Nav Bharat Times and Trained Thousands of Businessmen, Professionals and Students.",
      stats: [
        { icon: "✅", count: "2,00,000 +", label: "Mentorship Sessions Completed" },
        { icon: "⭐", count: "4.7/5", label: "Average Mentor Rating" },
      ],
      button: { bgColor: "#b9292f", textColor: "white", label: "VIEW EXPERIENCE" },
      imageSrc: "https://www.didm.in/assets/uploads/placement/DIDM_Trainer_Head_Mr.jpg",
    },
    {
      name: "Amit Kharbanda",
      text: "Digital Marketing Trainer",
      description: "Amit Kharbanda is a Digital Marketing Trainer at Delhi Institute of Digital Marketing, a specialist in SEO, SMM, ORM, and Google Adwords",
      stats: [
        { icon: "✅", count: "2,00,000 +", label: "Mentorship Sessions Completed" },
        { icon: "⭐", count: "4.7/5", label: "Average Mentor Rating" },
      ],
      button: { bgColor: "#b9292f", textColor: "white", label: "VIEW EXPERIENCE" },
      imageSrc: "https://www.didm.in/assets/uploads/placement/Amit_Kharbanda_DIDM_Kalkaji_Branch_Trainer1.jpg",
    },
    {
      name: "Anil Chander",
      text: "Digital Marketing Trainer",
      description: "Anil Chander is a Digital Marketing Trainer at Delhi Institute of Digital Marketing, a specialist in WordPress, SEO, Google Ads, Social Media Marketing, and ORM.",
      stats: [
        { icon: "✅", count: "2,00,000 +", label: "Mentorship Sessions Completed" },
        { icon: "⭐", count: "4.7/5", label: "Average Mentor Rating" },
      ],
      button: { bgColor: "#b9292f", textColor: "white", label: "VIEW EXPERIENCE" },
      imageSrc: "https://www.didm.in/assets/uploads/placement/anil_asnora.jpg",
    },
  ];

  return (
    <Flex flexDir="column" alignItems="center" gap={0} mt="80px">
      <Flex flexDir="column" textAlign={"center"} alignItems="center" mb={2}>
        <Heading fontSize="40px">
          Why Choose <span style={{ color: "#b9292f" }}> Upskill Nexus </span>?
        </Heading>
        <Text w="80%">Interested in growing professionally and becoming the best version of yourself? Here are a few of the reasons why you should choose Upskill Nexus for your professional development.</Text>
      </Flex>

      {/* {flexData.map((data, index) =>
        index % 2 == 0 ? (
          <Flex key={index} flexDir={{ base: "column-reverse", md: "row" }} justify={"space-between"} bg="#">
            <Flex align={"center"} flexDir="column" gap={"10px"} textAlign={"center"} maxW={{ base: "100%", md: "50%" }} px={5}>
              <Heading>{data.heading}</Heading>
              <Text fontSize={"18px"} textAlign={"justify"}>
                {data.description}
              </Text>

              <Flex bg="#" maxW={{ base: "100%", md: "80%" }} p={5} justify={"space-between"}>
                {data.stats.map((stat, statIndex) => (
                  <Box key={statIndex} bg="#">
                    <Heading size={"lg"}>{stat.icon}</Heading>
                    <Heading size={"md"}>{stat.count}</Heading>
                    <Text>{stat.label}</Text>
                  </Box>
                ))}
              </Flex>

              <Box py={8}>
                <Button bg={data?.button?.bgColor} color={data?.button?.textColor} px={5}>
                  {data.button.label}
                </Button>
              </Box>
            </Flex>

            <Box height="450px" width={{ base: "100%", md: "80%" }} style={{ backgroundImage: `url(${data.imageSrc})`, backgroundSize: "cover", backgroundPosition: "start" }}></Box>
          </Flex>
        ) : (
          <Flex key={index} flexDir={{ base: "column", md: "row" }} justify={"space-between"} bg="#">
            <Box height="450px" width={{ base: "100%", md: "80%" }} style={{ backgroundImage: `url(${data.imageSrc})`, backgroundSize: "cover", backgroundPosition: "start" }}></Box>
            <Flex align={"center"} flexDir="column" gap={"10px"} textAlign={"center"} maxW={{ base: "100%", md: "50%" }} px={5}>
              <Heading>{data.heading}</Heading>
              <Text fontSize={"18px"} textAlign={"justify"}>
                {data.description}
              </Text>

              <Flex bg="#" maxW={{ base: "100%", md: "80%" }} p={5} justify={"space-between"}>
                {data.stats.map((stat, statIndex) => (
                  <Box key={statIndex} bg="#">
                    <Heading size={"lg"}>{stat.icon}</Heading>
                    <Heading size={"md"}>{stat.count}</Heading>
                    <Text>{stat.label}</Text>
                  </Box>
                ))}
              </Flex>

              <Box py={8}>
                <Button bg={data.button.bgColor} color={data.button.textColor} px={5}>
                  {data.button.label}
                </Button>
              </Box>
            </Flex>
          </Flex>
        )
      )} */}

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
        justifyContent="center"
        alignItems="center"
        mx="auto"
        // p={4}
      >
        {flexData.map((ele, i) => (
          <SocialProfileSimple key={i} {...ele} />
        ))}
      </Grid>

      <Flex justify={"center"} mt="5" w="full">
        <Button _hover={{ bg: "#fff", border: "2px solid #b9292f", color: "#b9292f" }} bg="#b9292f" border="2px solid #b9292f" color="#fff" width="50%" p="6">
          Explore Course
        </Button>
      </Flex>
    </Flex>
  );
};

export default WhyChoose;
