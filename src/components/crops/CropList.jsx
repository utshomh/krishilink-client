import { use } from "react";

import CropCard from "./CropCard";

const CropList = ({ cropsPromise }) => {
  const crops = use(cropsPromise);

  return (
    <section>
      <div className="grid gap-6 grid-cols-1 min-[34rem]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {crops.map((crop) => (
          <CropCard key={crop._id} crop={crop} />
        ))}
      </div>
    </section>
  );
};

export default CropList;
