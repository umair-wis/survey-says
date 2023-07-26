import React, { useCallback, useEffect, useState } from "react";
import men from "../../assets/images/men.jpg";
import women from "../../assets/images/women.jpg";
import mixed from "../../assets/images/mixed.jpg";
import image from "../../assets/images/image.jpg";
import text from "../../assets/images/text.jpg";
import both from "../../assets/images/both.jpg";
import dummyImage from "../../assets/images/dummyImage.jpg";
import cardImage from "../../assets/images/dummyImage.png";

import "./images.scss";
import { Link, Navigate } from "react-router-dom";
import routes from "../../config/routes";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import axios from "axios";

const Images = () => {

  // const colorCodeToParse = localStorage.getItem('colorCode');
  // const colorCode = colorCodeToParse ? JSON.parse(colorCodeToParse) : colorCodeToParse;

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

  const handleDragOver = (e) => {
    e.preventDefault();
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

  const areAllImagesUploaded = images?.every((image) => image.progress === 100);

  if (goToNext) {
    localStorage.setItem('uploaded-images', JSON.stringify(images));
    return <Navigate to={routes.form.uploadedImages} />
  }


  return (
    <>
      <section id="images">
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
              // onDrop={handleDrop}
              // onDragOver={handleDragOver}
              >
                <input {...getInputProps()} accept="image/*" />

                <div className="img_blk">
                  <img src={dummyImage} alt="" />
                </div>
                <span
                  className="drag_text"
                  style={{ color: colorCode }}
                >
                  Drag & Drop
                </span>
                <p>
                  If you would like to specify the images you'd like to compare
                  for each question, drag them to questions below
                </p>
              </div>

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
                  onClick={() => setGoToNext(true)}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Images;
