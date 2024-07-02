import { useQuerygetDiscovery } from 'src/lib/hooks';
import { MovieContainer, TitlePages } from 'src/lib/components/atoms';
import MovieCard from 'src/lib/components/molecules/MovieCard';

const Home = () => {
  const { data } = useQuerygetDiscovery();
  console.log(data?.data);
  return (
    <>
      <TitlePages label="Your discovery" />
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

export default Home;
