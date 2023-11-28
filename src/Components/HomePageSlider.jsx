import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.css";

const HomePageSlider = () => {
  const data = [
    {
      title: "RISE ABOVE THE REST",
      heading: "Your Path To A Tech-Driven Future Starts Here",
      pera: "Our Mission: To Prepare the Tech (IT) Leaders of Tomorrow",
      img: "/img1.jpg",
    },
    {
      title: "LEARN WITH",
      heading: "Open up the Door to Cybersecurity Excellence",
      pera: "Explore Our Cybersecurity Course",
      img: "/img2.jpg",
    },
    {
      title: "EARN YOUR MASTERS ABROAD",
      heading: "The Most Trusted Name in IT Training in India",
      pera: "Explore Our Cybersecurity Course",
      img: "/img3.jpg",
    },
    // {
    //   title: "ACCELERATE YOUR CAREER",
    //   heading: "Learn AI & ML from top universities",
    //   pera: "Get the promotion you deserve with latest skills in Artificial Intelligence & Machine Learning.",
    //   img: "/img3.jpg",
    // },
  ];

  return (
    <>
      <Flex align="center" flexDir={"column"} justify="center" minH={{ base: "10vh", md: "65vh" }}>
        <Carousel style={{ border: "1px solid none" }}>
          {data.map((ele) => (
            <Carousel.Item key={ele.id}>
              <Flex p={{ base: "30px 0", md: "" }} flexDir={{ base: "column-reverse", md: "row" }} border="1px solid none" justify="space-between" align="center" width={"100%"}>
                <Box textAlign={{ base: "center", md: "start" }} p={8} width={{ base: "100%", md: "50%" }}>
                  <Text lineHeight={0}>{ele.title}</Text>
                  <Heading fontSize="50px">{ele.heading}</Heading>
                  <Text>{ele.pera}</Text>
                  <Button _hover={{ bg: "blue" }} style={{ background: "none", color: "#b9292f", border: "2px solid #b9292f" }}>
                    Explore More
                  </Button>
                </Box>

                <Image objectFit={"cover"} height="400px" src={ele.img} />
              </Flex>
            </Carousel.Item>
          ))}
        </Carousel>
      </Flex>
    </>
  );
};

export default HomePageSlider;
