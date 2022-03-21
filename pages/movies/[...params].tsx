import { useRouter } from "next/router";

export default function Detail({ params }: any) {
  const router = useRouter();
  const [title] = params || [];
  console.log(params);
  return (
    <>
      <h3>{title}</h3>
    </>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
