
import { Rating } from "@smastrom/react-rating";

const CourseRating = ({ rating,total_reviews }) => {
  return (
    <div className="flex items-center gap-1">
      <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
      <span className="text-title font-bold mt-1">{rating}</span>
      <span className="text-sm mt-1">({total_reviews} Reviews)</span>
    </div>
  );
};

export default CourseRating;
