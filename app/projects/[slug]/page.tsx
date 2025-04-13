"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ArrowLeft, Github, ExternalLink, Calendar, Code, CheckCircle, XCircle } from "lucide-react"

// Projects data
const projects = [
  {
    id: "e-commerce-platform",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with payment processing and inventory management.",
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
    description: "A collaborative task management application with real-time updates.",
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
    description: "A modern blog platform with markdown support and content management.",
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
    description: "A weather application that provides real-time weather data and forecasts.",
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
    description: "A fitness tracking application that helps users monitor their workouts and progress.",
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
    description: "A recipe application that allows users to discover, save, and share recipes.",
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
]

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.id === slug)

  if (!project) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-10 space-y-12">
      {/* Back Button */}
      <Button variant="ghost" asChild>
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
      </Button>

      {/* Project Header */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {project.date}
            </div>
            <div>{project.client}</div>
          </div>
        </motion.div>
      </section>

      {/* Project Images */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </motion.div>
      </section>

      {/* Project Description */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground whitespace-pre-line">{project.longDescription}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <XCircle className="mr-2 h-5 w-5 text-destructive" />
                    Challenges
                  </h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    Solutions
                  </h3>
                  <ul className="space-y-2">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Code className="mr-2 h-5 w-5" />
                Code Snippet
              </h2>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Category</h4>
                  <p className="text-muted-foreground">{project.category}</p>
                </div>
                <div>
                  <h4 className="font-medium">Date</h4>
                  <p className="text-muted-foreground">{project.date}</p>
                </div>
                <div>
                  <h4 className="font-medium">Client</h4>
                  <p className="text-muted-foreground">{project.client}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Button asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> View Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View Source Code
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

