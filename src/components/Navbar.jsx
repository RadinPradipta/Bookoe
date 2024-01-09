import { Link } from "react-router-dom";
import logoSvg from "../assets/bookoe.png"; // Make sure to replace with the actual path
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    navigate(`/search/${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex items-center justify-between w-[1241px] h-[71.97px] mx-auto my-[33px] sticky">
      {/* <div className="flex items-center"> */}

      {/* <div className="ml-4 relative w-[156px] h-[58.97px]">
          <div className="text-stone-900 text-[41px] font-medium font-['Poppins'] absolute top-[-12px] left-[-3px]">
            Bookoe
          </div>
          <div className="text-stone-900 text-sm font-light font-['Poppins'] absolute bottom-0 left-0">
            Rekomendasi Bukumu
          </div>
        </div> */}
      {/* </div> */}
      <div className="w-[225px]">
        <img src={logoSvg} alt="Logo" />
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
        {/* <input
          type="text"
          placeholder=" Search by title or authors..."
          className="bg-white w-[402px] h-[50px] rounded-lg border border-neutral-200 text-neutral-400 text-xl font-light font-['Poppins']"
        /> */}
        <form onSubmit={handleSearch}>
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder=" Search by title or authors..."
              className=" input input-bordered max-w-xs bg-white w-[402px] h-[50px] rounded-lg border border-neutral-200 text-neutral-400 text-xl font-light font-['Poppins']"
            />
            <button
              type="submit"
              className="absolute top-0 bottom-0 right-4 flex items-center"
            >
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </form>

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
