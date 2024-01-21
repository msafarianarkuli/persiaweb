function H4({ children, className }) {
  return (
    <h3 className={`text-primary-blue text-2xl font-bold ${className}`}>
      {children}
    </h3>
  );
}

export default H4;
