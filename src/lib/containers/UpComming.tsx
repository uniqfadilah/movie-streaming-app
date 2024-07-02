import { useQuerygetUpComming } from '../hooks';
import { MovieContainer, TitlePages } from 'src/lib/components/atoms';
import MovieCard from 'src/lib/components/molecules/MovieCard';
const Upcoming = () => {
  const { data } = useQuerygetUpComming();
  return (
    <>
      <TitlePages label="Upcoming Movies" />
      <MovieContainer>
        {data?.data?.results?.map((discover: any, index: any) => (
          <MovieCard
            id={discover?.id}
            key={index}
            path={discover?.poster_path}
            title={discover?.title}
          />
        ))}
      </MovieContainer>
    </>
  );
};

export default Upcoming;
