"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Shield,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const projects = [
    {
      title: "🔐 Secure File Share",
      description:
        "End-to-end encrypted file sharing system with self-destructing files, secure links, and advanced encryption algorithms for maximum privacy protection.",
      tech: ["FastAPI", "MongoDB", "Docker", "Encryption", "Render"],
      github: "https://github.com/srivathsavsree/Secure_File_Share",
      demo: "https://secure-file-share-9kcs.onrender.com",
      featured: true,
    },
    {
      title: "🖼️ Steganography Web App",
      description:
        "Advanced steganography application that hides text or files inside images, audio, and video for private sharing with seamless frontend experience.",
      tech: ["Next.js", "FastAPI", "AWS S3", "Python", "Render"],
      github: "https://github.com/srivathsavsree/steganography.git",
      demo: "https://steganography-frontend.onrender.com/",
      featured: true,
    },
    {
      title: "💻 CodeSage",
      description:
        "Intelligent code analysis and optimization platform designed to help developers write better, more efficient code with AI-powered suggestions.",
      tech: ["React", "Node.js", "AI/ML", "TypeScript"],
      github: "https://github.com/srivathsavsree/CodeSage",
      demo: null,
      featured: false,
    },
    {
      title: "🔍 CyberSnoop Toolkit",
      description:
        "Comprehensive CLI toolkit for cybersecurity professionals featuring port scanning, IP analysis, and metadata extraction.",
      tech: ["Python", "CLI", "Cybersecurity", "Networking"],
      github: "https://github.com/srivathsavsree/CyberSnoop",
      demo: "https://srivathsavsree.github.io/CyberSnoop/",
      featured: false,
    },
  ]

  const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript", "TypeScript"],
    Frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    Backend: ["FastAPI", "Node.js", "REST APIs", "GraphQL"],
    Database: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    "Cloud & DevOps": ["AWS", "Docker", "CI/CD", "Linux", "Git"],
    Tools: ["Figma", "Power BI", "Postman", "VS Code"],
  }

  const experiences = [
    {
      role: "Backend Developer Intern",
      company: "Vita Cure",
      duration: "2 months",
      points: [
        "Developed RESTful APIs using FastAPI and PostgreSQL, improving data response time by 30%",
        "Integrated AWS S3 for secure file storage and retrieval in the health data module",
      ],
    },
    {
      role: "Research Intern",
      company: "National Institute of Technology (NIT), Tiruchirappalli",
      duration: "1 month",
      points: [
        "Contributed to a published research paper on cold start latency in serverless platforms (AWS & Azure)",
        "Deployed and benchmarked Function-as-a-Service (FaaS) applications to analyse performance differences across programming languages",
        "Conducted empirical analysis using Python, Node.js, and cloud platforms",
        "Confirmed that code size does not impact cold start, but language does",
      ],
    },
    {
      role: "DevOps Intern",
      company: "Internship Studio",
      duration: "1 month",
      points: [
        "Set up CI/CD pipelines using GitHub Actions to automate build and deployment workflows",
        "Containerized applications using Docker, ensuring environment consistency and ease of deployment",
      ],
    },
    {
      role: "Cybersecurity Intern",
      company: "AICTE Virtual Internship",
      duration: "6 weeks",
      points: [
        "Analyzed security vulnerabilities and performed penetration testing",
        "Implemented security protocols for web applications",
      ],
    },
    {
      role: "Data Analyst Intern",
      company: "AICTE Virtual Internship",
      duration: "4 weeks",
      points: [
        "Performed comprehensive data analysis and created visualizations",
        "Generated insights from large datasets using statistical methods",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1 }}
              className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent cursor-pointer"
            >
              Sri Vathsav
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Skills", "Experience", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase())
                    if (element) {
                      const headerOffset = 80
                      const elementPosition = element.getBoundingClientRect().top
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.1 }}
                  className="text-white/80 hover:text-white transition-colors duration-150 cursor-pointer"
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="md:hidden bg-black/90 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-4">
              {["About", "Projects", "Skills", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase())
                    if (element) {
                      const headerOffset = 80
                      const elementPosition = element.getBoundingClientRect().top
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }
                    setIsMenuOpen(false)
                  }}
                  className="block text-white/80 hover:text-white transition-colors duration-150 text-left w-full"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/profile-bg.png"
            alt="Professional Background"
            fill
            className="object-cover object-top opacity-40"
            style={{ objectPosition: "50% 20%" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-emerald-900/20 to-black/60" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                Thaneeru Sri Vathsav
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Final Year CSE Student | Full Stack Developer | Cloud & Security Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/Thaneeru_Sri_Vathsav_Resume.pdf"
                download="Thaneeru_Sri_Vathsav_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all duration-150"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </motion.a>
              <motion.button
                onClick={() => {
                  const element = document.getElementById("projects")
                  if (element) {
                    const headerOffset = 80
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    })
                  }
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent transition-all duration-150"
                >
                  View Projects
                </Button>
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => {
            const element = document.getElementById("about")
            if (element) {
              const headerOffset = 80
              const elementPosition = element.getBoundingClientRect().top
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              })
            }
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <ChevronDown className="h-8 w-8 text-white/60" />
        </motion.button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-white/80 leading-relaxed">
                I'm a passionate final-year B.Tech CSE (Networks) student at KITS Warangal with extensive experience in
                full-stack development, secure backend systems, DevOps, and cloud applications. I thrive on building
                impactful technology solutions, collaborating on real-world problems, and continuously learning
                cutting-edge tools and practices that drive innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/20 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-emerald-900/20 backdrop-blur-md border-emerald-500/20 h-full hover:bg-emerald-900/30 hover:border-emerald-400/30 transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-emerald-600 to-teal-600">Featured</Badge>
                      )}
                    </div>
                    <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-emerald-900/30 text-emerald-100 border-emerald-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <motion.button
                        onClick={() => window.open(project.github, "_blank")}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.1 }}
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent transition-all duration-150"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </motion.button>
                      {project.demo && (
                        <motion.button
                          onClick={() => window.open(project.demo, "_blank")}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.1 }}
                        >
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-150"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Button>
                        </motion.button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-emerald-900/20 backdrop-blur-md border-emerald-500/20 h-full hover:bg-emerald-900/30 hover:border-emerald-400/30 transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg mr-3">
                        {category.includes("Programming") && <Code className="h-5 w-5 text-white" />}
                        {category.includes("Database") && <Database className="h-5 w-5 text-white" />}
                        {category.includes("Cloud") && <Cloud className="h-5 w-5 text-white" />}
                        {!category.includes("Programming") &&
                          !category.includes("Database") &&
                          !category.includes("Cloud") && <Shield className="h-5 w-5 text-white" />}
                      </div>
                      <h3 className="text-lg font-bold text-white">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-emerald-900/30 text-emerald-100 border-emerald-500/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-emerald-900/20 backdrop-blur-md border-emerald-500/20 hover:bg-emerald-900/30 hover:border-emerald-400/30 transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-emerald-600 to-teal-600 mt-2 md:mt-0">
                        {exp.duration}
                      </Badge>
                    </div>
                    <ul className="text-white/70 leading-relaxed space-y-2">
                      {exp.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <span className="text-emerald-400 mr-2 mt-1.5 text-xs">●</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-white/80 mb-12 leading-relaxed">
              I'm always open to discussing new opportunities, innovative projects, or just having a great conversation
              about technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="mailto:srivathsavthaneeru@gmail.com"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-6 py-3 text-white hover:bg-white/10 transition-all duration-150"
              >
                <Mail className="h-5 w-5" />
                srivathsavthaneeru@gmail.com
              </motion.a>

              <motion.a
                href="https://github.com/srivathsavsree"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-6 py-3 text-white hover:bg-white/10 transition-all duration-150"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
                GitHub
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/thaneerusrivathsav"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-6 py-3 text-white hover:bg-white/10 transition-all duration-150"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">© 2025 Thaneeru Sri Vathsav. Crafted with passion and precision.</p>
        </div>
      </footer>
    </div>
  )
}
