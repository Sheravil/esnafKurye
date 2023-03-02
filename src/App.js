import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import ContactPage from "./components/Pages/ContactPage/ContactPage";
import Price from "./components/Pages/Price/Price";
import Worker from "./components/Pages/Worker/Worker";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Anasayfa" exact component={Home} />
            <Route path="/Hakkımızda" component={About} />
            <Route path="/İletişim" component={ContactPage} />
            <Route path="/Teklif" component={Price} />
            <Route path="/Kurye" component={Worker} />
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
