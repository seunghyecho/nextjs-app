import Seo from "../components/Seo";
import styles from "../styles/Home.module.css";
interface MovieProp {
  results: [];
}
export default function Home({ results }: MovieProp) {
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
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="image"
            />
            <h4>{movie.original_title}</h4>
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
