import { Suspense } from "react";
import { Link } from "react-router";

import { getCrops } from "../../services/api";

import Loader from "../shared/Loader";
import CropList from "../crops/CropList";

const LatestCrops = () => {
  return (
    <Suspense fallback={<Loader />}>
      <section>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Latest Crops
          </h1>
          <Link
            to="/crops"
            className="text-sm md:text-base text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors duration-300 ease-in-out"
          >
            All Crops
          </Link>
        </div>

        <CropList cropsPromise={getCrops(6)} />
      </section>
    </Suspense>
  );
};

export default LatestCrops;
