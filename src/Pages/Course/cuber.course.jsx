import React from "react";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Cybercourse = () => {
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
      title: "Comprehensive Learning",
      description: "Our program covers the A to Z of cybersecurity, ensuring you have a solid understanding of this complex field, even if you're a complete beginner.",
    },
    {
      title: "Master the Art of Defense",
      description: "Our program equips you with the knowledge and skills to safeguard organizations against cyberattacks.",
    },
    {
      title: "Stay Up-to-Date",
      description: "Cyber threats change all the time. We keep you updated on the latest trends and techniques, so you're always one step ahead of cybercriminals.",
    },
    {
      title: "Certification",
      description: "When you complete our course, you'll receive a valuable certification that proves your expertise to potential employers.",
    },
    {
      title: "Career Opportunities",
      description: "Cybersecurity professionals are in high demand across various industries. Our program opens doors to exciting and well-paying career opportunities.",
    },
    {
      title: "Flexible Learning",
      description: "Our course is designed to accommodate all levels of expertise, making it accessible for beginners and experienced IT professionals alike.",
    },
    {
      title: "Real-World Experience",
      description: "Practical hands-on training and case studies prepare you for real-world challenges.",
    },
    {
      title: "Industry-Experienced Trainers",
      description: "Learn from accomplished cybersecurity professionals with years of experience in the field.",
    },
  ];
  const programCurriculum = [
    {
      title: "Science of Cyber-Security",
      topics: ["Attributes for Cyber-Security", "Guidance from other Sciences", "Security Degrades Over Time", "The Role of Secrecy", "Aspects of the Science of Cyber-Security", "Some Science", "Applying the Fruits of Science", "Metrics", "The Opportunities of New Technologies", "Experiments and Data"],
    },
    {
      title: "Cyber Safety Basics",
      topics: ["Introduction", "What is Cyber-safety?", "Cyber-safety Threats", "Consequences of Inaction", "Cyber-safety Actions", "Cyber-safety at Home and Work", "Compus Cyber-safety Services"],
    },
    {
      title: "Mounting Targeted Attacks for Cyber Espionage with Trojans and Social Engineering",
      topics: ["Phishing and spear phishing attacks", "Can a well-engineered network be broken into?", "Socially engineered email lures", "Trojans and surveillance software tools (R.A.T, R.C.S, etc.)", "Cyber espionage", "Exploiting browser vulnerabilities"],
    },
    {
      title: "Security Vulnerabilities of Mobile Devices",
      topics: ["What makes mobile devices less vulnerable to malware (to the extent that is the case) and Android’s “Verify Apps” security scanner", "Protection provided by sandboxing the apps", "Security (or lack thereof) provided by over-the-air encryption for cellular communications with a Python implementation of A5/1 cipher", "Side-channel attacks on specialized mobile devices", "Examples of side-channel attacks: fault injection attacks and timing attacks", "Python scripts for demonstrating fault injection and timing attacks", "USB devices as a source of deadly malware", "Mobile IP"],
    },
    {
      title: "Security Issues in Structured Peer-to-Peer Networks",
      topics: ["What are peer-to-peer (P2P) overlay networks", "Distributed hash tables (DHT)", "The Chord protocol", "The Pastry protocol", "The Kademlia Protocol", "The BitTorrent File Sharing Protocol", "Security Aspects of Structured DHT-Based P2P Protocols", "Anonymity in Structured P2P Overlay Networks", "An Answer to “Will I be Caught?”"],
    },
    {
      title: "An Introduction to Computer Security",
      topics: ["Elements of computer security", "Roles and responsibilities", "Common threats: a brief overview", "Computer security policy", "Computer security program management", "Computer security risk management", "Security and planning in the computer system life cycle"],
    },
    {
      title: "Unbreakable WiFi Security",
      topics: ["Network security and extended local wifi, cracking, hacking and many others IT."],
    },
    {
      title: "Modeling of Security Threats in SDN",
      topics: ["SDN Attack Surface", "SDN Threat Model", "Attacks Examples", "Unauthorized Access Using Password Brute-Forcing or Password-Guessing Attacks", "Unauthorized Access Using Remote Application Exploitation Attacks", "Unauthorized Disclosure of Information Using RAM Scraping Attacks", "Unauthorized Disclosure of Information Using API Exploitation Attacks", "Unauthorized Destruction Using API Exploitation Attacks", "Unauthorized Access Using Remote or Local Application Exploitation Attacks", "Unauthorized Disclosure of Information Using Traffic Sniffing Attacks", "Unauthorized Modification Using Identity Spoofing Attacks", "Disruption of Service Using Remote Application Exploitation Attacks", "Unauthorized Disclosure of Information Using Side Channel Attacks", "Disruption of Service Using Flooding Attacks", "Unauthorized Modification Using Data Forging Attacks", "SDN Threat Mitigation"],
    },
    {
      title: "Security of Ubiquitous Computing Systems",
      topics: ["The uniqueness of this book is the combination of important fields like the Internet of things and ubiquitous computing. It contains numerous examples, case studies, technical descriptions, scenarios, procedures, algorithms and protocols."],
    },
    {
      title: "Basic Vocabulary of Computer and Network Security",
      topics: ["Some Basic Vocabulary to Get Us Started", "Building Blocks of Classical Encryption Techniques", "Caesar Cipher", "The Swahili Angle ...", "Monoalphabetic Ciphers", "The All-Fearsome Statistical Attack", "Multiple-Character Encryption to Mask Plaintext Structure: 26 The Playfair Cipher", "Another Multi-Letter Cipher: The Hill Cipher", "Polyalphabetic Ciphers: The Vigenere Cipher", "Transposition Techniques"],
    },
    {
      title: "Wi-Fi security – WEP, WPA and WPA2",
      topics: ["Wi-Fi (Wireless Fidelity) is one of today’s leading wireless technologies, with Wi-Fi support being integrated into more and more devices: laptops, PDAs, mobile phones. However, one configuration aspect all too often goes unnoticed: security. Let's have a closer look at the level of security of encryption methods used in modern Wi-Fi implementations.", "What you will learn...", "The weaknesses of WEP encryption", "A global overview of the 802.11i standard and its commercial implementations: WPA and WPA2", "The basics of 802.1x", "The potential weaknesses of WPA and WPA2."],
    },
    {
      title: "Data Center Trends and Network Security Impact",
      topics: ["Introduction", "Perimeter Firewall", "Core Network Segmentation", "Virtualization", "Cloud Computing", "Software-Defined Network (SDN)", "Network Function Virtualization", "Additional Considerations for Service Providers"],
    },
    {
      title: "Web Security: Cross-Site Scripting and Other Browser-Side Exploits",
      topics: ["JavaScript for handling cookies in your browser", "Server-side cross-site scripting vs. client-side cross-site scripting", "Client-side cross-site scripting attacks", "Heap spray attacks", "The w3af framework for testing web applications"],
    },
    {
      title: "Web Security: Cross-Site Scripting and Other Browser-Side Exploits",
      topics: ["JavaScript for handling cookies in your browser", "Server-side cross-site scripting vs. client-side cross-site scripting", "Client-side cross-site scripting attacks", "Heap spray attacks", "The w3af framework for testing web applications"],
    },
    {
      title: "Web Security: PHP Exploits, SQL Injection, and the Slowloris Attack",
      topics: ["What do we mean by web security?", "PHP and its system program execution functions", "An example of a PHP exploit that spews out third-party spam", "MySQL with row-level security", "SQL Injection Attack", "The Slowloris Attack", "Protecting your web server with mod-security"],
    },
    {
      title: "Filtering Out Spam",
      topics: ["Spam and computer security", "How I read my email", "The acronyms MTA, MSA, MDA, MUA, etc.", "Structure of email messages", "How spammers alter email headers", "A very brief introduction to regular expressions", "An overview of procmail based spam filtering", "Writing Procmail recipes"],
    },
    {
      title: "The Basics of Cryptography",
      topics: ["Encryption and decryption", "What is cryptography?", "Strong cryptography", "How does cryptography work?", "Conventional cryptography", "Caesar’s Cipher", "Key management and conventional encryption", "Public key cryptography", "How PGP works", "Digital signatures", "Hash functions", "Digital certificates", "Certificate distribution", "Certificate formats", "PGP certificate format", "X.509 certificate format", "Validity and trust", "Certificate Revocation"],
    },
    {
      title: "Malware: Viruses and Worms",
      topics: ["Attributes of a virus", "Educational examples of a virus in Perl and Python", "Attributes of a worm", "Educational examples of a worm in Perl and Python", "Some well-known worms of the past", "The Conficker and Stuxnet worms", "How afraid should we be of viruses and worms?"],
    },
    {
      title: "Buffer Overflow Attack",
      topics: ["Services and Ports", "Why is the Buffer Overflow Problem So Important in Computer and Network Security", "A Case Study in Computer Security: The telnet Service", "Buffer Overflow Attack: Understanding the Call Stack", "Demonstration of Program Misbehavior Caused by Buffer Overflow", "Using gdb to Craft Program Inputs for Exploiting Buffer-Overflow Vulnerability", "Using Buffer Overflow to Spawn a Shell", "Buffer Overflow Defenses", "Homework Problems"],
    },
    {
      title: "Block Ciphers and the Data Encryption",
      topics: ["To introduce the notion of a block cipher in the modern context.", "To talk about the infeasibility of ideal block ciphers", "To introduce the notion of the Feistel Cipher Structure", "To go over DES, the Data Encryption Standard", "To illustrate some of the DES steps with Python code", "Contents", "Ideal Block Cipher", "The Feistel Structure for Block Ciphers", "DES: The Data Encryption Standard", "What Makes DES a Strong Cipher"],
    },
    {
      title: "Proxy-Server Based Firewalls",
      topics: ["The SOCKS protocol for anonymizing proxy servers", "Socksifying application clients", "The Dante SOCKS server", "Perl and Python scripts for accessing an internet server through a SOCKS proxy", "Squid for controlling access to web resources (and for web caching)", "The Harvest system for information gathering, indexing, and searching", "How to construct an SSH tunnel through a web proxy"],
    },
    {
      title: "AES The Advanced Encryption Standard",
      topics: ["To review the overall structure of AES and to focus particularly on the four steps used in each round of AES: (1) byte substitution, (2) shift rows, (3) mix columns, and (4) add round key.", "Python and Perl implementations for creating the lookup tables for the byte substitution steps in encryption and decryption.", "Python implementation of the Key Expansion Algorithms for the 128 bit, 192 bit, and 256 bit AES.", "Perl implementations for creating histograms of the differentials and for constructing linear approximation tables in attacks on block ciphers."],
    },
    {
      title: "Bots, Botnets, and the DDoS Attacks",
      topics: ["Bots and bot masters", "Command and communication needs of a botnet", "The IRC protocol and a command-line IRC client", "Freenode IRC network for open-source projects and the WeeChat IRC client", "Python and Perl code for a command-line IRC client", "Python and Perl code for a mini-bot that spews out spam", "DDoS attacks and strategies for mitigating against them", "Using IoT devices to launch crippling DDoS attacks"],
    },
    {
      title: "Packet Filtering Firewalls (Linux)",
      topics: ["Packet-filtering vs. proxy-server firewalls", "The four packet-filtering tables supported by iptables: filter, nat, mangle, and raw", "Creating and installing new firewall rules", "Structure of the filter table", "Connection tracking and extension modules", "Designing your own packet filtering firewall"],
    },
    {
      title: "DNS and the DNS Cache Poisoning Attack",
      topics: ["The Domain Name System", "BIND", "Configuring BIND", "Running BIND on your Ubuntu laptop", "Light-Weight Nameservers (and how to install them)", "DNS Cache Poisoning Attack", "Writing Perl and Python code for cache poisoning attacks", "Dan Kaminsky’s More Virulent DNS Cache Poisoning Attack"],
    },
    {
      title: "PGP, IPSec, SSL/TLS, and Tor Protocols",
      topics: ["Information Security for Network-Centric Applications", "Application Layer Security — PGP for Email Security", "IPSec – Providing Security at the Packet Layer", "SSL/TLS for Transport Layer Security", "The Tor Protocol for Anonymized Routing", "Homework Problems"],
    },
  ];

  const testimonialData = [
    {
      text: "* I was completely new to cybersecurity, but Teckostar's course made it all seem less intimidating. The trainers were fantastic",
      author: "Aditi Singha",
      imageSrc: "https://thumbs.dreamstime.com/z/real-people-portraits-hand-drawn-flat-style-vector-design-concept-illustration-men-male-faces-shoulders-avatars-flat-style-218399493.jpg",
    },
    {
      text: "I've been in IT for years, and I thought I knew cybersecurity. Teckostar's course opened my eyes to a world of in-depth knowledge and skills. Highly recommend it ",
      author: "Tusshar Singh",
      imageSrc: "https://static.vecteezy.com/system/resources/previews/004/492/690/original/real-people-portraits-hand-drawn-flat-style-design-concept-illustration-of-men-male-faces-and-shoulders-avatars-flat-style-icons-set-modern-beautiful-avatar-of-man-vector.jpg",
    },
    {
      text: "Teckostar's course not only helped me protect my business but also gave me confidence in my digital practices ",
      author: "Divyansh Thakral",
      imageSrc: "https://img.freepik.com/premium-vector/happy-female-character-leading-healthy-lifestyle-drinking-water-eating-fruits-dieting-woman-training-exercising-improvement-organism-health-nutrition-balance-vector-flat_87689-2297.jpg?size=626&ext=jpg",
    },
  ];

  const bgImg = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://www.hurix.com/wp-content/uploads/2022/01/Cyber-security.jpg)";
  return (
    <>
      <Flex bg={bgImg} position={{ base: "relative", md: "sticky" }} zIndex={-1} top="-50px" bgSize="cover" bgRepeat="no-repeat" bgPos="center" w="100%" h="100vh" display="flex" align="center" justify="center">
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
            <Heading size="lg">Get the Skills you Need to Succeed in the Cybersecurity Sector</Heading>
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
      <Flex bg="white" align={"center"} justify="center" minH="60vh">
        <Box w="80%" p="5" textAlign={"center"}>
          <Heading>An Overview of Cybersecurity </Heading>
          <Text textAlign={"justify"}>In {"today's"} interconnected world, where businesses and individuals rely on digital systems for virtually every aspect of their lives, the importance of cybersecurity cannot be underestimated. Cybersecurity is the practice of defending digital systems, networks, and sensitive data from cyber threats, such as hackers, malware, and cyberattacks. It is extremely costly to fail to protect digital assets in a world filled with cyber threats. Data breaches can lead to financial losses, damage to reputation, and legal repercussions. Moreover, the increasing skill level of cybercriminals means that the demand for skilled cybersecurity professionals is higher than ever. The Cybersecurity Course at Teckostar will help you learn all about Cybersecurity. This course is suitable for anyone looking to enter the cybersecurity industry. Are you ready to explore this fascinating world of Cybersecurity? For a complete understanding of what you will learn during our Cybersecurity program, please click the “Download Course Curriculum” link below.</Text>
        </Box>
      </Flex>

      {/* Why Choose Us ? */}
      <Flex bg="white" p="5" direction="column" flexDir={"column"} align="center">
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
      <Flex bg="white" p="8" gap="20px" flexDir="column" align="center">
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
        <Flex gap="10px" w="90%" justify="space-between">
          <Box w="50%" h="100%" position={"sticky"} top="100px">
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

export default Cybercourse;
