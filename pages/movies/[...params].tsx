import { useRouter } from "next/router";
interface DetailProp {
  params: {
    title?: string;
    id?: string;
  };
}
export default function Detail({ params }: DetailProp) {
  const router = useRouter();
  const [title, id] = params || [];
  console.log(router);
  return (
    <div>
      <h4>
        {title}
        {id}
      </h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
