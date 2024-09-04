import { useSearchParams } from "react-router-dom";
const Params = () => {
  const [param] = useSearchParams();
  const id = param.get("id");
  const name = param.get("name");
  return (
    <ul>
      <li>{id}</li>
      <li>{name}</li>
    </ul>
  );
};
export default Params;
