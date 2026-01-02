import { useState, useEffect, useCallback } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import alert from "../lib/utils/alert";
import { useAuth } from "../providers/AuthProvider";
import {
  getInterestsByEmail,
  updateInterest,
  deleteInterest,
} from "../services/api";

import ScrollToTop from "../components/shared/ScrollToTop";
import PageTitle from "../components/shared/PageTitle";
import Loader from "../components/shared/Loader";
import EditableInterestCard from "../components/interests/EditableInterestCard";

const MyInterestsPage = () => {
  const { user } = useAuth();
  const [allInterests, setAllInterests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortMethod, setSortMethod] = useState("quantity");

  const sortInterests = (interests, method) => {
    const sorted = [...interests];
    switch (method) {
      case "quantity":
        return sorted.sort((a, b) => b.quantity - a.quantity); // highest quantity first
      case "newest":
        return sorted.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "oldest":
        return sorted.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      default:
        return sorted;
    }
  };

  const fetchInterests = useCallback(async () => {
    setLoading(true);
    try {
      const interests = await getInterestsByEmail(user.email);
      setAllInterests(sortInterests(interests, sortMethod));
    } catch (error) {
      alert.error("Oops!", error.message || "Couldn't fetch interests");
    } finally {
      setLoading(false);
    }
  }, [sortMethod, user.email]);

  const handleSortChange = (e) => {
    const method = e.target.value;
    setSortMethod(method);
    setAllInterests(sortInterests(allInterests, method));
  };

  const handleUpdate = async (id, interest) => {
    try {
      await updateInterest(id, interest);
      await fetchInterests();
      alert.success("Updated", "Successfully updated interest.");
    } catch (error) {
      alert.error("Oops!", error.message || "Couldn't update");
    }
  };

  const handleDelete = async (id) => {
    await alert.confirm(
      "Are you sure?",
      "If you delete this interest, it's gone forever. It cannot be undone.",
      async () => {
        try {
          await deleteInterest(id);
          await fetchInterests();
          alert.success("Deleted", "Successfully deleted interest.");
        } catch (error) {
          alert.error("Oops!", error.message || "Couldn't delete");
        }
      }
    );
  };

  useEffect(() => {
    fetchInterests();
  }, [fetchInterests]);

  if (loading) return <Loader size="lg" />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <ScrollToTop />
      <PageTitle title="My Interests" />

      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 md:gap-0">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary">
          My Interests
        </h1>

        <select
          value={sortMethod}
          onChange={handleSortChange}
          className="border-2 border-base-300 rounded-md p-2 text-base-content bg-base-200"
        >
          <option value="quantity">Highest Quantity</option>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {allInterests.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allInterests.map((interest) => (
            <EditableInterestCard
              key={interest._id}
              interest={interest}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <h2 className="text-3xl font-semibold text-base-content/80 mb-2">
            No Interests Found
          </h2>
          <p className="text-base-content/80 max-w-md text-center">
            You haven’t added any interests yet.
            <br />
            Come back later to see new updates.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default MyInterestsPage;
