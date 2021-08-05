import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Link, NavLink
} from "react-router-dom";
import Home from "./components/home";
import Play from "./components/play";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/play" exact>
            <Play></Play>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
