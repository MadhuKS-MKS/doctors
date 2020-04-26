import React, { Component, Fragment } from "react";
// import "../CSS/Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="banner">
          <div>
            <section
              id="section1"
              className=""
              style={{ marginTop: 80 + "px" }}
            >
              <div className="rightside rollIn animated wow animated">
                <div className="container ">
                  <h4> Welcome To Our Studio!</h4>
                  <h1>Direct Connect With Doctors</h1>

                  <a href="/Home#product" className="btn btn-success welcome">
                    Tell Me More
                  </a>
                </div>
              </div>
              <div className="leftside">
                <img
                  src="https://wallpaperplay.com/walls/full/0/e/1/13976.jpg"
                  alt=""
                />
              </div>
            </section>
          </div>
        </div>
        {/*  */}
        <section id="service">
          <div className="container">
            <h2>About Us</h2>
            <div className="service_area">
              <div className="row">
                <div className="col-lg-12">
                  <div className="service_block">
                    <p className="animated zoomIn wow animated">
                      Charitable giving is the act of giving money, goods or
                      time to the unfortunate, either directly or by means of a
                      charitable trust or other worthy cause.[9] Charitable
                      giving as a religious act or duty is referred to as
                      almsgiving or alms. The name stems from the most obvious
                      expression of the virtue of charity; giving the recipients
                      of it the means they need to survive. The impoverished,
                      particularly those widowed or orphaned, and the ailing or
                      injured, are generally regarded as the proper recipients
                      of charity. The people who cannot support themselves and
                      lack outside means of support sometimes become "beggars",
                      directly soliciting aid from strangers encountered in
                      public. Some groups regard charity as being distributed
                      towards other members from within their particular group.
                      Although giving to those nearly connected to oneself is
                      sometimes called charity—as in the saying "Charity begins
                      at home"—normally charity denotes giving to those not
                      related, with filial piety and like terms for supporting
                      one's family and friends. Indeed, treating those related
                      to the giver as if they were strangers in need of charity
                      has led to the figure of speech "as cold as
                      charity"—providing for one's relatives as if they were
                      strangers, without affection.[10] Most forms of charity
                      are concerned with providing basic necessities such as
                      food, water, clothing, healthcare and shelter, but other
                      actions may be performed as charity: visiting the
                      imprisoned or the homebound, ransoming captives, educating
                      orphans, even social movements. Donations to causes that
                      benefit the unfortunate indirectly, such as donations to
                      fund cancer research, are also charity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/*  */}
        {/*  */}

        <div className=" container-fluid mt-5" id="product">
          <h2> Category</h2>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="data:image/jpeg;base64,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"
                  className="img1"
                  alt=""
                />

                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                    data-toggle=""
                    data-target=""
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div className="product-bottom text-center">
                <h3>Gynaecologist</h3>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="data:image/jpeg;base64,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"
                  className="img1"
                  alt=""
                />
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div className="product-bottom text-center">
                <h3>Nurologist</h3>
              </div>
            </div>
            {/*  */}

            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="data:image/jpeg;base64,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"
                  className="img1"
                  alt=""
                />
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div className="product-bottom text-center">
                <h3>Pediatrician</h3>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="data:image/jpeg;base64,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"
                  className="img1"
                  alt=""
                />
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div className="product-bottom text-center">
                <h3>Orthopedic</h3>
              </div>
            </div>
          </div>
          <div
            className="modal show product-view"
            id="quickModel"
            role="dialog"
          >
            <div className="modal-dialog">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-dialog product-big-img">
                <img
                  src="https://recipes.timesofindia.com/recipes/homemade-chocolate/photo/54407737.cms"
                  className=" mt-2"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container col-md-2">
          <a className="btn shop text-center mx-auto block" href={"/Showitems"}>
            View More
          </a>
        </div>

        <section>
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft animated">
              <div className=" address clearfix address1">
                <h1>Address</h1>
                <p className="address1">
                  We are trying to connect small and large farmers to sell their
                  quality product to the diffent places.
                </p>
                <p className="address1">
                  If any suggestions or tips let us know
                </p>
              </div>
              <ul className="social-link">
                <li>
                  <a href="(0)">
                    <i className="fa fa-twitter "></i>
                  </a>
                </li>
                <li className="facebook animated bounceIn wow delay-03s animated">
                  <a href="(0)">
                    <i className="fa fa-facebook "></i>
                  </a>
                </li>
                <li className="pinterest animated bounceIn wow delay-04s animated">
                  <a href="(0)">
                    <i className="fa fa-pinterest "></i>
                  </a>
                </li>
                <li className="dribbble animated bounceIn wow delay-06s animated">
                  <a href="(0)">
                    <i className="fa fa-instagram "></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 wow fadeInUp delay-06s animated">
              <div className="form">
                <h1 className="address2">Contact Us</h1>
                <div id="sendmessage" className="address2">
                  Sent Message Thank you!
                </div>
                <div id="errormessage"></div>
                <form
                  action=""
                  method="post"
                  role="form"
                  className="contactForm"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control input-text"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control input-text"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control input-text"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                    ></textarea>
                    <div className="validation"></div>
                  </div>

                  <button type="submit" className="btn input-btn">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/*  */}
        {/*  */}
        {/*  */}

        <section className="subscribe-section">
          <div className="subscribe-form">
            <form action="#" className="subscribe-form">
              <label htmlFor="text" className="clr">
                Join our exclusive newsletter
              </label>
              <input
                type="email"
                name="email"
                className="clr"
                placeholder="Enter your email address"
              />
              <span className="submit">
                <input type="submit" value="subscribe" />{" "}
                <a className="clr">Subscribe</a>
              </span>
            </form>
          </div>
        </section>
        {/*  */}
        {/*  */}
      </Fragment>
    );
  }
}

export default Home;
