import BigBook from "./BigBook";

// WrapperComponent is the wrapper component
const BigBookWrapper = ({ book }) => {
  return (
    <div className="w-[75vw] mx-auto">
      <div className="grid grid-cols-2 mt-10">
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

export default BigBookWrapper;
