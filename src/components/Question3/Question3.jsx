import React, { useEffect, useState } from "react";
import men from "../../assets/images/men.jpg";
import women from "../../assets/images/women.jpg";
import mixed from "../../assets/images/mixed.jpg";
import image from "../../assets/images/image.jpg";
import text from "../../assets/images/text.jpg";
import both from "../../assets/images/both.jpg";

import "./question3.scss";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import ImageOnly from "../common/SVGs/ImageOnly";
import TextOnly from "../common/SVGs/TextOnly";
import TextAndImage from "../common/SVGs/TextAndImage";
import { toast } from "react-toastify";

const Question3 = () => {
  // const colorCodeToParse = localStorage.getItem("colorCode");
  // const colorCode = colorCodeToParse
  //   ? JSON.parse(colorCodeToParse)
  //   : colorCodeToParse;

  const colorCode = '#1686F6';

  const [type, setType] = useState('');

  useEffect(() => {
    if(type !== '') {
      localStorage.setItem('type', JSON.stringify(type))
    } 
  }, [type])

  return (
    <>
      <section id="question3">
        <div className="site_container">
          <div className="inner">
            <h2 style={{ color: colorCode }}>Q3</h2>
            <span>Do you want to test images only, text only, or both?</span>

            <div className="card_blk">
              <div className="card" style={{border: `.2rem solid ${type === 'imageOnly' ? colorCode : 'rgb(215, 221, 228)'}`, cursor: 'pointer'}} onClick={() => setType('imageOnly')}>
                <div className="checkbox">
                  <label class="container">
                    <input type="radio" name="type" value='imageOnly' onChange={(e) => setType(e.target.value)} checked={type === 'imageOnly'}/>
                    <span class="checkmark" style={{backgroundColor: `${type === 'imageOnly' ? colorCode : ''}`}}></span>
                  </label>
                </div>
                <div className="card_body">
                  <div className="img_blk">
                    <ImageOnly color={type === 'imageOnly' ? colorCode : '#E0E0E0'}/>
                  </div>
                  <h5>Image Only</h5>
                </div>
              </div>
              <div className="card" style={{border: `.2rem solid ${type === 'textOnly' ? colorCode : 'rgb(215, 221, 228)'}`, cursor: 'pointer'}} onClick={() => setType('textOnly')}>
                <div className="checkbox">
                  <label class="container">
                    <input type="radio" name="type" value='textOnly' onChange={(e) => setType(e.target.value)} checked={type === 'textOnly'}/>
                    <span class="checkmark" style={{backgroundColor: `${type === 'textOnly' ? colorCode : ''}`}}></span>
                  </label>
                </div>
                <div className="card_body">
                  <div className="img_blk">
                    <TextOnly color={type === 'textOnly' ? colorCode : '#E0E0E0'}/>
                  </div>
                  <h5>Text Only</h5>
                </div>
              </div>
              <div className="card" style={{border: `.2rem solid ${type === 'both' ? colorCode : 'rgb(215, 221, 228)'}`, cursor: 'pointer'}} onClick={() => setType('both')}>
                <div className="checkbox">
                  <label class="container">
                    <input type="radio" name="type" value='both' onChange={(e) => setType(e.target.value)} checked={type === 'both'}/>
                    <span class="checkmark" style={{backgroundColor: `${type === 'both' ? colorCode : ''}`}}></span>
                  </label>
                </div>
                <div className="card_body">
                  <div className="img_blk">
                    <TextAndImage color={type === 'both' ? colorCode : '#E0E0E0'}/>
                  </div>
                  <h5>Both</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <Link
            to={routes.form.question2}
            type="button"
            className="back_btn"
            style={{ backgroundColor: "transparent", border: `.1rem solid ${colorCode}`, color: colorCode }}
          >
            <i class="fa-solid fa-arrow-left" style={{ color: colorCode }}></i>
            Back
          </Link>
          {
            !type ?
              <Link
                type="button"
                className="next_btn"
                style={{ backgroundColor: colorCode }}
                onClick={() => toast.error('Select the type to test images.')}
              >
                Next
                <i class="fa-solid fa-arrow-right"></i>
              </Link>
              :
              type === 'imageOnly' ?
                <Link
                  to={routes.form.images}
                  type="button"
                  className="next_btn"
                  style={{ backgroundColor: colorCode }}
                >
                  Next
                  <i class="fa-solid fa-arrow-right"></i>
                </Link>
                :
                type === 'textOnly' ?
                  <Link
                    to={routes.form.text}
                    type="button"
                    className="next_btn"
                    style={{ backgroundColor: colorCode }}
                  >
                    Next
                    <i class="fa-solid fa-arrow-right"></i>
                  </Link>
                  :
                  <Link
                    to={routes.form.text}
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
    </>
  );
};

export default Question3;
