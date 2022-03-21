import Link from "next/link";
import { useRouter } from "next/router";
interface GenresProp {
  genres?: [];
}

export default function Nav({ genres }: GenresProp) {
  const router = useRouter();
  console.log("genres :", genres);
  return (
    <nav>
      <ul>
        {genres?.map((genre: any) => {
          <li>
            <Link href="#">
              <a onClick={() => router.push(`/?menu=${genre.id}`, "/")}>
                {genre.name}
              </a>
            </Link>
          </li>;
        })}
      </ul>
    </nav>
  );
}

export async function getServerSideProps() {
  const { genres } = await (
    await fetch(`http://localhost:3000/api/genre/movie/list`)
  ).json();
  return {
    props: {
      genres,
    },
  };
}
