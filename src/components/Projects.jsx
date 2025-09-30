import React from 'react';

// 1. Define the data structure for all projects
const projectsData = [
  {
    id: 1,
    title: 'MH-RTO Mobile Application',
    imageUrl: '/image/project1.jpg',
    description: "Developed an Android application to provide comprehensive information about Regional Transport Offices (RTO) in Maharashtra. This Android application provides information about Road Transport Office (RTO) rules, violations, and office locations through a user-friendly interface. Users can view PDF documents with detailed information for each section: rules, violations, and RTO office details.",
    techStack: ['Java', 'XML', 'Android Studio'],
    projectUrl: 'https://github.com/Yugal-kosamshile/RTO-Application',
  },
  {
    id: 2,
    title: 'Disney+ Hotstar Clone',
    imageUrl: '/image/project2.jpg',
    description: "Developed a clone of the popular streaming service Disney+ Hotstar using HTML, CSS, and JavaScript. Populated it with content and implemented basic functionalities to simulate a real streaming service experience. Enhanced the UI with responsive design for seamless viewing across devices. Optimized page layouts and interactions to improve user engagement and overall usability.",
    techStack: ['HTML', 'CSS', 'JavaScript'],
    projectUrl: 'https://0disney-plus-hotstar-clone.netlify.app',
  },
  {
    id: 3,
    title: 'GameOn! 🎮 - Interactive Web Games',
    imageUrl: '/image/project3.jpg',
    description: "Welcome to GameOn! 🎮 - a one-stop platform for engaging web games. Includes puzzles, action games, and strategy games. Designed with a user-friendly interface, it offers multiplayer modes and regular updates to ensure a dynamic gaming experience. Optimized for performance and responsiveness to work smoothly across devices. Integrated intuitive navigation and visual feedback to enhance player engagement and satisfaction.",
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    projectUrl: 'https://interactive-web-game.netlify.app',
  },
  {
    id: 4,
    title: 'Food Mart | React Application',
    imageUrl: '/image/project4.jpg',
    description: "Built a dynamic online grocery platform using React.js with efficient state management. Implemented features like product filtering, cart functionality, and coupon application. Designed responsive UI with reusable components and optimized performance. Integrated order tracking and purchase history functionality.",
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
    projectUrl: 'https://foodmartyk.vercel.app',
  },
  {
    id: 5,
    title: 'IT-Master',
    imageUrl: '/image/project5.jpg',
    description: "Created dynamic UI with React and Bootstrap for course browsing and enrollment. Built Spring Boot backend with REST APIs for user and admin features. Managed data with Oracle DB for courses, users, and enrollments. Implemented secure authentication and authorization for different user roles. Optimized performance and scalability to handle large volumes of courses and users efficiently.",
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Database Management', 'MySQL', 'Spring Boot', 'REST APIs'],
    projectUrl: 'https://it-master.vercel.app',
  },
];

// 2. Helper component for a single Project Card
const ProjectCard = ({ project }) => (
  <div
    className="bg-white rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
  >
    {/* Image */}
    <div className="h-60 bg-indigo-100 overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
      <p className="text-gray-600 text-sm sm:text-base mb-4 flex-grow">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Button */}
      <a
        href={project.projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center text-indigo-600 font-medium transition hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-md px-2 py-1"
      >
        View Project
        {/* SVG Icon */}
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
  </div>
);

// 3. Main Projects Component
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">My Projects</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dynamically render project cards from the data array */}
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;