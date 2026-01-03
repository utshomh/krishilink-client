// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-content py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center space-x-2">
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
              alt="KrishiLink Logo"
            />
            <span className="text-xl font-black tracking-tight">
              KrishiLink
            </span>
          </div>
          <p className="text-xs opacity-80">
            &copy; 2026 <strong>KrishiLink</strong>. All rights reserved.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h4 className="text-sm font-bold uppercase tracking-widest opacity-60">
            Contact Us
          </h4>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="mailto:support@krishilink.com"
              className="flex items-center gap-3 hover:text-accent transition-colors"
            >
              <FaEnvelope className="text-lg" />
              <span>support@krishilink.com</span>
            </a>
            <a
              href="tel:+880123456789"
              className="flex items-center gap-3 hover:text-accent transition-colors"
            >
              <FaPhoneAlt className="text-lg" />
              <span>+880 123 456 789</span>
            </a>
          </div>
        </div>

        {/* Socials & Github */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <h4 className="text-sm font-bold uppercase tracking-widest opacity-60">
            Follow & Contribute
          </h4>
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/utsho.de.bravestone/"
              target="_blank"
              className="hover:scale-125 transition-transform text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com/in/utshomh"
              target="_blank"
              className="hover:scale-125 transition-transform text-xl"
            >
              <FaLinkedin />
            </a>
            <div className="h-6 w-px bg-primary-content/30 hidden md:block"></div>
            <a
              href="https://github.com/utshomh/krishilink-client"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-1.5 px-3 bg-base-100/10 rounded-lg hover:bg-base-100/20 transition-all border border-transparent hover:border-primary-content/20"
            >
              <FaGithub className="text-lg" />
              <span className="text-sm font-medium">Contribute</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
