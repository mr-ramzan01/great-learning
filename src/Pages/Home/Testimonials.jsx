import { Box, Button, Container, Flex, Grid, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineWhatsapp } from "react-icons/md";
import { TestimonialContent } from "../../Components/TestiMonial";

const Testimonials = () => {
  const data = [
    {
      name: "Hrithik Roshan",
      title: "After graduating from college, I was unsure of how to begin my career in tech. Cyber Wisdom's Cyber Security course changed my life. Despite my lack of experience, thanks to their job readiness focus, I was able to secure a fantastic position. I can't thank them enough ~ Rajiv Dutt.",
      image: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_09/story_9815/assets/2.jpeg?time=1664540733&size=*:900",
    },
    {
      name: "Emraan Hashmi",
      title: "I was stuck in a boring job I didn't enjoy, and I needed a change. Cyber Wisdom's Cloud Computing course transformed my career. I now work in a field I'm passionate about. I'm finally excited to go to work every day ~ Anjana Sharma",
      image: "https://wallpapers.com/images/hd/emraan-hashmi-black-tie-rza6029vsvgutk7c.jpg",
    },
    {
      name: "Esha Gupta",
      title: "I had been exploring online tech courses for a while, but Cyber Wisdom stood out. Their Data Analytics and Science program was an eye-opener. Learning became so much easier because they made complex ideas simple ~ Akshit Bhatia.",
      image: "https://i.pinimg.com/originals/76/50/af/7650af844a898a0905e5f71bbf2d4d5f.jpg",
    },
  ];

  return (
    <Flex align="center" flexDir="column" p={5} w="100%" bg="#f8f8f8">
      <Flex flexDir="column" textAlign={"center"} w="80%">
        <Heading color="#b9292f" as="h2" px={2}>
          Testimonials
        </Heading>
        <Text size="sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ducimus, nisi voluptas reprehenderit, soluta dolores architecto exercitationem accusamus eligendi incidunt voluptatum ad nesciunt a error dicta similique quas eius rem.</Text>
      </Flex>
      {/* <Carousel> */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={0}
        justifyContent="center"
        alignItems="center"
      >
        {data.map((ele, index) => (
          <Container maxW={"4xl"} py={5} as={Stack} spacing={6}>
            <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 10, md: 4, lg: 10 }}>
              <TestimonialContent
                key={index}
                heading={ele.name}
                text={ele.title}
                // avatar={{
                //   src: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                //   name: "Jane Cooper",
                //   title: "CEO at ABC Corporation",
                // }}
              />
            </Stack>
          </Container>
        ))}
      </Grid>
    </Flex>
  );
};

export default Testimonials;
