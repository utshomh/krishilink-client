import { useNavigate } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import ScrollToTop from "../components/shared/ScrollToTop";
import RouteTitle from "../components/shared/PageTitle";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <ScrollToTop />
      <RouteTitle title="404" />

      <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-base-content">
        <motion.h1
          className="text-[8rem] font-extrabold text-secondary mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 250, damping: 10 }}
        >
          404
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-2 text-accent"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          Oops! Page Not Found
        </motion.h2>
        <motion.p
          className="text-center text-base-content/70 mb-6 max-w-md"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.25 }}
        >
          The page you’re looking for doesn’t exist.
        </motion.p>

        <motion.button
          onClick={goBack}
          className="btn btn-primary btn-lg flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <FiArrowLeft size={20} /> Go Back
        </motion.button>
      </div>
    </>
  );
};

export default NotFoundPage;
