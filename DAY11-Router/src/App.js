// import { Route, Switch, Router } from "react-router-dom";
import "./App.css";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import Kurslar from "./components/Kurslar";
import Iletisim from "./components/Iletisim";
import Kisiler from "./components/Kisiler";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <MyNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/kurslar">
            <Kurslar />
          </Route>
          <Route path="/iletisim">
            <Iletisim />
          </Route>
          <Route path="/kisiler">
            <Kisiler />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
