import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      whileHover="hover"
      className="flex items-center gap-2 cursor-pointer"
    >
      <Link to="/" className="flex items-center space-x-2">
        <motion.img
          variants={{
            hover: {
              scale: 1.25,
              x: 20,

              transition: { type: "tween", duration: 0.2 },
            },
          }}
          src="/logo.png"
          alt="Logo"
          className="h-10 w-10 rounded-full"
        />{" "}
        <motion.span
          variants={{
            hover: {
              scale: 1.25,
              x: -25,
              y: 10,

              transition: { type: "tween", duration: 0.2 },
            },
          }}
          className="font-bold text-xl"
        >
          KrishiLink
        </motion.span>
      </Link>
    </motion.div>
  );
};

export default Logo;
