import clsx from "clsx";
import PropTypes from "prop-types";

const Button = ({ title, id, leftIcon, rightIcon, containerClass }) => {

  Button.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    containerClass: PropTypes.string,
  }

  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full border border-black bg-violet-50 px-7 py-3 text-black hover:text-white hover:bg-transparent hover:border hover:border-white transition-all duration-300 ease-in-out",
        containerClass,
      )}
    >
      {leftIcon}
      <span className={"relative inline-flex overflow-hidden font-general text-xs uppercase"}>
        <div>{title}</div>
      </span>
        {rightIcon}
    </button>
  );
};
export default Button;
