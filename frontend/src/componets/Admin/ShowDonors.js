import React, { Component } from "react";
import "../CSS/donor.css";

import axios from "axios";

export default class addDonors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctor: {},
      specialization: {},
    };
  }
  componentDidMount = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const result = await axios.get(
        `http://localhost:5000/api/v1/doctor/me`,

        config
      );
      this.setState({
        doctor: result.data.data,
        specialization: result.data.data.specialization,
      });
      console.log(result.data.data);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };

  render() {
    const {
      duration,
      name,
      // specialization,
      // catname,
      fees,
      experience,
      email,
      phone,
      image,
    } = this.state.doctor;
    console.log(this.state.specialization.catname);
    return (
      <div className="container itmtop">
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="" id="login-second">
            <div className="page-wrapper p-t-50 p-b-50">
              <div className="wrapper wrapper--w900 ">
                <div className="card cardH card-6 bg-dark">
                  <div className="card-heading m-4 ">
                    <h2 className="title address3 text-dark">Doctors</h2>
                  </div>
                  <div className="card-body">
                    <form
                      // onSubmit={this.onSubmit}
                      encType="multipart/form-data"
                    >
                      <img src={`${image}`} className="img1" alt="" />
                      <div className="form-row frow">
                        <div className="name">Doctor Name:</div>
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                            name="name"
                            value={name}
                            // onChange={this.onChange}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">specialization:</div>
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                            name="name"
                            value={this.state.specialization.catname}
                            // onChange={this.onChange}
                            readOnly
                          />
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
                              value={experience}
                              // onChange={this.onChange}
                              readOnly
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
                              value={duration}
                              // onChange={this.onChange}
                              readOnly
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
                              value={email}
                              // onChange={this.onChange}
                              readOnly
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
                              value={phone}
                              // onChange={this.onChange}
                              readOnly
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
                              value={fees}
                              // onChange={this.onChange}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <a
                          className="btn btn--radius-2 btn-dark"
                          type="submit"
                          href="/doctor/edit"
                        >
                          Edit
                        </a>
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
