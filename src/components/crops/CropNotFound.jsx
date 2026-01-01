import { Link } from "react-router";
import { FiAlertCircle } from "react-icons/fi";

const CropNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4">
      <FiAlertCircle className="text-error w-16 h-16 mb-4" />
      <h1 className="text-4xl font-bold mb-2">Crop Not Found</h1>
      <p className="text-base-content/75 mb-6">
        We couldn’t find the crop you’re looking for. It might have been removed
        or the ID is invalid.
      </p>
      <Link to="/crops" className="btn btn-primary">
        Back to All Crops
      </Link>
    </div>
  );
};

export default CropNotFound;
