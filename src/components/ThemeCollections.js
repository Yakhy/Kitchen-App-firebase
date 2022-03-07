import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/mode-icon.svg";
//style
import "./ThemeCollections.css";

const colors = ["purple", "#313552", "#B8405E", "#2EB086", "#1572A1"];

export default function ThemeCollections() {
  const { mode, changeColor, changeMode } = useTheme();

  const handleMode = () => {
    changeMode(`${mode === "dark" ? "light" : "dark"}`);
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          alt="modeicon"
          onClick={handleMode}
          style={{
            filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
            transition: "0.4s",
          }}
        />
      </div>
      <div className="theme-buttons">
        {colors.map((color) => {
          return (
            <div
              onClick={() => {
                changeColor(color);
              }}
              key={color}
              style={{ background: color }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
