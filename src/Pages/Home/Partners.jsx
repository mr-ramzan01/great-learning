import { Box, Flex, Grid, Image, Heading, Text, Button } from "@chakra-ui/react";

const Partners = () => {
  // Define an array of partner logos
  const logos = [
    {
      img: "/didm.png",
      comp: "DIDM",
      color: "#be0002",
      content: "DIDM makes our candidates gratifying when it comes to infusing skills with practical knowledge and recent trends in the industry. We are a reputed and the best digital marketing institute in Delhi/NCR & across India. By MSME | ISO Certified.",
    },
    {
      img: "/nexus.png", //
      comp: "NEXUS",
      color: "#ffca04",
      content: "Skillshiksha is India’s best online learning platform where you can have blended modules and learn at your own pace. Master the recent trends in the market to stay competitive as change occurs at a rapid pace.",
    },
    {
      img: "/skill.png", //
      comp: "SKILLS SHIKSHA",
      color: "blue",
      content: "Skillshiksha is India’s best online learning platform where you can have blended modules and learn at your own pace. Master the recent trends in the market to stay competitive as change occurs at a rapid pace.",
    },
  ];

  return (
    <Box bg="#f8f8f8" p={5} mt="40px">
      <Flex justify="center" direction="column" alignItems="center">
        <Flex flexDir="column" textAlign={"center"} alignItems="center" mb={3}>
          <Heading as="h2" size="xl" mb={6} color="#b9292f">
            Partnerships We Have With
          </Heading>
          <Text w={{ base: "full", md: "80%" }} textAlign={{ base: "justify", md: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo natus vel deserunt! Reprehenderit aperiam beatae quod accusamus nihil consequuntur ipsum consectetur velit excepturi neque obcaecati provident, molestiae autem nobis.
          </Text>
        </Flex>

        <Flex flexDir="column" gap="5" align="center" justify="center" maxW="1200px">
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
            p={4}
          >
            {logos.map((logo, index) => (
              <Flex flexDir={"column"} p="3" w="300px" alignItems="center" key={index} borderRadius={"10px"} overflow={"hidden"} bg="#fff" boxShadow="0 0 3px rgba(0,0,0,0.2)">
                <Image width={"50%"} position="relative" objectFit={"cover"} src={logo.img} />

                {/* <Link to={path}> */}
                <Box p="4" textAlign={"center"}>
                  <Heading style={{ color: `${logo.color}` }} size="md">
                    {/* {logo.comp} */}
                  </Heading>
                  <Text textAlign={"justify"}>{logo.content}</Text>
                </Box>
                {/*  */}
              </Flex>
            ))}
          </Grid>
          <Button border="1px solid #b9292f" bg="#b9292f" color="#fff">
            Explore Our Courses
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Partners;
