// import { Link } from "react-router-dom";

// function AboutMe() {
//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Background Video */}
//       <video autoPlay muted loop className="absolute inset-0 h-full w-full object-cover">
//         <source src="/videos/aboutMeBackground.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 opacity-60"></div>

//       {/* Enter Circle with Animation */}
//       <div className="absolute inset-0 flex justify-center items-center">
//         <Link
//           to="/projects"
//           className="w-40 h-40 bg-black bg-opacity-70 rounded-full border-4 border-white flex items-center justify-center hover:scale-125 transform transition duration-500 animate-pulse"
//         >
//           <span className="text-white text-lg font-bold">Projects</span>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default AboutMe;




// import React from "react";

// function AboutMe() {
//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Background Video */}
//       <video autoPlay muted loop className="absolute inset-0 h-full w-full object-cover">
//         <source src="/videos/aboutMeBackground.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

//       {/* Main Content Container */}
//       <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-8 md:px-16 gap-8 text-white">
//         {/* Left Content Section */}
//         <div className="md:w-1/2 flex flex-col justify-center animate-fade-in">
//           <h1 className="text-5xl font-extrabold mb-4 text-purple-300">About Me</h1>

//           <p className="text-lg opacity-90 leading-relaxed mb-4">
//             I'm <span className="font-bold text-cyan-300">Vishalini K</span> - a passionate Full Stack Developer with a strong focus on backend architecture.  
//             I specialize in building secure, fast, and scalable web apps using modern technologies like  
//             <span className="text-purple-300 glow-purple"> React</span>,  
//             <span className="text-green-300 glow-green"> Node.js</span>,  
//             <span className="text-blue-300 glow-blue"> MongoDB</span>, and  
//             <span className="text-yellow-300 glow-yellow"> Express</span>.
//           </p>

//           <p className="text-lg opacity-90 leading-relaxed mb-4">
//             My journey into development started with curiosity and has grown into a mission to create impactful, user-friendly applications.  
//             From databases to API development, I love working on the backbone of powerful web systems.
//           </p>

//           <p className="text-lg opacity-90 leading-relaxed">
//             I also explore frontend designs to create responsive and engaging User Interfaces-ensuring functionality meets aesthetics.
//           </p>

//           {/* Experience & Projects Info */}
//           <div className="mt-6 flex gap-8">
//             {/* Experience Card */}
//             <div className="bg-black/70 border border-cyan-400/80 p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-500 ease-in-out">
//               <h2 className="text-xl font-semibold text-cyan-300 mb-1">Experience</h2>
//               <p className="text-lg font-medium">Fresher</p>
//             </div>

//             {/* Projects Card */}
//             <div className="bg-black/70 border border-purple-400/80 p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-500 ease-in-out">
//               <h2 className="text-xl font-semibold text-purple-300 mb-1">Projects</h2>
//               <p className="text-lg font-medium">3 Completed</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Image Section */}
//         <div className="md:w-1/2 flex justify-center animate-slide-up">
//           <img
//             src="/images/developer_working.webp"
//             alt="Developer Working"
//             className="rounded-lg shadow-xl w-[400px] md:w-[500px] border-4 border-white hover:scale-105 transform transition duration-500 ease-in-out"
//           />
//         </div>
//       </div>

//       {/* Home Circle Button (Top Right Corner) */}
//       <div className="absolute top-4 right-4">
//         <a
//           href="/"
//           className="w-20 h-20 bg-black bg-opacity-70 rounded-full border-4 border-white flex items-center justify-center hover:scale-125 transform transition duration-500 animate-pulse"
//         >
//           <span className="text-white text-lg font-bold">Home</span>
//         </a>
//       </div>

//       {/* Custom CSS Styling */}
//       <style>
//         {`
//           .glow-purple {
//             animation: glow-purple 1.5s infinite alternate;
//           }
//           @keyframes glow-purple {
//             from { text-shadow: 0 0 5px #d8b4fe, 0 0 10px #c084fc; }
//             to { text-shadow: 0 0 10px #c084fc, 0 0 20px #7c3aed; }
//           }

//           .glow-green {
//             animation: glow-green 1.5s infinite alternate;
//           }
//           @keyframes glow-green {
//             from { text-shadow: 0 0 5px #86efac, 0 0 10px #22c55e; }
//             to { text-shadow: 0 0 10px #22c55e, 0 0 20px #16a34a; }
//           }

//           .glow-blue {
//             animation: glow-blue 1.5s infinite alternate;
//           }
//           @keyframes glow-blue {
//             from { text-shadow: 0 0 5px #93c5fd, 0 0 10px #3b82f6; }
//             to { text-shadow: 0 0 10px #3b82f6, 0 0 20px #1d4ed8; }
//           }

//           .glow-yellow {
//             animation: glow-yellow 1.5s infinite alternate;
//           }
//           @keyframes glow-yellow {
//             from { text-shadow: 0 0 5px #fde047, 0 0 10px #facc15; }
//             to { text-shadow: 0 0 10px #facc15, 0 0 20px #ca8a04; }
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default AboutMe;

import React from "react";

function AboutMe() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video with Animation */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 h-full w-full object-cover animate-video-zoom-fade"
      >
        <source src="/videos/aboutMeBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>

      {/* Main Content Container */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-8 md:px-16 gap-8 text-white">
        {/* Left Content Section */}
        <div className="md:w-1/2 flex flex-col justify-center animate-fade-slide">
          <h1 className="text-5xl font-extrabold mb-4 text-purple-300">About Me</h1>

          <p className="text-lg opacity-90 leading-relaxed mb-4">
            I'm <span className="font-bold text-cyan-300">Vishalini K</span> — a passionate Full Stack Developer with a strong focus on backend architecture.
            I specialize in building secure, fast, and scalable web apps using modern technologies like
            <span className="text-purple-300 glow-purple"> React</span>,
            <span className="text-green-300 glow-green"> Node.js</span>,
            <span className="text-blue-300 glow-blue"> MongoDB</span>, and
            <span className="text-yellow-300 glow-yellow"> Express</span>.
          </p>

          <p className="text-lg opacity-90 leading-relaxed mb-4">
            My journey into development started with curiosity and has grown into a mission to create impactful, user-friendly applications.
            From databases to API development, I love working on the backbone of powerful web systems.
          </p>

          <p className="text-lg opacity-90 leading-relaxed">
            I also explore frontend designs to create responsive and engaging User Interfaces - ensuring functionality meets aesthetics.
          </p>

          {/* Experience & Projects Info */}
          <div className="mt-6 flex gap-8">
            {/* Experience Card */}
            <div className="bg-black/70 border border-cyan-400/80 p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-500 ease-in-out">
              <h2 className="text-xl font-semibold text-cyan-300 mb-1">Experience</h2>
              <p className="text-lg font-medium">Fresher</p>
            </div>

            {/* Projects Card */}
            <div className="bg-black/70 border border-purple-400/80 p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-500 ease-in-out">
              <h2 className="text-xl font-semibold text-purple-300 mb-1">Projects</h2>
              <p className="text-lg font-medium">3 Completed</p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center animate-fade-slide">
          <img
            src="/images/developer_working.webp"
            alt="Developer Working"
            className="rounded-lg shadow-xl w-[400px] md:w-[500px] border-4 border-white hover:scale-105 transform transition duration-500 ease-in-out"
          />
        </div>
      </div>

      
      <div className="absolute top-6 left-6">

  <a
    href="/"
    className="w-16 h-16 bg-black bg-opacity-70 rounded-full border-2 border-purple-400 flex items-center justify-center hover:scale-110 transform transition duration-500 animate-pulse shadow-md shadow-purple-400/40"
  >
    <span className="text-white text-xs font-bold">Home</span>
  </a>
</div>


      {/* Custom CSS Styling */}
      <style>
        {`
          /* Video Fade + Zoom Animation */
          @keyframes video-zoom-fade {
            0% {
              opacity: 0;
              transform: scale(1.2);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-video-zoom-fade {
            animation: video-zoom-fade 1.5s ease-out forwards;
          }

          /* Content Fade + Slide Animation */
          @keyframes fade-slide {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-slide {
            animation: fade-slide 1.5s ease-out forwards;
          }

          /* Glowing Text Animations */
          .glow-purple {
            animation: glow-purple 1.5s infinite alternate;
          }
          @keyframes glow-purple {
            from { text-shadow: 0 0 5px #d8b4fe, 0 0 10px #c084fc; }
            to { text-shadow: 0 0 10px #c084fc, 0 0 20px #7c3aed; }
          }

          .glow-green {
            animation: glow-green 1.5s infinite alternate;
          }
          @keyframes glow-green {
            from { text-shadow: 0 0 5px #86efac, 0 0 10px #22c55e; }
            to { text-shadow: 0 0 10px #22c55e, 0 0 20px #16a34a; }
          }

          .glow-blue {
            animation: glow-blue 1.5s infinite alternate;
          }
          @keyframes glow-blue {
            from { text-shadow: 0 0 5px #93c5fd, 0 0 10px #3b82f6; }
            to { text-shadow: 0 0 10px #3b82f6, 0 0 20px #1d4ed8; }
          }

          .glow-yellow {
            animation: glow-yellow 1.5s infinite alternate;
          }
          @keyframes glow-yellow {
            from { text-shadow: 0 0 5px #fde047, 0 0 10px #facc15; }
            to { text-shadow: 0 0 10px #facc15, 0 0 20px #ca8a04; }
          }
        `}
      </style>
    </div>
  );
}

export default AboutMe;





