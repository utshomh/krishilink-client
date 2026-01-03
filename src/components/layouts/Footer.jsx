import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaHome, FaLeaf, FaUser, FaGithub } from "react-icons/fa";

const links = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "All Crops", path: "/crops", icon: <FaLeaf /> },
  { name: "Profile", path: "/profile", icon: <FaUser /> },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-content py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left flex items-center justify-center md:justify-start space-x-2">
          <motion.img
            src="/logo.png"
            className="w-10 h-10"
            animate={{ rotate: [0, 10, -10] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            }}
          />
          <span>
            &copy; 2025 <strong>KrishiLink</strong>. All rights reserved.
          </span>
        </p>

        <nav className="flex space-x-6">
          {links.map((link) => (
            <div key={link.name}>
              <Link
                to={link.path}
                className="flex items-center gap-2 text-sm hover:text-secondary transition-colors duration-300 ease-in-out"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <FaGithub />
          <a
            href="https://github.com/utshomh/krishilink-client"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-secondary transition-colors duration-300 ease-in-out"
          >
            Contribute
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
