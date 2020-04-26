import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CompanyHome from "./CompanyHome";
// import fRegistration from "./Registration";
import CompanyNavbar from "./CompanyNavbar";
import Category from "./Category";
import Doctors from "./Doctors";
import axios from "axios";
import QuickModel from "./QuickModel";

export default class All extends Component {
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
          <CompanyNavbar />
          {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

          <Switch>
            <Route
              exact
              path={"/user/Home"}
              render={(props) => (
                <CompanyHome
                  {...props}
                  user={this.state.user}
                  getDoctors={this.getDoctors}
                  // getCategory={this.getCategory}
                  doctors={this.state.doctors}
                  // category={this.state.category}
                />
              )}
            />
            {/* <Route exact path={"/user/Home"} component={CompanyHome} /> */}
            <Route
              exact
              path={"/user/Category"}
              render={(props) => (
                <Category
                  user={this.state.user}
                  getDoctors={this.getDoctors}
                  getCategory={this.getCategory}
                  doctors={this.state.doctors}
                  category={this.state.category}
                />
              )}
            />
            <Route path={"/user/doctors"} component={Doctors} />
            <Route path={"/user/ShowDoctor"} component={QuickModel} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// export default App;
