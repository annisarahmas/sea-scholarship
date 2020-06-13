import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionsTestimoni from "../store/testimonials/actions";

import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.onFetchTestimoni();
  }
  render() {
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
      // spaceBetween: 15
    };

    return (
      <div className="container">
        <h2>Testimonials</h2>
        <Swiper {...params}>
          {this.props.testimoni.map((testi) => {
            return (
              <div className="section-testimoni_content" key={testi.id}>
                <div className="person-img-wrapper">
                  <img
                    src={testi.image}
                    className="person-img"
                    alt={testi.name}
                  />
                </div>
                <div className="testi-detail">
                  <p>{testi.story}</p>
                  <p>
                    <b>{testi.name}</b>
                  </p>
                </div>
              </div>
            );
          })}
        </Swiper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    testimoni: state.testimoni.testimoni,
    isLoadingTestimoni: state.testimoni.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTestimoni: () => dispatch(actionsTestimoni.fetchTestimoni()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);
