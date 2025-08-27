interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: string;
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with advanced filtering, real-time inventory, and seamless checkout experience built with cutting-edge technologies.",
    image: "/friday.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    status: "Live",
    year: "2024",
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team analytics, and customizable workflows for enhanced productivity.",
    image: "/friday.jpg",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    status: "In Development",
    year: "2024",
    githubUrl: "https://github.com/username/taskapp",
    liveUrl: "https://taskapp-demo.com",
    featured: true,
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "Smart content generation tool powered by AI, helping creators produce engaging content at scale with advanced machine learning.",
    image: "/friday.jpg",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    status: "Live",
    year: "2023",
    githubUrl: "https://github.com/username/ai-content",
    liveUrl: "https://ai-content-demo.com",
    featured: true,
  },
];

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  images: string[];
  tags?: string[];
  category?: string;
  date?: string;
  client?: string;
  challenges?: string[];
  solutions?: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: string;
}

export const projects: ProjectType[] = [
  {
    id: "e-commerce-platform",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with payment processing and inventory management.",
    longDescription:
      "This e-commerce platform provides a complete solution for online stores. It includes product management, shopping cart functionality, secure checkout with Stripe, user authentication, and order tracking. The admin dashboard allows store owners to manage inventory, view sales analytics, and process orders.",
    images: ["/project_ecom.webp", "/project_ecom.webp", "/project_ecom.webp"],
    status: "Live",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    category: "Full Stack",
    date: "January 2023",
    client: "Self-initiated",
    challenges: [
      "Implementing a secure payment processing system",
      "Creating a responsive design for all device sizes",
      "Optimizing database queries for performance",
    ],
    solutions: [
      "Integrated Stripe API with webhook verification",
      "Used Tailwind CSS with custom breakpoints",
      "Implemented database indexing and query caching",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    longDescription:
      "This task management application helps teams organize and track their work. It features real-time updates using Firebase, drag-and-drop task organization, task assignments, due dates, and progress tracking. The app includes both personal and team workspaces, with notification systems to keep everyone updated.",
    images: ["/project_task.avif", "/project_task.avif", "/project_task.avif"],
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    category: "Frontend",
    date: "October 2022",
    client: "Startup Company",
    challenges: [
      "Implementing real-time synchronization across devices",
      "Creating an intuitive drag-and-drop interface",
      "Managing complex state across the application",
    ],
    solutions: [
      "Used Firebase Realtime Database for instant updates",
      "Implemented react-beautiful-dnd for drag-and-drop functionality",
      "Utilized Redux for centralized state management",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    status: "In Development",
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description:
      "A modern blog platform with markdown support and content management.",
    longDescription:
      "This blog platform provides a modern writing and reading experience. It supports Markdown for content creation, has a built-in content management system, and features a clean, responsive design. The platform includes features like categories, tags, search functionality, and social sharing options.",
    images: ["/project_blog.png", "/project_blog.png", "/project_blog.png"],
    tags: ["Next.js", "MDX", "Tailwind CSS", "Contentful"],
    category: "Full Stack",
    date: "March 2023",
    client: "Content Creator",
    challenges: [
      "Creating a seamless editing experience with live preview",
      "Implementing efficient content delivery",
      "Building a flexible categorization system",
    ],
    solutions: [
      "Used MDX for rich content with React components",
      "Implemented incremental static regeneration for fast page loads",
      "Created a tag-based system with multiple hierarchies",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    status: "Live",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "A weather application that provides real-time weather data and forecasts.",
    longDescription:
      "This weather application provides users with current weather conditions and forecasts for any location. It features a clean, intuitive interface, location-based weather detection, hourly and 7-day forecasts, and weather alerts. The app also includes historical weather data and customizable units.",
    images: ["/project_weather.webp", "/project_weather.webp"],
    tags: ["React", "OpenWeather API", "Tailwind CSS"],
    category: "Frontend",
    date: "July 2022",
    client: "Self-initiated",
    challenges: [
      "Handling API rate limits and data caching",
      "Creating intuitive data visualizations",
      "Implementing accurate geolocation",
    ],
    solutions: [
      "Implemented local storage caching with expiration",
      "Used Chart.js for temperature and precipitation graphs",
      "Integrated browser geolocation API with fallback options",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    status: "Live",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description:
      "A fitness tracking application that helps users monitor their workouts and progress.",
    longDescription:
      "This fitness tracking application helps users track their workouts, set goals, and monitor their progress. It includes features like workout planning, exercise logging, progress charts, and achievement badges. The app also provides workout suggestions and can connect with wearable devices for more accurate tracking.",
    images: [
      "/project_fitness.webp",
      "/project_fitness.webp",
      "/project_fitness.webp",
    ],
    tags: ["React Native", "TypeScript", "Firebase"],
    category: "Mobile",
    date: "April 2023",
    client: "Fitness Studio",
    challenges: [
      "Creating a consistent experience across iOS and Android",
      "Implementing accurate fitness tracking algorithms",
      "Designing an intuitive workout creation interface",
    ],
    solutions: [
      "Used platform-specific components when necessary",
      "Implemented and tested various tracking formulas",
      "Created a drag-and-drop workout builder",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    status: "Live",
  },
  {
    id: "recipe-app",
    title: "Recipe App",
    description:
      "A recipe application that allows users to discover, save, and share recipes.",
    longDescription:
      "This recipe application helps users discover, save, and share recipes. It features a vast collection of recipes with detailed instructions, ingredient lists, and nutritional information. Users can create shopping lists, plan meals, and save their favorite recipes. The app also includes a social feature for sharing recipes and following other users.",
    images: [
      "/project_recipe.png",
      "/project_recipe2.png",
      "/project_recipe3.png",
    ],
    tags: ["React.js", "Node.js", "MongoDB"],
    category: "Full Stack",
    date: "December 2022",
    client: "Food Blog",
    challenges: [
      "Organizing and categorizing a large recipe database",
      "Creating an efficient search system",
      "Implementing a user-friendly recipe creation interface",
    ],
    solutions: [
      "Implemented a tag-based categorization system",
      "Used Elasticsearch for fast and relevant search results",
      "Created a step-by-step recipe builder with live preview",
    ],
    githubUrl: "https://github.com/m-sanjid/befitai",
    liveUrl: "https://befitai.sanjid.shop",
    status: "Live",
  },
];
