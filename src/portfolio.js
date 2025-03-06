/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aman Pathak",
  title: "Hi, I'm Aman",
  subTitle: emoji("I'm a Machine Learning Engineer with 3+ years of experience. My work has been featured in prestigious publications, Nature, ACM, and AMIA."),
  subTitle_1: "I have a hands-on experience in developing and deploying machine learning models to solve real-world problems.",

  resumeLink:
    "https://drive.google.com/file/d/1NKPCXWSJkkYlBoqUf0utgs59UpDWq5-n/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pathak-aman",
  linkedin: "https://www.linkedin.com/in/amanpathak2997/",
  gmail: "pathakaman2909@gmail.com",
  kaggle: "https://www.kaggle.com/amanpathak2909/",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // scholar: "https://scholar.google.com/citations?user=7NUTkQUAAAAJ&hl=en",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Natural Language Processing and Machine Learning",
  skills: [
    emoji("⚡ NLP & AI Development – Experienced in transformers, GPT models, LangChain, and prompt engineering to build intelligent language solutions."),
    emoji("⚡ Machine Learning & Data Science – Skilled in TensorFlow, PyTorch, Sklearn, statistical modeling, and feature engineering for predictive analytics."),
    emoji("⚡ MLOps & Deployment – Proficient in Docker, Kubernetes, MLflow, and CI/CD pipelines for scalable AI model deployment on AWS and Azure."),
    emoji("⚡ Full-Stack AI Solutions – Strong in Python, SQL, React, Flask, and Elasticsearch, developing end-to-end ML systems with real-world impact.")
  ],

  


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "ollama",
      imageSrc: require("./assets/images/icon_ollama.png")
    },
    {
      skillName: "openAI",
      imageSrc: require("./assets/images/icon_chatgpt.png")
    },
    {
      skillName: "docker",
      imageSrc: require("./assets/images/icon_docker.png")
    },
    {
      skillName: "keras",
      imageSrc: require("./assets/images/icon_keras.png")
    },
    {
      skillName: "TensorFlow",
      imageSrc: require("./assets/images/icon_tf.png")
    },
    {
      skillName: "PyTorch",
      imageSrc: require("./assets/images/icon_pytorch.png")
    },
    {
      skillName: "scikit-learn",
      imageSrc: require("./assets/images/icon_sklearn.png")
    },
    {
      skillName: "python",
      imageSrc: require("./assets/images/icon_python.png")
    },
    {
      skillName: "numpy",
      imageSrc: require("./assets/images/icon_numpy.png")
    },
    {
      skillName: "pandas",
      imageSrc: require("./assets/images/icon_pandas.png")
    },
    {
      skillName: "spaCy",
      imageSrc: require("./assets/images/icon_spacy.png")
    },
    {
      skillName: "LangChain",
      imageSrc: require("./assets/images/icon_langchain.png")
    },
    {
      skillName: "ElasticSearch",
      imageSrc: require("./assets/images/icon_es.png")
    },

    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Univeristy of Florida",
      logo: require("./assets/images/UF_logo.png"),
      subHeader: "Master of Science in Bioinformatics",
      duration: "August 2023 - December 2024",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Univeristy of Florida",
      logo: require("./assets/images/UF_logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2021 - May 2023",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    // {
    //   schoolName: "Medicaps University",
    //   logo: require("./assets/images/MU_logo.jpg"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "August 2016 - May 2020",
    //   // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Engineer",
      company: "Univeristy of FLorida",
      companylogo: require("./assets/images/UF_logo.png"),
      date: "Jun 2022 – Present",
      desc: "As an ML Engineer at UF, I develop advanced LLM solutions for clinical applications, optimizing patient care and research workflows. My work spans large-scale NLP models, predictive analytics, and automation in healthcare.",
    },
    {
      role: "Machine Learning Engineer",
      company: "Monsoon CreditTech",
      companylogo: require("./assets/images/Monsoon_1.png"),
      date: "Aug 2020 – Jul 2021",
      desc: "At Monsoon CreditTech, I built ML models for better credit risk assessment, deployed a scalable pipeline on Azure, and developed an NLP system to detect high-risk borrowers, reducing defaults and improving lending decisions."
    },
    {
      role: "Data Science Intern",
      company: "Hvantage Tech",
      companylogo: require("./assets/images/Hvan.jpg"),
      date: "Feb 2020 – Aug 2020",
      desc: "At Hvantage Tech Solutions, I worked on enhancing OCR and information extraction systems using computer vision and deep learning. My contributions improved text recognition accuracy and optimized data processing workflows."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured",
  projects: [
    {
      image: require("./assets/images/HOBI_award.jpg"),
      projectName: "First HOBI student to win award from UF International Center",
      projectDesc: "Honored with Outstanding Masters and Professional International Student Award on November 19 2024",
      footerLink: [
        {
          name: "Read Article",
          url: "https://hobi.med.ufl.edu/2024/12/09/first-hobi-student-to-win-award-from-international-center/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Features"),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "First HOBI student to win Outstanding Master's International Student Award",
      subtitle:
        "Honored with Outstanding Masters and Professional International Student Award on November 19 2024",
      image: require("./assets/images/HOBI_award.jpg"),
      footerLink: [
        {
          name: "Read Article",
          url: "https://hobi.med.ufl.edu/2024/12/09/first-hobi-student-to-win-award-from-international-center/"
        }
      ]
    },
    {
      title: "HOBI Education Day: Shark Tank winner",
      subtitle:
        "Aced the University of Florida's Bioinformatics department's Shark Tank competition with a winning idea for GatorGuide",
      image: require("./assets/images/Shark_Tank.jpg"),
      footerLink: [
        {
          name: "Read more",
          url: "https://hobi.med.ufl.edu/2024/04/04/hobi-education-day-showcases-student-success/#:~:text=The%20afternoon%20became,making%20by%20clinicians"
        },
        {
          name: "Check Project",
          url : "https://github.com/pathak-aman/GatorGuide"
        }
      ]
    },
    {
      title: "Winner of the Outstanding Poster Presentation Award",
      subtitle:
        "Recognized with the Outstanding Poster Presentation Award at the 2nd OneFlorida+ Al Conference, September 5th, 2024.",
      image: require("./assets/images/Aman_1FL.png"),
      footerLink: [
        {
          name: "Read Article",
          url: "https://hobi.med.ufl.edu/wordpress/files/2024/09/Aman-DSC_1907-600x400.png"
        },
        {
          name: "See Poster",
          url: "https://hobi.med.ufl.edu/wordpress/files/2024/09/Aman_Pathak_AI4Health_Poster.pdf"
        }
      ]
    },
    {
      title: "Top 8 finalist for the student paper competition in AMIA 2023",
      subtitle:
        "Selected as one of the Top 8 Student Paper in AMIA 2023 from a total of 163 student paper.",
      image: require("./assets/images/AMIA.jpg"),
      footerLink: [
        {
          name: "Read Paper",
          url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10785862/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Features",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),

  talks: [
    {
      title: "First HOBI student to win award from UF International Center",
      subtitle: "Honored with Outstanding Masters and Professional International Student Award on November 19 2024",
      image: require("./assets/images/nextuLogo.webp"),
      event_url: "https://hobi.med.ufl.edu/2024/12/09/first-hobi-student-to-win-award-from-international-center/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    emoji("Let's create something great together 🚀"),
  email_address: "pathakaman2909@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
