import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
