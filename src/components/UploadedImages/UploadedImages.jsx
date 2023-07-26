import React, { useCallback, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Slider from "react-slick";

import dummyImage from "../../assets/images/dummyImage.jpg";
import routes from "../../config/routes";

import "./UploadedImages.scss";
import { toast } from "react-toastify";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { RiseLoader } from "react-spinners";

const UploadedImages = () => {
  // const colorCodeToParse = localStorage.getItem("colorCode");
  // const colorCode = colorCodeToParse
  //   ? JSON.parse(colorCodeToParse)
  //   : colorCodeToParse;

  const colorCode = '#1686F6';

  const imageListToParse = localStorage.getItem('uploaded-images');
  const imageList = imageListToParse ? JSON.parse(imageListToParse) : [];

  const [hexValue, setHexValue] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [images, setImages] = useState([]);

  const [redirect, setRedirect] = useState(false);

  const [allImagesCheck, setAllImagesCheck] = useState(false);

  useEffect(() => {
    setImages(imageList)
  }, [])

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

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const onDrop = useCallback((acceptedFiles) => {
    const updatedImages = acceptedFiles.map((file) => ({
      file,
      progress: 0,
      preview: URL.createObjectURL(file),

    }));
    setImages((prevImages) => [...prevImages, ...updatedImages]);
    uploadImages(acceptedFiles);
  }, []);

  const uploadImages = async (files) => {
    setIsUploading(false);

    if (images?.length > 60) {
      toast.error('At max 60 images can be uploaded.');
      setImages([]);
      return;
    }

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

  const [addQuestion, setAddQuestion] = useState([]);
  const [widgets, setWidgets] = useState([])

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

  useEffect(() => {
    localStorage.setItem('uploaded-images', JSON.stringify(images));
  }, [images])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const areAllImagesUploaded = images?.every((image) => image.progress === 100);

  const settings = {
    dots: false,
    infinite: images?.length > 100,
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
          infinite: images?.length > 100,
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
      <section id="UploadedImages">
        <div className="site_container">
          <div className="inner">
            <div className="text_blk">
              <h2 style={{ color: colorCode }}>Images</h2>
              <span>Upload the Images You'd Like to Test (Maximum of 60).</span>
              <div
                {...getRootProps()} className={` ${isDragActive ? 'active' : ''}drag_file`}
                style={{
                  backgroundColor: `rgb(${hexValue[0]},${hexValue[1]},${hexValue[2]}, 0.1)`,
                  borderColor: colorCode,
                  cursor: 'pointer'
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
                {
                  images?.map((item, index) => {
                    return (
                      <div
                        draggable
                        onDragStart={(e) => handleOnDrag(e, item)}
                        className="slider_card"
                        style={{ backgroundColor: `rgb(${hexValue[0]},${hexValue[1]},${hexValue[2]}, 0.1)`, border: `.1rem solid ${colorCode}` }}
                      >
                        <i className="fa fa-solid fa-close" onClick={() => handleRemoveImage(index)} />
                        <div className="card_body" style={{ backgroundColor: `rgb(${hexValue[0]},${hexValue[1]},${hexValue[2]}, 0.1)`, border: `.1rem solid ${colorCode}` }}>
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
              </Slider>
              {addQuestion.map((item, index) => {
                return (
                  <div
                    onDrop={(e) => handleOnDrop(e, index)}
                    onDragOver={(e) => handleDragOver(e, item, index)}
                    className="card_blk mt-5"
                    style={{ backgroundColor: `rgb(${hexValue[0]},${hexValue[1]},${hexValue[2]}, 0.1)`, border: `.1rem solid ${colorCode}` }}
                    key={index}
                  >
                    <h4 style={{ color: colorCode }}>Q{index + 1}</h4>
                    {
                      item?.value?.length === 0 ?
                        <p>
                          <b style={{ color: colorCode }}>Drag & Drop </b>Photos for
                          Question #{index + 1}
                        </p>
                        :
                        item?.value?.map((widget, indexs) => {
                          return (
                            <div
                              className="card"
                              style={{ backgroundColor: `rgb(${hexValue[0]},${hexValue[1]},${hexValue[2]}, 0.1)`, border: `.1rem solid ${colorCode}` }}
                            >
                              <div className="card_head">
                                <span className="count">{indexs + 1}</span>
                                <i className="fa fa-solid fa-close" onClick={() => handleRemoveSectionImage(index, indexs)} />
                              </div>
                              <div className="card_body">
                                <div className="img_blk">
                                  <img src={widget.preview} alt={`image ${indexs + 1}`} />
                                </div>
                              </div>
                            </div>
                          )
                        })
                    }
                  </div>
                )
              })}
              <br />
              <button
                type="button"
                className="question_btn"
                style={{ backgroundColor: colorCode }}
                onClick={handleAddQuestion}
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
                style={{ backgroundColor: "transparent", border: `.1rem solid ${colorCode}`, color: colorCode }}
              >
                <i class="fa-solid fa-arrow-left" style={{ color: colorCode }}></i>
                Back
              </Link>
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
                  <>
                    {
                      areAllImagesUploaded && isUploading ?
                        <Link
                          // to={routes.form.thankYou}
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
                          // to={routes.form.thankYou}
                          onClick={() => toast.error('Images are uploading.')}
                          type="button"
                          className="next_btn"
                          style={{ backgroundColor: colorCode }}
                        >
                          Next
                          <i class="fa-solid fa-arrow-right"></i>
                        </Link>
                    }
                  </>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UploadedImages;
