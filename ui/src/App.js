import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import HomePage from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:id">
              <User />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
