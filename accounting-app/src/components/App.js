import Login from "./Login";
import Signup from "./Signup";
import FileTable from "./FileTable";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import "semantic-ui-css/semantic.min.css";

//Routing
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/filetable" component={FileTable}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPassword}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
