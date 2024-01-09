import PropTypes from "prop-types";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";

// WrapperComponent is the wrapper component
const BigBook = ({ book }) => {
  return (
    <div className="w-[1241px] mx-auto mt-[116px] mb-[113px]">
      <div className="grid grid-cols-2">
        {book.map((item, index) => (
          <div key={index}>
            <div className="w-[564px] max-h-[346px] relative grid grid-cols-2 gap-4 px-2 mb-20 ">
              <img
                className="object-cover w-[277px] min-h-[346px] max-h-[346px] rounded-lg"
                src={item.image_url}
              />

              {/* 2nd Column */}
              <div className="flex flex-col justify-between ">
                <div className="text-black text-2xl font-semibold font-['Poppins'] mb-2">
                  <TextTruncate
                    line={3}
                    element="span"
                    truncateText="…"
                    text={item.title}
                  />
                </div>
                <div className="text-black text-xl font-normal font-['Poppins'] mb-2">
                  by {item.author.name}
                </div>
                <div>
                  <StarRating rating={item.rating} />
                </div>
                <div className="text-stone-900 text-base font-normal font-['Poppins'] mb-2">
                  <TextTruncate
                    line={4}
                    element="span"
                    truncateText="…"
                    text={item.synopsis}
                  />
                </div>
                <button className="w-[270px] h-[50px] rounded-lg border border-violet-500 mb-2 text-violet-500 text-xl font-medium font-['Poppins'] flex items-center justify-center">
                  <Link to={`/books/${item.id}`}>Read Book</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

BigBook.propTypes = {
  book: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      synopsis: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BigBook;
