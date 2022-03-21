import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Contents({ contents }: any) {
  const router = useRouter();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const onClick = (id: string, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <ul className="movies-wrap">
      {contents.map((result) => (
        <li
          className="movie"
          key={result.id}
          onClick={() => onClick(result.id, result.original_title)}
        >
          <Link href={`/movies/${result.original_title}/${result.id}`}>
            <a>
              <Image
                src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
                height={200}
                width={200}
              />
              <div className="flex">
                <h4>{result.original_title}</h4>
                <span>{result.vote_average}</span>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
