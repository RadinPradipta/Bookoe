import PropTypes from "prop-types";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import { format } from "date-fns";

// WrapperComponent is the wrapper component
const SmallBook = ({ book, page = "none" }) => {
  const handleRibbon = (book) => {
    if (page === "latest") {
      console.log(book.created_at);
      const date = new Date(book.created_at).toLocaleDateString(undefined, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
      return format(date, "dd/LL/yyyy ");
    }
  };
  return (
    <div className="w-[1241px] mx-auto">
      <div className="flex justify-between flex-wrap">
        {book.map((item, index) => (
          <div key={index}>
            <div className="w-[260px] h-[551px] flex flex-col justify-between mb-6">
              <div className="relative">
                {page != "none" &&
                  (page === "top" ? (
                    <div className=" w-[80px] h-[41px] bg-violet-500 rounded-tr-[50px] rounded-br-[50px] absolute top-[31px] flex items-center justify-end pr-[5px]">
                      <div className="w-[30px] h-[30px] bg-white rounded-[50px]">
                        <div className="text-violet-500 text-lg font-normal font-['Poppins'] text-center">
                          {1 + index}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-[148.06px] h-[41px] bg-violet-500 rounded-tr-[50px] rounded-br-[50px] absolute top-[31px] flex items-center justify-center">
                      <div className="w-[100.44px] h-7 text-white text-lg font-normal font-['Poppins']">
                        {handleRibbon(item)}
                      </div>
                    </div>
                  ))}
                <img
                  className="w-[260px] h-[340px] rounded-lg mb-[10px]"
                  src={item.image_url}
                />
              </div>

              <div className="text-black text-2xl font-semibold font-['Poppins'] mb-2">
                <TextTruncate
                  line={2}
                  element="span"
                  truncateText="…"
                  text={item.title}
                />
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

SmallBook.propTypes = {
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
  page: PropTypes.string.isRequired,
};

export default SmallBook;
