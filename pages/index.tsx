import Contents from "../components/Contents";
import Nav from "../components/Nav";
import Seo from "../components/Seo";
interface MovieProp {
  contents?: [];
}
export default function Home({ contents }: MovieProp) {
  console.log("contents :", contents);

  return (
    <div className="container">
      <Seo title="Home | Next-App" />
      <Nav />
      <Contents contents={contents} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const menu = context.query.menu;
  const BASE_URL = "https://api.themoviedb.org";
  const API_KEY = process.env.API_KEY;

  const res = await fetch(
    `${BASE_URL}/3/discover/movie?api_key=${API_KEY}&language=kr&with_genres=${menu}`
  );
  const data = await res.json();
  return {
    props: {
      contents: data.results,
    },
  };
}
