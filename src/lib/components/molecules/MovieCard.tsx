import { Images } from 'src/lib/components/atoms';
import { useMovieContainer } from '../atoms/MovieContainer';

const MovieCard = ({ path, title, id, data }: any) => {
  const { setSelectedMovie } = useMovieContainer();
  return (
    <>
      <button
        onClick={() => setSelectedMovie(data)}
        className="bg-gray-100 rounded h-[350px] rounded-b-lg"
      >
        <Images className="flex-1 object-cover h-[310px] w-full" src={path} />
        <p className="p-2 font-semibold truncate text-left">{title}</p>
      </button>
    </>
  );
};

export default MovieCard;
