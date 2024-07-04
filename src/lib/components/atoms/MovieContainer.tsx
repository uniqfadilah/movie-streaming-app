const MovieContainer = ({ children }: any) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-cols-1 gap-4 text-black mt-12">
      {children}
    </div>
  );
};

export default MovieContainer;
