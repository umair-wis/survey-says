import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import "./colorGuidance.scss";
import { ColorGuideItems } from "../../constants/ColorGuides";

const ColorGuidance = () => {
  useEffect(() => {
    localStorage.clear();
  }, [])
  return (
    <>
      <section id="color_guidance">
        <div className="site_container">
          <h2>SurveySays Color Guidance</h2>
          <div className="color_blk">
            {
              ColorGuideItems.map((item) => {
                return (
                  <div className="color_card" onClick={() => localStorage.setItem('colorCode', JSON.stringify(item.bgColor))}>
                    <Link to={routes.form.welcome}>
                      <div
                        className="color_pallet"
                        style={{ backgroundColor: item.bgColor }}
                      ></div>
                      <h4>{item.name}</h4>
                      <span>{item.colorCode}</span>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default ColorGuidance;
