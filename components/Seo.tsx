import Head from "next/head";
interface Seoprop {
  title: string;
}
export default function Seo({ title }: Seoprop) {
  return <Head>{title}</Head>;
}
