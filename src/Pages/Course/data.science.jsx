import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Datascience = () => {
  const cardData = [
    {
      name: "John Doe",
      imageSrc: "https://olympus.mygreatlearning.com/images/thumbnails/6423546/Pq6GPp7qI9I9DjcmvQvCNjWIS9DuesUUYvmzYD33",
      hikePercentage: "12%",
      additionalData: "Business Development Executive",
      company: "Magic Software",
      course: "Data Analyst",
      bg: "#f2fbf9",
    },
    {
      name: "Kamini Sahu",
      imageSrc: "https://olympus.mygreatlearning.com/images/thumbnails/6423546/Pq6GPp7qI9I9DjcmvQvCNjWIS9DuesUUYvmzYD33",
      hikePercentage: "12%",
      additionalData: "Testing Trainee",
      company: "Dynamo Consulting Services Limited",
      course: "Associate Business Analyst",
      bg: "#f8eaeb",
    },
    {
      name: "Vignesh Ramana",
      imageSrc: "https://olympus.mygreatlearning.com/images/thumbnails/6423546/Pq6GPp7qI9I9DjcmvQvCNjWIS9DuesUUYvmzYD33",
      hikePercentage: "12%",
      additionalData: "Digital Associate",
      company: "Amazon",
      course: "Business Analyst",
      bg: "#e7f0fc",
    },
    {
      name: "Rajat Dekate",
      imageSrc: "https://olympus.mygreatlearning.com/images/thumbnails/6423546/Pq6GPp7qI9I9DjcmvQvCNjWIS9DuesUUYvmzYD33",
      hikePercentage: "12%",
      additionalData: "Entrepreneur",
      company: "MMKR POLYPLAST PVT. LTD.",
      course: "Associate Business Analyst",
      bg: "#f8eaeb",
    },
  ];

  const boxData = [
    {
      heading: "Box 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      heading: "Box 2",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      heading: "Box 3",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      heading: "Box 4",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];
  const dataScienceSkills = [
    {
      description: "Develop a deep understanding of data analysis techniques, including data cleaning, exploration, and visualization.",
    },
    {
      description: "Learn to create compelling data visualizations using tools like Python, R, and Tableau, to effectively communicate your findings.",
    },
    {
      description: "Understand how to work with large datasets using technologies like Hadoop and Spark, and perform distributed data processing.",
    },
    {
      description: "Acquire a strong foundation in statistics, enabling you to make informed decisions and conduct hypothesis testing.",
    },
    {
      description: "Develop programming skills in languages such as Python and R, making you capable of implementing data science solutions.",
    },
    {
      description: "Understand the ethical considerations and data privacy regulations that guide responsible data handling and analysis.",
    },
    {
      description: "Learn how to manage data science projects effectively, including project scoping, timeline management, and resource allocation.",
    },
    {
      description: "Develop problem-solving skills essential for tackling complex data challenges and making strategic decisions based on data insights.",
    },
  ];
  const whyChoose = [
    {
      title: "Expert Trainers",
      description: "Our course is led by seasoned industry experts in the field of data science and analytics. The trainers bring a wealth of industry experience, advanced degrees, and industry certifications.",
    },
    {
      title: "Practical Experience",
      description: "Our course is designed to provide hands-on, practical experience through real-world projects and case studies.",
    },
    {
      title: "Industry-Relevant Curriculum",
      description: "Our curriculum is carefully curated to align with current industry needs and trends. We cover the latest tools, techniques, and technologies that employers are seeking.",
    },
    {
      title: "Job Placement Assistance",
      description: "We offer comprehensive job placement assistance, including resume building, interview preparation, and access to our network of industry connections.",
    },
    {
      title: "Small Class Sizes",
      description: "We maintain small class sizes to ensure personalized attention and a supportive learning environment.",
    },
    {
      title: "Certifications and Accreditation",
      description: "Teckostar is proud to offer accredited courses that meet the highest industry standards. Our certifications are recognized and respected by employers countrywide.",
    },
  ];
  const programCurriculum = [
    {
      section: "Python For Data Science",
      topics: ["Essential data science libraries like NumPy, Pandas, Matplotlib, Seaborn. Exploratory Data Analysis using Python", "Data Visualization using Python"],
    },
    {
      section: "Statistical Methods for Decision Making",
      topics: ["Descriptive Statistics - Data collection, presentation and visuals, measures of central tendency, dispersion and correlation", "Inferential Statistics - Introduction to probability and distributions", "Hypothesis testing and estimation"],
    },
    {
      section: "Advanced Statistics",
      topics: ["Basics of ANOVA, ANOVA with interaction effects", "Exploratory Data Analysis (EDA)", "Principal Component Analysis"],
    },
    {
      section: "Data Mining",
      topics: ["Clustering (Hierarchical and non-hierarchical)", "Decision Trees (CART)", "Random Forest", "Artificial Neural Networks", "Model Performance Measures"],
    },
    {
      section: "Predictive Modelling",
      topics: ["Linear Regression", "Logistic Regression", "Linear Discriminant Analysis"],
    },
    {
      section: "Machine Learning",
      topics: ["KNN", "Naive Bayes", "Ensemble Techniques Week 2: Cross-validation", "Handling unbalanced data & Missing Values", "Text Mining and Sentiment Analysis"],
    },
    {
      section: "Time Series Forecasting",
      topics: ["What is a Time Series?", "Trend, Seasonality", "Time Series in Python", "Autoregressive Models", "ARIMA / SARIMA AND ARIMAX / SARIMAX"],
    },
    {
      section: "Data Visualization Using Tableau",
      topics: ["Tableau Introduction, Installation and Setup, Data Connection", "Data Visualization using Tableau", "Dashboard Creation and Story Telling"],
    },
    {
      section: "Structured Query Language (SQL)",
      topics: ["Introduction to SQL", "Installation and Setup and SQL Basic Operations", "SQL Joins", "Operators in SQL", "Window Functions and Sub Query writing"],
    },
    {
      section: "Tools",
      topics: ["PYTHON", "NUMPY", "PANDAS", "MYSQL", "SCIKIT LEARN", "JUPYTER", "GOOGLE ANALYTICS", "TABLEAU"],
    },
    {
      section: "CAPSTONE PROJECTS ROADMAP",
      topics: ["Project selection", "Student Mentor Meet and Project Discussion", "Submission & Student Mentor Meet", "Project Final Presentation to Panel", "Final Report Submission with Code File"],
    },
    {
      section: "Domain Exposures Projects",
      topics: ["Finance & Risk Analytics", "Retail Analytics", "Healthcare Analytics", "HR Analytics", "Telecommunication Sector", "Tourism Sector", "Web Analytics", "Statistics, Predictive Analytics using Python, Data Visualization, etc. with tools & languages"],
    },
  ];

  const testimonialData = [
    {
      text: "I can't thank Teckostar enough for the incredible Data Science & Analytics course. The trainers made difficult concepts easy to grasp. I now work as a data analyst, and it's all thanks to Teckostar",
      author: "Jawed Abdallah",
      imageSrc: "https://thumbs.dreamstime.com/z/real-people-portraits-hand-drawn-flat-style-vector-design-concept-illustration-men-male-faces-shoulders-avatars-flat-style-218399493.jpg",
    },
    {
      text: "Choosing Teckostar for my Data Science education was the best decision I ever made. The course is not only packed with practical content but also provides strong job placement support",
      author: "Akshit Sawhney",
      imageSrc: "https://static.vecteezy.com/system/resources/previews/004/492/690/original/real-people-portraits-hand-drawn-flat-style-design-concept-illustration-of-men-male-faces-and-shoulders-avatars-flat-style-icons-set-modern-beautiful-avatar-of-man-vector.jpg",
    },
    {
      text: "As a woman aspiring to enter the tech industry, I felt welcomed and supported throughout my Data Science course. The quality of training made this a life-changing experience",
      author: "Reema Soi",
      imageSrc: "https://img.freepik.com/premium-vector/happy-female-character-leading-healthy-lifestyle-drinking-water-eating-fruits-dieting-woman-training-exercising-improvement-organism-health-nutrition-balance-vector-flat_87689-2297.jpg?size=626&ext=jpg",
    },
  ];

  const bgImg = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg)";

  return (
    <>
      <Flex position={{ base: "relative", md: "sticky" }} zIndex={-1} top="0" bgSize="cover" bgRepeat="no-repeat" bgPos="center" bg={bgImg} h="80vh" w={"100%"} display="flex" align="center" justify="center">
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
            <Heading size="lg">Build a successful career in Data Science and Business Analytics</Heading>
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

      {/*  */}
      {/* <Flex justifyContent="space-around" padding="20px">
        <SimpleGrid columns={3} spacing={4}>
          <Flex gap="5" alignItems="center" bg="white" borderRadius="10px" boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" padding="20px">
            <Image src="https://d1vwxdpzbgdqj.cloudfront.net/aiml-pp-new/transition-icon.svg" alt="Image" h="50px" mb="10px" />
            <Box>
              <Text fontWeight="bold">66%</Text>
              <Text>Alumni Career Transitions</Text>
            </Box>
          </Flex>
          <Flex gap="5" alignItems="center" bg="white" borderRadius="10px" boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" padding="20px">
            <Image src="https://d1vwxdpzbgdqj.cloudfront.net/aiml-pp-new/hiring-partner-icon.svg" alt="Image" h="50px" mb="10px" />
            <Box>
              <Text fontWeight="bold">3000+</Text>
              <Text>Hiring Companies</Text>
            </Box>
          </Flex>
          <Flex gap="5" alignItems="center" bg="white" borderRadius="10px" boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" padding="20px">
            <Image src="https://d1vwxdpzbgdqj.cloudfront.net/aiml-pp-new/salary-hike-icon.svg" alt="Image" h="50px" mb="10px" />
            <Box>
              <Text fontWeight="bold">55%</Text>
              <Text>Avg Salary Hike</Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </Flex> */}

      {/* An Overview of Data Science and Analytics */}
      <Flex bg="white" align={"center"} justify="center" bg="gray.50" minH="60vh">
        <Box w="80%" p="5" textAlign={"center"}>
          <Heading>An Overview of Data Science and Analytics </Heading>
          <Text textAlign={"justify"}>Welcome to {"Teckostar's"} Data Science and Analytics program. In the 21st century, data has become super important. It's not just boring numbers; it's the most important thing for businesses. Being able to find valuable information from data is a skill that lots of companies want. All over the world, companies are using data to make good decisions, become better than their competitors, and think of new ideas. Data science and analytics are now part of everything in tech. People who work with data are like the architects of this change. They're the ones who look at all the information and turn it into useful ideas that help companies work better. Our Data Science and Analytics program isn't just about teaching you the basics; it's about getting you ready to do real work. We give you projects to work on, mentors to help you, and a community of learners to support you. Our lessons change as the world changes, and our trainers have lots of experience, so you're making a great investment in your future. Are you ready to explore this fascinating world of Data Science & Analytics? For a complete understanding of what you will learn during our Data Science & Analytics program, please click the “Download Course Curriculum” link below.</Text>
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
      <Flex bg="white" p="8" gap="20px" flexDir="column" align="center" bg="gray.50">
        <Heading size="lg">Learning Objectives</Heading>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={4}>
          {dataScienceSkills.map((ele, index) => (
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
        <Flex gap="10px" w="90%" justify={"space-between"}>
          <Box w="50%" h="100%">
            <Image src="https://demo-saas.worksuite.biz/saas/img/svg/mock-1.svg" />
          </Box>

          <Box w="50%">
            <Accordion allowToggle bg="red">
              {programCurriculum.map((section, index) => (
                <AccordionItem key={index} bg={index % 2 == 0 ? "gray.50" : "white"}>
                  <AccordionButton>
                    <Box flex="1" textAlign="start">
                      {section.section}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel bg={index % 2 == 0 ? "gray.50" : "white"}>
                    <SimpleGrid w="100%">
                      {section.topics.map((topic, topicIndex) => (
                        <Text textAlign={"start"} key={topicIndex}>{`● ${topic}`}</Text>
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
          <Flex key={index} w="60%" bg={index % 2 === 0 ? "gray.50" : "white"} direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }} align="center" p={4}>
            <Box flex="1" p="5">
              <Text>{testimonial.text}</Text>
              <Text>- {testimonial.author}</Text>
            </Box>
            <Image src={testimonial.imageSrc} alt="Image" h="300px" w={{ base: "100%", md: "auto" }} />
          </Flex>
        ))}
      </Flex>
      {/*  */}
    </>
  );
};

export default Datascience;
