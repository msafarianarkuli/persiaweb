function H1({ children, className }) {
  return (
    <h1 className={`text-[32px] text-primary-blue font-bold pt-8 ${className}`}>
      {children}
    </h1>
  );
}

export default H1;
