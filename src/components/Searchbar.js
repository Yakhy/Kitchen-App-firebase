import { useState } from "react";
import { useHistory } from "react-router-dom";

//styles
import "./Searchbar.css";

function Searchbar() {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${term}`);
    setTerm("");
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          required
          value={term}
          placeholder="Search recipe"
        />
      </form>
    </div>
  );
}

export default Searchbar;
