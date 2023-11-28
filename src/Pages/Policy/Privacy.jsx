import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const pData = [
  {
    h: "LEGAL BASIS FOR PROCESSING DATA",
    p: [
      { content: "We process your data on the basis of the following:" },
      {
        content:
          "Your explicit consent for processing your data (as mentioned in Section 2 below), and for the purposes mentioned in Section 4 below",
      },
      {
        content:
          "For the performance of contracts entered into by you for providing any of the Services; and Our legitimate interests, i.e. registering and administering accounts on our Services to provide you access to all content, updates and services you have purchased, and to facilitate the efficient running and operation of our business.",
      },
    ],
  },
  {
    h: "WHAT DATA WE COLLECT",
    p: [
      {
        content:
          "We collect certain data from you directly, like the information you enter yourself, data about your participation in courses, and data from third-party platforms you connect with Upskill Nexus. We also collect some data automatically, like information about your device and what parts of our Services you interact with or spend time using.",
      },
      { heading: "Data You Provide to Us" },
      {
        content:
          "We may collect different data from or about you depending on how you use the Services. Below are some examples to help you better understand the data we collect",
      },
      {
        content:
          "When you create an account and use the Services, including through a third-party platform, we collect the following data you provide directly:",
      },
      {
        content:
          "Account Data: In order to use certain features (like applying for a program), you need to create a user account. When you create or update your account, we collect and store the data you provide, like your Name, email address, password, city, program/courses you like to learn, IP address, work experience, industry where you work, phone number, and assign you a unique identifying number (“Account Data”).",
      },
      {
        content:
          "Shared Content: Parts of the Services let you interact with other users or share content publicly, including by sharing your e-portfolio, sharing your testimonial, sending messages to program managers, or posting photos or other work you upload. Such shared content may be publicly viewable by others depending on where it is posted.",
      },
      {
        content:
          "Program Data: When you enroll into a program, we collect certain data including which program, courses, assignments and quizzes you’ve started and completed; your exchanges with teaching assistants, answers to questions, and other items submitted to satisfy course requirements.",
      },
      {
        content:
          "Student Payment Data: If you make payments, we collect certain data about your payment (such as your name and email id) as necessary to process your payment. You must provide certain payment and billing data directly to our payment processing partners, including your name, credit card information, billing address, and zip code. For security, Upskill Nexus does not collect or store sensitive cardholder data, such as full credit card numbers or card authentication data.",
      },
      {
        content:
          "Sweepstakes, Promotions, and Surveys: We may invite you to complete a survey or participate in a promotion (like a contest, sweepstakes, or challenge), either through the Services or a third-party platform. If you participate, we will collect and store the data you provide as part of participation, such as your name, email address, or phone number. That data is subject to this Privacy Policy unless otherwise stated in the official rules of the promotion or in another privacy policy. The data collected will be used to administer the promotion or survey, including for notifying winners and distributing rewards. To receive a reward, you may be required to allow us to post some of your information publicly (like on a winner’s page). Where we use a third-party platform to administer a survey or promotion or feedback, the third party’s privacy policy will apply.",
      },
      {
        content:
          "Communications and Support: If you contact us for support or to report a problem or concern (regardless of whether you have created an account), we collect and store your contact information, messages, and other data about you like your name, email address, location, and any other data you provide or that we collect through automated means (which we cover below). We use this data to respond to you and research your question or concern, in accordance with this Privacy Policy.",
      },
      {
        content:
          "The data listed above is stored by us and associated with your account.",
      },
    ],
  },
  {
    h: "HOW WE GET DATA ABOUT YOU?",
    p: [
      {
        content:
          "We use tools like cookies, web beacons, analytics services, and advertising providers to gather the data listed above. Some of these tools offer you the ability to opt out of data collection.",
      },
      { heading: "Cookies and Data Collection Tools" },
      {
        content:
          "As detailed in our Cookie Policy, Upskill Nexus and service providers acting on our behalf (like Google Analytics and third party advertisers) use server log files and automated data collection tools like cookies, tags, scripts, customized links, device or browser fingerprints, and web beacons (together, “Data Collection Tools”) when you access and use the Services. These Data Collection Tools automatically track and collect certain System Data and Usage Data (as detailed in Section 1) when you use the Services. In some cases, we tie data gathered through those Data Collection Tools to other data that we collect as described in this Privacy Policy.",
      },
      {
        content:
          "We use cookies for things like analysing your use of the Services, personalizing your experience, making it easier to log into the Services, and recognizing you when you return. We use cookies for things like identifying whether a page was visited, identifying whether an email was opened, and advertising more efficiently by excluding current users from certain promotional messages or identifying the source of a new page visit.",
      },
      {
        heading2:
          "The types of cookies used by Upskill Nexus include:",
      },
      {
        content:
          "Essential Cookies: These cookies are essential for the basic functionalities offered by the Site and Service(s). These class of cookies helps in keeping a user logged in to the Service(s) and remember relevant information when they return to the Service(s).",
      },
      {
        content:
          "Insight Cookies: These are used for tracking the user activities within the Service(s), which in turn helps us in improving your user experience.",
      },
      {
        content:
          "Marketing Cookies: These are used for providing you with customized and interest-based ads based on your browsing behavior and other similar activities on our Websites.",
      },
      {
        content:
          "You can set your web browser to alert you about attempts to place cookies on your computer, limit the types of cookies you allow, or refuse cookies altogether. If you do, you may not be able to use some or all features of the Services, and your experience may be different or less functional.",
      },
      {
        heading:
          "Analytics",
      },
      {
        content:
          "We use the 3rd-party browser and mobile analytics services like Google Analytics, GetSiteControl, Zoho CRM. These services use Data Collection Tools to help us analyze your use of the Services, including information like the third-party website you arrive from, how often you visit, events within the Services, usage and performance data. We use this data to improve the Services, better understand how the Services perform on different devices and provide information that may be of interest to you.",
      },
      {
        heading:
          "Online Advertising",
      },
      {
        content:
          "We use third-party advertising services like Facebook, Google’s ad services, and other ad networks and ad servers to deliver advertising about our Services on other websites and applications you use. The ads may be based on things we know about you, like your Usage Data and System Data (as detailed in Section 1), and things that these ad service providers know about you based on their tracking data. The ads can be based on your recent activity or activity over time and across other sites and services and may be tailored to your interests.",
      },
      {
        content:
          "Depending on the types of advertising services we use, they may place cookies or other tracking technologies on your computer, phone, or other devices to collect data about your use of our Services, and may access those tracking technologies in order to serve these tailored advertisements to you. To help deliver tailored advertising, we may provide the service providers with your email address and content that you share publicly on the Services.",
      },
    ],
  },
  {
    h: "WHAT WE USE YOUR DATA FOR, AND HOW LONG WE STORE IT",
    p: [
      { heading: "How we use your data" },
      {
        content:
          "We use your data to do things like provide our Services, communicate with you, troubleshoot issues, secure against fraud and abuse, improve and update our Services, analyze how people use our Services, serve personalized advertising, and as required by law or necessary for safety and integrity.",
      },
      {
        content:
          "We use the data we collect through your use of the Services to:",
      },
      {
        content:
          "Provide and administer the Services, including to display customized content and facilitate communication with other users",
      },
      {
        content:
          "Process your requests and orders for programs, courses, specific services, information, or features",
      },
      {
        content:
          "Communicate with you about your account by:",
      },
      {
        content:
          "Responding to your questions and concerns",
      },
      {
        content:
          "Sending you administrative messages and information, including messages from instructors and teaching assistants, notifications about changes to our Service, and updates to our agreements",
      },
      {
        content:
          "Sending you information and in-app messages about your progress in courses, feedback about the course, referral / reward programs, new services, new features, promotions, newsletters, and other available courses (which you can opt out of at any time)",
      },
      {
        content:
          "Manage your account preferences",
      },
      {
        content:
          "Facilitate the Services’ technical functioning, including troubleshooting and resolving issues, securing the Services, and preventing fraud and abuse",
      },
      {
        content:
          "Solicit feedback from users",
      },
      {
        content:
          "Learn more about you by linking your data with additional data through third-party data providers or analyzing the data with the help of analytics service providers",
      },
      {
        content:
          "Identify unique users across devices",
      },
      {
        content:
          "Tailor advertisements across devices",
      },
      {
        content:
          "Improve our Services and develop new products, services, and features",
      },
      {
        content:
          "Analyze trends and traffic, track purchases, and track usage data",
      },
      {
        content:
          "Advertise the Services on third-party websites and applications",
      },
      {
        content:
          "As required or permitted by law; or",
      },
      {
        content:
          "As we, in our sole discretion, otherwise determine to be necessary to ensure the safety or integrity of our users, employees, third parties, the public, or our Services.",
      },
      {
        heading:
          "Criterion for Determining Data Retention Period",
      },
      {
        content:
          "It is not possible for us to determine a specific period for which we may retain your data. However, we will retain your data for longer than necessary, taking into account the following:",
      },
      {
        content:
          "The purpose(s) and use of your data, both now and in the future (such as whether it is necessary to continue to store that information in furtherance of our obligations under a contract with you, or to contact you in the future)",
      },
      {
        content:
          "Whether we have any legal obligation to continue processing your data (such as any record-keeping obligations imposed by any applicable law)",
      },
      {
        content:
          "Whether we have any further legal basis to continue processing your information (including your consent)",
      },
      {
        content:
          "Whether there is any relevant-agreed industry practice on how long such data should be retained",
      },
      {
        content:
          "The levels of risk and liability involved for us to continue holding the data",
      },
      {
        content:
          "The amount of difficulty we may face to ensure the data can be kept updated and accurate; and",
      },
      {
        content:
          "Any other circumstances (such as the nature and status of Upskill Nexus’s relationship with you).",
      },
    ],
  },
  {
    h: "WHO WE SHARE YOUR DATA WITH",
    p: [
      {
        content:
          "We share certain data about you with instructors and learning managers. We may also share your data as needed for security, legal compliance, or as part of a corporate restructuring. Lastly, we can share data in other ways if it is aggregated or disidentified or if we get your consent.",
      },
      {
        content:
          "We may share your data with third parties under the following circumstances or as otherwise described in this Privacy Policy:",
      },
      {
        content:
          "With Your Learning Consultants, Admissions and Upskill Nexus Team: We share data that we have about you with your Course Advisor / Admission Team, so they can suggest the right program or course for you. This data may include your city, country, email id, phone number, your work experience and other work-related information.",
      },
      {
        content:
          "With Your Instructors, Evaluators, Moderators: We share data that we have about you with instructors or teaching assistants for courses you enrol in so they can improve the course for you. Also this data will be used by them to understand your performance in the program and helps in evaluating you for the skills you gained in the program for the issuing of certificate from the respective college / university as per required from book keeping purpose.",
      },
      {
        content:
          "The information shared to them are your email id, phone number, your work experience, your performance related information, your activities on the learning management system.",
      },
      {
        content:
          "With Students, public and other mentors: If you’re a mentor or Instructor, we share data that we have about you with our students, program managers and employees of Upskill Nexus, so they can reach out to you to clarify questions or provide services to you. This data may include things like your name, email id, phone number, professional and education details, your activities on our website and learning management system.",
      },
      {
        content:
          "With Service Providers, Contractors, and Agents: We share your data with third-party companies who perform services on our behalf, like payment processing, and advertising services (including retargeted advertising). These service providers may access your personal data and are required to use it solely as we direct, to provide our requested service.",
      },
      {
        content:
          "For Security and Legal Compliance: We may disclose your data to third parties if we (in our sole discretion) have a good faith belief that the disclosure is:",
      },
      {
        content:
          "Permitted or required by law",
      },
      {
        content:
          "Requested as part of a judicial, governmental, or legal inquiry, order, or proceeding",
      },
      {
        content:
          "Reasonably necessary as part of a valid subpoena, warrant, or other legally-valid request",
      },
      {
        content:
          "Reasonably necessary to enforce our Terms of Use, Privacy Policy, and other legal agreements",
      },
      {
        content:
          "Required to detect, prevent, or address fraud, abuse, misuse, potential violations of law (or rule or regulation), or security or technical issues; or",
      },
      {
        content:
          "Reasonably necessary in our discretion to protect against imminent harm to the rights, property, or safety of Upskill Nexus, our users, employees, members of the public, or our Services.",
      },
      {
        content:
          "We may also disclose data about you to our auditors and legal advisors in order to assess our disclosure obligations and rights under this Privacy Policy.",
      },
      {
        content:
          "During a Change in Control: If Upskill Nexus undergoes a business transaction like a merger, acquisition, corporate divestiture, or dissolution (including bankruptcy), or a sale of all or some of its assets, we may share, disclose, or transfer all of your data to the successor organization during such transition or in contemplation of a transition (including during due diligence).",
      },
      {
        content:
          "After Aggregation/De-identification: we can disclose or use aggregate or de-identified data for any purpose.",
      },
      {
        content:
          "With Your Permission: with your consent, we may share data to third parties outside the scope of this Privacy Policy.",
      },
    ],
  },
  {
    h: "INFORMATION SECURITY",
    p: [
      {
        content:
          "Our Websites and Service(s) have industry standard security measures in place to protect against the loss, misuse, and alteration of the information under our control. When you provide us with sensitive information (such as credit card information or login credentials), we will encrypt that information via Secure Socket Layer (SSL).",
      },
      {
        content:
          "Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our Websites or via the Service(s) and any transmission is at your own risk. Once we receive your personal information, we will use strict procedures and security features to try to prevent unauthorized access.",
      },
      {
        content:
          "We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.",
      },
      {
        content:
          "Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.",
      },
      {
        content:
          "We use regular Malware Scanning.",
      },
      {
        content:
          "Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.",
      },
      {
        content:
          "All payment transactions are processed through secure gateway providers and are not stored or processed on our servers.",
      },
    ],
  },
  {
    h: "YOUR RIGHTS",
    p: [
      {
        content:
          "You have certain rights around the use of your data, including the ability to opt out of promotional emails, cookies, and collection of your data by certain analytics providers. You can update or terminate your account from within our Services, and can also contact us for individual rights requests about your personal data such to restrict our processing of your data, to erase all data we have stored about you, and the right to ask for the data to be provided to you/ported to any other service in a commonly used machine-readable format.",
      },
      {
        heading:
          "Your Choices about the Use of Your Data",
      },
      {
        content:
          "You can choose not to provide certain data to us, but you may not be able to use certain features of the services.",
      },
      {
        content:
          "To stop receiving promotional communications from us, you can opt out by using the unsubscribe mechanism in the promotional communication you receive or by changing the email preferences in your account. Note that regardless of your email preference settings, we will send you transactional and relationship messages regarding the Services, including administrative confirmations, order confirmations, important updates about the Services, and notices about our policies.",
      },
      {
        content:
          "The browser or device you use may allow you to control cookies and other types of local data storage. Your wireless device may also allow you to control whether location or other data is collected and shared.",
      },
      {
        content:
          "To get information and control cookies used for tailored advertising from participating companies, see the consumer opt-out pages for the Network Advertising Initiative and Digital Advertising Alliance, or if you’re located in the European Union, visit the Your Online Choices site. To opt out of Google’s display advertising or customize Google Display Network ads, visit the Google Ads Settings page.",
      },
      {
        content:
          "To opt out of allowing Google Analytics, to use your data for analytics or enrichment, see the Google Analytics Opt-out Browser Add-on.",
      },
      {
        heading: "Accessing, Updating and Correcting, Porting and Deleting Your Personal Data"
      },
      {
        content: "You can access and update your personal data that Upskill Nexus collects and maintains as follows:"
      },
      {
        content: "To update data you provide directly, log into your account and update your account at any time."
      },
      {
        content: "Please note: even after your account is terminated, some or all of your data may still be visible to others, including without limitation any data that has been (a) copied, stored, or disseminated by other users (including in course comment); (b) shared or disseminated by you or others (including in your shared content); or (c) posted to a third-party platform. Even after your account is terminated, we retain your data for as long as we have a legitimate purpose to do so (and in accordance with applicable law), including to assist with legal obligations, resolve disputes, and enforce our agreements. We may retain and disclose such data pursuant to this Privacy Policy after your account has been terminated."
      },
      {
        content: ""
      },
    ],
  },
];

const Privacy = () => {
  return (
    <Flex py="5" bg="gray.50" flexDir={"column"} align="center">
      <Text fontSize={'40px'} textAlign={"center"}>Privacy Policy</Text>
      <Box w={{ base: "90%", md: "80%" }} p="5">
        <Text>
          We at Upskill Nexus respect your privacy and want you to understand
          how we collect, use, and share data about you. This Privacy Policy
          covers our data collection practices and describes your rights to
          access, correct, or restrict our use of your personal data
        </Text>
        <Text>
          Unless we link to a different policy or state otherwise, this Privacy
          Policy applies when you visit or use our website, mobile applications,
          APIs or related services (the “Services”).
        </Text>
        <Text>
          By using the Services, you agree to the terms of this Privacy Policy.
          You shouldn’t use the Services if you don’t agree with this Privacy
          Policy or any other agreement that governs your use of the Services.
        </Text>

        {/* <Heading size="lg">Information We Collect</Heading>
        <Text>We may collect various types of information, including but not limited to:</Text> */}

        <Flex flexDir="column" gap="20px">
          {pData.map((ele, i) => (
            <Box
              boxShadow={"md"}
              key={i}
              bg="gray.100"
              p="3"
              borderRadius={"5px"}
            >
              <Text fontSize="30px" color="gray.700">
                {ele.h}
              </Text>
              <Box>
                {ele?.p.map((el, i) => (
                  <Box key={i}>
                  
                    <Text fontSize={'25px'} maxW="99%">{el?.heading}</Text>
                    <Text maxW="99%">{el?.content}</Text>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Privacy;
