// src/components/TrainingPrograms.js

// import React, { useEffect } from 'react';
import { Box, Heading, Text, VStack, SimpleGrid, Button } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";

const programs = [
  {
    title: "Data Analytics and Science",
    description: "Analyze data in depth. Discover the art of extracting insights and making data-driven decisions.",
  },
  {
    title: "Software Development",
    description: "Create the future of web applications. Learn coding, databases, and interactive web design from scratch.",
  },
  {
    title: "Cyber Security",
    description: "Develop cybersecurity skills to protect organizations from digital threats.",
  },
  // {
  //     title: 'Cloud Computing',
  //     description: 'Gain hands-on skills in cloud resource management and optimization.',
  // },
  // {
  //     title: 'Artificial Intelligence and Machine Learning',
  //     description: 'Journey into the future with AI and ML. Create intelligent systems and predict trends in technology.',
  // },
];

const MotionBox = motion(Box);

const TrainingPrograms = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Start animations when the component has mounted
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const handleVisibilityChange = () => {
    // You can keep this function if needed
  };

  return (
    <VStack bg="#fff" spacing={2} align="center" id="training-programs" mt={{ base: "60px", md: "20px" }} p={5}>
      <Heading as="h1" fontSize="3xl" textAlign={"center"} color="#b9292f">
        Featured Training Programs
      </Heading>
      <Text textAlign={{ base: "justify", md: "center" }} w={{ base: "full", md: "80%" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cupiditate nam ex unde aliquam! Non error officiis quasi molestiae eaque minus tempora! Ullam itaque adipisci nihil autem velit, atque alias.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {programs.map((program, index) => (
          <VisibilitySensor key={index} onChange={handleVisibilityChange} partialVisibility>
            {({ isVisible }) => (
              <MotionBox p={4} textAlign="center" border="3px solid #b9292e49" borderRadius="lg" shadow="md" bg="white" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 30 }} animate={controls} transition={{ duration: 0.3 }} style={{ opacity: isVisible ? 1 : 0 }}>
                <Heading as="h3" size="md" mb={2} color="#b9292f">
                  {program.title}
                </Heading>
                <Text>{program.description}</Text>
                <Button bg="#b9292f" color="white" _hover={{ bg: "none", color: "#b9292f", border: "1px solid #b9292f" }}>
                  Get Career Handbook
                </Button>
              </MotionBox>
            )}
          </VisibilitySensor>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default TrainingPrograms;
