import React from "react";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import "./thankyou.scss";
import { toast } from "react-toastify";
const ThankYou = () => {
  // const colorCodeToParse = localStorage.getItem("colorCode");
  // const colorCode = colorCodeToParse
  //   ? JSON.parse(colorCodeToParse)
  //   : colorCodeToParse;

  const colorCode = '#1686F6';


  const surveryDataToParse = localStorage.getItem('survey-data');
  const surveyData = surveryDataToParse ? JSON.parse(surveryDataToParse) : surveryDataToParse;

  return (
    <>
      <section id="thankyou">
        <div className="site_container">
          <div className="inner">
            <div className="text_blk">
              <h2 style={{ color: colorCode }}>Thank You</h2>
              <b className="price"> Your Total is ${surveyData?.amount}</b>{" "}
              <p className="p1" style={{ maxWidth: "50.4rem", width: "100%" }}>
                Your total price is the ${surveyData?.amount} initial fee plus a per respondent
                fee. Your survey will include {surveyData?.type} question type/types and {surveyData?.gender} gender ($2.50 per
                respondent).
              </p>
              <p className="p2">
                After purchase, we will email you with a preview of your survey
                to approve within 3 business days and afterwards will launch
                your survey. You will receive your results three days following
                approval.
              </p>
              <p className="p3" style={{ maxWidth: "50.4rem", width: "100%" }}>
                Your credit card will be charged: $[{surveyData?.amount}]. <br /> We never store
                your card number or CVC number
              </p>
            </div>
            <div className="bottom">
              <Link
                // to={routes.form.question1}
                type="button"
                className="back_btn"
                style={{ backgroundColor: "transparent", border: `.1rem solid ${colorCode}`, color: colorCode }}
              >
                <i class="fa-solid fa-arrow-left" style={{ color: colorCode }}></i>
                Back
              </Link>
              <Link
                // onClick={() => toast.info('Stripe will be added soon.')}
                to='/stripe'
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

export default ThankYou;
