import React from 'react';
import {Basket} from './Pages/Basket/index';
import {Main} from './Pages/Main/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/basket">Basket</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
