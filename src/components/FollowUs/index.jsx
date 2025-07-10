import { Twitter, Instagram, Facebook, Github, Linkedin } from "lucide-react";

function FollowUs() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/lume",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram", 
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/lume",
      color: "hover:text-pink-400"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://facebook.com/lume",
      color: "hover:text-blue-500"
    },
    {
      name: "Github",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/lume",
      color: "hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/company/lume",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <div className=" w-full h-[60vh] flex justify-center items-center bg-gradient-to-br from-gray-900/30 to-gray-800/40 p-5 rounded-xl border border-gray-600/30 backdrop-blur-sm fonty">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white fonty">
          Follow Us
        </h3>
        <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-1"></div>
      </div>
      
      <div className="flex justify-center items-center gap-3 flex-wrap">
        {socialLinks.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-center w-10 h-10 bg-gray-800/50 rounded-lg border border-gray-700/50 text-gray-400 ${social.color} hover:border-gray-600/70 hover:bg-gray-700/50 transition-all duration-200 hover:scale-105`}
            title={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
      
      <p className="text-gray-400 text-sm mt-3">
        Stay updated with our latest features
      </p>
    </div>
  );
}

export default FollowUs;