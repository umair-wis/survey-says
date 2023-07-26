import React from "react";
import { Link } from "react-router-dom";

import "./ImagesState2V6.scss";

const ImagesState2V6 = () => {
  const colorCodeToParse = localStorage.getItem("colorCode");
  const colorCode = colorCodeToParse
    ? JSON.parse(colorCodeToParse)
    : colorCodeToParse;
  return (
    <>
      <section id="ImagesState2V6">
        <div className="site_container">
          <div className="row">
            <div className="col-md-6">
              <h2>Upload Images.</h2>
              <span>Upload the images you'd like to test (maximum of 60).</span>

              <div
                className="upload_image"
                style={{
                  backgroundColor: "rgba(242, 248, 255, 1)",
                  border: ".2rem dashed rgba(22, 134, 252, 1)",
                }}
              >
                <span className="drag_text" style={{ color: colorCode }}>
                  Upload or Drag & Drop All of Your Photos Here
                </span>
                <button
                  type="button"
                  className="upload_btn"
                  style={{ backgroundColor: "rgba(22, 134, 252, 1)" }}
                >
                  <i className="fa fa-solid fa-plus " />
                  Upload photos
                </button>
                <div className="card_blk">
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="d-flex align-items-center progress_outer">
                      <progress
                        value="30"
                        max="100"
                        style={{ color: "red" }}
                      ></progress>
                      <span className="progress_value">30%</span>
                    </div>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-sm-5">
              <h2>Specify the images for each question.</h2>
              <span>
                If you want to specify the images for each question, drag the
                photos to the questions below. Otherwise, we will create
                questions based on your uploaded photos.
              </span>

              <div className="question_blk_outer">
                <h3 style={{ color: "rgba(22, 134, 252, 1)" }}>Question 1</h3>
                <div
                  className="question_blk"
                  style={{
                    border: ".2rem dashed rgba(22, 134, 252, 1)",
                    backgroundColor: "rgba(242, 248, 255, 1)",
                  }}
                >
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>

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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">2</span>
                      <i className="fa fa-solid fa-close" />
                    </div>

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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">3</span>
                      <i className="fa fa-solid fa-close" />
                    </div>

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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">4</span>
                      <i className="fa fa-solid fa-close" />
                    </div>

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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">5</span>
                      <i className="fa fa-solid fa-close" />
                    </div>

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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <h3 style={{ color: "rgba(22, 134, 252, 1)" }}>Question 2</h3>
                <div
                  className="question_blk"
                  style={{
                    border: ".2rem dashed rgba(22, 134, 252, 1)",
                    backgroundColor: "rgba(242, 248, 255, 1)",
                  }}
                >
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>

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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <h3 style={{ color: "rgba(22, 134, 252, 1)" }}>Question 3</h3>
                <div
                  className="question_blk"
                  style={{
                    border: ".2rem dashed rgba(22, 134, 252, 1)",
                    backgroundColor: "rgba(242, 248, 255, 1)",
                  }}
                >
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>

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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <h3 style={{ color: "rgba(22, 134, 252, 1)" }}>Question 4</h3>
                <div
                  className="question_blk"
                  style={{
                    border: ".2rem dashed rgba(22, 134, 252, 1)",
                    backgroundColor: "rgba(242, 248, 255, 1)",
                  }}
                >
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
                    <div className="card_head">
                      <span className="count">1</span>
                      <i className="fa fa-solid fa-close" />
                    </div>

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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="image_card"
                    style={{ border: ".1rem solid rgba(215, 221, 228, 1)" }}
                  >
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
                        rx="1.5"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.222 15.5573C14.063 15.5573 15.5553 14.0649 15.5553 12.224C15.5553 10.383 14.063 8.89062 12.222 8.89062C10.3811 8.89062 8.88867 10.383 8.88867 12.224C8.88867 14.0649 10.3811 15.5573 12.222 15.5573Z"
                        fill="white"
                        stroke="#D7DDE4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        fill="white"
                      />
                      <path
                        d="M39.5227 26.2738L28.6721 15.1992L4.80078 39.5633"
                        stroke="#D7DDE4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
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
        </div>
        <div className="bottom">
          <Link
            to=""
            type="button"
            className="back_btn"
            style={{ backgroundColor: "transparent" }}
          >
            <i class="fa-solid fa-arrow-left"></i>
            Back
          </Link>
          <Link
            to=""
            type="button"
            className="next_btn"
            style={{ backgroundColor: colorCode }}
          >
            Next
            <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ImagesState2V6;
