import React from "react";
import "./Contact.css";
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">East to Contact us</span>
          <span className="secondaryText">Always redy to help by providing services</span>
          <div className="flexColStart contactModes">
          {/* first row */}
          <div className="flexStart row">
            <div className="flexColCenter mode">
          <div className="flexStart">
          <div className="flexCenter icon">
            <MdCall size={25}></MdCall>
            </div>
            <div className="flexColStart detail">
                <span className="primaryText">Call</span>
                <span className="secondaryText">021348981</span>
            </div>
          </div>
          <div className="flexCenter button">
            Call Now
          </div>
          </div>

          {/* second mode */}
          <div className="flexStart row">
          <div className="flexColCenter mode">
          <div className="flexStart">
          <div className="flexCenter icon">
            <BsFillChatDotsFill size={25} />
            </div>
            <div className="flexColStart detail">
                <span className="primaryText">Chat</span>
                <span className="secondaryText">021348981</span>
            </div>
          </div>
          <div className="flexCenter button">
            Chat Now
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>

        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
