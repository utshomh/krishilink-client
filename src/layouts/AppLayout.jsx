import { Outlet } from "react-router";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "../components/layouts/header/Navbar";
import Footer from "../components/layouts/Footer";

const AppLayout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      <Navbar />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="grow"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default AppLayout;
