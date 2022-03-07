import React from "react";
import { Link } from "react-router-dom";
//styles
import "./Navbar.css";
//hooks
import { useTheme } from "../hooks/useTheme";
//components
import Searchbar from "./Searchbar";

export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Yakhtobek's Kitchen</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create recipe</Link>
      </nav>
    </div>
  );
}
