import mailIcon from "../assets/mail.png";
function FooterTCA() {
  return (
    <>
      <div className="w-[1241px] mx-auto h-[303px] bg-[#8170F2] mt-[117px] rounded-2xl pt-[44px]">
        <div className="w-[794px] h-[198px] mx-auto flex flex-col items-center justify-between">
          <h1 className="text-center text-white text-[42px] font-semibold font-['Poppins']">
            Join our newsletter to get our latest recommendation!
          </h1>
          <div className="w-[450px] flex justify-between relative">
            <img
              src={mailIcon}
              alt="Mail Icon"
              className="absolute left-[19px] top-[15px] w-[28px] h-[20px]"
            />
            <input
              type="mail"
              className="w-[345px] h-[50px] bg-white rounded-lg placeholder: pl-[59px]"
              placeholder="Enter your email "
            />
            <button className="w-[99px] h-[50px] bg-indigo-50 rounded-lg text-violet-500 text-base font-medium font-['Poppins']">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterTCA;
