import "./course.css";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Button, Grid, Image, Text, Badge, calc, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, useDisclosure } from "@chakra-ui/react";
import $ from "jquery";
import { BsClipboard2Data, BsClipboardData, BsFilter } from "react-icons/bs";
import { MdDownload, MdSecurity } from "react-icons/md";

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { hoverStyle } from "../../style/button.style";
import { DynamicModal } from "../../Components/Modal/DynamicModal";

const hoverEff = {
  background: "#dfdfdf",
  color: "white",
  cursor: "pointer",
};

const Courses = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeMen, setActiveMen] = useState("dataScience");

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [path, setPath] = useState("/data-science");

  const dataScience = [
    {
      image: "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-banners/ut-austin.jpg",
      name: "katill",
      programName: "PGP in Data Science and Business Analytics",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      duration: "12 Months • Online",
      badge: "DEDICATED CAREER SUPPORT",
    },
    {
      image: "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-banners/ut-austin.jpg",
      name: "katill",
      programName: "PGP in Data Science and Business Analytics",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      duration: "12 Months • Online",
      badge: "DEDICATED CAREER SUPPORT",
    },
    {
      image: "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-banners/ut-austin.jpg",
      name: "katill",
      programName: "PGP in Data Science and Business Analytics",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      duration: "12 Months • Online",
      badge: "DEDICATED CAREER SUPPORT",
    },
  ];
  const aiMachine = [
    {
      image: "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-banners/ut-austin.jpg",
      name: "katill",
      programName: "PGP in Data Science and Business Analytics",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      duration: "12 Months • Online",
      badge: "DEDICATED CAREER SUPPORT",
    },
    {
      image: "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-banners/great-lakes.jpg",
      name: "katill",
      programName: "PGP in Data Science and Business Analytics",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      duration: "12 Months • Online",
      badge: "DEDICATED CAREER SUPPORT",
    },
    {
      image: "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-banners/ut-austin.jpg",
      name: "katill",
      programName: "PGP in Data Science and Business Analytics",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      duration: "12 Months • Online",
      badge: "DEDICATED CAREER SUPPORT",
    },
  ];
  const cyberSec = [
    {
      image: "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-banners/ut-austin.jpg",
      name: "katill",
      programName: "PGP in Data Science and Business Analytics",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      duration: "12 Months • Online",
      badge: "DEDICATED CAREER SUPPORT",
    },
    {
      image: "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-banners/great-lakes.jpg",
      name: "katill",
      programName: "PGP in Data Science and Business Analytics",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      duration: "12 Months • Online",
      badge: "DEDICATED CAREER SUPPORT",
    },
    {
      image: "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-banners/pes.jpg",
      name: "katill",
      programName: "PGP in Data Science and Business Analytics",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      duration: "12 Months • Online",
      badge: "DEDICATED CAREER SUPPORT",
    },
  ];

  const [data, setData] = useState(dataScience);

  const sideIcon = [
    {
      title: "Digital Marketing Science",
      icon: <BsClipboardData />,
      type: "aiMachine",
    },
    {
      title: "Data Science & Business Analytics",
      icon: <BsClipboard2Data />,
      type: "dataScience",
    },
    {
      title: "Cyber Security",
      icon: <MdSecurity />,
      type: "cyberSec",
    },
  ];

  const checkType = (type) => {
    setActiveMen(type);

    if (type == "aiMachine") {
      setData(aiMachine);
      setPath("/ai-machine");
    } else if (type == "cyberSec") {
      setData(cyberSec);
      setPath("/cyber-security");
    } else if (type == "dataScience") {
      setData(dataScience);
      setPath("/data-science");
    } else {
      setData(dataScience);
      setPath("/data-science");
    }
  };

  return (
    <>
      <DynamicModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} initialRef={initialRef} finalRef={finalRef}>
        {/*  */}
        <Flex minH="80vh">
          <Box w="50%" bgImage="https://i.pinimg.com/564x/04/77/4b/04774ba2c606539d414b1aa8374bd1d3.jpg" backgroundSize="cover" />
          <ModalBody bg="#fff">
            <Flex py={6} h="full" flexDir={"column"} justify={"space-between"}>
              <Box>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Name" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="abc@gmail.com" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Phone No</FormLabel>
                  <Input placeholder="Phone No" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Age</FormLabel>
                  <Input placeholder="Age" />
                </FormControl>
              </Box>
              {/*  */}
              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </Flex>
          </ModalBody>
          {/*  */}
        </Flex>
        {/*  */}
      </DynamicModal>
      {/*  */}
      <Box px="8" mt="50px">
        <Flex gap={5} mt={{ base: "80px", md: 5 }} flexDir={{ base: "column", md: "row" }} align={"start"} justify={"space-between"}>
          <Flex flexDir="column" alignItems="center" textAlign="center">
            <Heading color="#b9292f" fontSize="40px" textAlign={{ base: "center", md: "center" }}>
              Get Upskilled <span style={{ color: "black" }}> with</span> Upskill Nexus
            </Heading>
            <Text w="80%">Upskill Nexus provides training in the most significant and demanding areas of Information Technology, including Cybersecurity, Data Analytics and Science, and Digital Marketing Science. Whether you are experienced in these fields already or just starting out, we are here to help. Our goal is to ensure that you have the skills and knowledge you need to succeed in the world of information technology. Get upskilled with Upskill Nexus and get ready for a rewarding IT career!</Text>
          </Flex>
          {/* <Button color="#b9292f" d="flex" gap="3" alignItems="center">
            Filter <BsFilter />
          </Button> */}
        </Flex>

        {/* Courses and siderbar */}
        <Flex mt={5} gap={3}>
          {/* Sider Bar Filters */}
          <Flex
            zIndex={"10"}
            transition="width 0.5s ease"
            bg="#fff"
            flexDir="column"
            gap="0px"
            w={{ base: isSidebarOpen ? "50%" : "10%", md: "30%" }}
            overflow={{ base: "hidden", md: "visible" }}
            onMouseLeave={() => {
              if (window.innerWidth <= 768) {
                setSidebarOpen(false);
              }
            }}
          >
            {sideIcon.map((ele, i) => (
              <Flex onClick={() => checkType(ele.type)} key={i} className={`sideItem ${ele.type == activeMen ? "active" : null}`} align="center" justify="space-between" p={2} _hover={hoverEff}>
                <Flex position={"relative"} gap={5} cursor={"pointer"} alignItems={"center"}>
                  {ele.icon}
                  <Text fontSize={{ base: isSidebarOpen ? "12px" : "0", md: "15px" }} display={{ base: isSidebarOpen ? "flex" : "none", md: "flex" }}>
                    {ele.title}
                  </Text>
                </Flex>
                <ChevronRightIcon />
              </Flex>
            ))}
          </Flex>

          {/* Courses */}
          <Grid
            gridTemplateColumns={{
              base: "repeat(1, 1fr)", // On smaller screens, one column
              md: "repeat(2, 1fr)", // On medium screens, two columns
              lg: "repeat(3, 1fr)", // On large screens, three columns
              xl: "repeat(3, 1fr)", // On extra-large screens, four columns
            }}
            width="100%"
            gap={{ base: "30px 15px", md: "30px 15px" }} // Adjust gap as needed
          >
            {data.map((ele, i) => (
              <Box key={i} borderRadius={"10px"} overflow={"hidden"} width={{ base: "100%", md: "100%" }} minH={"260px"} boxShadow="0 0 3px rgba(0,0,0,0.2)">
                <Image width={"100%"} position="relative" objectFit={"cover"} src={ele.image} />

                {/* <Link to={path}> */}
                <Box boxShadow={"inset -2px -5px 10px rgba(255,255,255,0.5)"} borderRadius="10px" height={calc("55%") + "20px"} position="relative" top="-0px" flexDir={"column"}>
                  <Box p="2">
                    <Heading size="md">{ele.programName}</Heading>
                    <Text>{ele.para.substring(0, 79)}...</Text>

                    <Text>{ele.duration}</Text>
                  </Box>
                  {/*  */}
                  <Flex mt="2" borderTop={"1px solid rgba(0,0,0,0.1)"} height="50px" alignItems="end" justify={"space-between"}>
                    <Button _hover={{ bg: "none" }} w="full" h="full" borderRadius={"0"} border={"1px solid none"} bg="none" color="#b9292f">
                      View Program
                    </Button>
                    <Button onClick={() => onOpen()} _hover={hoverStyle} w="full" h="full" borderRadius={"0"} bg="#b9292f" color="#fff">
                      Download <MdDownload />
                    </Button>
                  </Flex>
                  {/* <Badge bg="#00a84927" mt={1} py={1} px={3}>
                      {ele.badge}
                    </Badge> */}
                </Box>
                {/* </Link> */}
              </Box>
            ))}
          </Grid>
        </Flex>
      </Box>
    </>
  );
};

export default Courses;
