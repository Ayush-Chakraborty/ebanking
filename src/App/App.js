import "./App.css";
import Transfer from "./screens/Transfer";
import Login from "./screens/Login";
import Main from "./screens/Main";
import Register from "./screens/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/account">
            <Main />
          </Route>
          <Route exact path="/transfer">
            <Transfer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
