import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaHome, FaHamburger } from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className="header-wrap">
        <a onClick={handleOpen}>
          <FaHamburger size={"1.5em"} />
        </a>
        <Link href="/">
          <a>
            <FaHome size={"1.5em"} />
          </a>
        </Link>
      </nav>
      {isOpen && (
        <ul className="Gnb" onClick={handleClose}>
          <li>
            <Link href="/">
              <a style={{ color: router.pathname == "/" ? "#fff" : "#4d657d" }}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                style={{
                  color: router.pathname == "/about" ? "#fff" : "#4d657d",
                }}
              >
                About
              </a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
