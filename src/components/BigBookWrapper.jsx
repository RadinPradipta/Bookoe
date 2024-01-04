import BigBook from "./BigBook";
import PropTypes from "prop-types"

// WrapperComponent is the wrapper component
const BigBookWrapper = ({ book }) => {
  return (
    <div className="w-[1241px] mx-auto mt-[116px]">
      <div className="grid grid-cols-2">
        {book.map((item, index) => (
          <div key={index}>
            <BigBook
              img={item.image_url}
              title={item.title}
              author={item.author.name}
              synopsis={item.synopsis}
              rating={item.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

BigBookWrapper.propTypes = {
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


export default BigBookWrapper;
