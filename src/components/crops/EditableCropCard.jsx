import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaMapMarkerAlt } from "react-icons/fa";

const EditableCropCard = ({ crop, onDelete, onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: crop.name,
      type: crop.type,
      pricePerUnit: crop.pricePerUnit,
      unit: crop.unit,
      location: crop.location,
      description: crop.description,
    },
  });

  const onSubmit = async (data) => {
    await onUpdate(crop._id, data);
    setIsModalOpen(false);
  };

  const openModal = () => {
    reset({
      name: crop.name,
      type: crop.type,
      pricePerUnit: crop.pricePerUnit,
      unit: crop.unit,
      location: crop.location,
      description: crop.description,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="bg-base-100 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="aspect-video h-auto w-full overflow-hidden">
        <img
          src={crop.image}
          alt={crop.name}
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-primary">{crop.name}</h2>
        <p className="text-sm text-gray-500">{crop.type.trim()}</p>
        <p className="text-lg font-semibold">
          Price: {crop.pricePerUnit} BDT / {crop.unit}
        </p>

        <div className="flex items-center gap-1 text-sm text-gray-500">
          <FaMapMarkerAlt className="text-error text-base" />
          <span>{crop.location}</span>
        </div>

        <p className="text-sm italic text-gray-600 mt-1">{crop.description}</p>

        {/* Actions */}
        <div className="flex gap-2 mt-3">
          <button onClick={openModal} className="btn btn-primary flex-1">
            Update
          </button>
          <button
            onClick={() => onDelete(crop._id)}
            className="btn btn-error flex-1"
          >
            Delete
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-base-100 rounded-xl p-6 w-full max-w-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Update Crop</h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <input
                {...register("name", { required: "Crop name is required" })}
                placeholder="Crop Name"
                className="input input-bordered w-full"
              />

              <input
                {...register("type")}
                placeholder="Type"
                className="input input-bordered w-full"
              />

              <input
                type="number"
                {...register("pricePerUnit", {
                  required: "Price is required",
                  valueAsNumber: true,
                })}
                placeholder="Price per unit"
                className="input input-bordered w-full"
              />

              <input
                {...register("unit")}
                placeholder="Unit"
                className="input input-bordered w-full"
              />

              <input
                {...register("location")}
                placeholder="Location"
                className="input input-bordered w-full"
              />

              <textarea
                {...register("description")}
                placeholder="Description"
                className="textarea textarea-bordered w-full"
              />

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-outline"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`btn btn-primary ${
                    isSubmitting ? "btn-disabled cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableCropCard;
