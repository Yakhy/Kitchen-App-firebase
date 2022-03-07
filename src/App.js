import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
//css
import "./App.css";

//page components
import Navbar from "./components/Navbar";
import Home from "./page/home/Home";
import Create from "./page/create/Create";
import Recipe from "./page/recipe/Recipe";
import Search from "./page/search/Search";
import ThemeCollections from "./components/ThemeCollections";

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <Router>
        <Navbar />
        <ThemeCollections />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/recipe/:id">
            <Recipe />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
