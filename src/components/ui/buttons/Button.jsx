const Button = ({ children, className, ...other }) => {
  return (
    <button className={`rounded w-full py-2 ${className}`} {...other}>
      {children}
    </button>
  );
};
export default Button;
