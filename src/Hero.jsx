function Hero({ book }) {
  return (
    <div className="w-[1241px]  mx-auto bg-indigo-50 rounded-[15px] flex items-center justify-around py-[66px] ">
      <div className="w-[525px]  flex-col justify-around">
        <div className="text-violet-500 text-xl font-semibold font-['Poppins']">
          MUST READs
        </div>
        <div className="font-['Poppins'] text-stone-900 text-[62px] font-semibold leading-[72px] ">
          <h4>{book.title}</h4>
        </div>
        <div className="w-[446px] mt-[30px] mb-[16px] text-black text-base font-normal font-['Poppins']">
          {book.synopsis}
        </div>
        <div className=" text-black text-base font-medium font-['Poppins']">
          <h1>{book.author.name}</h1>
        </div>
        <div className="flex">
          <div className="w-[193px] h-[50px] bg-violet-500 rounded-lg flex items-center justify-evenly">
            <div className="text-white text-xl font-medium font-['Poppins']">
              Read Book
            </div>
            <svg
              width="27"
              height="15"
              viewBox="0 0 27 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group">
                <path
                  id="Vector"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.8195 0.423278L26.2888 6.83375C26.7593 7.36305 26.7593 7.83355 26.23 8.30404L19.8195 14.7145C18.8197 15.2438 18.1728 15.1262 18.0552 13.5971L18.114 8.77453H1.23504C0.529305 8.77453 0 8.24523 0 7.53949C0 6.89256 0.529305 6.30444 1.23504 6.30444H18.1728V1.36426C18.2904 0.0115961 18.8197 -0.400086 19.8195 0.423278Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <div className="text-violet-500 text-xl font-medium font-['Poppins'] w-[314px] h-[50px] rounded-lg border border-violet-500 flex items-center justify-center">
            See All Recomendations
          </div>
        </div>
      </div>

      <div className="relative w-[408px] h-[390px]">
        <img
          className="w-[280px] h-[390px] rounded-[10px] absolute top-0 z-20"
          src={book.image_url}
        />
        <img
          className="w-[236] h-[328] rounded-[10px] absolute left-[125px] top-[32px] z-10 "
          src="https://via.placeholder.com/236x328"
        />
        <img
          className="rounded-[10px] w-[196] h-[272] absolute top-[59px] left-[212px]  z-0"
          src="https://via.placeholder.com/196x272"
        />
      </div>
    </div>
  );
}

export default Hero;
