import { Link, VStack, Box, Flex, Text, Image, Input, Button, Heading, Grid } from "@chakra-ui/react";
import { BsSend } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import logo from "../assets/logo2.jpg";
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  // Data for popular online courses
  const popularCourses = [
    {
      name: "Digital Marketing Science",
      link: "#",
    },
    {
      name: "Data Science",
      link: "#",
    },
    {
      name: "Cyber Security",
      link: "#",
    },
  ];
  const navigate = useNavigate();
  // Data for useful links
  const usefulLinks = [
    { name: "About Us", path: "about" },
    { name: "Blog", path: "#" },
    // { name: "Sitemap", path: "#" },
    { name: "We Are Hiring", path: "#" },
    // { name: "Self-Paced Courses", path: "#" },
    // { name: "Reviews", path: "#" },
    { name: "Contact us", path: "#" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/term-conditions" },
    { name: "Refund Policy", path: "/refund-policy" },
  ];

  return (
    <>
      <Flex flexDir={"column"} bg="#b9292f" color="white" gap="3" pt={"80px"}>
        <Flex flexDir={{ base: "column", md: "row" }} alignItems={{ base: "center", md: "start" }} justify="space-between" maxWidth="1200px" marginX="auto" px={5}>
          <Flex width={{ base: "100%", md: "40%" }} mb={{ base: 4, md: 0 }} flexDir={{ base: "column-reverse", md: "row" }}>
            <Box>
              <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
                <Image src={logo} alt="WsCube Tech Logo" mb={{ base: "10px", md: "20px" }} maxW={{ base: "30%", md: "50%" }} />
                Upskill Nexus provides training in the most significant and demanding areas of Information Technology, including Cybersecurity, Data Analytics and Science, and Digital Marketing Science.
              </Text>

              <Heading size="md">Stay up to date.</Heading>
              <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
                Subscribe to our newsletter to receive the latest updates and offers.
              </Text>

              <Flex align="center" gap={2}>
                <Input type="email" placeholder="Enter your email" bg="#fff" color="black" size="sm" />
                <Button bg="#fff" color="#000" _hover={{ bg: "white", color: "black" }} size="sm">
                  <BsSend />
                </Button>
              </Flex>
            </Box>
          </Flex>

          <Box width={{ base: "100%", md: "60%" }}>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              justifyContent="space-around"
              flexWrap="wrap"
            >
              <Box flex="1" maxW={{ base: "100%", md: "400px" }} p={5} mb={{ base: 8, md: 0 }}>
                <Text fontSize="lg" fontWeight="bold" mb={3}>
                  Popular Courses
                </Text>
                <VStack align="left" spacing={1}>
                  {popularCourses.map((course, index) => (
                    <Link key={index} to={course.link} fontSize={{ base: "sm", md: "md" }}>
                      {course.name}
                    </Link>
                  ))}
                </VStack>
              </Box>

              <Box flex="1" maxW={{ base: "100%", md: "400px" }} p={5}>
                <Text fontSize="lg" fontWeight="bold" mb={3}>
                  Important Links
                </Text>
                <VStack align="left" spacing={1}>
                  {usefulLinks.map((link, index) => (
                    <Link key={index} to={link.path} onClick={() => navigate(link.path)} fontSize={{ base: "sm", md: "md" }}>
                      {link.name}
                    </Link>
                  ))}
                </VStack>
              </Box>

              <Box flex="1" maxW={{ base: "100%", md: "400px" }} p={5} mb={{ base: 8, md: 0 }}>
                <Text fontSize="lg" fontWeight="bold" mb={3}>
                  Corporate Office :
                </Text>
                <VStack align="left" spacing={1}>
                  <Text> 150,1st floor, Kapil Vihar, Pitampura, North Delhi, Opp Metro Pillar No-353 & Gulab Sweets, New Delhi - 110034</Text>
                  <Text>+91 9990952299</Text>
                  <Text>info@upskillnexus.com</Text>
                </VStack>

                <Flex gap={{ base: "2", md: "0px" }} alignItems={{ base: "start", md: "start" }} mt="5" color="white">
                  <Link to="https://www.facebook.com/upskillnexus/">
                    <Button _hover={{ bg: "rgba(0,0,0,0.1)" }} bg="none" color="white" size="sm">
                      <FaFacebookF />
                    </Button>
                  </Link>

                  <Link to="https://www.instagram.com/upskillnexus/">
                    <Button _hover={{ bg: "rgba(0,0,0,0.1)" }} bg="none" color="white" size="sm">
                      <FaInstagram />
                    </Button>
                  </Link>

                  <Link to="https://www.youtube.com/@upskillnexus">
                    <Button _hover={{ bg: "rgba(0,0,0,0.1)" }} color="white" bg="md" size="sm">
                      <FaYoutube />
                    </Button>
                  </Link>

                  <Link to="https://in.pinterest.com/upskillnexus/">
                    <Button _hover={{ bg: "rgba(0,0,0,0.1)" }} color="white" bg="md" size="sm">
                      <FaPinterestP />
                    </Button>
                  </Link>
                </Flex>
              </Box>
            </Grid>
          </Box>
        </Flex>
        <Text mt="5" borderTop={"1px solid gray"} py="3" fontSize={"12px"} textAlign={"center"}>
          Copyright ©2023 All rights reserved | Website Design and Developed by Veblika
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
