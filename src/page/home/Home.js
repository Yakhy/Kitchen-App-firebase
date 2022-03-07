import "./Home.css";
import ResipeList from "../../components/ResipeList";
import { projectFirestore } from "../../firebase/config";
import { useState, useEffect } from "react";

export default function Home() {
  const [resipes, setResipes] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const unsub =
    projectFirestore
      .collection("recipies")
      .onSnapshot((snapshot) => {
        if (snapshot.empty) {
          setError("No recipies to load");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setResipes(results);
          setIsPending(false);
        }
      })
     return () => unsub()
  }, []);

  return (
    <div className="home">
      {isPending && <div className="loading">Loading ...</div>}
      {error && <div className="error"> {error}</div>}
      {resipes && <ResipeList resipes={resipes} />}
    </div>
  );
}
