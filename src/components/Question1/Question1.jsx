import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import routes from "../../config/routes";
import "./question1.scss";
import { toast } from "react-toastify";

const Question1 = () => {

  // const colorCodeToParse = localStorage.getItem('colorCode');
  // const colorCode = colorCodeToParse ? JSON.parse(colorCodeToParse) : colorCodeToParse;

  const colorCode = '#1686F6';

  const [goToBack, setGoToBack] = useState(false);
  const [respondents, setRespondents] = useState('');
  const [goToNext, setGoToNext] = useState(false);

  const handleKeyDown = (e) => {
    const key = e.key;
    if (key === 'Enter') {
      handleNext();
    }
    if(respondents === '' && key === 'Backspace') {
      setGoToBack(true);
    }
    if (
      !/[\d.]/.test(key) &&
      key !== 'Backspace' &&
      key !== 'Delete' &&
      key !== 'Tab' &&
      key !== 'Enter'
    ) {
      e.preventDefault();
    }

  };

  const handleNext = (e) => {

    if (respondents === '') {
      toast.error('Please enter the number of respondents')
    }
    else if (Number(respondents) <= 0) {
      toast.error('There should be atleast one respondent.')
    }
    else {
      localStorage.setItem('no-of-respondents', JSON.stringify(respondents))
      setGoToNext(true);
    }
  }

  if(goToBack) {
    return <Navigate to={routes.home}/>
  }

  if (goToNext) {
    return <Navigate to={routes.form.question2} />
  }

  return (
    <>
      <section id="question1">
        <div className="site_container">
          <div className="inner">
            <div className="text_blk">
              <h2 style={{ color: colorCode }}>Q1</h2>
              <p>
                How many respondents would you like? It is $2.50 per respondent.
              </p>
              <span>You’ll be able to ask up to 10 questions in total.</span>
              <div className="input_blk" onSubmit={handleNext}>
                <input
                  type="text"
                  value={respondents}
                  onChange={(e) => setRespondents(e.target.value)}
                  style={{ borderBottom: `.1rem solid ${colorCode}` }}
                  placeholder="Type the number of respondents here"
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          {/* <Link
            to={routes.form.colorGuidance}
            type="button"
            className="back_btn"
            style={{ backgroundColor: "transparent", border: `.1rem solid ${colorCode}`, color: colorCode }}
          >
            <i class="fa-solid fa-arrow-left" style={{ color: colorCode }}></i>
            Back
          </Link> */}
          {/* <div
            className="test"
            tabIndex="0"
            onKeyDown={handleEnter}
            style={{ outline: 'none', width: '100%', maxWidth: '15rem' }} // Optional: To remove the focus outline
          > */}
            <Link
              onClick={handleNext}
              // onKeyPress={handleEnter}
              // onKeyDown={handleEnter}
              type="button"
              className="next_btn"
              style={{ backgroundColor: colorCode }}
            >
              Next
              <i class="fa-solid fa-arrow-right"></i>
            </Link>
          {/* </div> */}
        </div>
      </section >
    </>
  );
};

export default Question1;
