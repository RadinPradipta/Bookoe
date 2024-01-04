import StarRating from "./StarRating";
import PropTypes from 'prop-types';
function BigBook({ img, title, author, synopsis, rating }) {
  return (
    <div className="w-[564px] relative grid grid-cols-2 gap-4 px-2 mb-20 ">
      {/* 1st Column */}
      <img className="w-[277px] h-[346px] rounded-lg" src={img} />

      {/* 2nd Column */}
      <div className="flex flex-col justify-between">
        <div className="text-black text-2xl font-semibold font-['Poppins'] mb-2">
          {title}
        </div>
        <div className="text-center text-black text-xl font-normal font-['Poppins'] mb-2">
          {author}
        </div>
       <div>
         <StarRating rating={rating} />
       </div>
        <div className="text-stone-900 text-base font-normal font-['Poppins'] mb-2">
          {synopsis}
        </div>
        <div className="w-[270px] h-[50px] rounded-lg border border-violet-500 mb-2 text-violet-500 text-xl font-medium font-['Poppins'] flex items-center justify-center" >        
          Read Book
        </div>
      </div>
    </div>
  );
}
BigBook.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default BigBook;
