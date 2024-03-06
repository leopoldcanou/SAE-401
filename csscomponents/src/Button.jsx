import PropTypes from "prop-types";

function Button(props) {
  let primary = ["bg-primary-yellow", "text-primary-blue"];

  let { children, variant = primary } = props;

  return <button className={variant}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string, // Add variant prop validation
};

export default Button;
