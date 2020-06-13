import React, { Component } from "react";

import Step1 from "../assets/images/Timeline-1.png";
import Step2 from "../assets/images/Timeline-2.png";
import Step3 from "../assets/images/Timeline-3.png";
import Step4 from "../assets/images/Timeline-4.png";

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="container">
        <h2>Timeline</h2>
          <div className="section-timeline_content">
            <div className="timeline step1">
              <h3>Registration</h3>
              <img src={Step1} alt="Timeline 1" />
              <p>22 July - 26 August 2019</p>
            </div>
            <div className="timeline step2">
              <h3>Essay and CV Screening</h3>
              <img src={Step2} alt="Timeline 2" />
              <p>29 July - 02 September 2019</p>
            </div>
            <div className="timeline step3">
              <h3>On-campus Interview</h3>
              <img src={Step3} alt="Timeline 3" />
              <p>01 - 11 October 2019</p>
            </div>
            <div className="timeline step4">
              <h3>Announcement of Selected Scholars</h3>
              <img src={Step4} alt="Timeline 4" />
              <p>17 October 2019</p>
            </div>
          </div>
      </div>
    );
  }
}

export default Timeline;
