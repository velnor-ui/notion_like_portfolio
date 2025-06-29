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

interface ProjectType {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  tags: string[];
  category: string;
  date: string;
  client: string;
  challenges: string[];
  solutions: string[];
  codeSnippet: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: ProjectType[] = [
  {
    id: "e-commerce-platform",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with payment processing and inventory management.",
    longDescription:
      "This e-commerce platform provides a complete solution for online stores. It includes product management, shopping cart functionality, secure checkout with Stripe, user authentication, and order tracking. The admin dashboard allows store owners to manage inventory, view sales analytics, and process orders.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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
    codeSnippet: `// Example of Stripe payment processing
const createCheckoutSession = async (items) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: \`\${process.env.HOST_URL}/success?session_id={CHECKOUT_SESSION_ID}\`,
    cancel_url: \`\${process.env.HOST_URL}/cart\`,
  });
  
  return session;
};`,
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
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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
    codeSnippet: `// Example of Firebase real-time listener
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";

const TaskList = ({ boardId }) => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const tasksRef = ref(database, \`boards/\${boardId}/tasks\`);
    
    const unsubscribe = onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const taskList = Object.entries(data).map(([id, task]) => ({
          id,
          ...task,
        }));
        setTasks(taskList);
      } else {
        setTasks([]);
      }
    });
    
    return () => unsubscribe();
  }, [boardId]);
  
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};`,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description:
      "A modern blog platform with markdown support and content management.",
    longDescription:
      "This blog platform provides a modern writing and reading experience. It supports Markdown for content creation, has a built-in content management system, and features a clean, responsive design. The platform includes features like categories, tags, search functionality, and social sharing options.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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
    codeSnippet: `// Example of MDX processing
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypePrism from 'rehype-prism-plus';

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
    scope: post.frontmatter,
  });
  
  return {
    props: {
      post: {
        ...post,
        mdxSource,
      },
    },
    revalidate: 60,
  };
}

const PostPage = ({ post }) => {
  const { mdxSource, frontmatter } = post;
  
  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <MDXRemote {...mdxSource} components={components} />
    </article>
  );
};`,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "A weather application that provides real-time weather data and forecasts.",
    longDescription:
      "This weather application provides users with current weather conditions and forecasts for any location. It features a clean, intuitive interface, location-based weather detection, hourly and 7-day forecasts, and weather alerts. The app also includes historical weather data and customizable units.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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
    codeSnippet: `// Example of weather data fetching with caching
const fetchWeatherData = async (location) => {
  const cacheKey = \`weather_\${location}_\${new Date().toDateString()}\`;
  const cachedData = localStorage.getItem(cacheKey);
  
  if (cachedData) {
    return JSON.parse(cachedData);
  }
  
  try {
    const response = await fetch(
      \`https://api.openweathermap.org/data/2.5/weather?q=\${location}&appid=\${API_KEY}&units=metric\`
    );
    
    if (!response.ok) {
      throw new Error('Weather data not available');
    }
    
    const data = await response.json();
    
    // Cache the data for 30 minutes
    localStorage.setItem(cacheKey, JSON.stringify(data));
    localStorage.setItem(\`\${cacheKey}_expiry\`, Date.now() + 30 * 60 * 1000);
    
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};`,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description:
      "A fitness tracking application that helps users monitor their workouts and progress.",
    longDescription:
      "This fitness tracking application helps users track their workouts, set goals, and monitor their progress. It includes features like workout planning, exercise logging, progress charts, and achievement badges. The app also provides workout suggestions and can connect with wearable devices for more accurate tracking.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
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
    codeSnippet: `// Example of workout tracking in React Native
import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';

const WorkoutTimer = ({ exercises }) => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [restMode, setRestMode] = useState(false);
  const [restTime, setRestTime] = useState(60); // 60 seconds rest
  
  useEffect(() => {
    let interval;
    
    if (restMode && isRunning) {
      interval = setInterval(() => {
        setRestTime((prevTime) => {
          if (prevTime <= 1) {
            setRestMode(false);
            return 60;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [restMode, isRunning]);
  
  const handleNext = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setRestMode(true);
      setIsRunning(true);
    } else {
      // Workout complete
      setIsRunning(false);
    }
  };
  
  return (
    <View>
      {restMode ? (
        <Text>Rest: {restTime}s</Text>
      ) : (
        <>
          <Text>{exercises[currentExercise].name}</Text>
          <Stopwatch
            start={isRunning}
            reset={!isRunning}
          />
          <TouchableOpacity onPress={() => setIsRunning(!isRunning)}>
            <Text>{isRunning ? 'Pause' : 'Start'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext}>
            <Text>Next Exercise</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};`,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "recipe-app",
    title: "Recipe App",
    description:
      "A recipe application that allows users to discover, save, and share recipes.",
    longDescription:
      "This recipe application helps users discover, save, and share recipes. It features a vast collection of recipes with detailed instructions, ingredient lists, and nutritional information. Users can create shopping lists, plan meals, and save their favorite recipes. The app also includes a social feature for sharing recipes and following other users.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["Vue.js", "Node.js", "MongoDB"],
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
    codeSnippet: `// Example of recipe search with filters
const searchRecipes = async (req, res) => {
  try {
    const { query, cuisine, diet, time, ingredients } = req.query;
    
    const filters = {};
    
    if (cuisine) {
      filters.cuisine = cuisine;
    }
    
    if (diet) {
      filters.dietaryRestrictions = { $all: Array.isArray(diet) ? diet : [diet] };
    }
    
    if (time) {
      filters.prepTime = { $lte: parseInt(time) };
    }
    
    if (ingredients) {
      const ingredientList = Array.isArray(ingredients) 
        ? ingredients 
        : ingredients.split(',');
      
      filters.ingredients = {
        $all: ingredientList.map(ingredient => ({
          $elemMatch: { name: new RegExp(ingredient, 'i') }
        }))
      };
    }
    
    let recipeQuery = Recipe.find(filters);
    
    if (query) {
      recipeQuery = recipeQuery.find({
        $or: [
          { title: new RegExp(query, 'i') },
          { description: new RegExp(query, 'i') }
        ]
      });
    }
    
    const recipes = await recipeQuery
      .sort({ createdAt: -1 })
      .limit(20)
      .populate('author', 'name avatar');
    
    res.status(200).json(recipes);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Error searching recipes' });
  }
};`,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

interface AllProjects {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  category: string;
  status: string;
  github: string;
  live: string;
}

export const allProjects: AllProjects[] = [
  {
    id: "e-commerce-platform",
    title: "E-commerce Platform",
    image: "/friday.jpg",
    description:
      "A full-stack e-commerce platform with payment processing and inventory management.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    category: "Full Stack",
    status: "Live",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    image: "/friday.jpg",
    description:
      "A collaborative task management application with real-time updates.",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    category: "Frontend",
    status: "In Progress",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    image: "/friday.jpg",
    description:
      "A modern blog platform with markdown support and content management.",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Contentful"],
    category: "Full Stack",
    status: "Live",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "weather-app",
    title: "Weather App",
    image: "/friday.jpg",
    description:
      "A weather application that provides real-time weather data and forecasts.",
    tags: ["React", "OpenWeather API", "Tailwind CSS"],
    category: "Frontend",
    status: "Live",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    image: "/friday.jpg",
    description:
      "A fitness tracking application that helps users monitor their workouts and progress.",
    tags: ["React Native", "TypeScript", "Firebase"],
    category: "Mobile",
    status: "Concept",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "recipe-app",
    title: "Recipe App",
    image: "/friday.jpg",
    description:
      "A recipe application that allows users to discover, save, and share recipes.",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    category: "Full Stack",
    status: "Live",
    github: "https://github.com",
    live: "https://example.com",
  },
];
