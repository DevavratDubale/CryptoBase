import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './HomePage';
import NavBar from './NavBar';
import Learn from './Learn';
import Portfolio from './Portfolio';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Switch>
        <Route exact path="/">
        <NavBar />
            <HomePage />
          </Route>
          <Route exact path="/learn">
          <NavBar />
            <Learn />
          </Route>
          <Route exact path="/portfolio">
          <NavBar />
            <Portfolio />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
