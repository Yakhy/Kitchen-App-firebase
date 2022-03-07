import { useLocation } from "react-router-dom";
import ResipeList from "../../components/ResipeList";
import { useFetch } from "../../hooks/useFetch";
import "./Search.css";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  const { data, isPending, error } = useFetch(
    `http://localhost:3000/recipes?q=${query}`
  );

  return (
    <div>
      <h1 className="page-title">Request recipe "{query}"</h1>
      {isPending && <div className="loading">Loading ...</div>}
      {error && <div className="error"> {error}</div>}
      {data && <ResipeList resipes={data} />}
    </div>
  );
}
