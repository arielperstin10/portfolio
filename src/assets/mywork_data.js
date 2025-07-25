import SSRS_proj from "../assets/SSRS_proj.png";
import library_proj from "../assets/Library_proj.png";
import compiler_proj from "../assets/compiler_proj.png";
import threads_proj from "../assets/threads_proj.png";
import football_proj from "../assets/football_proj.png";
import portfolio_proj from "../assets/portfolio_proj.png";

const mywork_data = [
  {
    w_no: 1,
    w_name: "Personal Portfolio Website",
    w_img: portfolio_proj,
    w_desc:
      "A responsive and interactive portfolio website to showcase my projects, skills, and experience as a software engineering student and developer.",
    technologies: ["React", "CSS", "JavaScript", "Cloudflare"],
    features: [
        "Clean two-column layout inspired by modern design",
        "Dynamic project showcase with detailed modals",
        "Responsive design for desktop and mobile devices",
        "Planned deployment via Cloudflare Pages and CDN",
        "Lightweight and optimized for fast performance",
    ],
    githubUrl: "#",
  },
  {
    w_no: 2,
    w_name: "SSRS – Smart Student Request System",
    w_img: SSRS_proj,
    w_desc:
      "A smart web-based system designed to streamline student request submissions, approvals, and communication with academic staff, improving transparency and efficiency across departments.",
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL (AWS RDS)",
      "WebSocket",
      "Docker",
      "Azure",
      "Figma",
    ],
    features: [
      "Student authentication and request submission system",
      "Real-time updates using WebSocket for instant feedback",
      "Role-based request approval flow (secretary, teacher, admin)",
      "Admin dashboard with request filtering, editing, and reassignment",
      "File attachments, status tracking, and comment system",
      "Responsive UI designed in Figma for cross-device support",
      "Agile development with task tracking in Jira",
      "CI/CD integration using Azure",
    ],
    githubUrl: "https://github.com/BS-PM-2025/BS-PM-2025-TEAM14",
  },
  {
    w_no: 3,
    w_name: "eBook Library Platform",
    w_img: library_proj,
    w_desc:
      "A full-stack web platform for browsing, borrowing, and managing eBooks, with secure user authentication and real-time borrowing features.",
    technologies: [
      "ASP.NET MVC",
      "C#",
      "Oracle SQL",
      "HTML",
      "CSS",
      "JavaScript",
      "PayPal PIA API",
    ],
    features: [
      "User registration and login system",
      "Book catalog with search and browsing functionality",
      "Secure borrowing system with waiting list and queue prioritization",
      "Wishlist and personalized book management",
      "Real payment processing with PayPal PIA API and credit card support",
      "Regex-based input validation and SQL injection protection",
      "Admin tools for managing books and user activity",
    ],
    githubUrl: "https://github.com/arielperstin10/Library",
  },
  {
    w_no: 4,
    w_name: "Custom Compiler for Procedural Language",
    w_img: compiler_proj,
    w_desc:
      "A C-based compiler for a custom procedural programming language, built using Lex and Yacc. The project includes full parsing, semantic analysis, and three-address code generation.",
    technologies: ["C", "Lex (Flex)", "Yacc (Bison)"],
    features: [
      "Custom grammar design and tokenization using Flex",
      "LL(1) parsing and AST generation with Bison",
      "18 semantic checks including scope management, type inference, and function validation",
      "Symbol table implementation with scope-level and parameter tracking",
      "Support for pointers, nested functions, type checking, and return statement validation",
      "Three-address code (3AC) generation for intermediate representation",
      "Error reporting with line numbers and semantic feedback",
      "Modular structure with separate lexer, parser, and semantic modules",
    ],
    githubUrl: "https://github.com/arielperstin10/LangCompiler",
  },
  {
    w_no: 5,
    w_name: "Multithreaded Competitive Event Simulator",
    w_img: threads_proj,
    w_desc:
      "A Java-based GUI application that simulates a real-time competitive event, where each participant is represented by a thread. The project highlights concurrent programming and object-oriented design.",
    technologies: ["Java"],
    features: [
      "Graphical user interface for real-time race visualization",
      "Multithreading architecture with each competitor running independently",
      "Live GUI updates to reflect participant progress and status",
      "Implementation of key design patterns: Prototype, State, Decorator, Observer, and Factory Method",
      "Event-driven simulation with dynamic competitor behavior",
      "Clean MVC structure and modular object-oriented code",
    ],
    githubUrl: "https://github.com/arielperstin10/JavaThreadsCompetition",
  },
  {
    w_no: 6,
    w_name: "Football Market Value Prediction",
    w_img: football_proj,
    w_desc:
      "A machine learning project that predicts football players' market value and wages based on demographic and performance data, using regression and classification techniques.",
    technologies: ["Python", "pandas", "Google Colab"],
    features: [
      "Exploratory data analysis and visualization of player stats",
      "Data cleaning and feature engineering for model readiness",
      "Regression models for predicting continuous player values",
      "Classification models for wage category prediction",
      "Applied algorithms including Linear Regression, KNN, ID3, SVM, and XGBoost",
      "Model evaluation using accuracy, F1-score, and cross-validation",
      "Discretization and salary categorization based on thresholds",
    ],
    githubUrl: "https://github.com/arielperstin10/Football-Players-Prediction",
  },
];

export default mywork_data;
