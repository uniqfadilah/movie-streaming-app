import { Images } from 'src/lib/components/atoms';

const MovieCard = ({ path, title, id }: any) => {
  return (
    <button
      onClick={() => console.log(id)}
      className="bg-gray-100 rounded h-[350px] rounded-b-lg"
    >
      <Images className="flex-1 object-cover h-[310px] w-full" src={path} />
      <p className="p-2 font-semibold truncate text-left">{title}</p>
    </button>
  );
};

export default MovieCard;
