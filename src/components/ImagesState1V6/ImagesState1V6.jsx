import React, { useCallback, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import "./ImagesState1V6.scss";
import axios from "axios";
import { toast } from "react-toastify";
import routes from "../../config/routes";
import { useDropzone } from "react-dropzone";
import QuestionSection from "./QuestionSection";
import { RiseLoader } from "react-spinners";

const ImagesState1V6 = () => {
  const colorCode = '#1686F6';

  const [hexValue, setHexValue] = useState('');

  const [isUploading, setIsUploading] = useState(false);
  const [goToNext, setGoToNext] = useState(false);

  const convertToRgb = (value) => {

    var rgbHex = value.match(/.{1,2}/g);
    var rgb = [
      parseInt(rgbHex[0], 16),
      parseInt(rgbHex[1], 16),
      parseInt(rgbHex[2], 16)
    ];
    setHexValue(rgb);
    return rgb;
  };

  useEffect(() => {
    const value = colorCode?.replace('#', '');
    convertToRgb(value)
  }, [colorCode])

  const imageListToParse = localStorage.getItem('uploaded-images');
  const imageList = imageListToParse ? JSON.parse(imageListToParse) : [];

  const [images, setImages] = useState(imageList || []);

  // useEffect(() => {
  //   setImages(imageList)
  // }, [])

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter((file) => file.type.startsWith('image/'));
    setImages((prevImages) => [...prevImages, ...imageFiles]);
  };


  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    if (images?.length > 2) {
      toast.error('At max 60 images can be uploaded.');
      setImages(images.splice(60))
    }
    else {
      const updatedImages = acceptedFiles.map((file) => ({
        file,
        progress: 0,
        preview: URL.createObjectURL(file),
        // preview: new Blob(file),

      }));
      await uploadImages(acceptedFiles);
      setImages((prevImages) => [...prevImages, ...updatedImages]);
    }
  }, [images]);


  const uploadImages = async (files) => {
    setIsUploading(false);

    const uploadPromises = files.map((file, index) => {
      const formData = new FormData();
      formData.append('file', file);

      axios.post('https://api-form.surveysays.xyz/media', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          updateImageProgress(file, progress);
        },
      })
        .then((response) => {
          const url = response?.data?.url;
          updateImageProgress(file, 100, url);
          toast.success(`Image ${index + 1} uploaded.`);
          setIsUploading(true);

        })
    });

    try {
      await Promise.all(uploadPromises);
      // toast.success('All images are uploaded successfully.');
    } catch (error) {
      toast.error('Error uploading images.');
    }
  };

  const updateImageProgress = (file, progress, url) => {
    setImages((prevImages) =>
      prevImages.map((image) => {
        if (image.file === file) {
          return { ...image, progress, url };
        }
        return image;
      })
    );
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop, accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/jpg': []
    },
    maxFiles: 60
  });

  const [addQuestion, setAddQuestion] = useState([]);
  const [widgets, setWidgets] = useState([])

  const [redirect, setRedirect] = useState(false);

  const [allImagesCheck, setAllImagesCheck] = useState(false);

  const handleAddQuestion = () => {
    const newQuestion = { id: addQuestion.length + 1, value: [] };
    setAddQuestion((prev) => [...prev, newQuestion]);
    setWidgets((prevWidgets) => [...prevWidgets, []]);
  };

  const handleOnDrag = (e, widgetType, index) => {
    e.dataTransfer.setData('widgetType', JSON.stringify(widgetType));
  }

  const handleOnDrop = (e, index) => {
    const section = addQuestion[index];
    const widgetType = JSON.parse(e.dataTransfer.getData('widgetType'));

    if (section.value.length >= 6) {
      toast.error('Maximum 6 items allowed in a section.');
      return;
    }
    setWidgets([...widgets, widgetType])

    setAddQuestion((prevSections) => {
      const newSections = [...prevSections];
      newSections[index].value = [...newSections[index].value, widgetType];
      return newSections;
    });
    setImages((prevImages) => prevImages.filter((image) => image.file.path !== widgetType.file.path));

  }

  const handleRemoveSectionImage = (sectionIndex, widgetIndex) => {
    setAddQuestion((prevSections) =>
      prevSections.map((section, index) => {
        if (index === sectionIndex) {
          const updatedValue = section.value.filter((_, i) => i !== widgetIndex);
          return { ...section, value: updatedValue };
        }
        return section;
      })
    );
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const areAllImagesUploaded = images?.every((image) => image.progress === 100);

  const handleImagesData = (e) => {
    e.preventDefault();
    setAllImagesCheck(true);
    const respondents = JSON.parse(localStorage.getItem('no-of-respondents'));

    const gender = JSON.parse(localStorage.getItem('gender'));
    const type = JSON.parse(localStorage.getItem('type'));

    const question3Data = JSON.parse(localStorage.getItem('question3-data'));

    const urlList = images?.map((item) => item.url);

    const convertedData = addQuestion
      .filter((section) => section.value.length > 0)
      .map((section) => ({
        images: section.value.map((widget) => widget.url)
      }));

    const payload = {
      attendant: Number(respondents),
      gender: gender,
      type: type,
      description: question3Data,
      imagesList: urlList,
      images: convertedData
    }

    axios.post('https://api-form.surveysays.xyz/Survey/createSurvey', payload)
      .then((response) => {
        setRedirect(true);
        setAllImagesCheck(false);
        toast.success('Survey Saved.');
        localStorage?.setItem('survey-data', JSON.stringify(response?.data?.data))
      })
      .catch((err) => {
        toast.error('Could not save survey. Try again.')
        setRedirect(false);
        setAllImagesCheck(false);
        console.log({ err })
      })
  }

  if (redirect) {
    return <Navigate to={routes.form.thankYou} />
  }

  return (
    <>
      {
        allImagesCheck ?
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
          <section id="ImagesState1V6">
            <div className="site_container">
              <div className="row">
                <div className="col-md-6">
                  <h2>Upload Images.</h2>
                  <span>Upload the images you'd like to test (maximum of 60).</span>

                  {
                    images?.length >= 60 ?
                      <div
                        className='upload_image'
                        style={{
                          backgroundColor: `rgb(${hexValue[0]},${hexValue[1]},${hexValue[2]}, 0.1)`,
                          borderColor: colorCode,
                          cursor: 'pointer'
                        }}
                      >
                        <span className="drag_text" style={{ color: colorCode }}>
                          You have uploaded 60 images
                        </span>
                        <div className="card_blk">

                          {
                            images?.map((item, index) => {
                              return (
                                <div
                                  className="card"
                                  style={{ backgroundColor: `rgb(${hexValue[0]},${hexValue[1]},${hexValue[2]}, 0.1)`, border: `0.2rem solid rgb(${hexValue[0]},${hexValue[1]},${hexValue[2]})` }}
                                >
                                  <div className="card_head">
                                    <span className="count">{index + 1}</span>
                                    <i className="fa fa-solid fa-close" onClick={() => handleRemoveImage(index)} />
                                  </div>
                                  <div className="card_body">
                                    <div className="img_blk">
                                      <img src={item.preview} alt={`image ${index + 1}`} />
                                    </div>
                                    <div
                                      className="d-flex align-items-center mb-3 "
                                      style={{ width: "13.5rem", margin: "0 auto" }}
                                    >
                                      {
                                        item?.progress < 100 &&
                                        <>
                                          <progress
                                            value={item.progress}
                                            max="100"
                                            style={{ backgroundColor: 'pruple' }}
                                          />
                                          <span className="progress_value">{item.progress}%</span>
                                        </>
                                      }
                                    </div>
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                      :
                      <div
                        className={` ${isDragActive ? 'active' : ''}upload_image`}
                        style={{
                          backgroundColor: `rgb(${hexValue[0]},${hexValue[1]},${hexValue[2]}, 0.1)`,
                          borderColor: colorCode,
                          cursor: 'pointer'
                        }}
                      >
                        <input {...getInputProps()}  {...getRootProps()} />
                        <span  {...getRootProps()} className="drag_text" style={{ color: colorCode }}>
                          Upload or Drag & Drop All of Your Photos Here
                        </span>
                        <button
                          {...getRootProps()}
                          type="button"
                          className="upload_btn"
                          style={{ backgroundColor: "rgba(22, 134, 252, 1)" }}
                        >
                          <i className="fa fa-solid fa-plus " />
                          Upload photos
                        </button>
                        <div className="card_blk">

                          {
                            images?.map((item, index) => {
                              return (
                                <div
                                  draggable
                                  className="card"
                                  onDragStart={(e) => handleOnDrag(e, item)}
                                  style={{ backgroundColor: `rgb(${hexValue[0]},${hexValue[1]},${hexValue[2]}, 0.1)`, border: `0.2rem solid rgb(${hexValue[0]},${hexValue[1]},${hexValue[2]})` }}
                                >
                                  <div className="card_head">
                                    <span className="count">{index + 1}</span>
                                    <i className="fa fa-solid fa-close" style={{ cursor: 'pointer' }} onClick={() => handleRemoveImage(index)} />
                                  </div>
                                  <div className="card_body">
                                    <div className="img_blk">
                                      <img src={item.preview} alt={`image ${index + 1}`} />
                                    </div>
                                    <div
                                      className="d-flex align-items-center mb-3 "
                                      style={{ width: "13.5rem", margin: "0 auto" }}
                                    >
                                      {
                                        item?.progress < 100 &&
                                        <>
                                          <progress
                                            value={item.progress}
                                            max="100"
                                            style={{ backgroundColor: 'pruple' }}
                                          />
                                          <span className="progress_value">{item.progress}%</span>
                                        </>
                                      }
                                    </div>
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                  }
                </div>
                <div className="col-md-6 mt-md-0 mt-sm-5">
                  <h2>Specify the images for each question.</h2>
                  <span>
                    If you want to specify the images for each question, drag the
                    photos to the questions below. Otherwise, we will create
                    questions based on your uploaded photos.
                  </span>
                  {
                    addQuestion.map((item, index) => {
                      return (
                        <>
                          <h3 style={{ color: "rgba(22, 134, 252, 1)" }}>Question # {index + 1}</h3>
                          <div
                            onDrop={(e) => handleOnDrop(e, index)}
                            onDragOver={(e) => handleDragOver(e, item, index)}
                            className="question_blk"
                            style={{
                              border: ".2rem dashed rgba(22, 134, 252, 1)",
                              backgroundColor: "rgba(242, 248, 255, 1)",
                            }}
                          >
                            {
                              item?.value?.map((widget, indexs) => {
                                return (
                                  <>
                                    <div
                                      className="image_card"
                                      style={{ border: ".2rem dashed rgba(22, 134, 252, 1)" }}
                                    >
                                      {
                                        item?.value?.length !== 0 &&
                                        <>
                                          <div className="card_head">
                                            <span className="count">{indexs + 1}</span>
                                            <i className="fa fa-solid fa-close" style={{ cursor: 'pointer' }} onClick={() => handleRemoveSectionImage(index, indexs)} />
                                          </div>
                                          <div className="card_body">
                                            <div className="img_blk">
                                              <img src={widget.preview} alt={`image ${indexs + 1}`} />
                                            </div>
                                          </div>
                                        </>
                                      }
                                    </div>
                                  </>
                                )
                              })
                            }
                            {
                              item?.value?.length === 0 && <p style={{ color: "rgba(22, 134, 252, 1)" }}>
                                Drag and drop photos to the question
                              </p>
                            }
                          </div>
                        </>
                      )
                    })
                  }
                  {addQuestion.length < 10 &&
                    <button
                      type="button"
                      className="question_btn"
                      style={{ backgroundColor: colorCode }}
                      onClick={handleAddQuestion}
                    >
                      <i className="fa fa-solid fa-add" />
                      Add Question
                    </button>
                  }

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
              {areAllImagesUploaded && isUploading && images?.length !== 0 ?
                <Link
                  // to={routes.form.uploadImage}
                  onClick={handleImagesData}
                  type="button"
                  className="next_btn"
                  style={{ backgroundColor: colorCode }}
                >
                  Next
                  <i class="fa-solid fa-arrow-right"></i>
                </Link>
                :
                <Link
                  type="button"
                  onClick={() => toast.error('Please upload images first.')}
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

export default ImagesState1V6;
