import StarRating from "./StarRating";

function BigBook({ img, title, author, synopsis, rating }) {
  return (
    <div className="w-[564px] h-[346px] relative grid content-between px-2 mb-20 max-h-[400px]">
      <img
        className="w-[277px] h-[346px] left-0 top-0 absolute rounded-lg"
        src={img}
      />
      <div className="w-[270px] left-[293px] top-0 absolute text-black text-2xl font-semibold font-['Poppins']">
        {title}
      </div>
      <div className="left-[294px] top-[34px] absolute text-center text-black text-xl font-normal font-['Poppins']">
        {author}
      </div>
      <div className="w-[127.26px] h-[25.45px] left-[342px] top-[87px] absolute">
        <div className="w-[25.45px] h-[25.45px] left-[76.35px] top-0 absolute flex-col justify-start items-start inline-flex" />
        <div className="w-[25.45px] h-[25.45px] left-[101.81px] top-0 absolute flex-col justify-start items-start inline-flex" />
        <div className="w-[25.45px] h-[25.45px] left-[50.90px] top-0 absolute flex-col justify-start items-start inline-flex" />
        <div className="w-[25.45px] h-[25.45px] left-[25.45px] top-0 absolute flex-col justify-start items-start inline-flex" />
        <div className="w-[25.45px] h-[25.45px] left-0 top-0 absolute flex-col justify-start items-start inline-flex" />
      </div>
      <div className="w-[41px] h-[41px] left-[293px] top-[79px] absolute">
        <div className="left-[8px] top-[9px] absolute text-center text-white text-base font-normal font-['Poppins']">
          <StarRating rating={rating} />
        </div>
      </div>
      <div className="w-[270px] left-[294px] top-[147px] absolute text-stone-900 text-base font-normal font-['Poppins']">
        {synopsis}
      </div>
      <div className="w-[270px] h-[50px] left-[294px] top-[296px] absolute rounded-lg border border-violet-500" />
      <div className="left-[375px] top-[306px] absolute text-violet-500 text-xl font-medium font-['Poppins']">
        Read Book
      </div>
    </div>
  );
}

export default BigBook;
