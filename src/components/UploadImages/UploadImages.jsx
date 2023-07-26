import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import dummyImage from "../../assets/images/dummyImage.jpg";
import routes from "../../config/routes";

import "./UploadImages.scss";

const UploadImages = () => {
  // const colorCodeToParse = localStorage.getItem("colorCode");
  // const colorCode = colorCodeToParse
  //   ? JSON.parse(colorCodeToParse)
  //   : colorCodeToParse;

  const colorCode = '#1686F6';

  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "red" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "block",
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: false,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <>
      <section id="UploadImages">
        <div className="site_container">
          <div className="inner">
            <div className="text_blk">
              <h2 style={{ color: colorCode }}>Images</h2>
              <span>Upload the Images You'd Like to Test (Maximum of 60).</span>
              <div
                className="drag_file"
                style={{
                  backgroundColor: "rgba(242, 248, 255, 1)",
                  borderColor: colorCode,
                }}
              >
                <div className="img_blk">
                  <img src={dummyImage} alt="" />
                </div>
                <span className="drag_text" style={{ color: colorCode }}>
                  Drag & Drop
                </span>
                <p>
                  If you would like to specify the images you'd like to compare
                  for each question, drag them to questions below
                </p>
              </div>

              <Slider {...settings}>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <i className="fa fa-solid fa-close" />
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center mb-3 "
                      style={{ width: "13.5rem", margin: "0 auto" }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <i className="fa fa-solid fa-close" />
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center mb-3 "
                      style={{ width: "13.5rem", margin: "0 auto" }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <i className="fa fa-solid fa-close" />
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center mb-3 "
                      style={{ width: "13.5rem", margin: "0 auto" }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <i className="fa fa-solid fa-close" />
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center mb-3 "
                      style={{ width: "13.5rem", margin: "0 auto" }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <i className="fa fa-solid fa-close" />
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center mb-3 "
                      style={{ width: "13.5rem", margin: "0 auto" }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <i className="fa fa-solid fa-close" />
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center mb-3 "
                      style={{ width: "13.5rem", margin: "0 auto" }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <i className="fa fa-solid fa-close" />
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center mb-3 "
                      style={{ width: "13.5rem", margin: "0 auto" }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <i className="fa fa-solid fa-close" />
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center mb-3 "
                      style={{ width: "13.5rem", margin: "0 auto" }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <i className="fa fa-solid fa-close" />
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center mb-3 "
                      style={{ width: "13.5rem", margin: "0 auto" }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <i className="fa fa-solid fa-close" />
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center mb-3 "
                      style={{ width: "13.5rem", margin: "0 auto" }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <i className="fa fa-solid fa-close" />
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center mb-3 "
                      style={{ width: "13.5rem", margin: "0 auto" }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <i className="fa fa-solid fa-close" />
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center mb-3 "
                      style={{ width: "13.5rem", margin: "0 auto" }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
              </Slider>

              <div
                className="card_blk mt-5"
                style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
              >
                <h4 style={{ color: colorCode }}>Q1</h4>

                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <div className="card_head">
                    <span className="count">1</span>
                    <i className="fa fa-solid fa-close" />
                  </div>
                  {/* <i className="fa fa-solid fa-close" /> */}
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center "
                      style={{
                        width: "13.5rem",
                        margin: "0 auto",
                        marginBottom: ".7rem",
                      }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <div className="card_head">
                    <span className="count">1</span>
                    <i className="fa fa-solid fa-close" />
                  </div>
                  {/* <i className="fa fa-solid fa-close" /> */}
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center "
                      style={{
                        width: "13.5rem",
                        margin: "0 auto",
                        marginBottom: ".7rem",
                      }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <div className="card_head">
                    <span className="count">1</span>
                    <i className="fa fa-solid fa-close" />
                  </div>
                  {/* <i className="fa fa-solid fa-close" /> */}
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center "
                      style={{
                        width: "13.5rem",
                        margin: "0 auto",
                        marginBottom: ".7rem",
                      }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <div className="card_head">
                    <span className="count">1</span>
                    <i className="fa fa-solid fa-close" />
                  </div>
                  {/* <i className="fa fa-solid fa-close" /> */}
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center "
                      style={{
                        width: "13.5rem",
                        margin: "0 auto",
                        marginBottom: ".7rem",
                      }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <div className="card_head">
                    <span className="count">1</span>
                    <i className="fa fa-solid fa-close" />
                  </div>
                  {/* <i className="fa fa-solid fa-close" /> */}
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center "
                      style={{
                        width: "13.5rem",
                        margin: "0 auto",
                        marginBottom: ".7rem",
                      }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <div className="card_head">
                    <span className="count">1</span>
                    <i className="fa fa-solid fa-close" />
                  </div>
                  {/* <i className="fa fa-solid fa-close" /> */}
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center "
                      style={{
                        width: "13.5rem",
                        margin: "0 auto",
                        marginBottom: ".7rem",
                      }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card_blk mt-5 mb-0"
                style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
              >
                <h4 style={{ color: colorCode }}>Q1</h4>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <div className="card_head">
                    <span className="count">1</span>
                    <i className="fa fa-solid fa-close" />
                  </div>
                  {/* <i className="fa fa-solid fa-close" /> */}
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center "
                      style={{
                        width: "13.5rem",
                        margin: "0 auto",
                        marginBottom: ".7rem",
                      }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <div className="card_head">
                    <span className="count">1</span>
                    <i className="fa fa-solid fa-close" />
                  </div>
                  {/* <i className="fa fa-solid fa-close" /> */}
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center "
                      style={{
                        width: "13.5rem",
                        margin: "0 auto",
                        marginBottom: ".7rem",
                      }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <div className="card_head">
                    <span className="count">1</span>
                    <i className="fa fa-solid fa-close" />
                  </div>
                  {/* <i className="fa fa-solid fa-close" /> */}
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center "
                      style={{
                        width: "13.5rem",
                        margin: "0 auto",
                        marginBottom: ".7rem",
                      }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <div className="card_head">
                    <span className="count">1</span>
                    <i className="fa fa-solid fa-close" />
                  </div>
                  {/* <i className="fa fa-solid fa-close" /> */}
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center "
                      style={{
                        width: "13.5rem",
                        margin: "0 auto",
                        marginBottom: ".7rem",
                      }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <div className="card_head">
                    <span className="count">1</span>
                    <i className="fa fa-solid fa-close" />
                  </div>
                  {/* <i className="fa fa-solid fa-close" /> */}
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center "
                      style={{
                        width: "13.5rem",
                        margin: "0 auto",
                        marginBottom: ".7rem",
                      }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                >
                  <div className="card_head">
                    <span className="count">1</span>
                    <i className="fa fa-solid fa-close" />
                  </div>
                  {/* <i className="fa fa-solid fa-close" /> */}
                  <div className="card_body">
                    <div className="img_blk">
                      <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="138"
                          height="138"
                          rx="9"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.776 54.4427C49.2194 54.4427 54.4427 49.2194 54.4427 42.776C54.4427 36.3327 49.2194 31.1094 42.776 31.1094C36.3327 31.1094 31.1094 36.3327 31.1094 42.776C31.1094 49.2194 36.3327 54.4427 42.776 54.4427Z"
                          fill="white"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M139 92.6364L100.875 54L17 139"
                          stroke="#868D96"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center "
                      style={{
                        width: "13.5rem",
                        margin: "0 auto",
                        marginBottom: ".7rem",
                      }}
                    >
                      <progress
                        value="30"
                        max="100"
                        style={{ webkitProgressValue: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card_blk drag_blk mt-5  "
                style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
              >
                <h4 style={{ color: colorCode }}>Q1</h4>
                <p>Drag Photos for Question #3</p>
              </div>
              <button
                type="button"
                className="question_btn"
                style={{ backgroundColor: colorCode }}
              >
                <i className="fa fa-solid fa-add" />
                Question
              </button>
            </div>
            <div className="bottom">
              <Link
                to={routes.form.images}
                type="button"
                className="back_btn"
                style={{ backgroundColor: "transparent" }}
              >
                <i class="fa-solid fa-arrow-left" style={{ color: colorCode }}></i>
                Back
              </Link>
              <Link
                to={routes.form.uploadedImages}
                type="button"
                className="next_btn"
                style={{ backgroundColor: colorCode }}
              >
                Next
                <i class="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UploadImages;
