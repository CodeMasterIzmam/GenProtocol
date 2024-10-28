import React from "react";
import "./Home.css";
import Money from "../../Components/MakeMoney/Money";
import laptop from "../../Components/Assets/Laptop.png";
import laptopimg from "../../Components/Assets/laptop-img.png";
import DHA from "../../Components/Assets/dha.png";
import haute from "../../Components/Assets/haute.png";
import ourhouse from "../../Components/Assets/ourhouse.png";
import gateway from "../../Components/Assets/gateway.png";
import gallary from "../../Components/Assets/gallary.png";
import brain from "../../Components/Assets/brain.png";
import bird from "../../Components/Assets/bird.png";
import intercell from "../../Components/Assets/intercell.png";
import sign from "../../Components/Assets/signatures.png";
import polka from "../../Components/Assets/polka.png";
import near from "../../Components/Assets/near.png";
import direct from "../../Components/Assets/direct-post.png";
import post2 from "../../Components/Assets/post2.png";
import karma from "../../Components/Assets/karma.png";
import premium from "../../Components/Assets/premium.png";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="head">
        <p className="p-speaker">
          <span className="speaker"> 📣 The waitlist is open, sign up now</span>
        </p>
        <h1 className="make-h">
          Make more money
          <br />
          with your music
        </h1>
        <p className="engage-p">
          Engage with fans, build your community and make more money all through
          one platform. Join the waitlist and use VINCI for free the first 6
          months.
        </p>
        <form action="" className="form">
          <input type="email" className="email-inp" placeholder="Email" />
          <button className="btn-join">Join the waitlist</button>
        </form>
        <div className="checks-div">
          <p className="p-get">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            Get early access
          </p>
          <p className="p-get">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            All data is yours
          </p>
          <p className="p-get">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            No hidden fees
          </p>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <div className="card">
            <div className="card-img-overlay">
              <video className="video" controls={false} autoPlay>
                <source
                  src="https://framerusercontent.com/modules/assets/J9DFBhDtnurb0ah1LDSRgNZzBGM~VZN-Z5ycmXgmfc4-blIw4DuISl_D4SJDFGirTl1Js4U.mp4"
                  type="video/ogg"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      <p className="collaborate-p">
        COLLABORATING WITH LEADERS IN CULTURE & TECH
      </p>
      <div className="marquee">
        <Marquee className="marquee">
          <img className="marquee-img" src={brain} alt="" />
          <img className="marquee-img" src={haute} alt="" />
          <img className="marquee-img" src={[polka]} alt="" />
          <img className="marquee-img" src={ourhouse} alt="" />
          <img className="marquee-img" src={near} alt="" />
          <img className="marquee-img" src={intercell} alt="" />
          <img className="marquee-img" src={gateway} alt="" />
          <img className="marquee-img" src={DHA} alt="" />
          <img className="marquee-img" src={sign} alt="" />
          <img className="marquee-img" src={gallary} alt="" />
          <img className="marquee-img" src={bird} alt="" />
        </Marquee>
      </div>
      <div className="containers-div">
        <div className="container container2">
          <h3 className="h-empowering">
            Empowering creators
            <br />
            with the VINCI Suite
          </h3>
          <p className="p-with">
            With VINCI, you can take your fan engagement to the next level,
            boost loyalty, and grow your career.
          </p>
          <img className="laptopimg" src={laptopimg} alt="" />
        </div>
        <div className="container container3">
          <h3 className="h-empowering">
            Tech and
            <br />
            culture events
          </h3>
          <p className="p-with">
            The benefits of blockchain & web3 for events & brands: cutting
            costs, new revenue streams, loyalty programs, reducing fraud and new
            engagement experience with your audience & community.
          </p>
        </div>
      </div>
      <div className="welcome">
        <div className="h-welcome-div">
          <h3 className="welcome3-h">Welcome to the VINCI Suite</h3>
        </div>
        <h1 className="h-connect">
          Connect with your
          <br />
          audience in new ways
        </h1>
      </div>
      <div className="containers-div">
        <div className="container container4">
          <h3 className="h-posts">Posts content with direct reach</h3>
          <p className="p-direct">
            Direct messaging is the perfect way to communicate with your
            followers, customers, and community
          </p>
          <div className="d-flex justify-content-center">
            <img className="direct-img" src={direct} alt="" />
          </div>
        </div>
        <div className="container container5">
          <h3 className="h-posts">
            Setup your store
            <br />
            in seconds
          </h3>
          <p className="p-direct">
            Start selling online in seconds! With our intuitive platform,
            setting up your own online store is easy and quick.
          </p>
          <div className="d-flex justify-content-center">
            <img className="direct-img" src={post2} alt="" />
          </div>
        </div>
      </div>
      <div className="containers-div2">
        <div className="container container5">
          <h3 className="h-posts">
            Music, project files,
            <br /> you name it
          </h3>
          <p className="p-direct">
            Monetize your music and project files like never before. Sell
            directly to your fans and customers with a secure and easy-to-use
            platform.
          </p>
          <div className="d-flex justify-content-center">
            <img className="direct-img" src={karma} alt="" />
          </div>
        </div>
        <div className="container container6">
          <h3 className="h-posts">
            Subscription <br />
            based access
          </h3>
          <p className="p-direct">
            Direct messaging is the perfect way to communicate with your
            followers, customers, and community
          </p>
          <div className="d-flex justify-content-center">
            <img className="direct-img" src={premium} alt="" />
          </div>
        </div>
      </div>
      <Money />
    </div>
  );
};

export default Home;
