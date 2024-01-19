function H1({ children, className }) {
  return (
    <h1 className={`text-3xl text-primary-blue font-medium pt-8 ${className}`}>
      {children}
    </h1>
  );
}

export default H1;
