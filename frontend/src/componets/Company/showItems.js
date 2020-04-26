import React, { Component, Fragment } from "react";
import QuickModel from "./QuickModel";
import { Link } from "react-router-dom";

export default class showItems extends Component {
  state = {
    doc: [],
    specialization: "",
  };

  componentDidMount = (async) => {
    this.setState({
      doc: this.props.doctor,
      specialization: this.props.specialization,
    });
  };
  render() {
    const { _id, image, name, fees } = this.state.doc;

    // console.log(this.props);
    return (
      <Fragment>
        <div
          className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated"
          key={_id}
        >
          <div className="product-top">
            <img src={`${image}`} className="img1" alt="" />
            <div className="product-bottom text-center">
              <h3>{name}</h3>
              <h4>{this.state.specialization}</h4>

              <h4>{fees}</h4>

              <button
                type="button"
                className="btn btn-secondary"
                title="Quick Shop"
                data-toggle="modal"
                data-target="#quickModel"
              >
                Book Appointment
              </button>
            </div>
            <div className="overlay">
              <Link
                type="button"
                className="btn btn-secondary"
                title="Quick Shop"
                to={{
                  pathname: "/user/ShowDoctor",
                  state: {
                    doc: this.state.doc,
                    cat: this.state.specialization,
                  },
                }}
              >
                <i className="fa fa-eye"></i>
              </Link>

              {/* <button
                type="button"
                className="btn btn-secondary"
                title="Add to Cart"
                data-toggle=""
                data-target=""
              >
                <i className="fa fa-shopping-cart"></i>
              </button> */}
            </div>
          </div>
          <div className="product-bottom text-center"></div>
        </div>
      </Fragment>
    );
  }
}
