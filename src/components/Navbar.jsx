import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg"; // Make sure to replace with the actual path

function Navbar() {
  return (
    <div className="flex items-center justify-between w-[1241px] h-[71.97px] mx-auto my-[33px] sticky">
      <div className="flex items-center">
        <div className="w-[58.97px] h-[58.97px] rounded-lg">
          <img src={logoSvg} alt="Logo" />
        </div>
        <div className="ml-4 relative w-[156px] h-[58.97px]">
          <div className="text-stone-900 text-[41px] font-medium font-['Poppins'] absolute top-[-12px] left-[-3px]">
            Bookoe
          </div>
          <div className="text-stone-900 text-sm font-light font-['Poppins'] absolute bottom-0 left-0">
            Rekomendasi Bukumu
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x">
        <Link to="" className="text-neutral-500 text-xl font-['Poppins']">
          All
        </Link>
        <Link
          to="/latest"
          className="ml-4 text-neutral-500 text-xl font-normal font-['Poppins']"
        >
          Latest
        </Link>
        <Link
          to="/top-picks"
          className="ml-4 text-neutral-500 text-xl font-normal font-['Poppins']"
        >
          Top Picks
        </Link>
      </div>
      <div className="flex gap-x-[45px]">
        <input
          type="text"
          placeholder=" Search by title or authors..."
          className="bg-white w-[402px] h-[50px] rounded-lg border border-neutral-200 text-neutral-400 text-xl font-light font-['Poppins']"
        />
        <div className="w-[135px] h-[50px]">
          <div className="w-full h-full rounded-lg border border-violet-500">
            <div className="flex items-center justify-center h-full text-violet-500 text-xl font-medium font-['Poppins']">
              Edit List
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
