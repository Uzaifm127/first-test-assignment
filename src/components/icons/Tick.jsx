import PropTypes from "prop-types";

const Tick = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="12"
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.68 6.592L6.22879 11.5272C6.24925 11.5454 6.28055 11.5437 6.29899 11.5235L16.32 0.520004"
        strokeLinecap="round"
      />
    </svg>
  );
};

Tick.propTypes = {
  className: PropTypes.string,
};

export default Tick;
