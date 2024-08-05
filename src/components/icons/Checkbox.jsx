import PropTypes from "prop-types";

const Checkbox = ({ className }) => {
  return (
    <svg
      className={className}
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke=""
    >
      <rect opacity="0.6" x="0.5" y="0.5" width="22" height="22" rx="5.5" />
    </svg>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
};

export default Checkbox;
