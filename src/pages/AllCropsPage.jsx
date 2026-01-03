import { useState, useEffect, useCallback } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import axios from "../lib/axios";

import ScrollToTop from "../components/shared/ScrollToTop";
import PageTitle from "../components/shared/PageTitle";
import CropCard from "../components/crops/CropCard";
import Loader from "../components/shared/Loader";

const AllCropsPage = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("createdAt");
  const [order, setOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchCrops = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`crops`, {
        params: { search: searchTerm, type, sort, order, page, limit: 9 },
      });
      setCrops(data.crops);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, type, sort, order, page]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => fetchCrops(), 400);
    return () => clearTimeout(delayDebounceFn);
  }, [fetchCrops]);

  const updateFilter = (setter, val) => {
    setter(val);
    setPage(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <ScrollToTop />
      <PageTitle title="All Crops" />

      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-4xl font-black text-primary">Explore Crops</h1>
          <p className="text-base-content/60">
            Find the best produce from verified farmers.
          </p>
        </div>

        {/* Compact Pagination Info */}
        <div className="text-sm font-bold bg-primary/10 text-primary px-4 py-2 rounded-full">
          Page {page} of {totalPages}
        </div>
      </div>

      {/* --- Filter Bar --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-base-100 p-4 rounded-xl border border-base-300 shadow-sm">
        <input
          type="text"
          placeholder="Search by name..."
          className="input input-bordered w-full"
          onChange={(e) => updateFilter(setSearchTerm, e.target.value)}
        />

        <select
          className="select select-bordered w-full"
          onChange={(e) => updateFilter(setType, e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Vegetable">Vegetables</option>
          <option value="Fruit">Fruits</option>
          <option value="Grain">Grains</option>
        </select>

        <select
          className="select select-bordered w-full font-semibold"
          onChange={(e) => {
            const [s, o] = e.target.value.split("-");
            setSort(s);
            setOrder(o);
            setPage(1);
          }}
        >
          <option value="createdAt-desc">Newest Listings</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="quantity-desc">Highest Quantity</option>
        </select>
      </div>

      {/* --- Grid --- */}
      {loading ? (
        <div className="py-20">
          <Loader />
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {crops.map((crop) => (
            <CropCard key={crop._id} crop={crop} />
          ))}
        </div>
      )}

      {/* --- Pagination Buttons --- */}
      <div className="flex justify-center items-center gap-4 pt-10">
        <button
          className="btn btn-circle btn-outline"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          «
        </button>
        <span className="font-bold">Page {page}</span>
        <button
          className="btn btn-circle btn-outline"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          »
        </button>
      </div>
    </motion.div>
  );
};

export default AllCropsPage;
