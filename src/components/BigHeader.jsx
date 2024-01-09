import PropTypes from "prop-types";

export default function BigHeader({ children }) {
  return (
    <div className="bg-indigo-50 rounded-[15px] flex items-center justify-start w-[1241px] h-[147px] mx-auto mt-[43px] mb-[77px] pl-[71px]">
      {children}
    </div>
  );
}

BigHeader.propTypes = {
  children: PropTypes.element.isRequired,
};
