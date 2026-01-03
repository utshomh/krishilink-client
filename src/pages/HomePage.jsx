// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import Newsletter from "../components/home/Newsletter";
import Stats from "../components/home/Stats";
import PageTitle from "../components/shared/PageTitle";
import Hero from "../components/home/Hero";
import LatestCrops from "../components/home/LatestCrops";
import HowItWorks from "../components/home/HowItWorks";
import Services from "../components/home/Services";
import AgroNews from "../components/home/AgroNews";
import FAQ from "../components/home/FAQ";
import Partners from "../components/home/Partners";
import TrustFocus from "../components/home/TrustFocus";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="space-y-12"
    >
      <PageTitle title="Home" />

      <Hero />
      <Partners />

      {/* Primary Value Loop */}
      <LatestCrops />
      <HowItWorks />

      {/* Proof & Reliability */}
      <Stats />
      <TrustFocus />

      {/* Ecosystem & Secondary Features */}
      <Services />

      {/* Engagement & Content */}
      <AgroNews />
      <Newsletter />

      {/* Final Objections */}
      <FAQ />
    </motion.div>
  );
};

export default HomePage;
