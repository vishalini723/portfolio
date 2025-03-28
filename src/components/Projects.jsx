import { useState } from "react";
import { Link } from "react-router-dom";

// Sample Project Data
const projectsData = {
  completed: [
    {
      title: "Crop Price Predictor(Mini Project)",
      description: "A web app that predicts crop prices based on temperature, rainfall, and crop type using a machine learning model.",
      techStack: ["Flask", "Python", "Joblib", "NumPy"],
      features: [
        "Predicts crop prices from user input.",
    "Handles temperature, rainfall, and crop type data.",
    "Flask backend for quick processing.",
    "Machine learning model for accurate results.",
    "Future enhancement: Real-time data and IoT integration."
      ],
      github: "https://github.com/vishalini723/Crop-Price-Predictor-Mini-Project-"
    },
    {
      title: "Plant Info Guide(Mini Project)",
      description: "A Flask-based web app that provides detailed information on plants, including categories, benefits, and precautions, with dynamic data loading from a JSON file.",
      techStack: ["Flask", "Python", "HTML/CSS", "JavaScript", "JSON"],
      features: [
        "Interactive plant selection with detailed info",
        "Displays plant category, benefits, and precautions",
        "Fetches data dynamically without page reloads",
        "Custom images for each plant",
        "Handles errors for missing plant data gracefully"
      ],
      github: "https://github.com/vishalini723/plant-info-guide"
    },
  ],
  progress: [
    {
      
        title: "Canteen Management System",
        description: "A ReactJS-based food ordering system with QR code login, admin management, and a subscription-based coin system.",
        techStack: ["ReactJS", "Node.js", "MongoDB", "Express", "xlsx"],
        features: [
          "QR Code Login for quick user authentication.",
          "Subscription Coin System with admin approval.",
          "Food Ordering and Cart with MongoDB storage.",
          "Admin Dashboard for user and order management.",
          "Monthly Reports for tracking sales performance."
        ],
        github: "https://github.com/vishalini723/canteen-management-system"
      
      
    },
    {
    title: "Bus Search System",
  description: "A React-based bus search system with smart dropdowns and real-time bus schedules, powered by MongoDB Atlas.",
  techStack: ["ReactJS", "JavaScript", "Tailwind CSS", "MongoDB Atlas"],
  features: [
    "Smart dropdown for location selection.",
    "Auto-fills and hides suggestions on select.",
    "Filters buses by departure and arrival.",
    "Displays upcoming buses with details.",
    "MongoDB Atlas for live data storage."
  ],
  github: "https://github.com/vishalini723/bus-search-system"
}
  ],
  upcoming: [
    {
      title: "Shop Review Hub",
  description: "A platform for users to rate and review shops in busy areas like malls and marketplaces, with smart filtering options.",
  techStack: ["ReactJS", "Node.js", "MongoDB Atlas", "Tailwind CSS"],
  features: [
    "User reviews and ratings for shops.",
    "Filter shops by type, rating, or location.",
    "Supports malls, small markets, and busy areas.",
    "Real-time data storage with MongoDB Atlas.",
    "Clean, responsive UI with Tailwind CSS."
  ],
    },
    {
      title: "Clothing E-commerce Backend",
      description: "Backend for an online clothing store, managing products, orders, and users.",
      techStack: ["Node.js", "Express", "MongoDB Atlas", "JWT"],
      features: [
        "Product and inventory management.",
        "User authentication with JWT.",
        "Cart and order handling.",
        "RESTful API for frontend integration.",
        "Admin controls for products and orders."
      ],
}
  ],
};

function Projects() {
  const [flippedCards, setFlippedCards] = useState({});

  // Toggle Flip Function
  const handleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/projectsBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>

      {/* Page Header */}
      <h1 className="absolute top-4 left-[38%] transform -translate-x-1/2 text-5xl font-extrabold text-white text-center animate-fade-slide drop-shadow-xl">
        🚀 My Projects
      </h1>

      {/* Project Categories Layout */}
      <div className="relative z-10 max-w-7xl mx-auto mt-24 p-6 grid grid-cols-1 gap-20">
        {["completed", "progress", "upcoming"].map((category) => (
          <div key={category} className="mb-6">
            <h2
              className={`text-3xl font-bold mb-4 text-center uppercase tracking-wider ${
                category === "completed"
                  ? "text-green-400"
                  : category === "progress"
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}
            >
              {category === "completed"
                ? "✅ Completed Projects"
                : category === "progress"
                ? "⚙️ In Progress"
                : "🔜 Upcoming Projects"}
            </h2>

            {/* Flipping Cards Layout */}
            <div className="flex flex-wrap justify-center gap-6">
              {projectsData[category].map((project, index) => (
                <div
                  key={index}
                  className="perspective w-[350px] h-[300px] cursor-pointer"
                  onClick={() => handleFlip(`${category}-${index}`)}
                >
                  <div
                    className={`relative preserve-3d w-full h-full duration-700 transform ${
                      flippedCards[`${category}-${index}`] ? "rotate-y-180" : ""
                    }`}
                  >
                    {/* Front Side */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/70 to-black/60 border border-gray-600 p-4 rounded-lg shadow-md flex flex-col items-start justify-center backdrop-blur-md">
                      <h3 className="text-2xl font-semibold text-green-300 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white opacity-80 mb-3">{project.description}</p>


                      <h4 className="text-yellow-300 font-medium">Tech Stack:</h4>
                      <ul className="flex flex-wrap gap-2 mt-1">
                        {project.techStack.map((tech, i) => (
                          <li key={i} className="bg-purple-700 text-white px-2 py-1 rounded-full text-xs">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Back Side */}
<div className="absolute inset-0 bg-gray-900 text-white rounded-lg p-4 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
  <h3 className="text-xl font-bold mb-2">{project.title}</h3>

  {/* Features as bullet points */}
  {project.features && project.features.length > 0 ? (
    <ul className="text-sm opacity-80 list-disc list-inside space-y-1 mb-4 text-justify">
      {project.features.map((feature, index) => (
        <li key={index} className="leading-relaxed">{feature}</li>
      ))}
    </ul>
  ) : (
    <p className="text-sm text-gray-400 italic mb-4">Features coming soon...</p>
  )}

  {/* Show GitHub only for completed & progress projects */}
  {category !== "upcoming" && project.github !== "#" ? (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto w-full text-center bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 rounded transition duration-300 shadow-md"
    >
      View on GitHub 🚀
    </a>
  ) : category === "upcoming" ? (
    <button
      disabled
      className="mt-auto w-full text-center bg-gray-500 text-white font-bold py-2 rounded opacity-60 cursor-not-allowed"
    >
      Coming Soon 🔜
    </button>
  ) : null}
</div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Home Button */}
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="w-16 h-16 bg-black bg-opacity-70 rounded-full border-2 border-purple-400 flex items-center justify-center hover:scale-110 transform transition duration-500 animate-pulse shadow-md shadow-purple-400/40"
        >
          <span className="text-white text-xs font-bold">Home</span>
        </Link>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          .perspective {
            perspective: 1000px;
          }

          .preserve-3d {
            transform-style: preserve-3d;
          }

          .rotate-y-180 {
            transform: rotateY(180deg);
          }

          .backface-hidden {
            backface-visibility: hidden;
          }

          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-slide {
            animation: fade-in-up 1.2s ease-out forwards;
          }

          a:hover {
            box-shadow: 0 0 12px rgba(255, 255, 255, 0.8);
          }
        `}
      </style>
    </div>
  );
}

export default Projects;
