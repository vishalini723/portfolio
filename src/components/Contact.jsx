import { Link } from "react-router-dom";
import { useState } from "react";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   const subject = encodeURIComponent("Contact Form Submission");
  //   const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    
  //   window.location.href = `mailto:vishavishalini723@.com?subject=${subject}&body=${body}`;
  // };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
  
    window.location.href = `mailto:vishavishalini723@gmail.com?subject=${subject}&body=${body}`;
  };
  

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/contactBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>

      {/* Home Button */}
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="w-16 h-16 bg-black bg-opacity-70 rounded-full border-2 border-purple-400 flex items-center justify-center hover:scale-110 transform transition duration-500 animate-pulse shadow-md shadow-purple-400/40"
        >
          <span className="text-white text-xs font-bold">Home</span>
        </Link>
      </div>
      {/* Contact Info */}
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
  <h2 className="text-3xl font-bold">Get in Touch</h2>
  <p className="mt-2 text-lg">📧 Email: vishavishalini723@gmail.com</p>
  <p className="mt-1 text-lg">📞 Phone: +91 89460 55656</p>
  <p className="mt-1 text-lg">📍 Location: Salem,Tamilnadu,India</p>
</div>


      {/* Contact Form */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-6 rounded-lg w-80 text-white text-center">
        <h3 className="text-white text-2xl font-bold">Send a Message</h3>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border-none focus:ring-2 focus:ring-pink-400"
            rows="3"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-red-500 text-white font-bold py-2 rounded transition duration-300"
          >
            Send
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex space-x-4 text-white text-3xl">
        <a href="https://github.com/vishalini723" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/vishalini-k-it-student-5a7808257" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <i className="fab fa-linkedin"></i>
        </a>
        
      </div>
    </div>
  );
}

export default Contact;
