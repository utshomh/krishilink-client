import { use } from "react";
import { LuPackage, LuHeart, LuActivity } from "react-icons/lu";

const Overview = ({ statsPromise }) => {
  const data = use(statsPromise);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body flex-row items-center gap-4">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <LuPackage size={24} />
            </div>
            <div>
              <div className="text-sm opacity-60">Total Crops</div>
              <div className="text-2xl font-bold">{data.totalCrops}</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body flex-row items-center gap-4">
            <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
              <LuHeart size={24} />
            </div>
            <div>
              <div className="text-sm opacity-60">Total Interests</div>
              <div className="text-2xl font-bold">{data.totalInterests}</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body flex-row items-center gap-4">
            <div className="p-3 bg-accent/10 text-accent rounded-xl">
              <LuActivity size={24} />
            </div>
            <div>
              <div className="text-sm opacity-60">Stock Volume</div>
              <div className="text-2xl font-bold">{data.totalQuantity}</div>
            </div>
          </div>
        </div>
      </div>

      {/* DUMMY BAR CHART */}
      <div className="card bg-base-100 border border-base-300 shadow-sm">
        <div className="card-body">
          <h3 className="font-bold text-lg mb-4">Crop Distribution</h3>
          <div className="space-y-4">
            {data.chartData.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-xs font-medium uppercase">
                  <span>{item.name}</span>
                  <span>{item.stock} Units</span>
                </div>
                <progress
                  className="progress progress-primary w-full h-3"
                  value={item.stock}
                  max="100"
                ></progress>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
