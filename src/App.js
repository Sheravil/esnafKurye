import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Starting from "./components/Pages/Starting/Starting";
import ContactPage from "./components/Pages/ContactPage/ContactPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div>
          <Switch>
            <Route path="/" exact component={Starting} />
            <Route path="/Anasayfa" exact component={Home} />
            <Route path="/Hakkımızda" component={About} />
            <Route path="/İletişim" component={ContactPage} />
          </Switch>
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
