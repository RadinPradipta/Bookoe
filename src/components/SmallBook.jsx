import StarRating from "./StarRating";
import PropTypes from "prop-types";
function SmallBook({ img, title, author, rating }) {
  return (
    <div className="w-[260px] h-[551px] flex flex-col justify-between">
      <img className="w-[260px] h-[340px] rounded-lg mb-[10px]" src={img} />

      <div className="text-black text-2xl font-semibold font-['Poppins'] mb-2">
        {title}
      </div>
      <div className="text-black text-xl font-normal font-['Poppins'] mb-2 ">
      by {author}
      </div>
      <div>
        <StarRating rating={rating} />
      </div>
      <div className="w-[270px] h-[50px] rounded-lg border border-violet-500 mb-2 text-violet-500 text-xl font-medium font-['Poppins'] flex items-center justify-center">
        Read Book
      </div>
    </div>
  );
}
SmallBook.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default SmallBook;
