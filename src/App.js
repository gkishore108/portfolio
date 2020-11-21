import "./App.css";
import Home1 from "./components/Home1";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Skills from "./components/Skills";
import { Route } from "react-router-dom";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home1} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Portfolio} />
      <ContactMe />
    </>
  );
}

export default App;
