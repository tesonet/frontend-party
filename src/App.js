import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./pages/Login/Login";
import Servers from "./pages/Servers/Servers";
import { ROUTES } from "./app/routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={ROUTES.servers.path}>
            <Servers />
          </Route>
          <Route path={ROUTES.login.path}>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
