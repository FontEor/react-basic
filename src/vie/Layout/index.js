import { Link, useNavigate, Outlet } from "react-router-dom";
const Layout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Link to="/channle">channel页面</Link>
      <button onClick={() => navigate("/Params?id=100&name=jack")}>
        searchparams传参
      </button>
      <button onClick={() => navigate("/Article/100")}>params传参</button>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
