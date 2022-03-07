import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import Trashcon from '../assets/trashcon.svg'
import { projectFirestore } from "../firebase/config";
//css
import "./ResipeList.css";

export default function ResipeList({ resipes }) {
  const { mode } = useTheme();

  if (resipes.length === 0) {
    return <div className="error">No recipe like this...</div>;
  }
const handleClick = (id) => {
  projectFirestore.collection('recipies').doc(id).delete()
}



  return (
    <div className="recipe-list">
      {resipes.map((resipe) => {
        return (
          <div className={`card ${mode}`} key={resipe.id}>
            <h3 className="page-title">{resipe.title}</h3>
            <p>{resipe.cookingTime} to cook.</p>
            <div>{resipe.ingredients}</div>
            <div>{resipe.method.substring(0, 100)}...</div>
            <Link to={`/recipe/${resipe.id}`}>Cook this</Link>
            <img className="delete" onClick={() =>{handleClick(resipe.id)}} src={Trashcon} alt="" />
          </div>
        );
      })}
    </div>
  );
}
