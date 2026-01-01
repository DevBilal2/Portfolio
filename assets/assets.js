import user_image from "./user-image.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.jpeg";
import logo_dark from "./logo_dark.jpeg";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  // Zoho projects
  {
    id: "zoho-crm-automation",
    title: "Zoho CRM Automation & Smart Invoice System",
    description: "Automated CRM workflows with annual invoice generation, lead pipeline automation, and sync across CRM, Books, and Inventory using Deluge + REST APIs.",
    bgImage: "/crm.jpeg",
    link: "",
    type: "zoho",
  },
  {
    id: "zoho-desk-ai-automation",
    title: "Zoho Desk AI Support Automation",
    description: "Built AI-driven ticket routing, automated replies, SLA tracking, and WhatsApp/Email workflows using Desk, Flow, TaskBots, and Twilio.",
    bgImage: "/desk.jpeg",
    link: "",
    type: "zoho",
  },
  {
    id: "slack-style-chat-app",
    title: "Slack-Style Chat App (Zoho Creator)",
    description: "Developed real-time channels, @mentions, file sharing, voice sending and CRM-linked activity updates in a Creator-based communication app.",
    bgImage: "/creator.jpeg",
    link: "",
    type: "zoho",
  },
  {
    id: "inventory-creator-sync",
    title: "Inventory–Creator Sync Portal",
    description: "Created a two‑way sync for orders, invoices, shipments, and stock across Creator and Zoho Inventory.",
    bgImage: "/inven.jpeg",
    link: "",
    type: "zoho",
  },

  // Web projects
  {
    id: "mern-ecommerce",
    title: "MERN E-Commerce Platform",
    description: "Built full authentication, cart, checkout, and admin dashboard using React, Node.js, and MongoDB.",
    bgImage: "/work-3.jpeg",
    link: "https://mernecommercestore.netlify.app/",
    type: "web",
  },
  {
    id: "portfolio-nextjs",
    title: "Portfolio Website (Next.js)",
    description: "Designed a fast, animated, responsive personal portfolio with SEO optimization.",
    bgImage: "/work-2.jpeg",
    link: "",
    type: "web",
  },
  {
    id: "tic-tac-toe-react",
    title: "Tic-Tac-Toe Game (React)",
    description: "Developed a clean, responsive Tic-Tac-Toe game with smart state handling and smooth UI.",
    bgImage: "/work-1.jpeg",
    link: "https://tictactoe3ai.netlify.app/",
    type: "web",
  },
];

// Detailed case study data
export const caseStudyData = {
  "zoho-crm-automation": {
    title: "Zoho CRM Automation & Smart Invoice System",
    category: "Zoho Projects",
    bgImage: "/crm.jpeg",
    link: "",
    overview: "Automated CRM workflows with annual invoice generation, lead pipeline automation, and sync across CRM, Books, and Inventory using Deluge + REST APIs.",
    challenge: "The client needed a comprehensive automation system to streamline their sales process, eliminate manual invoice generation, and ensure seamless data synchronization across multiple Zoho applications.",
    solution: "Developed a robust automation system using Deluge scripting and REST APIs to automate CRM workflows, implement annual invoice generation, automate lead pipeline management, and create real-time synchronization between Zoho CRM, Books, and Inventory.",
    technologies: ["Zoho CRM", "Zoho Books", "Zoho Inventory", "Deluge", "REST APIs"],
    features: [
      "Automated annual invoice generation based on CRM data",
      "Lead pipeline automation with custom workflow rules",
      "Real-time synchronization across CRM, Books, and Inventory",
      "Custom Deluge scripts for complex business logic",
      "REST API integrations for third-party services",
      "Automated data validation and error handling"
    ],
    results: "Reduced manual data entry by 90%, eliminated invoice generation errors, and improved data consistency across all platforms."
  },
  "zoho-desk-ai-automation": {
    title: "Zoho Desk AI Support Automation",
    category: "Zoho Projects",
    bgImage: "/desk.jpeg",
    link: "",
    overview: "Built AI-driven ticket routing, automated replies, SLA tracking, and WhatsApp/Email workflows using Desk, Flow and TaskBots.",
    challenge: "The support team was overwhelmed with ticket volume and needed intelligent automation to route tickets, respond to common queries, and ensure SLA compliance across multiple communication channels.",
    solution: "Implemented an AI-powered support automation system using Zoho Desk, Flow, TaskBots and integration to intelligently route tickets, provide automated responses, track SLAs, and manage multi-channel communication workflows.",
    technologies: ["Zoho Desk", "Zoho Flow", "TaskBots", "AI", "WhatsApp API", "Email Automation"],
    features: [
      "AI-driven intelligent ticket routing based on content analysis",
      "Automated reply system for common customer queries",
      "Real-time SLA tracking and escalation management",
      "WhatsApp and Email workflow automation",
      "TaskBot integration for repetitive task automation",
      "Multi-channel communication management"
    ],
    results: "Improved response time by 70%, reduced ticket resolution time by 50%, and achieved 95% SLA compliance rate."
  },
  "slack-style-chat-app": {
    title: "Slack-Style Chat App (Zoho Creator)",
    category: "Zoho Projects",
    bgImage: "/creator.jpeg",
    link: "",
    overview: "Developed real-time channels, @mentions, file sharing, voice sending and CRM-linked activity updates in a Creator-based communication app.",
    challenge: "The organization needed an internal communication platform integrated with their CRM system to improve team collaboration and ensure all customer interactions are tracked and accessible.",
    solution: "Built a comprehensive Slack-style communication application using Zoho Creator with real-time messaging, channel management, @mentions, file sharing, voice messaging, and seamless CRM integration for activity tracking.",
    technologies: ["Zoho Creator", "Deluge", "Zoho CRM", "Real-time APIs", "File Storage"],
    features: [
      "Real-time messaging with instant notifications",
      "Channel-based communication with public and private channels",
      "@mentions system for user notifications",
      "File sharing and document management",
      "Voice message sending and playback",
      "CRM-linked activity updates and synchronization",
      "User presence indicators and typing status"
    ],
    results: "Improved team collaboration efficiency by 60%, reduced email communication by 40%, and ensured 100% customer interaction tracking."
  },
  "inventory-creator-sync": {
    title: "Inventory–Creator Sync Portal",
    category: "Zoho Projects",
    bgImage: "/inven.jpeg",
    link: "",
    overview: "Created a two‑way sync for orders, invoices, shipments, and stock across Creator and Zoho Inventory.",
    challenge: "The business needed seamless synchronization between their custom Zoho Creator application and Zoho Inventory to ensure accurate order processing, inventory management, and financial tracking.",
    solution: "Developed a robust two-way synchronization portal that automatically syncs orders, invoices, shipments, and stock levels between Zoho Creator and Zoho Inventory in real-time, ensuring data consistency and eliminating manual data entry.",
    technologies: ["Zoho Creator", "Zoho Inventory", "Deluge", "REST APIs", "Webhooks"],
    features: [
      "Bidirectional synchronization between Creator and Inventory",
      "Real-time order processing and updates",
      "Automatic invoice generation and sync",
      "Shipment tracking and status updates",
      "Stock level synchronization with conflict resolution",
      "Error handling and data validation",
      "Audit trail for all sync operations"
    ],
    results: "Eliminated 100% of manual data entry errors, reduced processing time by 75%, and ensured real-time inventory accuracy."
  },
  "mern-ecommerce": {
    title: "MERN E-Commerce Platform",
    category: "Web Projects",
    bgImage: "/work-3.jpeg",
    link: "https://mernecommercestore.netlify.app/",
    overview: "Built full authentication, cart, checkout, and admin dashboard using React, Node.js, and MongoDB.",
    challenge: "A personal project a complete e-commerce solution with secure user authentication, shopping cart functionality, seamless checkout process, and a comprehensive admin dashboard for managing products, orders, and customers.",
    solution: "Developed a full-stack MERN e-commerce platform with JWT-based authentication, persistent shopping cart, secure payment integration, and a feature-rich admin dashboard for complete store management.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs", "Stripe API", "Tailwind CSS"],
    features: [
      "User authentication and authorization with JWT",
      "Shopping cart with persistent storage",
      "Secure checkout process with payment integration",
      "Product catalog with search and filtering",
      "Order management and tracking",
      "Admin dashboard for product, order, and user management",
      "Responsive design for all devices",
      "Real-time inventory updates"
    ],
    results: "Successfully launched a production-ready e-commerce platform with 100% secure transactions and comprehensive admin capabilities."
  },
  "portfolio-nextjs": {
    title: "Portfolio Website (Next.js)",
    category: "Web Projects",
    bgImage: "/work-2.jpeg",
    link: "",
    overview: "Designed a fast, animated, responsive personal portfolio with SEO optimization.",
    challenge: "Created a modern, high-performance portfolio website that showcases work effectively while maintaining fast load times, smooth animations, and excellent SEO for better discoverability.",
    solution: "Built a cutting-edge portfolio website using Next.js with server-side rendering, optimized animations, responsive design, and comprehensive SEO implementation including meta tags, structured data, and performance optimization.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "SEO", "SSR"],
    features: [
      "Server-side rendering for optimal performance",
      "Smooth animations and transitions",
      "Fully responsive design for all screen sizes",
      "SEO optimization with meta tags and structured data",
      "Dark mode support",
      "Fast page load times and optimized assets",
      "Accessible design following WCAG guidelines"
    ],
    results: "Achieved 95+ Lighthouse performance score, improved SEO rankings, and created an engaging user experience."
  },
  "tic-tac-toe-react": {
    title: "Tic-Tac-Toe Game (React)",
    category: "Web Projects",
    bgImage: "/work-1.jpeg",
    link: "https://tictactoe3ai.netlify.app/",
    overview: "Developed a clean, responsive Tic-Tac-Toe game with AI opponent using minimax algorithm, smart state handling, and smooth UI.",
    challenge: "Built an interactive Tic-Tac-Toe game that demonstrates React state management, component architecture, and AI implementation. The challenge was to create an unbeatable AI opponent using the minimax theorem while maintaining a smooth user experience with animations and responsive design.",
    solution: "Created a polished Tic-Tac-Toe game using React with efficient state management, clean component structure, and implemented an AI opponent using the minimax algorithm. The minimax algorithm ensures optimal gameplay by evaluating all possible moves and selecting the best one, making the AI unbeatable. Added responsive design and smooth UI animations for an enjoyable gaming experience.",
    technologies: ["React", "JavaScript", "CSS3", "HTML5", "State Management", "Minimax Algorithm", "AI"],
    features: [
      "AI opponent using minimax algorithm for optimal gameplay",
      "Smart state management with React hooks",
      "Game logic with win detection algorithms",
      "Unbeatable AI that calculates best moves using minimax theorem",
      "Responsive design for mobile and desktop",
      "Smooth animations and transitions",
      "Game history and replay functionality",
      "Clean and intuitive user interface",
      "Accessibility features"
    ],
    results: "Created an engaging, fully functional game with an unbeatable AI opponent that demonstrates React expertise, algorithm implementation skills, and provides an enjoyable user experience."
  }
};

export const serviceData = [
  {
    icon: assets.ui_icon,
    title: "Zoho Automation",
    description:
      "Customizing Zoho apps, implementing workflows, and automating business processes using Deluge scripting.",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "API & Integrations",
    description:
      "Connecting Zoho apps and web projects with REST APIs and third-party services for seamless automation.",
    link: "",
  },
  {
    icon: assets.web_icon,
    title: "Web Development",
    description:
      "Building responsive websites and dashboards using React.js, Next.js, and the MERN stack.",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "UI/UX & Figma Conversions",
    description:
      "Turning Figma designs into clean, functional, and responsive web pages.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description:
      "Deluge, Client Script, HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "BSc in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built many ZOHO and Website projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
