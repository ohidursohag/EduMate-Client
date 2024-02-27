
import { Rating } from "@smastrom/react-rating";

const CourseRating = ({ rating,total_reviews }) => {
  return (
    <div className="flex items-center gap-1">
      <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
      <span className="text-title text-sm font-bold mt-1">{rating}</span>
      <span className="text-xs mt-1">({total_reviews} Reviews)</span>
    </div>
  );
};

export default CourseRating;
