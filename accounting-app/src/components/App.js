import Login from "./Login";
import Signup from "./Signup";
import FileTable from "./FileTable";
import ForgotPassword from "./ForgotPassword";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/pages/Home";
import AdminPage from "../components/pages/Admin";
import Manager from "../components/pages/Manager";
import User from "../components/pages/User";
import Profile from "../components/pages/Profile";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


//Routing
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
          <Route exact path="/filetable" component={FileTable}></Route>
          <div>
            <Navbar />
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/admin" component={AdminPage}></Route>
            <Route exact path="/manager" component={Manager}></Route>
             <Route exact path="/user" component={User}></Route>
            <Footer />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
