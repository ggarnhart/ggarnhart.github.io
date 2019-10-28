import React, { Component } from "react";
import Likes from "./Likes";
import "./landing.css";

class Other extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 blue-background white-text">
          <h6 className="greg-text-center greg-margin-top no-margin-bottom">
            Find me on any of these fine platforms:
          </h6>
          <div className="container">
            <div className="row icon-row">
              <div className="col">
                <h2 className="no-margin">
                  <a
                    className="greg-icon-link"
                    href="https://facebook.com/ggarnhart"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </h2>
              </div>
              <div className="col">
                <h2 className="no-margin">
                  <a
                    className="greg-icon-link"
                    href="https://linkedin.com/in/greggarnhart"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </h2>
              </div>
              <div className="col">
                <h2 className="no-margin">
                  <a
                    className="greg-icon-link"
                    href="https://instagram.com/ggarnhart"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </h2>
              </div>
              <div className="col">
                <h2 className="no-margin">
                  <a
                    className="greg-icon-link"
                    href="https://medium.com/@GGarnhart"
                  >
                    <i className="fab fa-medium" />
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 red-background white-text">
          <h6 className="greg-text-center greg-margin-top no-margin-bottom">
            This site was made using:
          </h6>
          <div className="container">
            <div className="container">
              <div className="row icon-row">
                <div className="col">
                  <h2 className="no-margin">
                    <a href="https://reactjs.org/" className="greg-icon-link">
                      <i className="fab fa-react" />
                    </a>
                  </h2>
                </div>
                <div className="col">
                  <h2 className="no-margin">
                    <a
                      href="https://github.com/ggarnhart/site"
                      className="greg-icon-link"
                    >
                      <i className="fab fa-github" />
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Other;
