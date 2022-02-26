import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './HomePage';
import NavBar from './NavBar';
import Portfolio from './Portfolio';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route path="/">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
