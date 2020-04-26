import React, { Component } from "react";
import "../CSS/donor.css";

import axios from "axios";

export default class addDonors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      contact: "",
      email: "",
      duration: "",
      categories: [],
      experience: "",

      category: "",
      file: [],
    };
    this.onChange = this.onChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  componentDidMount = async () => {
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
        categories: res.data.data,
      });
      console.log(this.state.category);
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  // Input on change
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  // Dropdown change
  handleDropdownChange = (e) => {
    this.setState({ category: e.target.value });
    console.log(e.target.value);
  };
  // fileupload
  onChangeHandler = (e) => {
    this.setState({
      file: e.target.files[0],
    });
    console.log(this.state.file);
  };
  onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", this.state.file, this.state.file.name);

    console.log(data);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/doctor/photo`,
        data,
        config
      );
      console.log(res.data.data);

      const products = {
        name: this.state.name,
        phone: this.state.contact,
        specialization: this.state.category,
        experience: this.state.experience,
        email: this.state.email,
        duration: this.state.duration,
        fees: this.state.fees,
        image: res.data.data,
      };
      const body = JSON.stringify(products);
      console.log(body);
      const config1 = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const result = await axios.post(
        `http://localhost:5000/api/v1/doctor`,
        body,
        config1
      );
      console.log(result);
      alert(`Doctors Details Added ${result.data.data.name}`);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };

  render() {
    return (
      <div className="container itmtop">
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="" id="login-second">
            <div className="page-wrapper p-t-50 p-b-50">
              <div className="wrapper wrapper--w900 ">
                <div className="card cardH card-6 bg-dark">
                  <div className="card-heading m-4 ">
                    <h2 className="title address3 text-dark">Add Doctors</h2>
                  </div>
                  <div className="card-body">
                    <form
                      onSubmit={this.onSubmit}
                      encType="multipart/form-data"
                    >
                      <div className="form-row frow">
                        <div className="name">Doctor Name:</div>
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Specialization</div>
                        <div className="value">
                          <select
                            id="dropdown form-control"
                            className="btn bg-light"
                            onChange={this.handleDropdownChange}
                          >
                            <option value="nocat">Specialization</option>
                            {this.state.categories.map((category) => (
                              <option key={category._id} value={category._id}>
                                {category.catname}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="form-row frow">
                        <div className="name">Upload Image:</div>
                        <div className="value">
                          <div className="input-group js-input-file">
                            <input
                              className="input-file"
                              type="file"
                              name="file"
                              id="file"
                              onChange={this.onChangeHandler}
                            />
                            <label className="label--file" htmlFor="file">
                              Choose file
                            </label>
                            <span className="input-file__info">
                              No file chosen
                            </span>
                          </div>
                          <div className="label--desc">
                            Upload your Document/Id proff or any other relevant
                            file. Max file size 50 MB
                          </div>
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Experience</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="experience"
                              placeholder=""
                              value={this.state.experience}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Duration</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="duration"
                              placeholder=""
                              value={this.state.duration}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-row frow">
                        <div className="name">Email</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                              value={this.state.email}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Contact</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="contact"
                              placeholder=""
                              value={this.state.contact}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Fees</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="fees"
                              placeholder=""
                              value={this.state.fees}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <button
                          className="btn btn--radius-2 btn-gray"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
