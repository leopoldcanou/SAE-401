import PropTypes from "prop-types";

export default function Button({ children, variant, ...rest }) {
  let className = "px-4 py-2 border rounded";

  switch (variant) {
    case "primary":
      className += " bg-blue-500 text-white";
      break;
    case "secondary":
      className += " bg-gray-300 text-gray-800";
      break;
    case "success":
      className += " bg-green-500 text-white";
      break;
    case "danger":
      className += " bg-red-500 text-white";
      break;
    default:
      break;
  }

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger"]), // Ajoutez d'autres variants au besoin
};
