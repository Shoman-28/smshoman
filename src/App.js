import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home/Home";
import Blog from "./Component/Blog/Blog";
import Project from "./Component/Project/Project";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NebBar from "./Component/Header/NevBar/NebBar";
import Footer from "./Component/Footer/Footer";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />          
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/blog">
          <NebBar />
          <Blog />
          <Footer/>
        </Route>
        <Route path="/project">
          <NebBar />
          <Project />
          <Footer/>
        </Route>
        <Route path="/about">
          <NebBar />
          <About />
          <Footer/>
        </Route>
        <Route path="/contact">
          <NebBar />
          <Contact />
          <Footer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
