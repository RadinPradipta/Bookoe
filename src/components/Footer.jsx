import logoSvg from "../assets/bookoe.png";
function Footer() {
  return (
    <>
      <div className="w-[1241px] flex flex-col mt-[41px] mx-auto">
        <div className="flex h-[128px] justify-between items-start">
          <div className="w-[225px]">
            <img src={logoSvg} alt="Logo" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
