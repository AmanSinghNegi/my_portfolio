"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  CheckCircle,
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code,
  Palette,
  Zap,
  Send,
  Moon,
  Sun,
  Menu,
  X,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { createContext, useContext, useEffect } from "react"

// Theme Context
const ThemeContext = createContext<{
  isDark: boolean
  toggleTheme: () => void
}>({
  isDark: false,
  toggleTheme: () => { },
})

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
}

const useTheme = () => useContext(ThemeContext)

// Technology data organized by categories
const technologyData = [
  {
    category: "Backend",
    icon: "☕",
    technologies: [
      { name: "Java", icon: "☕", color: "bg-orange-500" },
      { name: "Spring Boot", icon: "🍃", color: "bg-green-500" },
      { name: "Spring Security", icon: "🔒", color: "bg-green-600" },
      { name: "Hibernate", icon: "🗄️", color: "bg-yellow-600" },
      { name: "JPA", icon: "📊", color: "bg-blue-600" },
      { name: "Maven", icon: "📦", color: "bg-red-500" },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    technologies: [
      { name: "Angular", icon: "🅰️", color: "bg-red-600" },
      { name: "TypeScript", icon: "📘", color: "bg-blue-500" },
      { name: "HTML5", icon: "🌐", color: "bg-orange-500" },
      { name: "CSS3", icon: "🎨", color: "bg-blue-400" },
      { name: "JavaScript", icon: "⚡", color: "bg-yellow-500" },
      { name: "Bootstrap", icon: "🅱️", color: "bg-purple-600" },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    technologies: [
      { name: "MySQL", icon: "🐬", color: "bg-blue-600" },
      { name: "PostgreSQL", icon: "🐘", color: "bg-blue-700" },
      { name: "MongoDB", icon: "🍃", color: "bg-green-600" },
      { name: "Redis", icon: "🔴", color: "bg-red-500" },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "⚙️",
    technologies: [
      { name: "AWS", icon: "☁️", color: "bg-orange-400" },
      { name: "Docker", icon: "🐳", color: "bg-blue-500" },
      { name: "Git", icon: "📝", color: "bg-orange-600" },
      { name: "GitHub", icon: "🐙", color: "bg-gray-800" },
      { name: "Postman", icon: "📮", color: "bg-orange-500" },
      { name: "IntelliJ IDEA", icon: "💡", color: "bg-purple-600" },
    ],
  },
]

// Experience data
const experienceData = [
  // {
  //   id: 1,
  //   title: "Senior Java Developer",
  //   company: "TechCorp Solutions",
  //   location: "Remote",
  //   duration: "Jan 2023 - Present",
  //   type: "Full-time",
  //   description:
  //     "Leading backend development initiatives, architecting scalable microservices using Spring Boot, and mentoring junior developers. Implemented robust security measures and optimized database performance, resulting in 40% faster response times.",
  //   achievements: [
  //     "Architected and deployed 5+ microservices handling 100K+ daily requests",
  //     "Reduced system downtime by 60% through proactive monitoring and optimization",
  //     "Led a team of 4 developers in delivering critical business features",
  //     "Implemented JWT-based authentication system used across all company products",
  //   ],
  //   skills: ["Java", "Spring Boot", "Microservices", "AWS", "Docker", "MySQL", "Redis"],
  //   icon: "🚀",
  //   color: "from-blue-500 to-purple-600",
  // },
  {
    id: 1,
    title: "Full-Stack Java Developer",
    company: "WorkVEU",
    location: "Hybrid",
    duration: "Aug 2023 - Current",
    type: "Full-time",
    description:
      "Developed end-to-end crm software using Java Spring Boot for backend and Angular for frontend. Collaborated with cross-functional teams to deliver high-quality software solutions for enterprise clients.",
    achievements: [
      "Developed and optimized backend solutions for WorkVEU Real-Estate CRM serving 10K+ active users",
      "Integrated third-party APIs and notification systems",
      "Improved application performance by 25% through code optimization",
      "Implemented responsive UI components using Angular",
      "Designed and Developed CRM Desktop Application using JavaFX"
    ],
    skills: ["Java", "Spring Boot", "Angular", "TypeScript", "MySQL", "Git", "MongoDB", "Redis", "JavaFX", "WebSocket"],
    icon: "💻",
    color: "from-green-500 to-blue-500",
  },
  {
    id: 2,
    title: "Java Development Intern",
    company: "Klocrix Buisness Solution",
    location: "On-site",
    duration: "Jan 2023 - Aug 2023",
    type: "Internship",
    description:
      "Started my professional journey as a Java intern, learning industry best practices and contributing to real-world projects. Gained hands-on experience with Spring framework and database management.",
    achievements: [
      "Successfully completed 2 major project modules",
      "Learned and applied SOLID principles and design patterns",
      "Contributed to code reviews and team knowledge sharing sessions",
      "Built RESTful APIs consumed by frontend applications",
    ],
    skills: ["Java", "Spring MVC", "MySQL", "HTML", "CSS", "JavaScript"],
    icon: "🌱",
    color: "from-yellow-500 to-green-500",
  },
]

const projects = [
  {
    id: 1,
    title: "StudyBuddy App",
    description:
      "A gamified productivity app that transforms studying into an engaging experience with XP systems, task scheduling, and email notifications.",
    features: ["Task Scheduling", "XP System", "Email Notifications", "Progress Tracking"],
    tech: ["Spring Boot", "Angular", "MySQL", "JWT"],
    image: "/placeholder.svg?height=300&width=400",
    demoUrl: "#",
    codeUrl: "https://github.com/AmanSinghNegi/task-manager/tree/phase1",
  },
  {
    id: 2,
    title: "TroopVerse",
    description:
      "A secure group chat platform with JWT-based authentication and real-time messaging capabilities for seamless team communication.",
    features: ["Real-time Messaging", "Group Management", "JWT Authentication", "Secure Backend"],
    tech: ["Java", "Spring Boot", "WebSocket", "MySQL"],
    image: "/placeholder.svg?height=300&width=400",
    demoUrl: "#",
    codeUrl: "https://github.com/AmanSinghNegi/TroopVerse/tree/TV_Version1",
  },
]

const services = [
  {
    icon: <Code className="w-12 h-12" />,
    title: "Backend Development",
    description: "Robust server-side applications using Java and Spring Boot with scalable architecture.",
    features: ["RESTful APIs", "Database Design", "Security Implementation"],
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "Frontend Development",
    description: "Modern, responsive user interfaces using Angular with clean, intuitive design.",
    features: ["Component Architecture", "Responsive Design", "User Experience"],
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Full-Stack Integration",
    description: "End-to-end application development connecting frontend and backend seamlessly.",
    features: ["API Integration", "Authentication", "Real-time Features"],
  },
]

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Aman Folio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-16 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-25"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-green-200 dark:bg-green-800 rounded-full opacity-30"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating Squares */}
        <motion.div
          className="absolute top-60 left-1/4 w-8 h-8 bg-yellow-200 dark:bg-yellow-800 opacity-20"
          animate={{
            rotate: [0, 45, 0],
            y: [0, -30, 0],
            x: [0, 25, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-10 h-10 bg-pink-200 dark:bg-pink-800 opacity-25 rounded-lg"
          animate={{
            rotate: [0, -45, 0],
            y: [0, 20, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Floating Triangles */}
        <motion.div
          className="absolute top-32 right-1/3 w-0 h-0 opacity-20"
          style={{
            borderLeft: "15px solid transparent",
            borderRight: "15px solid transparent",
            borderBottom: "26px solid rgb(147 197 253)", // blue-300
          }}
          animate={{
            rotate: [0, 120, 240, 360],
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Code-themed floating elements */}
        <motion.div
          className="absolute top-1/3 left-1/3 text-2xl opacity-10 dark:opacity-20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          ☕
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/3 text-xl opacity-15 dark:opacity-25"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            rotate: [0, -15, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          🅰️
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/6 text-lg opacity-10 dark:opacity-20"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          🍃
        </motion.div>

        {/* Particle-like dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -Math.random() * 50 - 10, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, Math.random() * 0.5 + 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-300/20 to-purple-300/20 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-green-300/20 to-blue-300/20 dark:from-green-600/20 dark:to-blue-600/20 rounded-full blur-lg"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Aman Singh Negi
              </span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full-Stack Developer | Java & Angular Specialist
            </motion.p>

            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Dedicated software engineer specializing in full-stack development with expertise in Java, Spring Boot, Angular, and AWS.
              Skilled in building scalable systems, including asynchronous applications, messaging services, and notification systems.
              Known for strong problem-solving abilities, effective collaboration, and delivering high-quality solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.a
                href="#portfolio"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image with Enhanced Background Animation */}
          <motion.div
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Additional animated elements specifically around the photo */}
            <div className="absolute inset-0">
              {/* Rotating rings around photo */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-200 dark:border-blue-700 rounded-full opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{ width: "420px", height: "420px", top: "-20px", left: "-20px" }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-purple-200 dark:border-purple-700 rounded-full opacity-20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{ width: "450px", height: "450px", top: "-35px", left: "-35px" }}
              />

              {/* Orbiting elements */}
              <motion.div
                className="absolute w-6 h-6 bg-blue-400 rounded-full"
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{
                  transformOrigin: "200px 200px",
                  top: "0px",
                  left: "200px",
                }}
              >
                <div className="w-full h-full bg-blue-400 rounded-full animate-pulse"></div>
              </motion.div>

              <motion.div
                className="absolute w-4 h-4 bg-purple-400 rounded-full"
                animate={{
                  rotate: -360,
                }}
                transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{
                  transformOrigin: "180px 180px",
                  top: "20px",
                  left: "180px",
                }}
              >
                <div className="w-full h-full bg-purple-400 rounded-full animate-pulse"></div>
              </motion.div>

              <motion.div
                className="absolute w-5 h-5 bg-green-400 rounded-full"
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{
                  transformOrigin: "220px 220px",
                  top: "-10px",
                  left: "220px",
                }}
              >
                <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
              </motion.div>
            </div>

            <motion.div className="relative z-10" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-2 relative">
                {/* Pulsing glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/50 to-purple-500/50 blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <Image
                  src="/me.jpg?height=320&width=320"
                  alt="Aman Singh Negi - Full Stack Developer"
                  width={320}
                  height={320}
                  className="w-full h-full rounded-full object-cover bg-white relative z-10"
                />
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl z-20"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                👋
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With 2.5 years of hands-on experience in software development, I specialize in creating robust backend
              systems with Java and Spring Boot, while crafting intuitive user interfaces with Angular. My passion lies
              in building scalable applications that solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I believe in writing clean, maintainable code and staying updated with the latest technologies to deliver
              exceptional digital experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-300">2.5+ Years</p>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Projects</h4>
                  <p className="text-gray-600 dark:text-gray-300">10+ Completed</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Education</h4>
              </div>
              <h5 className="font-semibold text-gray-700 dark:text-gray-300">Bachelor in Computer Application</h5>
              <p className="text-gray-600 dark:text-gray-400">Panjab University • 2022</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-green-600 dark:text-green-400" />
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Work Experience</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-gray-700 dark:text-gray-300">Java Developer</h5>
                  <p className="text-gray-600 dark:text-gray-400">2+ Years • Full-time</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 dark:text-gray-300">Java Development Intern</h5>
                  <p className="text-gray-600 dark:text-gray-400">6 Months • Internship</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">My Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From curious intern to seasoned developer - here's my professional story
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 hidden md:block"></div>

                {/* Experience card */}
                <div className="md:ml-20 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon and basic info */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${experience.color} flex items-center justify-center text-2xl mb-4`}
                      >
                        {experience.icon}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{experience.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{experience.title}</h3>
                        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                          {experience.company}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{experience.description}</p>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-yellow-500" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + achievementIndex * 0.1 }}
                            >
                              <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h5 className="font-semibold text-gray-800 dark:text-white mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TechnologySection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Technology Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technologyData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{category.category}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                        {tech.icon}
                      </div>
                      <h4 className="font-semibold text-gray-800 dark:text-white text-sm">{tech.name}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl border border-blue-200 dark:border-blue-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Technologies Mastered</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl border border-purple-200 dark:border-purple-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2.5+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl border border-green-200 dark:border-green-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive software development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Featured projects showcasing my full-stack development expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demoUrl}
                      className="px-4 py-2 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                    <motion.a
                      href={project.codeUrl}
                      className="px-4 py-2 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.a
            href="/AmanResume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>

        </motion.div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to work together? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-2">
              <motion.a
                href="mailto:amnegi417@gmail.com"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">amnegi417@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/aman-singh-negi-104345202/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <p className="text-gray-300">Connect with me</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/AmanSinghNegi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <p className="text-gray-300">Check out my code</p>
                </div>
              </motion.a>
              <motion.a
                href="https://leetcode.com/u/AmanSinghNegi17/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    alt="LeetCode"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Leetcode</h4>
                  <p className="text-gray-300">Check my profile</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Aman Singh Negi
          </motion.div>
          <p className="text-gray-400 mb-6">Full-Stack Developer | Java & Angular Specialist</p>

          <div className="flex justify-center flex-wrap gap-6 mb-8">
            {/* Email */}
            <motion.a
              href="mailto:amnegi417@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              title="Email"
            >
              <Mail className="w-6 h-6" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/aman-singh-negi-104345202"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/AmanSinghNegi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </motion.a>

            {/* LeetCode */}
            <motion.a
              href="https://leetcode.com/u/AmanSinghNegi17/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
              whileHover={{ scale: 1.2 }}
              title="LeetCode"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
                className="w-6 h-6 object-contain"
              />
            </motion.a>
          </div>


          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">© 2024 Negi. All rights reserved. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function WarriorPortfolio() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <TechnologySection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
