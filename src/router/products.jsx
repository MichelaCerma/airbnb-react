import { useParams } from "react-router-dom";

export default function Products() {
  const params = useParams();
  return <div>{params.id}</div>;
}
