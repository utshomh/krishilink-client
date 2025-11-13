import { FaComment, FaHashtag } from "react-icons/fa";

const InterestCard = ({ interest, crop, showCrop = false, onUpdateStatus }) => {
  return (
    <div className="p-4 bg-base-100 rounded-xl shadow-md space-y-4">
      {showCrop && crop && (
        <div className="space-y-1">
          <h2 className="text-2xl font-extrabold text-primary">{crop.name}</h2>
          <p className="flex items-center gap-1">
            <FaHashtag />
            <strong>Price:</strong> {crop.pricePerUnit} BDT /{" "}
            {crop.unit.toUpperCase()}
          </p>
          <p className="flex items-center gap-1">
            <FaHashtag />
            <strong>Quantity:</strong> {crop.quantity}
          </p>
          <p className="flex items-center gap-1">
            <FaHashtag />
            <strong>Type:</strong> {crop.type}
          </p>
          <p className="flex items-center gap-1">
            <FaHashtag />
            <strong>Location:</strong> {crop.location}
          </p>
        </div>
      )}

      <div className="space-y-1">
        <h2 className="font-bold text-2xl text-primary">Interest Details:</h2>

        <p className="text-gray-800">
          <strong>Quantity:</strong> {interest.quantity} {crop.unit}
        </p>

        {interest.message && (
          <p className="flex items-center gap-2 text-base-content/75 italic my-2">
            <FaComment className="text-gray-400" />
            {interest.message}
          </p>
        )}

        <p>
          <strong>Submitted by:</strong> {interest.userName} (
          {interest.userEmail})
          <br />
          <small className="text-sm">
            <strong>at</strong> {new Date(interest.createdAt).toLocaleString()}
          </small>
        </p>

        <p
          className={`w-fit text-sm font-semibold px-3 py-1 rounded-full ${
            interest.status === "approved"
              ? "bg-success text-success-content"
              : interest.status === "rejected"
              ? "bg-error text-error-content"
              : "bg-warning text-warning-content"
          }`}
        >
          {interest.status}
        </p>

        <p className="flex items-center gap-2 text-lg font-semibold bg-primary text-primary-content px-4 py-2 rounded-lg shadow-md w-fit mt-2">
          <span>Total Price:</span>
          <span>{interest.quantity * (crop.pricePerUnit || 0)} BDT</span>
        </p>
      </div>

      {interest.status === "pending" && (
        <div className="flex gap-4">
          <button
            onClick={() => onUpdateStatus(interest._id, "approved")}
            className="flex-1 btn btn-primary"
          >
            Accept
          </button>
          <button
            onClick={() => onUpdateStatus(interest._id, "rejected")}
            className="flex-1 btn btn-secondary"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default InterestCard;
