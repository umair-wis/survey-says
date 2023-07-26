import React, { useState } from "react";
import men from "../../assets/images/men.jpg";
import women from "../../assets/images/women.jpg";
import mixed from "../../assets/images/mixed.jpg";

import "./question2.scss";
import { Link, Navigate } from "react-router-dom";
import routes from "../../config/routes";
import MenSVG from "../common/SVGs/Men";
import WomenSVG from "../common/SVGs/Women";
import MixSVG from "../common/SVGs/Mixed";
import { toast } from "react-toastify";

const Question2 = () => {
  // const colorCodeToParse = localStorage.getItem("colorCode");
  // const colorCode = colorCodeToParse
  //   ? JSON.parse(colorCodeToParse)
  //   : colorCodeToParse;

  const colorCode = '#1686F6';


  const [gender, setGender] = useState('');
  const [goToNext, setGoToNext] = useState(false);

  const handleGoToNext = () => {
    setGoToNext(true);
    localStorage.setItem('gender', JSON.stringify(gender));
  }

  if(goToNext) {
    return <Navigate to={routes.form.question3}/>
  }

  return (
    <>
      <section id="question2">
        <div className="site_container">
          <div className="inner">
            <h2 style={{ color: colorCode }}>Q2</h2>
            <span>What gender of respondents would you like?</span>

            <div className="card_blk">
              <div className="card" style={{border: `.2rem solid ${gender === 'men' ? colorCode : 'rgb(215, 221, 228)'}`, cursor: 'pointer'}} onClick={() => setGender('men')}>
                <div className="checkbox">
                  <label class="container">
                    <input type="radio" name="gender" value='men' onChange={(e) => setGender(e.target.value)} checked={gender === 'men'}/>
                    <span class="checkmark" style={{backgroundColor: `${gender === 'men' ? colorCode : ''}`}}></span>
                  </label>
                </div>
                <div className="card_body">
                  <h5>Men</h5>
                  <div className="img_blk">
                    <MenSVG color={colorCode} />
                  </div>
                </div>
              </div>
              <div className="card" style={{border: `.2rem solid ${gender === 'women' ? colorCode : 'rgb(215, 221, 228)'}`, cursor: 'pointer'}} onClick={() => setGender('women')}>
                <div className="checkbox">
                  <label class="container">
                    <input type="radio" name="gender" value='women' onChange={(e) => setGender(e.target.value)} checked={gender === 'women'}/>
                    <span class="checkmark" style={{backgroundColor: `${gender === 'women' ? colorCode : ''}`}}></span>
                  </label>
                </div>
                <div className="card_body">
                  <h5>Women</h5>
                  <div className="img_blk">
                    <WomenSVG color={colorCode} />
                  </div>
                </div>
              </div>
              <div className="card" style={{border: `.2rem solid ${gender === 'mixed' ? colorCode : 'rgb(215, 221, 228)'}`, cursor: 'pointer'}} onClick={() => setGender('mixed')}>
                <div className="checkbox">
                  <label class="container">
                    <input type="radio" name="gender" value='mixed' onChange={(e) => setGender(e.target.value)} checked={gender === 'mixed'}/>
                    <span class="checkmark" style={{backgroundColor: `${gender === 'mixed' ? colorCode : ''}`}}></span>
                  </label>
                </div>
                <div className="card_body">
                  <h5>Mixed</h5>
                  <div className="img_blk">
                    <MixSVG color={colorCode} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <Link
            to={routes.form.question1}
            type="button"
            className="back_btn"
            style={{ backgroundColor: "transparent", border: `.1rem solid ${colorCode}`, color: colorCode }}
          >
            <i class="fa-solid fa-arrow-left" style={{ color: colorCode }}></i>
            Back
          </Link>
          {
            !gender ?
              <Link
                // to={routes.form.question3}
                type="button"
                className="next_btn"
                style={{ backgroundColor: colorCode }}
                onClick={() => toast.error('Select the respondents gender to continue.')}
              >
                Next
                <i class="fa-solid fa-arrow-right"></i>
              </Link>
              :
              <Link
                type="button"
                className="next_btn"
                onClick={handleGoToNext}
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

export default Question2;
