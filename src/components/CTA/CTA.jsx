import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="ct-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Subsrcibe now and get attractive price quotes from us
          </span>
          <button className="button">
            <a href="mailto:raneemr05@hotmail.com">
                Get Started
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
