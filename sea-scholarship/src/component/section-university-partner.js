import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionsUniv from "../store/universities/actions";
import * as actionsFaculty from "../store/faculty/actions";

import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

class UniversityPartner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.onFetchUniversity();
    this.props.onFetchFaculty();
  }
  render() {
    const universitiesDisplay = this.props.university.map((univ) => {
      return (
        <div className="section-university-partner_content" key={univ.id}>
          <div className="logo-univ-wrapper">
            <img
              src={univ.univ_logo}
              className="logo-univ"
              alt="Logo University"
            />
          </div>
          <div className="univ-carousel">
            <h3>{univ.univ_name}</h3>
            <ul className="list-of-faculty">
              {this.props.faculty
                .filter((c) => c.univ_id.id === univ.id)
                .map((fac) => {
                  return <li key={fac.id}>{fac.name}</li>;
                })}
            </ul>
          </div>
        </div>
      );
    });

    const params = {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        type: "",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      rebuildOnUpdate: true,
      shouldSwiperUpdate: true,
      // spaceBetween: 30,
    };

    return (
      <div className="container">
        <h2>Partner Universities</h2>
        <Swiper {...params}>{universitiesDisplay}</Swiper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    faculty: state.faculty.faculty,
    isLoading: state.faculty.isLoading,
    university: state.university.university,
    isLoadingUniv: state.university.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchFaculty: () => dispatch(actionsFaculty.fetchFaculty()),
    onFetchUniversity: () => dispatch(actionsUniv.fetchUniversity()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UniversityPartner);
