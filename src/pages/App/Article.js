import { useParams } from "react-router-dom";
const Article = () => {
  const param = useParams();
  const id = param.id;
  return (
    <ul>
      <li>{id}</li>
    </ul>
  );
};
export default Article;
