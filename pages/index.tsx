import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
interface MovieProp {
  results: [];
}
export default function Home({ results }: MovieProp) {
  const router = useRouter();
  console.log(results);
  const onClick = (id: string, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className="container">
      <Seo title="Home | Next-App" />
      {!results && <h4>Loading...</h4>}
      <ul className="movies-wrap">
        {results?.map((movie: any) => (
          <li
            className="movie"
            key={movie.id}
            onClick={() => onClick(movie.id, movie.original_title)}
          >
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="image"
                />
                <div className="flex">
                  <h4>{movie.original_title}</h4>
                  <span>{movie.vote_average}</span>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
