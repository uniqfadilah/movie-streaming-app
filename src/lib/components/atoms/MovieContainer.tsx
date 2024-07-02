const MovieContainer = ({ children }: any) => {
  return (
    <div className="grid grid-cols-6 gap-4 text-black mt-12">{children}</div>
  );
};

export default MovieContainer;
