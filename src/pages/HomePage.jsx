import { Suspense } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { getRandomCrops } from "../services/api";

import Loader from "../components/shared/Loader";
import Newsletter from "../components/home/Newsletter";
import Stats from "../components/home/Stats";
import PageTitle from "../components/shared/PageTitle";
import Hero from "../components/home/Hero";
import LatestCrops from "../components/home/LatestCrops";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="space-y-16"
    >
      <PageTitle title="Home" />

      <Suspense fallback={<Loader />}>
        <Hero cropsPromise={getRandomCrops(4)} />
      </Suspense>

      <LatestCrops />

      <Stats />
      <Newsletter />
    </motion.div>
  );
};

export default HomePage;
