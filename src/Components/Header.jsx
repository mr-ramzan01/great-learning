import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, IconButton, Image, Spacer, Stack, Text, background, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.jpg";
import { hoverStyle } from "../style/button.style";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineWhatsapp } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export const Header = () => {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 1153px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const flexStyles = {
    // flexDirection: isSmallerThanMd ? "column" : "row",
    display: isSmallerThanMd ? "none" : "flex",
    // alignItems: "center",
  };

  // const textStyles = {
  //     display: isSmallerThanMd ? "none" : "flex",
  //     fontWeight: "bold",
  //     mt: isSmallerThanMd ? 2 : 0,
  // };

  // const buttonStyles = {
  //     size: "sm",
  //     borderRadius: 0,
  //     px: isSmallerThanMd ? 2 : 8,
  //     bg: "none",
  //     mt: isSmallerThanMd ? 2 : 0,
  // };

  return (
    <>
      {/* <Box bg="white" boxShadow={"0 0 5px gray"}> */}
      <Flex w="full" alignItems="center" justify={"center"} bg="#b9292f" h={{ base: "auto", md: "50px" }}>
        <Flex direction={{ base: "row", md: "row" }} w={{ base: "95%", md: "95%" }} justify={{ base: "space-between", md: "space-between" }} alignItems={{ base: "center", md: "center" }}>
          <Flex gap={{ base: "2", md: "0px" }} alignItems={{ base: "center", md: "center" }} color="white">
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

          <Flex direction={{ base: "column", md: "row" }} gap={{ base: "0", md: "10px" }} alignItems={{ base: "center", md: "end" }} color="white">
            <Flex alignItems={"center"} gap={{ base: "2", md: "10px" }} px={{ base: "0", md: "3" }} borderRight={{ base: "none", md: "2px solid white" }}>
              <MdOutlineEmail /> info@upskillnexus.com
            </Flex>
            <Flex alignItems={"center"} gap={{ base: "2", md: "10px" }} px={{ base: "0", md: "3" }}>
              <FaPhoneAlt /> +91 9990952299
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex bg="white" zIndex={"999"} position={"sticky"} boxShadow={"0 0 5px gray"} top="-1px" as="header" align="center" justify="space-between" padding="1rem" flexDirection={{ base: "row", md: "row" }}>
        <Flex gap={"20px"}>
          <Link to="/">
            <Box>
              <Image width={{ base: "150px", md: "250px" }} src={logo} />
            </Box>
          </Link>
          <Spacer />
          <Flex align="center" fontWeight={"600"} gap={"25px"} textAlign="right" marginTop={{ base: "1rem", md: "0" }} style={flexStyles}>
            <Button _hover={hoverStyle} border={"1px solid #b9292f"} bg="none" color="#b9292f">
              Explore Programs
            </Button>

            <Link to="/">Home</Link>
            <Link _hover={{ background: "blue" }} to="/about">
              About
            </Link>
            <Link _hover={{ background: "blue" }} to="/course">
              Course
            </Link>
            <Link _hover={{ background: "blue" }} to="/">
              Career
            </Link>
            <Link _hover={{ background: "blue" }} to="/">
              Latest News
            </Link>
            <Link _hover={{ background: "blue" }} to="/">
              Contact Us
            </Link>
          </Flex>
        </Flex>

        <Box px={5}>
          <Button _hover={hoverStyle} border={"1px solid #b9292f"} bg="none" color="#b9292f" size="md" style={flexStyles} p="0 20px">
            Request Call Back
          </Button>
          {isSmallerThanMd &&
            (!isDrawerOpen ? (
              <IconButton
                borderRadius={0}
                bg="none"
                _focus={{ background: "none", boxShadow: "none" }}
                icon={<HamburgerIcon />}
                aria-label="Open Sidebar"
                onClick={() => setIsDrawerOpen(true)} // Open the sidebar
              />
            ) : null)}
        </Box>

        <Drawer placement="left" onClose={() => setIsDrawerOpen(false)} isOpen={isDrawerOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <Flex justify={"end"} m={3}>
              <Button size="sm" onClick={() => setIsDrawerOpen(false)} bg="red" color={"white"} borderRadius={0}>
                X
              </Button>
            </Flex>
            <DrawerBody>
              <Stack color="#b9292f" spacing={4}>
                <Button _hover={hoverStyle} border={"1px solid #b9292f"} bg="none" color="#b9292f">
                  Explore Programs
                </Button>
                <Button border={"1px solid #b9292f"} bg="none" _hover={hoverStyle} color="#b9292f">
                  Request Call Back
                </Button>
                <Link to="/">Career Support</Link>
                <Link to="/about">Success Stories</Link>
                <Link to="/contact">Study Abroad</Link>
                <Link to="/contact">Enterprice</Link>
                <Link to="/contact">For Recruiters</Link>
                <Link to="/contact">For More</Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
      {/* </Box> */}
    </>
  );
};
