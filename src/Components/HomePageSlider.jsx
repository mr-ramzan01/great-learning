import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.css";
import { Link } from "react-router-dom";

const HomePageSlider = () => {
  const data = [
    {
      title: "RISE ABOVE THE REST",
      heading: "Your Path To A Digitech-Driven Successful Career Starts Here",
      pera: "Our Mission: To Create the Digitech Leaders of Tomorrow",
      img: "/img1.jpg",
      buttonText: 'Learn More',
      link: '/about',
    },
    {
      title: "BUILD EXPERTISE WITH",
      heading: "The Most Trusted Name in Cybersecurity Training",
      img: "/img2.jpg",
      buttonText: 'Explore More',
      link: '/about',
    },
    {
      title: "GAIN CONFIDENCE WITH",
      heading: "The Best Employability Skills Program",
      img: "/img3.jpg",
      buttonText: 'Explore More',
      link: '/programs',
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
        <Carousel controls={false} style={{ border: "1px solid none" }}>
          {data.map((ele) => (
            <Carousel.Item key={ele.id}>
              <Flex p={{ base: "30px 0", md: "" }} flexDir={{ base: "column-reverse", md: "row" }} border="1px solid none" justify="space-between" align="center" width={"100%"}>
                <Box textAlign={{ base: "center", md: "start" }} p={8} width={{ base: "100%", md: "50%" }}>
                  <Text lineHeight={0}>{ele?.title}</Text>
                  <Heading fontSize="50px">{ele?.heading}</Heading>
                  <Text>{ele?.pera}</Text>
                  <Link to={ele?.link}>
                  <Button style={{ background: "none", color: "#b9292f", border: "2px solid #b9292f"}}>
                    {ele?.buttonText}
                  </Button>
                  </Link>
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
