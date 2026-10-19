import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

const projects = [
 {
  id: 1,
  title: "Bazar Dor — E-commerce Platform",
  image: project1,
  category: "Full Stack Web Application",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB Atlas",
    "Better Auth",
    "Google OAuth",
  ],

  description:
    "Bazar Dor is a modern, responsive e-commerce platform built with Next.js, React, TypeScript, and MongoDB Atlas. It provides a user-friendly shopping experience with product browsing, detailed product views, and secure authentication through email and Google sign-in.",

  live: "https://e-commerce-bazer-dor-project.vercel.app",
  github:
    "https://github.com/shahinAlam715/E-commerce-Bazer-dor-Project",

  challenges: [
    "Integrating secure email and Google authentication using Better Auth",
    "Connecting MongoDB Atlas to support application data management",
    "Building reusable React components and responsive layouts",
    "Handling authentication states and providing a consistent user experience",
  ],

  future: [
    "🛒 Shopping Cart — Add, remove, and update product quantities.",
    "💳 Secure Checkout — Integrate a payment gateway for online purchases.",
    "❤️ Wishlist — Save favorite products for later.",
    "📦 Order Management — Let users view order history and track purchases.",
    "🔎 Search and Filtering — Help users find products by name and category.",
  ],
},
 {
  id: 2,
  title: "My-FitLog — Fitness Workout Planner",
  image: project2,
  category: "Fitness Web Application",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Context API",
    "DaisyUI",
    "REST API",
  ],

  description:
    "My-FitLog is a modern fitness workout planning web application built with Next.js, TypeScript, Tailwind CSS, and React Context API. It helps users organize workout routines, create daily plans, and manage fitness activities through a responsive and user-friendly interface.",

  live: "https://my-fitlog-project-a6.vercel.app",
  github: "https://github.com/shahinAlam715/my-fitlog-project-a6",

  challenges: [
    "Managing workout plans and shared application state with React Context API",
    "Organizing workout data and handling API integration",
    "Building reusable UI components for workout planning and tracking",
    "Creating a responsive interface for desktop, tablet, and mobile devices",
  ],

  future: [
    "👤 User Authentication — Allow users to manage personalized fitness profiles.",
    "📊 Progress Tracking — Track workout history and fitness progress over time.",
    "📅 Workout Scheduling — Create and manage personalized workout schedules.",
    "💾 Persistent Data — Save workout plans using LocalStorage or a database.",
  ],
},
 {
  id: 3,
  title: "DevStack — Technology Exploration Platform",
  image: project3,
  category: "Frontend Web Application",
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "DaisyUI",
    "JavaScript (ES6+)",
    "LocalStorage",
  ],
  description:
    "DevStack is a modern, responsive technology exploration platform built with React, TypeScript, Tailwind CSS, and DaisyUI. It features an interactive interface for exploring technology items and managing a personalized tech stack with an add-to-cart system.",

  live: "https://thunderous-smakager-d0231b.netlify.app/",
  github: "https://github.com/shahinAlam715/my-Devstack-project",

  challenges: [
    "Managing add-to-cart state and keeping the UI synchronized with user interactions",
    "Loading and rendering technology data dynamically from JSON",
    "Building reusable React components with clean and maintainable code",
    "Creating a responsive interface for different screen sizes",
  ],

  future: [
    "🔍 Search and Filter — Help users find technology items quickly.",
    "💾 LocalStorage Persistence — Preserve the selected tech stack after page refresh.",
    "🗑️ Stack Management — Allow users to remove items and manage selections.",
    "♿ Accessibility Improvements — Enhance keyboard navigation and usability.",
  ],
},
];

export default projects;
