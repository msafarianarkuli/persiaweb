function Container({ children, className }) {
  return <div className={`p-6 rounded w-full ${className}`}>{children}</div>;
}

export default Container;
