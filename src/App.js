import "./App.css";
import Home from "./components/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </>
  );
}

export default App;
