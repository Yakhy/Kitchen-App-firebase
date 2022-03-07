import React from "react";
import "./Recipe.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";
import { useTheme } from "../../hooks/useTheme";

export default function Recipe() {
  const { mode } = useTheme();
  const { id } = useParams();
  console.log(id);
  const [resipe, setResipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    projectFirestore
      .collection("recipies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setResipe(doc.data());
        } else {
          setIsPending(false);
          setError("Could not find that recipe");
        }
      });
  }, [id]);

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <p className="loading">Loading</p>}
      {error && <p className="error">{error}</p>}
      {resipe && (
        <div>
          <h3 className="page-title">{resipe.title}</h3>
          <p>{resipe.cookingTime} to cook.</p>
          <ul>
            {resipe.ingredients.map((ing) => {
              return <li key={ing}>{ing}</li>;
            })}
          </ul>
          <div>{resipe.method}</div>
        </div>
      )}
    </div>
  );
}
