import { useNavigate } from "react-router-dom";
import book from "../assets/books.png";

export default function Error404() {
  const navigate = useNavigate();
  const backHome = () => {
    navigate(`/`); // Replace with the path to your main page
  };
  return (
    <div className="w-[1440px] h-[686px] bg-white flex justify-center items-start gap-[40.19px] mx-auto">
      <div className="w-[574px] h-[500px]flex-col">
        <div className="w-[574px] h-[220.81px] flex">
          <img src={book} alt="" />
          <img src={book} alt="" />
          <img src={book} alt="" />
        </div>
        <div className="w-[574px] h-[220.81px]">
          <div className="flex items-center flex-col">
            <div className="text-violet-500 text-[147.18px] font-medium font-['Poppins']">
              404
            </div>
            <div className="text-indigo-950 text-2xl font-normal font-['Montserrat']">
              Looks like you’ve got lost...
            </div>
            <div className="text-indigo-950 text-opacity-60 text-base font-normal font-['Poppins']">
              The page you’re looking for doesn’t exist or has been moved.
            </div>

            <button
              onClick={backHome}
              className=" text-violet-500 text-[12.91px] font-medium font-['Poppins'] w-[120.71px] h-[32.28px] flex items-center justify-center"
            >
              <div className="w-[120.71px] h-[32.28px] lrounded-[5.16px] border border-violet-500">
                Back Home
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="w-[1440px] h-[686px] px-[433px] pb-[108.70px] bg-white flex-col justify-start items-center gap-[40.19px] inline-flex">
  <div className="w-[574px] h-[220.81px] relative">
    <div className="w-[192.11px] h-[220.81px] left-0 top-0 absolute">
      <div className="w-[77.46px] h-[220.81px] left-0 top-0 absolute">
        <div className="origin-top-left rotate-[76.11deg] w-[114.82px] h-[51.40px] left-[49.89px] top-[97px] absolute"></div>
      </div>
      <div className="w-[77.48px] h-[194.50px] left-[77.46px] top-[0.68px] absolute">
        <div className="origin-top-left rotate-[73.32deg] w-[117.60px] h-[45.64px] left-[43.72px] top-[68.75px] absolute">
          <div className="origin-top-left rotate-[73.32deg] w-[115.60px] h-[45.26px] left-[0.28px] top-[0.92px] absolute"></div>
        </div>
      </div>
      <div className="w-[37.17px] h-[215.66px] left-[154.93px] top-0 absolute">
        <div className="origin-top-left rotate-[-94deg] w-[130.63px] h-[28.12px] left-[9.12px] top-[215.66px] absolute"></div>
      </div>
    </div>
    <div className="w-[192.11px] h-[220.81px] left-[190.61px] top-0 absolute">
      <div className="w-[77.46px] h-[220.81px] left-0 top-0 absolute">
        <div className="origin-top-left rotate-[76.11deg] w-[114.82px] h-[51.40px] left-[49.89px] top-[97px] absolute"></div>
      </div>
      <div className="w-[77.48px] h-[194.50px] left-[77.46px] top-[0.68px] absolute">
        <div className="origin-top-left rotate-[73.32deg] w-[117.60px] h-[45.64px] left-[43.72px] top-[68.75px] absolute">
          <div className="origin-top-left rotate-[73.32deg] w-[115.60px] h-[45.26px] left-[0.28px] top-[0.92px] absolute"></div>
        </div>
      </div>
      <div className="w-[37.17px] h-[215.66px] left-[154.93px] top-0 absolute">
        <div className="origin-top-left rotate-[-94deg] w-[130.63px] h-[28.12px] left-[9.12px] top-[215.66px] absolute"></div>
      </div>
    </div>
    <div className="w-[192.11px] h-[220.81px] left-[381.89px] top-0 absolute">
      <div className="w-[77.46px] h-[220.81px] left-0 top-0 absolute">
        <div className="origin-top-left rotate-[76.11deg] w-[114.82px] h-[51.40px] left-[49.89px] top-[97px] absolute"></div>
      </div>
      <div className="w-[77.47px] h-[194.50px] left-[77.46px] top-[0.68px] absolute">
        <div className="origin-top-left rotate-[73.32deg] w-[117.60px] h-[45.64px] left-[43.72px] top-[68.75px] absolute">
          <div className="origin-top-left rotate-[73.32deg] w-[115.60px] h-[45.26px] left-[0.28px] top-[0.92px] absolute"></div>
        </div>
      </div>
      <div className="w-[37.17px] h-[215.66px] left-[154.93px] top-0 absolute">
        <div className="origin-top-left rotate-[-94deg] w-[130.63px] h-[28.12px] left-[9.12px] top-[215.66px] absolute"></div>
      </div>
    </div>
  </div>
  <div className="w-[468px] h-[316.30px] relative">
    <div className="left-[82.63px] top-[179.45px] absolute text-indigo-950 text-2xl font-normal font-['Montserrat']">
      Looks like you’ve got lost...
    </div>
    <div className="left-0 top-[227.22px] absolute text-indigo-950 text-opacity-60 text-base font-normal font-['Poppins']">
      The page you’re looking for doesn’t exist or has been moved.
    </div>
    <div className="left-[86.50px] top-0 absolute text-violet-500 text-[147.18px] font-medium font-['Poppins']">
      404
    </div>
    <div className="w-[120.71px] h-[32.28px] left-[173.64px] top-[284.03px] absolute">
      <div className="w-[120.71px] h-[32.28px] left-0 top-0 absolute rounded-[5.16px] border border-violet-500" />
      <div className="left-[23.24px] top-[6.46px] absolute text-violet-500 text-[12.91px] font-medium font-['Poppins']">
        Back Home
      </div>
    </div>
  </div>
</div>; */
}
