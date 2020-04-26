import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainHome from "./MainHome";
// import fRegistration from "./Registration";
import MainNavbar from "./MainNavbar";
import ShowDoctors from "./ShowDoctors";
import ShowPatients from "./ShowPatients";
import addDonors from "./addDonors";
import Category from "./Category";
import addUser from "./AddUser";

function App() {
  return (
    <Router>
      <div className="">
        <MainNavbar />
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

        <Switch>
          <Route exact path={"/main/Home"} component={MainHome} />
          {/* <Route exact path={"/main/add"} component={Register} /> */}
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
          <Route path={"/main/ShowDoctors"} component={ShowDoctors} />
          <Route path={"/main/ShowPatients"} component={ShowPatients} />
          <Route path={"/main/category"} component={Category} />
          <Route path={"/main/addDoctor"} component={addDonors} />
          <Route path={"/main/addUser"} component={addUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
