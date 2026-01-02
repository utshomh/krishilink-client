import { Suspense, useState, useEffect } from "react";
import { Link } from "react-router";

import { getCrops } from "../../services/api";

import Loader from "../shared/Loader";
import CropList from "../crops/CropList";

const LatestCrops = () => {
  const [count, setCount] = useState(6);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1280) {
        setCount(8);
      } else {
        setCount(6);
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <Suspense fallback={<Loader size="lg" />}>
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Latest Crops
          </h1>
          <Link to="/crops" className="btn btn-primary">
            All Crops
          </Link>
        </div>

        <CropList cropsPromise={getCrops(count)} />
      </section>
    </Suspense>
  );
};

export default LatestCrops;
