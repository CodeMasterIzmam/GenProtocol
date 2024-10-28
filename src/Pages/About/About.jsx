import React from "react";
import "./About.css";
import Slider from "react-slick";
import Money from "../../Components/MakeMoney/Money";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { Button, Modal } from 'antd';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="about">
      <div className="head">
        <p className="p-speaker">
          <span className="speaker"> 📣 The waitlist is open, sign up now</span>
        </p>
        <h1 className="h-welcome1">
          Welcome to VINCI,
          <br />a platform for creators
        </h1>
        <div className="unlock-div">
          <p className="p-unlock">
            Unlock your creative potential and showcase your work on a platform
            designed for creators. Join a vibrant community of creators and take
            your career to the next level.
          </p>
        </div>
      </div>
      <div className="slider-div">
        <Marquee className="marquee" direction="right">
          <img
            className="marquee-img"
            src="https://framerusercontent.com/images/BuA2Ugj9fmWLiSee6DYwIIUeQo.jpg"
            alt=""
          />
          <img
            className="marquee-img"
            src="https://framerusercontent.com/images/68kDayjSMeQYs4hf1Fa56EA6g.jpg"
            alt=""
          />
          <img
            className="marquee-img"
            src="	https://framerusercontent.com/images/MPHLSC0rC2cirPTBpAOZQFuEXw.jpg"
            alt=""
          />
        </Marquee>
        <Marquee className="marquee2">
          <img
            className="marquee-img"
            src="https://framerusercontent.com/images/6n0wuCyxsaLSLSku6nn13Nd0TPg.jpg"
            alt=""
          />
          <img
            className="marquee-img"
            src="	https://framerusercontent.com/images/UekIguai8fyPbY13xVj8Cjxu8JE.jpg"
            alt=""
          />
          <img
            className="marquee-img"
            src="https://framerusercontent.com/images/P2FiKWALQIJoTbol5DNLkMKu1w.jpg"
            alt=""
          />
        </Marquee>
      </div>
      <div className="community">
        <h1 className="h-welcome">Community events</h1>
        <div className="unlock-div">
          <p className="p-unlock2">
            Our first event was one for the books. We were thrilled to see so
            many new faces and reconnect with our longtime supporters. Your
            participation and engagement made our vision a reality and inspired
            us to keep innovating and pushing boundaries.
          </p>
        </div>
      </div>
      <div className="video-main-div">
        <div className="video-div">
          <div className="watch-btn">
            <Button type="primary" onClick={showModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-play-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
            </svg>Watch the video
            </Button>
            <Modal
              title=""
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <video controls autoPlay className="video" style={{width:'100%', height:"100%",borderRadius: "10px"}}>
                <source src="https://youtu.be/ondbs02lPSY" />
              </video>
            </Modal>
          </div>
        </div>
      </div>
      <Money />
    </div>
  );
};

export default About;
