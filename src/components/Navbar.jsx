import logoSvg from "../assets/logo.svg";


function Navbar() {
  return (
    <div className="w-[1241px] h-[71.97px] relative mx-auto mb-[33px]">
      <div className="w-[225px] h-[71.97px] left-0 top-0 absolute">
        <div className="w-[58.97px] h-[58.97px] left-0 top-[13px] absolute">
          <div className="w-[58.97px] h-[58.97px] left-0 top-0 absolute rounded-lg">
            <img src={logoSvg} alt="" />
          </div>

          <div className="w-[40.34px] h-[38.68px] left-[9px] top-[10px] absolute"></div>
        </div>
        <div className="w-[156px] h-[71.77px] left-[69px] top-0 absolute">
          <div className="left-0 top-0 absolute text-stone-900 text-[41px] font-medium font-['Poppins']">
            Bookoe
          </div>
          <div className="left-[2px] top-[50.77px] absolute text-stone-900 text-sm font-light font-['Poppins']">
            Rekomendasi Bukumu
          </div>
        </div>
      </div>

      <input
        type="text"
        placeholder=" Search by title or authors..."
        className="bg-white w-[402px] h-[50px] left-[688px] top-[21px] absolute rounded-lg border border-neutral-200 placeholder:left-[744px] text-neutral-400 text-xl font-light font-['Poppins']"
      />
      <div className="w-[135px] h-[50px] left-[1106px] top-[21px] absolute">
        <div className="w-[135px] h-[50px] left-0 top-0 absolute rounded-lg border border-violet-500" />
        <div className="left-[29px] top-[10px] absolute text-violet-500 text-xl font-medium font-['Poppins']">
          Edit List
        </div>
      </div>
      <div className="w-[226px] h-[30px] left-[425px] top-[31px] absolute">
        <div className="left-0 top-0 absolute text-neutral-500 text-xl  font-['Poppins'] ">
          All
        </div>
        <div className="left-[50px] top-0 absolute text-neutral-500 text-xl font-normal font-['Poppins']">
          Latest
        </div>
        <div className="left-[134px] top-0 absolute text-neutral-500 text-xl font-normal font-['Poppins']">
          Top Picks
        </div>
      </div>
    </div>
  );
}

export default Navbar;
