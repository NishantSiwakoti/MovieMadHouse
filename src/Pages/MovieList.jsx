import { Card } from "../Components/Card";
import { useEffect } from "react";
import { useFetch } from "../Hooks/useFetch";
export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  useEffect(() => {
    document.title = `${title} / MovieMadHouse`;
  });

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex md:justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
