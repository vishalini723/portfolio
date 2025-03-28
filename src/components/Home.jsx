import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/homeBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Lightened Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4 text-purple-300 drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">
          Hi, I'm Vishalini K
        </h1>
        <p className="text-2xl mb-6 text-[#A0E9FF] opacity-90">
          Aspiring Full Stack Developer | Backend Specialist
        </p>
        <p className="max-w-xl mb-6 text-[#e0e0e0] opacity-80 leading-relaxed">
          Passionate about creating seamless web experiences. Skilled in
          <span className="text-purple-300 font-semibold"> React</span>,
          <span className="text-green-300 font-semibold"> Node.js</span>,
          <span className="text-blue-300 font-semibold"> MongoDB</span>, and more.
          Let’s build something amazing!
        </p>

        {/* Social Links as Buttons with Icons */}
        <div className="flex space-x-4 mb-6">
          <a
            href="https://github.com/vishalini723"
            className="flex items-center justify-center p-3 rounded-full bg-transparent border-2 border-[#A0E9FF] text-[#A0E9FF] hover:bg-[#A0E9FF] hover:text-black transition transform hover:scale-110 shadow-md hover:shadow-purple-500/50"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/vishalini-k-it-student-5a7808257"
            className="flex items-center justify-center p-3 rounded-full bg-transparent border-2 border-[#A0E9FF] text-[#A0E9FF] hover:bg-[#A0E9FF] hover:text-blue-600 transition transform hover:scale-110 shadow-md hover:shadow-purple-500/50"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-md hover:shadow-purple-500/50"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>

      {/* Centered Horizontal Navigation Circles */}
      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 flex space-x-10">
  {["About Me", "Projects", "Skills", "Contact"].map((text, index) => (
    <Link
      key={index}
      to={`/${text.toLowerCase().replace(" ", "")}`}
      className="w-16 h-16 bg-black bg-opacity-70 rounded-full border-2 border-purple-400 flex items-center justify-center hover:scale-110 transform transition duration-500 animate-pulse shadow-md shadow-purple-400/40"
    >
      <span className="text-white text-xs font-bold">{text}</span>
    </Link>
  ))}
</div>

    </div>
  );
}

export default Home;
