import React from "react";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Aimachine = () => {
  const learningObjectives = [
    {
      description: "Gain a deep understanding of AI and Machine Learning concepts, algorithms, and technologies.",
    },
    {
      description: "Acquire practical skills through hands-on projects and real-world applications.",
    },
    {
      description: "Develop the ability to design and implement AI and ML solutions.",
    },
    {
      description: "Master data analysis and data-driven decision-making.",
    },
    {
      description: "Explore the ethical and societal implications of AI and ML.",
    },
    {
      description: "Develop your AI & Machine Learning skills from beginner to proficient.",
    },
    {
      description: "Prepare for a rewarding career in AI & ML.",
    },
  ];

  const whyChoose = [
    {
      title: "Industry-Experts as Trainers",
      description: "Our AI & ML training program is led by industry experts with a wealth of experience in AI and Machine Learning. They bring real-world insights and practical knowledge to the training room.",
    },
    {
      title: "Hands-On Learning",
      description: "Our curriculum is designed to be interactive, with hands-on projects that allow you to apply what you learn in real-world scenarios.",
    },
    {
      title: "Job Placement Assistance",
      description: "Our career support team can help you find job opportunities and prepare for interviews, so you can land those jobs.",
    },
    {
      title: "Comprehensive Curriculum",
      description: "Our 12-month program covers all the key aspects of AI & ML. From the basics to advanced topics, you'll gain a deep understanding of the field.",
    },
    {
      title: "Online Flexibility",
      description: "With our online format, you have the flexibility to learn at your own pace from anywhere in the world.",
    },
    {
      title: "Practical Projects",
      description: "Learning theory is important, but so is applying that knowledge. You'll work on real projects that showcase your skills and make you job-ready.",
    },
  ];

  const programCurriculum = [
    {
      title: "Introduction to AI & Machine Learning",
      topics: ["Understanding AI and ML", "History and Evolution", "Applications in Various Industries"],
    },
    {
      title: "Mathematics for AI",
      topics: ["Linear Algebra and Calculus", "Probability and Statistics", "Optimization Techniques"],
    },
    {
      title: "Machine Learning Fundamentals",
      topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation and Selection"],
    },
    {
      title: "Deep Learning and Neural Networks",
      topics: ["Neural Network Basics", "Convolutional and Recurrent Networks", "Deep Learning Frameworks"],
    },
    {
      title: "Data Preprocessing and Feature Engineering",
      topics: ["Data Collection and Cleaning", "Feature Extraction and Transformation", "Handling Missing Data"],
    },
    {
      title: "Model Deployment and Production",
      topics: ["Model Deployment Strategies", "Building a Scalable AI System", "Ethics and Bias in AI"],
    },
    {
      title: "Practical Projects",
      topics: ["Hands-on Projects Applying AI and ML Concepts", "Real-world Problem-Solving", "Collaboration and Peer Review"],
    },
  ];

  const testimonialData = [
    {
      text: "* The hands-on approach, expert trainers, and practical projects provided me with the skills and confidence to secure a job in the AI industry. I can't thank Teckostar enough for this transformative experience ",
      author: "Prakash Mehta",
      imageSrc: "https://thumbs.dreamstime.com/z/real-people-portraits-hand-drawn-flat-style-vector-design-concept-illustration-men-male-faces-shoulders-avatars-flat-style-218399493.jpg",
    },
    {
      text: "Teckostar's course in AI & Machine Learning is a gem. The curriculum is well-structured, and the trainers are not just knowledgeable but also incredibly supportive",
      author: "Raj Patel",
      imageSrc: "https://static.vecteezy.com/system/resources/previews/004/492/690/original/real-people-portraits-hand-drawn-flat-style-design-concept-illustration-of-men-male-faces-and-shoulders-avatars-flat-style-icons-set-modern-beautiful-avatar-of-man-vector.jpg",
    },
    {
      text: "The job placement assistance I received after the course was invaluable. I'm now working in a role I'm truly passionate about ",
      author: "Rubina Patil",
      imageSrc: "https://img.freepik.com/premium-vector/happy-female-character-leading-healthy-lifestyle-drinking-water-eating-fruits-dieting-woman-training-exercising-improvement-organism-health-nutrition-balance-vector-flat_87689-2297.jpg?size=626&ext=jpg",
    },
  ];

  const bgImg = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg)";

  return (
    <>
      <Flex position={{ base: "relative", md: "sticky" }} zIndex={-1} top="0" h="80vh" bgImage={bgImg} bgSize="cover" bgRepeat="no-repeat" bgPos="center" w="100%" display="flex" align="center" justify="center">
        <Box p="5" width="80%" height="350px" bg="rgba(255,255,255,0.5)" borderRadius={3}>
          {/* Your content inside the white box */}
          <Flex justify={"space-between"} m="2">
            <Image h="30px" w="120px" src="https://d1vwxdpzbgdqj.cloudfront.net/learning-partners/new-logo/utaustin-1.png" />
            <Flex gap="30px">
              <Flex align={"center"} justify="center" gap="10px">
                <Image w="30px" src="https://d1vwxdpzbgdqj.cloudfront.net/learning-partners/new-logo/tenYears.png" />
                <Text fontWeight={"bold"} fontSize="12px">
                  YEARS OF EXCELLENCE
                </Text>
              </Flex>
              <Flex align={"center"} justify="center" gap="10px">
                <Image w="40px" src="https://d1vwxdpzbgdqj.cloudfront.net/learning-partners/new-logo/batches.png" />
                <Text fontWeight={"bold"} fontSize="12px">
                  SUCCESSFUL BATCHES
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Box mt="8">
            <Heading size="lg">Artificial Intelligence and Machine Learning Course</Heading>
            <Flex gap="10px" mt="8">
              <Button w="50%" bg="#ff9b02" color="white">
                Download Course Curriculum
              </Button>
            </Flex>
            <Flex mt="8" fontSize={"12px"}>
              Application closes in: 1-Day : <Text color="orange"> 12-Hrs :46-Min : 53-secs </Text>
            </Flex>
          </Box>
        </Box>
      </Flex>

      {/* An Overview of Data Science and Analytics */}
      <Flex bg="white" align={"center"} justify="center" bg="gray.50" minH="60vh">
        <Box w="80%" p="5" textAlign={"center"}>
          <Heading>An Overview of Artificial Intelligence and Machine Learning </Heading>
          <Text textAlign={"justify"}>Today, Artificial Intelligence (AI) and Machine Learning (ML) are like the superheroes of innovation. They transform industries, change how things work, and influence our everyday lives. Teckostar proudly presents its flagship course: the AI & Machine Learning Program. This course is designed to help you gain the skills and knowledge to succeed in this dynamic field. Our AI & Machine Learning Course is like your ticket to a future full of exciting opportunities. In this course, {"you'll"} understand the magic of AI and Machine Learning. It's not just about theory; you'll also work on real-life projects to see how it all works in practice. Are you ready to explore this fascinating world of AI and machine learning? For a complete understanding of what you will learn during our AI & ML course, please click the “Download Course Curriculum” link below.</Text>
        </Box>
      </Flex>

      {/* Why Choose Us ? */}
      <Flex p="5" bg="white" direction="column" flexDir={"column"} align="center">
        <Heading size="lg">Why Choose Us ?</Heading>
        {whyChoose.map((item, index) => (
          <Box w="80%" key={index} bg="white" p={4} borderRadius="lg" boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" mb={4}>
            <Text fontWeight="bold">{item.title}</Text>
            <Text>{item.description}</Text>
          </Box>
        ))}
      </Flex>
      {/*  */}

      {/* Learning Objectives */}
      <Flex p="8" gap="20px" flexDir="column" align="center" bg="gray.50">
        <Heading size="lg">Learning Objectives</Heading>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={4}>
          {learningObjectives.map((ele, index) => (
            <Flex bg="white" p="2" key={index} align={"center"} borderRadius={"md"} gap="15px" boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)">
              <Text px="3" w={"80%"}>
                {ele.description}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>

      {/* Admission Process */}
      <Flex bg="white" justify="space-between" align="center" p={4}>
        <Box flex="1" px="8">
          <Text fontSize="xl" fontWeight="bold">
            Admission Process
          </Text>
          <Text>
            1) Fill out the following form or call us directly at our mobile number.
            <br />
            2) Let our executive know why you want to take this course, and we will let you know if you will be a good fit.
            <br />
            3) Pay the admission fee to reserve your seat.
          </Text>
        </Box>
        <Image src="https://cache.careers360.mobi/media/presets/860X430/article_images/2019/10/1/Maharashtra-Polytechnic-Admissions.webp" alt="Image" h="300px" />
      </Flex>
      {/*  */}

      {/* Program Curriculum */}
      <Flex bg="white" flexDir="column" gap="15px" p="3" align="center">
        <Heading size="lg" fontWeight="bold" mt={4}>
          Program Curriculum
        </Heading>
        <Flex gap="10px" w="90%" justify="space-between">
          <Box w="50%" h="100%" position="sticky" top="100px">
            <Image src="https://demo-saas.worksuite.biz/saas/img/svg/mock-1.svg" objectFit="cover" h="100%" w="100%" />
          </Box>

          <Box w="50%">
            <Accordion allowToggle bg="red">
              {programCurriculum.map((section, index) => (
                <AccordionItem key={index} bg={index % 2 === 0 ? "gray.50" : "white"}>
                  <AccordionButton>
                    <Box flex="1" textAlign="start">
                      {section.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel bg={index % 2 === 0 ? "gray.50" : "white"}>
                    <SimpleGrid w="100%">
                      {section.topics.map((topic, topicIndex) => (
                        <Text textAlign="start" key={topicIndex}>{`● ${topic}`}</Text>
                      ))}
                    </SimpleGrid>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Flex>
      </Flex>

      {/* Testimnials */}
      <Flex bg="white" flexDir={"column"} gap="10px" justify="space-between" align="center" p={4}>
        <Heading size={"lg"}>Testimonials</Heading>
        {testimonialData.map((testimonial, index) => (
          <Flex key={index} w="60%" bg={index % 2 === 0 ? "gray.50" : "white"} direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }} align="center" gap="10px" p={4}>
            <Box flex="1" p="5" w="50%">
              <Text>{testimonial.text}</Text>
              <Text fontWeight={"bold"}>- {testimonial.author}</Text>
            </Box>
            <Image src={testimonial.imageSrc} alt="Image" h="350px" w={{ base: "100%", md: "auto" }} />
          </Flex>
        ))}
      </Flex>
      {/*  */}
    </>
  );
};

export default Aimachine;
