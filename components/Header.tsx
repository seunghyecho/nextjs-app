import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <nav className="header-wrap">
      {/* <Image src="/vercel.svg" alt="logo" layout="fill" /> */}
      <Link href="/">
        <a style={{ color: router.pathname == "/" ? "#fff" : "#4d657d" }}>
          Home
        </a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname == "/about" ? "#fff" : "#4d657d" }}>
          About
        </a>
      </Link>
    </nav>
  );
}
