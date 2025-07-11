import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Jainil",
  lastName: "Rana",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer & Machine Learning Engineer",
  avatar: "/images/avatar.jpeg",
  email: "jainilrana503@gmail.com",
  location: "America/Toronto", // IANA time zone identifier for Ottawa
  locationLabel: "Ottawa, CA", // Display label
  languages: ["English", "Hindi", "Gujarati"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false, // Disabled newsletter for now
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ancjainil",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/jainil-rana",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building intelligent solutions with AI and software engineering</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">TalentMatchAI</strong></>,
    href: "/work/talentmatchai-generative-ai-job-matching",
  },
  subline: (
    <>
      I'm Jainil, a Software Engineer with a focus on Machine Learning and Generative AI. Currently pursuing an M.Eng. in Computer Engineering at the University of Ottawa with experience in cloud computing, AI-based applications, and data engineering.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // Disabled calendar for now
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Howdy ! I'm Jainil, a Software Engineer with a focus on Machine Learning and Generative AI. Currently pursuing an M.Eng. in Computer Engineering at the University of Ottawa with experience in cloud computing, AI-based applications, and data engineering. He has a strong foundation in both software engineering and machine learning, having worked on high-impact projects using AWS, Azure, and advanced machine learning frameworks like PyTorch and Scikit-learn.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "University of Ottawa",
        timeframe: "Jan 2025 – Apr 2025",
        role: "Machine Learning Engineer (Research Assistant)",
        achievements: [
          <>
            Refactored legacy Python scripts for processing multi-gigabyte time-series datasets, improving memory efficiency by 2.4x using NumPy, pandas, and joblib.
          </>,
          <>
            Improved the testability of ML workflows, enabling 3x faster iteration for research teams.
          </>,
        ],
        images: [],
      },
      {
        company: "JMC Moving",
        timeframe: "Sep 2024 – Dec 2024",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Developed an automated job scheduling system using Java, Spring Boot, and Azure, reducing employee assignment bottlenecks by 70%.
          </>,
          <>
            Implemented a cost estimation PDF generation system, improving retrieval efficiency by 40% using Azure Blob Storage.
          </>,
          <>
            Deployed the system using Docker, resolving deployment challenges and optimizing configurations for scalability.
          </>,
        ],
        images: [],
      },
      {
        company: "University of Ottawa",
        timeframe: "Sep 2024 – Dec 2024",
        role: "Teaching Assistant (Software Engineering)",
        achievements: [
          <>
            Mentored students in version control with Git, mobile app development with Android Studio, and object-oriented programming with Java, Spring-Boot, and Firebase.
          </>,
        ],
        images: [],
      },
      {
        company: "Aarogram Inc.",
        timeframe: "Jan 2023 – Jul 2023",
        role: "Software Engineer (Intern)",
        achievements: [
          <>
            Designed and developed an MVP frontend system for patient prior authorization, achieving HIPAA compliance and integrating with EHR and FHIR APIs.
          </>,
          <>
            Implemented backend automation using AWS services (EC2, S3, Lambda), improving operational efficiency by 40%.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of Ottawa, Ottawa, CA",
        description: <>M.Eng. in Computer Engineering (AI Concentration), GPA: 3.8/4.0 (Aug 2023 – Apr 2025)</>,
      },
      {
        name: "Charotar Institute of Science and Technology, Gujarat, IN",
        description: <>B.Tech in Computer Engineering, GPA: 3.7/4.0 (Aug 2019 – Apr 2023)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Python, Java, JavaScript, C++, SQL, Bash, MATLAB</>,
        images: [],
      },
      {
        title: "Machine Learning & AI",
        description: <>PyTorch, Scikit-learn, BERT, spaCy, Transformers, LangGraph, OpenAI (Embeddings, Chat Completions), Retrieval-Augmented Generation (RAG), LangChain</>,
        images: [],
      },
      {
        title: "Cloud Services",
        description: <>AWS (EC2, S3, Lambda, SageMaker, API Gateway), Azure (Blob Storage, App Services)</>,
        images: [],
      },
      {
        title: "Tools & Concepts",
        description: <>Docker, Git, Linux, Pandas, NumPy, TDD, Agile Development</>,
        images: [],
      },
    ],
  },
  awards: {
    display: true,
    title: "Awards & Achievements",
    achievements: [
      {
        title: "uOttaHack-6 Hackathon",
        description: <>Runners-up, 2024</>,
      },
      {
        title: "Geeks-for-Geeks",
        description: <>2nd place in the Problem of the Day (Jan 2024 – Apr 2024)</>,
      },
    ],
  },
  resume: {
    display: true,
    title: "Resume",
    description: "Download my latest resumes for ML/Data Science and Software Engineering roles. Each is tailored for the respective field.",
    mlLink: "/ML.pdf",
    seLink: "/SEG.pdf",
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI, ML, and software engineering...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `AI, ML, and software engineering projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
