import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import dummyImage from "../../assets/images/dummyImage.jpg";
import routes from "../../config/routes";

import "./ImagesState2V5.scss";

const ImagesState2V5 = () => {
  const colorCodeToParse = localStorage.getItem("colorCode");
  const colorCode = colorCodeToParse
    ? JSON.parse(colorCodeToParse)
    : colorCodeToParse;

  return (
    <>
      <section id="ImagesState2V5">
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
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.3"
                      y="0.3"
                      width="29.4"
                      height="29.4"
                      rx="0.9"
                      fill="#1686FC"
                      stroke="#1686FC"
                      stroke-width="0.6"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.16602 12.1055C10.5467 12.1055 11.666 10.9862 11.666 9.60547C11.666 8.22476 10.5467 7.10547 9.16602 7.10547C7.7853 7.10547 6.66602 8.22476 6.66602 9.60547C6.66602 10.9862 7.7853 12.1055 9.16602 12.1055Z"
                      fill="white"
                    />
                    <path
                      d="M19.0984 14.6258C19.5129 14.2586 20.125 14.2228 20.5796 14.5392L27.4855 19.3456C27.8078 19.57 28 19.9378 28 20.3305V26.8C28 27.4627 27.4627 28 26.8 28H5.58223C5.03001 28 4.77102 27.317 5.18439 26.9509L19.0984 14.6258Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="drag_text" style={{ color: colorCode }}>
                  Upload or Drag & Drop All of Your Photos Here
                </span>
                <button
                  type="button"
                  className="upload_btn"
                  style={{ backgroundColor: "rgba(22, 134, 252, 1)" }}
                >
                  <i className="fa fa-solid fa-plus " />
                  Select multiple photos
                </button>
                <div
                  className="card_blk mt-5 mb-0"
                  style={
                    {
                      // backgroundColor: "rgba(242, 248, 255, 1)",
                    }
                  }
                >
                  <div
                    className="drag_card"
                    style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>
                    <div className="card_body">
                      <div className="img_blk">
                        <svg
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="1.25"
                            fill="#F2F8FF"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                            stroke="#868D96"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="drag_card"
                    style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>
                    <div className="card_body">
                      <div className="img_blk">
                        <svg
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="1.25"
                            fill="#F2F8FF"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                            stroke="#868D96"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="drag_card"
                    style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>
                    <div className="card_body">
                      <div className="img_blk">
                        <svg
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="1.25"
                            fill="#F2F8FF"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                            stroke="#868D96"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="drag_card"
                    style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>
                    <div className="card_body">
                      <div className="img_blk">
                        <svg
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="1.25"
                            fill="#F2F8FF"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                            stroke="#868D96"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="drag_card"
                    style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>
                    <div className="card_body">
                      <div className="img_blk">
                        <svg
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="1.25"
                            fill="#F2F8FF"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                            stroke="#868D96"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="drag_card"
                    style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>
                    <div className="card_body">
                      <div className="img_blk">
                        <svg
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="1.25"
                            fill="#F2F8FF"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                            stroke="#868D96"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="drag_card"
                    style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>
                    <div className="card_body">
                      <div className="img_blk">
                        <svg
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="1.25"
                            fill="#F2F8FF"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                            stroke="#868D96"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="drag_card"
                    style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>
                    <div className="card_body">
                      <div className="img_blk">
                        <svg
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="1.25"
                            fill="#F2F8FF"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                            stroke="#868D96"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="drag_card"
                    style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>
                    <div className="card_body">
                      <div className="img_blk">
                        <svg
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="1.25"
                            fill="#F2F8FF"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                            stroke="#868D96"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="drag_card"
                    style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>
                    <div className="card_body">
                      <div className="img_blk">
                        <svg
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="1.25"
                            fill="#F2F8FF"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                            stroke="#868D96"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="drag_card"
                    style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>
                    <div className="card_body">
                      <div className="img_blk">
                        <svg
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="1.25"
                            fill="#F2F8FF"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                            stroke="#868D96"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="drag_card"
                    style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>
                    <div className="card_body">
                      <div className="img_blk">
                        <svg
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="1.25"
                            fill="#F2F8FF"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                            stroke="#868D96"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="drag_card"
                    style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>
                    <div className="card_body">
                      <div className="img_blk">
                        <svg
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="1.25"
                            fill="#F2F8FF"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                            stroke="#868D96"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="drag_card"
                    style={{ backgroundColor: "rgba(242, 248, 255, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>
                    <div className="card_body">
                      <div className="img_blk">
                        <svg
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="1.25"
                            fill="#F2F8FF"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                            stroke="#868D96"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                            stroke="#868D96"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="title">Specify the images for each question.</h3>
              <p className="desc">
                If you want to specify the images for each question, drag the
                photos to the questions below. Otherwise, we will create
                questions based on your uploaded photos.
              </p>

              <div className="row">
                <div className="col-md-6 px-3">
                  <div
                    className="card_blk mt-5"
                    style={{
                      backgroundColor: "rgba(242, 248, 255, 1)",
                      border: ".2rem dashed rgba(22, 134, 252, 1)",
                    }}
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 px-3">
                  <div
                    className="card_blk mt-5"
                    style={{
                      backgroundColor: "rgba(242, 248, 255, 1)",
                      border: ".2rem dashed rgba(22, 134, 252, 1)",
                    }}
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 px-3">
                  <div
                    className="card_blk mt-5"
                    style={{
                      backgroundColor: "rgba(242, 248, 255, 1)",
                      border: ".2rem dashed rgba(22, 134, 252, 1)",
                    }}
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 px-3">
                  <div
                    className="card_blk mt-5"
                    style={{
                      backgroundColor: "rgba(242, 248, 255, 1)",
                      border: ".2rem dashed rgba(22, 134, 252, 1)",
                    }}
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
                      <div className="card_body">
                        <div className="img_blk">
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="1.25"
                              fill="#F2F8FF"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                              stroke="#868D96"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                              stroke="#868D96"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 px-3">
                  <div
                    className="card_blk drag_blk mt-5  "
                    style={{
                      backgroundColor: "rgba(242, 248, 255, 1)",
                      border: ".2rem dashed rgba(22, 134, 252, 1)",
                    }}
                  >
                    <h4 style={{ color: colorCode }}>Q1</h4>
                    <p>
                      <b style={{ color: colorCode }}>Drag & Drop </b>Photos for
                      Question #3
                    </p>
                  </div>
                </div>
                <div className="col-md-6 px-3 align-items-center">
                  <button
                    type="button"
                    className="question_btn"
                    style={{ backgroundColor: colorCode }}
                  >
                    <i className="fa fa-solid fa-add" />
                    Add Question
                  </button>
                </div>
              </div>
            </div>
            <div className="bottom">
              <Link
                to={routes.form.uploadImage}
                type="button"
                className="back_btn"
                style={{ backgroundColor: "transparent" }}
              >
                <i class="fa-solid fa-arrow-left"></i>
                Back
              </Link>
              <Link
                to={routes.form.thankYou}
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

export default ImagesState2V5;
