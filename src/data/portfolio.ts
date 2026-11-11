export const portfolioData = {
  name: "Kongmeng thor", // User can replace this
  role: ["Architect Student", "Frontend Developer", "UI Designer","ພັດທະນາຫນ້າບ້ານ","ອອກແບບຫນ້າຕາເວັບໄຊ"],
  description: "Passionate software developer and architecture student blending structural precision with digital creativity to build high-performance, visually stunning web experiences.",
  about: {
    bio: "I am a dedicated student of architecture with a deep passion for software engineering. This unique combination allows me to approach UI/UX design with a structural mindset, ensuring that every digital space I create is as functional as it is beautiful. I specialize in building modern, responsive web applications with a focus on premium user experiences.",
    education: "Currently pursuing a degree in Architecture, while self-studying advanced software engineering and frontend architecture.",
    interests: ["Programming", "Design", "AI"],
    stats: [
      { label: "Years Learning", value: "3+" },
      { label: "Projects Completed", value: "5" },
      { label: "Technologies Learned", value: "10+" },
    ]
  },
  skills: {
    frontend: [
      { name: "HTML", percentage: 95 },
      { name: "CSS", percentage: 90 },
      { name: "JavaScript", percentage: 85 },
      { name: "React", percentage: 80 },
      { name: "Tailwind", percentage: 90 },
    ],
    backend: [
      { name: "Node.js", percentage: 70 },
      { name: "Express", percentage: 65 },
      { name: "SQL", percentage: 60 },
    ],
    tools: [
      { name: "Git", percentage: 85 },
      { name: "Figma", percentage: 80 },
      { name: "VS Code", percentage: 95 },
      { name: "Draw.io", percentage: 80 },
    ]
  },
  projects: [
    {
      title: "Dormitory Booking Website",
      description: "A comprehensive system for students to browse and book dormitory rooms with real-time availability and secure payments.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      link: "#",
      github: "#",
      image: "https://tse3.mm.bing.net/th/id/OIP.0h0DVnFPPUzYV8ev0TSOjgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      title: "POS Book-Selling System Management",
      description: "An administrative dashboard to manage Books records, attendance, and grading with an intuitive UI.",
      tech: ["React", "Express", "PostgreSQL", "Tailwind"],
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop"
    }
  ],
  experience: [
    {
      year: "2023 - Present",
      title: "Architecture Student",
      company: "University",
      description: "Studying structural design and spatial planning, applying architectural principles to digital interfaces."
    },
    {
      year: "2022 - 2023",
      title: "Frontend Intern",
      company: "Tech Solutions Inc",
      description: "Developed responsive UI components and improved website performance by 20% using React and Tailwind."
    },
    {
      year: "2021 - 2022",
      title: "Freelance Web Developer",
      company: "Self-employed",
      description: "Built multiple custom websites for small businesses, focusing on conversion and user experience."
    }
  ],
  services: [
    {
      title: "Web Development",
      description: "Building scalable, high-performance websites using the latest technologies.",
      icon: "Globe"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually stunning interfaces that prioritize the user.",
      icon: "Palette"
    },
    {
      title: "Frontend Development",
      description: "Translating complex designs into pixel-perfect, responsive code.",
      icon: "Code"
    },
    {
      title: "AI Integration",
      description: "Enhancing applications with intelligent AI capabilities and automation.",
      icon: "Cpu"
    }
  ]
};
