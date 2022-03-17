import { ElementType } from "react";
import Header from "./Header";
interface LayoutProp {
  children: any;
}
export default function Layout({ children }: LayoutProp) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
