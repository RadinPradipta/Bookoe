import SmallBook from "./SmallBook";
import PropTypes from "prop-types";

// WrapperComponent is the wrapper component
const SmallBookWrapper = ({ book }) => {
  return (
    <div className="w-[1241px] mx-auto mt-[113px]">
      <div className="flex justify-between">
        {book.map((item, index) => (
          <div key={index}>
            <SmallBook
              img={item.image_url}
              title={item.title}
              author={item.author.name}
              rating={item.rating}
            />
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
