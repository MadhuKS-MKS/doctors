import React from "react";
import axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminHome from "./AdminHome";
// import fRegistration from "./Registration";
import AdminNavbar from "./AdminNavbar";
import addDonors from "./addDonors";
import showDonors from "./ShowDonors";
import editDoctor from "./EditDoctor";

// import Prof from "./Prof";
// import ProfileEdit from "./ProfileEdit";
// import orders from "./orders";

class App extends React.Component {
  state = {
    users: [],
    doctors: [],
    category: [],
  };

  getCategory = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/category/",
        config
      );
      this.setState({
        category: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  getDoctors = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/doctor`,
        config
      );
      this.setState({
        doctors: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    return (
      <Router>
        <div className="">
          <AdminNavbar />
          {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

          <Switch>
            <Route
              exact
              path={"/doctor/Home"}
              render={(props) => (
                <AdminHome
                  {...props}
                  user={this.state.user}
                  getDoctors={this.getDoctors}
                  getCategory={this.getCategory}
                  doctors={this.state.doctors}
                  category={this.state.category}
                />
              )}
            />
            {/* <Route exact path={"/doctor/Home"} component={AdminHome} /> */}
            {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
            <Route path={"/doctor/addDonors"} component={addDonors} />

            <Route path={"/doctor/showDonors"} component={showDonors} />
            <Route path={"/doctor/edit"} component={editDoctor} />

            {/* <Route path={"/doctor/Profile"} component={Prof} /> */}
            {/* <Route path={"/doctor/ProfileEdit"} component={ProfileEdit} /> */}
            {/* <Route path={"/doctor/orders"} component={orders} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
