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
  // Web projects
  {
    title: "Web Game",
    description: "TicTacToe",
    bgImage: "/work-1.jpeg",
    link: "https://tictactoe3ai.netlify.app/",
    type: "web",
  },
  {
    title: "Portfolio website",
    description: "Frontend project",
    bgImage: "/work-2.jpeg",
    link: "https://tictactoe3ai.netlify.app/",
    type: "web",
  },
  {
    title: "E-commerce(Almost Done)",
    description: "Full Stack MERN",
    bgImage: "/work-3.jpeg",
    link: "https://mernecommercestore.netlify.app/",
    type: "web",
  },
  {
    title: "Frontend (notlive)",
    description: "Landing Page",
    bgImage: "/work-4.jpeg",
    link: "",
    type: "web",
  },

  // Zoho projects
  {
    title: "CRM Automation",
    description: "Customized workflows and automation in Zoho CRM.",
    bgImage: "/crm.jpeg",
    link: "",
    type: "zoho",
  },
  {
    title: "Zoho Creator App",
    description:
      "Built a custom business application with Creator and Deluge scripts.",
    bgImage: "/creator.jpeg",
    link: "",
    type: "zoho",
  },
  {
    title: "Desk & Flow Integration",
    description:
      "Integrated Zoho Desk with Flow to automate support processes.",
    bgImage: "/desk.jpeg",
    link: "",
    type: "zoho",
  },
  {
    title: "Inventory Management",
    description: "Automated inventory workflows using Zoho Inventory.",
    bgImage: "/inven.jpeg",
    link: "",
    type: "zoho",
  },
];

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
