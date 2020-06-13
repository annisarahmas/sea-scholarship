import React, { Component } from "react";
import { connect } from "react-redux";

import UniversityPartner from "./component/section-university-partner";
import Timeline from "./component/section-timeline";
import Testimonials from "./component/section-testimoni";

import * as actionsProgram from "./store/program/actions";

import logo from "./assets/images/Sea-Undergraduate-Logo.png";
import grad from "./assets/images/icon-graduate.png";
import freshman from "./assets/images/icon-freshmen.png";
import senior from "./assets/images/icon-senior.png";

import "./sass/global.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.onFetchProgram();
  }

  render() {
    const createMarkup = (htmlString) => ({ __html: htmlString });

    const programDisplay = this.props.program.map((pro) => {
      return (
        <div key={pro.id}>
          <p>{pro.program_content}</p>
          <div className="list-program">
            <div className="list-program_box">
              <img
                src={freshman}
                className="icon-program"
                alt="Freshman Program"
              />
              <h3 className="program-title">
                Sea Freshman Scholarship Program
              </h3>

              <div
                className="program"
                dangerouslySetInnerHTML={createMarkup(pro.freshman_program)}
              />
            </div>
            <div className="list-program_box">
              <img src={senior} className="icon-program" alt="Senior Program" />
              <h3 className="program-title">Sea Senior Scholarship Program</h3>

              <div
                className="program"
                dangerouslySetInnerHTML={createMarkup(pro.senior_program)}
              />
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="App" id="nav-home">
        <div className="container">
          <header className="App-header">
            <div className="nav">
              <input type="checkbox" id="nav-check" />
              <div className="nav-header">
                <img src={logo} className="nav-logo" alt="logo" />
              </div>
              <div className="nav-btn">
                <label htmlFor="nav-check">
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
              <div className="nav-links">
                <a href="#nav-home" className="nav-link">
                  Home
                </a>
                <a href="#nav-program" className="nav-link">
                  Program
                </a>
                <a href="#nav-apply" className="nav-link">
                  Apply Here
                </a>
                <a href="#nav-faq" className="nav-link">
                  FAQ
                </a>
              </div>
            </div>
          </header>
        </div>
        <div className="header-wrapper">
          <div className="container">
            <div className="header-detail">
              <h1>Congratulations Sea Scholarship 2019 Awardees!</h1>
              <p>
                The Sea Scholarship Comittee is proud to announce the 2019
                Academic Year Sea Scholarship recipients. Final award email
                notifications were sent on October 17, 2019.
              </p>
            </div>
            <img src={grad} className="icon-grad" alt="icon grad" />
          </div>
        </div>
        <div className="section-program" id="nav-program">
          <div className="container">
            <h2>Undergraduate Scholarship Program</h2>
            {programDisplay}
          </div>
        </div>
        <div className="section-university-partner">
          <UniversityPartner />
        </div>
        <div className="section-timeline">
          <Timeline />
        </div>
        <div className="section-testimoni">
          <Testimonials />
        </div>
        <div className="section-apply" id="nav-apply">
          <h3>
            Application are now closed. <br />
            We'll see you again next year.
          </h3>
        </div>
        <div className="section-faq" id="nav-faq">
          {this.props.program.map((faq) => {
            return (
              <div className="container" key={faq.id}>
                <h2>FAQ</h2>
                <div
                  className="section-faq_content"
                  dangerouslySetInnerHTML={createMarkup(faq.faq_content)}
                />
              </div>
            );
          })}
        </div>
        <div className="footer">
          <footer className="App-footer">
            <p>
              For more information about Sea, check out our corporate website{" "}
              <a href="#nav-home">here</a>. <br />
              If you have further queries, reach out to us at{" "}
              <a href="#nav-home">id-scholarship@seagroup.com</a>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    program: state.program.program,
    isLoadingProgram: state.program.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProgram: () => dispatch(actionsProgram.fetchProgram()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
