import PropTypes from "prop-types";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

// WrapperComponent is the wrapper component
const SmallBookWrapper = ({ book }) => {
  return (
    <div className="w-[1241px] mx-auto mt-[113px]">
      <div className="flex justify-between">
        {book.map((item, index) => (
          <div key={index}>
            <div className="w-[260px] h-[551px] flex flex-col justify-between">
              <img
                className="w-[260px] h-[340px] rounded-lg mb-[10px]"
                src={item.image_url}
              />

              <div className="text-black text-2xl font-semibold font-['Poppins'] mb-2">
                {item.title}
              </div>
              <div className="text-black text-xl font-normal font-['Poppins'] mb-2 ">
                by {item.author.name}
              </div>
              <div>
                <StarRating rating={item.rating} />
              </div>
              <button className="w-[270px] h-[50px] rounded-lg border border-violet-500 mb-2 text-violet-500 text-xl font-medium font-['Poppins'] flex items-center justify-center">
                <Link to={`/books/${item.id}`}>Read Book</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

SmallBookWrapper.propTypes = {
  book: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SmallBookWrapper;
