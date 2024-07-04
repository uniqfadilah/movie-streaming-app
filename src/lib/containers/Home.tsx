import { useQuerygetDiscovery, useQuerygetMovieSearch } from 'src/lib/hooks';
import { MovieContainer, TitlePages } from 'src/lib/components/atoms';
import MovieCard from 'src/lib/components/molecules/MovieCard';
import { useMemo, useState } from 'react';
import { useDebounce } from 'src/lib/helpers';

const Home = () => {
  const { data } = useQuerygetDiscovery();
  const [search, setSearch] = useState<string>('');
  const debouncedSearch = useDebounce<string>(search, 1000);
  const { data: results } = useQuerygetMovieSearch(debouncedSearch);

  const finalList = useMemo(() => {
    if (search.length > 0) {
      return results?.data?.results ?? [];
    }
    return data?.data?.results ?? [];
  }, [search, results, data]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => setSearch(e?.target?.value)}
        placeholder="Search movies"
        className="w-full bg-gray-100 outline-none rounded text-xl p-4 mt-6 rounded-xl"
      />
      <TitlePages label={search ? 'Search Result' : 'Your discovery'} />
      <MovieContainer>
        {finalList?.map((discover: any, index: any) => (
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
