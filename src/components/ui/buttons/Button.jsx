const Button = ({ children, className, ...other }) => {
  return (
    <button className={`rounded py-1 px-4 ${className}`} {...other}>
      {children}
    </button>
  );
};
export default Button;
