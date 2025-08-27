// Update your Experience

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}
export const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company",
    period: "2021 - Present",
    location: "San Francisco, CA",
    description:
      "Led the development of the company's main product, improving performance by 40%. Mentored junior developers and implemented best practices for scalable architecture.",
    achievements: [
      "Improved app performance by 40%",
      "Mentored 5+ junior developers",
      "Implemented CI/CD pipeline",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2018 - 2021",
    location: "New York, NY",
    description:
      "Developed responsive web applications for various clients. Worked with React, TypeScript, and various CSS frameworks to deliver pixel-perfect designs.",
    achievements: [
      "Delivered 20+ client projects",
      "Reduced load time by 35%",
      "Built reusable component library",
    ],
  },
  {
    title: "Junior Developer",
    company: "Startup Inc.",
    period: "2016 - 2018",
    location: "Austin, TX",
    description:
      "Started my career building UI components and fixing bugs. Gained experience with JavaScript and modern frontend frameworks while contributing to product growth.",
    achievements: [
      "Built 50+ UI components",
      "Fixed 200+ critical bugs",
      "Contributed to 300% user growth",
    ],
  },
];

// Update your Education

interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  description: string;
  highlights: string[];
}
export const education: Education[] = [
  {
    degree: "Master's in Computer Science",
    institution: "University Name",
    period: "2014 - 2016",
    gpa: "3.8/4.0",
    description:
      "Specialized in web technologies and user interface design. Graduated with honors and completed thesis on modern web performance optimization.",
    highlights: [
      "Summa Cum Laude",
      "Research in Web Performance",
      "Teaching Assistant for 2 years",
    ],
  },
  {
    degree: "Bachelor's in Computer Science",
    institution: "University Name",
    period: "2010 - 2014",
    gpa: "3.6/4.0",
    description:
      "Studied algorithms, data structures, and software engineering principles. Active in computer science club and hackathon competitions.",
    highlights: [
      "Dean's List for 6 semesters",
      "Won 3 hackathon competitions",
      "CS Club Vice President",
    ],
  },
];

// Certifications data - Update your Certifications

interface Certifications {
  name: string;
  issuer: string;
  year: string;
  credentialId: string;
  color: string;
  link?: string;
}
export const certifications: Certifications[] = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2022",
    credentialId: "AWS-DEV-2022-001",
    color: "from-orange-500 to-red-500",
    link: "https://www.your-cert-link.com",
  },
  {
    name: "Professional Frontend Developer",
    issuer: "Frontend Masters",
    year: "2021",
    credentialId: "FEM-PRO-2021-045",
    color: "from-blue-500 to-purple-500",
    link: "https://www.your-cert-link.com",
  },
  {
    name: "React Advanced Patterns",
    issuer: "React Training",
    year: "2020",
    credentialId: "RT-ADV-2020-128",
    color: "from-cyan-500 to-blue-500",
    link: "https://www.your-cert-link.com",
  },
];


// Update your Hobbies

interface Hobbies {
  name: string;
  description: string;
  image: string;
  icon: string;
  stats: string;
}

export const hobbies: Hobbies[] = [
  {
    name: "Photography",
    description:
      "Capturing moments and exploring visual storytelling through landscape and street photography.",
    image: "/camera.jpg",
    icon: "📸",
    stats: "500+ photos taken",
  },
  {
    name: "Hiking",
    description:
      "Exploring nature trails and challenging myself physically while disconnecting from technology.",
    image: "/hiking.jpg",
    icon: "🥾",
    stats: "25+ trails completed",
  },
  {
    name: "Reading",
    description:
      "Expanding knowledge through technical books, fiction, and staying current with industry trends.",
    image: "/books.jpeg",
    icon: "📚",
    stats: "50+ books annually",
  },
];
