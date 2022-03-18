import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import styles from "../styles/Home.module.css";
interface MovieProp {
  results: [];
}
export default function Home({ results }: MovieProp) {
  const router = useRouter();
  const onClick = (id: string, title: string) => {
    // router.push(`/movies/${id}`);
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}`
    );
  };
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch(`/api/movies`)).json();
  //     console.log(results);
  //     setMovies(results);
  //   })();
  // }, []);
  return (
    <div className={styles.container}>
      <Seo title="Home | Next-App" />
      {!results && <h4>Loading...</h4>}
      <ul className="movies-wrap">
        {results?.map((movie: any) => (
          <li
            key={movie.id}
            onClick={() => onClick(movie.id, movie.original_title)}
          >
            <Link
              href={{
                pathname: `/movies/${movie.id}`,
                query: {
                  title: movie.original_title,
                },
              }}
              as={`/movies/${movie.id}`}
            >
              <a>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="image"
                />
                <h4>{movie.original_title}</h4>
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
