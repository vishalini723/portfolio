import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



function Skills() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation when page loads
    setTimeout(() => setAnimated(true), 300);
  }, []);

  const skills = [
    { name: "ReactJS", level: "80%" },
    { name: "Node.js", level: "80%" },
    { name: "MongoDB", level: "60%" },
    { name: "Express", level: "60%" },
    { name: "Flask", level: "20%" },
    { name: "Python", level: "30%" },
    { name: "Tailwind CSS", level: "20%" },
    { name: "Git/GitHub", level: "25%" },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop className="absolute inset-0 h-full w-full object-cover">
        {/* <source src="/video/skillsBackground.mp4" type="video/mp4" /> */}
        <source src="/videos/skillsBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4 text-purple-300 drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">
          My Skills
        </h1>
        <p className="text-2xl mb-6 text-[#A0E9FF] opacity-90">
          Full Stack Developer | Backend Specialist
        </p>

        {/* Skills with Animated Bars */}
        <div className="grid grid-cols-2 gap-4 w-3/4">
          {skills.map((skill, index) => (
            <div key={index} className="text-left outline outline-1 rounded-2xl p-3 outline-zinc-600 bg-zinc-700">
              <p className="text-2xl font-semibold text-[#A0E9FF] mb-1">{skill.name}</p>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className={`h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000 ease-out ${
                    animated ? "w-" + skill.level.replace("%", "") : "w-0"
                  }`}
                  style={{ width: animated ? skill.level : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="max-w-xl mt-6 text-[#e0e0e0] opacity-80 leading-relaxed">
          I specialize in building dynamic, scalable, and responsive web applications.
          From creating user-friendly interfaces with <span className="text-purple-300 font-semibold">React</span> to  
          building powerful backends with <span className="text-green-300 font-semibold">Node.js</span> and  
          <span className="text-blue-300 font-semibold"> MongoDB</span>,  
          I love turning ideas into reality.
        </p>
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
    </div>
  );
}

export default Skills;
