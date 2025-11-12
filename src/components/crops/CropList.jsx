import { use } from "react";

import CropCard from "./CropCard";

const CropList = ({ cropsPromise }) => {
  const crops = use(cropsPromise);

  return (
    <section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {crops.map((crop) => (
          <CropCard key={crop._id} crop={crop} />
        ))}
      </div>
    </section>
  );
};

export default CropList;
