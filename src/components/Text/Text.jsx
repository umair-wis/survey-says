import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import upload from "../../assets/images/upload.svg";
import uploadedFile from "../../assets/images/uploadedFile.svg";
import routes from "../../config/routes";

import "./text.scss";
import { toast } from "react-toastify";
import axios from "axios";
import { RiseLoader } from "react-spinners";
const Text = () => {

  // const colorCodeToParse = localStorage.getItem('colorCode');
  // const colorCode = colorCodeToParse ? JSON.parse(colorCodeToParse) : colorCodeToParse;

  const colorCode = '#1686F6';

  const supportedExtensions = ['doc', 'docx'];

  const typeToParse = localStorage.getItem('type');
  const type = typeToParse ? JSON.parse(typeToParse) : typeToParse;

  const [googleLink, setGoogleLink] = useState('');
  const [typeQuestions, setTypeQuestions] = useState('');
  const [questionFile, setQuestionFile] = useState('');
  const [selectFile, setSelectFile] = useState(null);

  const [loader, setLoader] = useState(false);

  const [goToNext, setGoToNext] = useState(false);

  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    const extension = file?.name?.split(".").pop();

    if (!supportedExtensions.includes(extension)) {
      toast.error('File format not supported')
    }
    else {
      setSelectFile(file);
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        axios.post('https://api-form.surveysays.xyz/media', formData, {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setUploadProgress(progress);
          },
        })
          .then((response) => {
            setQuestionFile(response?.data?.url);
            toast.success('File-Uploaded')
          })
          .catch((err) => {
            toast.error('Error uploading file.')
            setQuestionFile('');
            console.log({ err })
          })
      }
    }
  }

  const respondents = JSON.parse(localStorage.getItem('no-of-respondents'));

  const gender = JSON.parse(localStorage.getItem('gender'));

  const handleGoToNext = (e) => {
    e.preventDefault();

    const regex = /^https:\/\/docs\.google\.com\/document\/d\/[a-zA-Z0-9_-]+(\/edit)?(\?[\w=&-]*)?$/;

    if (!typeQuestions && !googleLink && !selectFile) {
      toast.error('Use any one of the three options for questions.')
    }
    else {
      if (googleLink !== '' && !regex.test(googleLink)) {
        toast.error('Please paste proper google docs link.')
      }
      else {
        if (selectFile && questionFile !== '') {
          if (type === 'textOnly') {
            setLoader(true);
            const payload = {
              attendant: Number(respondents),
              gender: gender,
              type: type,
              description: questionFile,
              imagesList: [],
              images: []
            }

            axios.post('https://api-form.surveysays.xyz/Survey/createSurvey', payload)
              .then((response) => {
                toast.success('Survey Saved.');
                localStorage?.setItem('survey-data', JSON.stringify(response?.data?.data))
                setGoToNext(true);
                setLoader(false);
              })
              .catch((err) => {
                toast.error('Could not save survey. Try again.')
                console.log({ err })
                setLoader(false);
              })
          }
          else {
            localStorage.setItem('question3-data', JSON.stringify(questionFile));
            setGoToNext(true);
          }

        }
        else if (googleLink !== '') {
          if (type === 'textOnly') {
            setLoader(true);
            const payload = {
              attendant: Number(respondents),
              gender: gender,
              type: type,
              description: googleLink,
              imagesList: [],
              images: []
            }

            axios.post('https://api-form.surveysays.xyz/Survey/createSurvey', payload)
              .then((response) => {
                toast.success('Survey Saved.');
                localStorage?.setItem('survey-data', JSON.stringify(response?.data?.data))
                setGoToNext(true);
                setLoader(false);
              })
              .catch((err) => {
                toast.error('Could not save survey. Try again.')
                console.log({ err })
                setLoader(false);
              })
          } else {
            localStorage.setItem('question3-data', JSON.stringify(googleLink));
            setGoToNext(true);
          }
        }
        else {
          if (type === 'textOnly') {
            setLoader(true);
            const payload = {
              attendant: Number(respondents),
              gender: gender,
              type: type,
              description: typeQuestions,
              imagesList: [],
              images: []
            }

            axios.post('https://api-form.surveysays.xyz/Survey/createSurvey', payload)
              .then((response) => {
                toast.success('Survey Saved.');
                localStorage?.setItem('survey-data', JSON.stringify(response?.data?.data));
                setGoToNext(true);
                setLoader(false);
              })
              .catch((err) => {
                toast.error('Could not save survey. Try again.')
                console.log({ err })
                setLoader(false);
              })
          } else {
            localStorage.setItem('question3-data', JSON.stringify(typeQuestions));
            setGoToNext(true);
          }
        }
      }
    }
  }

  if (goToNext) {
    if (type === 'textOnly') {
      return <Navigate to={routes.form.thankYou} />
    }
    else {
      return <Navigate to={routes.form.imagesControl} />
    }
  }

  return (
    <>
      {
        loader ?
          <div className="loaderWrapper">
            <RiseLoader className="login-clip-loader" color={colorCode} />
            <h1
              style={{
                color: { colorCode },
                fontSize: "2.4rem",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Saving your survey. Please wait...
            </h1>
          </div>
          :
          <section id="text">
            <div className="site_container">
              <div className="inner">
                <div className="text_blk">
                  <h2 style={{ color: colorCode }}>TEXT</h2>

                  <span>
                    Upload Word doc with text you’d like to test. Separate on lines.
                  </span>

                  <div className="upload_blk">
                    <label
                      type="button"
                      className="upload_btn"
                      style={{ backgroundColor: colorCode, cursor: 'pointer' }}
                    >
                      <input name='fileInput' value='' type='file' accept=".doc,.docx" onChange={handleFileChange} />
                      <div className="icon_blk">
                        <img src={upload} alt="upload" />
                      </div>
                      BROWSE FILE
                    </label>
                    {
                      selectFile &&
                      <div className="file_uploaded">
                        <i className="fa fa-solid fa-close close_icon" style={{ cursor: 'pointer' }} onClick={() => {
                          setSelectFile(null)
                        }} />
                        <div className="icon_blk">
                          <img src={uploadedFile} alt="file" />
                        </div>
                        <div className="file_name">
                          <p>{selectFile?.name}</p>
                          <div
                            className="d-flex align-items-center mt-2 "
                            style={{ width: "13.5rem", margin: "0 auto" }}
                          >
                            <progress value={uploadProgress} max="100" color={colorCode}></progress>
                            <span className="progress_value">{uploadProgress}%</span>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                  <span className="or">or</span>
                  <div className="input_blk">
                    <input
                      type="text"
                      placeholder="Enter your google doc link"
                      value={googleLink}
                      onChange={(e) => setGoogleLink(e.target.value)}
                      style={{ border: `.1rem solid ${colorCode}` }}
                    />
                  </div>
                  <span className="or">or</span>
                  <textarea
                    value={typeQuestions}
                    onChange={(e) => setTypeQuestions(e.target.value)}
                    style={{ border: `.1rem solid ${colorCode}` }}
                    className="text_area"
                    placeholder="Enter the text options you want us to test here"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="bottom">
              <Link
                to={routes.form.question3}
                type="button"
                className="back_btn"
                style={{ backgroundColor: "transparent", border: `.1rem solid ${colorCode}`, color: colorCode }}
              >
                <i class="fa-solid fa-arrow-left" style={{ color: colorCode }}></i>
                Back
              </Link>
              {
                type === 'textOnly' ?
                  <Link
                    onClick={handleGoToNext}
                    type="button"
                    className="next_btn"
                    style={{ backgroundColor: colorCode }}
                  >
                    Next
                    <i class="fa-solid fa-arrow-right"></i>
                  </Link>
                  :
                  <Link
                    onClick={handleGoToNext}
                    type="button"
                    className="next_btn"
                    style={{ backgroundColor: colorCode }}
                  >
                    Next
                    <i class="fa-solid fa-arrow-right"></i>
                  </Link>
              }
            </div>
          </section>
      }
    </>
  );
};

export default Text;
