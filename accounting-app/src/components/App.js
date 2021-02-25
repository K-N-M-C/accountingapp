import Login from "./Login";
import Signup from "./Signup";
import FileTable from "./FileTable";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./Navbar";
import Admin from "./Admin";
import Manager from "./Manager";
import User from "./User";

//Routing
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/filetable" component={FileTable}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
        <Route exact path="/admin" component={Admin}></Route>
        <Route exact path="/manager" component={Manager}></Route>
        <Route exact path="/user" component={User}></Route>
        <Route exact path="/navbar" component={Navbar}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
