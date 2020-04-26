import React, { Component } from "react";

export default class QuickModel extends Component {
  state = {
    doctor: {},
    specialization: "",
  };

  componentDidMount = (async) => {
    this.setState({ doctor: this.props.location.state.doc });
    this.setState({ specialization: this.props.location.state.cat });
  };
  render() {
    console.log(this.state.specialization);
    const {
      name,
      email,
      duration,
      phone,
      experience,
      fees,
      image,
    } = this.state.doctor;
    // console.log);
    return (
      <div>
        <section className="section-bg">
          <div id="portfolio  ">
            <div className="container mt-4  ">
              <div className="page-title text-center">
                <h1 className="text-dark">Doctors</h1>

                <hr className="pg-titl-bdr-btm" />
              </div>

              <div className="" id="" style={{ opacity: 1 }}>
                {/*  */}
                <div className="container ">
                  <div className=" tabletrans ">
                    <div className="well">
                      {/* <div className="row mb-5"></div> */}
                      <div className="card">
                        <div className="container-fliud  ">
                          <div className="wrapper row mb-4">
                            <div className="preview col-md-6 mt-4">
                              <div className="preview-pic tab-content ">
                                <img
                                  src={image}
                                  alt="img1"
                                  width="100%"
                                  height="100%"
                                />
                              </div>
                            </div>
                            <div className="details col-md-6">
                              {/* <h3 className="product-title mb-5">
                                Doctor Deatail
                              </h3> */}
                              <h3 className="product-title mb-5">{name}</h3>
                              <i>
                                <h4>{this.state.specialization}</h4>

                                <h4>{email}</h4>
                                <h4>Duration: {duration}</h4>
                                <h4>Experience: {experience}-Years</h4>
                                <h4>Contact: {phone}</h4>

                                <h4>Fees: ₹{fees}</h4>
                              </i>
                              <div className="action ">
                                <button
                                  className="add-to-cart btn btn-warning"
                                  type="button"
                                >
                                  Book Appintment
                                </button>
                                {/* <button
                                  className="like btn btn-default"
                                  type="button"
                                >
                                  <span className="fa fa-heart"></span>
                                </button> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
