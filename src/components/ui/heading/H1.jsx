function H1({ children, className }) {
  return (
    <h1 className={`text-5xl text-primary-blue font-bold ${className}`}>
      {children}
    </h1>
  );
}

export default H1;
