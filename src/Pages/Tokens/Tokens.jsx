import React from "react";
import "./Tokens.css";
import Money from "../../Components/MakeMoney/Money";
import key from "../../Components/Assets/key.png";
import vinci from "../../Components/Assets/vinci-circle.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Tokens = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="tokens">
      <div className="tokens-main">
        <div>
          <h1 className="utility">
            One utility token
            <br />
            to power the entire
            <br />
            VINCI ecosystem
          </h1>
        </div>
        <div className="novel-div">
          <p className="p-novel">
            Novel staking mechanisms provide superior experiences with VINCI
            products and services and ties the community to VINCI’s growth and
            innovation.
          </p>
        </div>
        <div className="btn-available-div">
          <button className="btn-available">
            <img
              width="29"
              height="29"
              src="https://framerusercontent.com/images/fOBN8LVmYWT98eDoNldbzjKIgus.png"
              alt=""
            />
            Available at Pancakeswap
          </button>
        </div>
        <p className="p-ca">CA: 0x5275e602238c85b204413116c1057aff5c60b282</p>
      </div>
      <div className="design-div">
        <div className="design-div-main">
          <div className="design-div1">
            <h3 className="design-h">
              Designed for a fair peer-to-peer economy.
            </h3>
            <p className="thevinci-p">
              The $VINCI token powers the VINCI ecosystem and provides the
              ability for our community (1) to engage with our products and
              services, (2) to obtain real-world value from a virtual asset, and
              (3) to stay connected with VINCI’s mission for the long run.
            </p>
          </div>
          <div>
            <h1 className="h15m">+$1.5M</h1>
            <p className="p-rise">RAISED VIA CROWDFUNDING</p>
            <h1 className="h50">+50%</h1>
            <p className="p-rise">OF CIRCULATING SUPPLY STAKED BEFORE LAUNCH</p>
            <h1 className="h1000">+1000</h1>
            <p className="p-rise">UNIQUE INVESTORS SUPPORTING OUR ECOSYSTEM</p>
          </div>
        </div>
      </div>
      <div className="design-div">
        <div className="industry-div">
          <div>
            <img className="vinci-img" src={vinci} alt="" />
          </div>
          <div>
            <h1 className="indus-h">
              The creative industries:
              <br />
              The future we want to create
            </h1>
            <p className="thevinci-p">
              VINCI's goal is to bring all stakeholders within the culture
              economy closer together, to enable direct interaction and value
              exchange. This becomes possible via the $VINCI token. Its utility
              is designed for all stakeholders to engage with our products,
              connect with other ecosystem participants, and link them with the
              success of VINCI’s long-term vision.
            </p>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card2">
                <img src={key} alt="" />
                <h1 className="h-access">Access to full VINCI experience</h1>
                <p className="p-staking">
                  Staking provides individuals and partners access to enhanced
                  product functionalities, additional services and special VINCI
                  experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card3">
                <p style={{ marginBottom: "0px" }}>
                  <span className="sp-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="white"
                      className="bi bi-suit-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                    </svg>
                  </span>
                </p>
                <h1 className="h-access">Creator-fan value exchange</h1>
                <p className="p-staking">
                  Special staking functionalities introduce new forms of
                  interaction and value exchange between creators and their
                  communities.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card3">
                <p style={{ marginBottom: "0px" }}>
                  <span className="sp-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="white"
                      className="bi bi-suit-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                    </svg>
                  </span>
                </p>
                <h1 className="h-access">Creator-fan value exchange</h1>
                <p className="p-staking">
                  Special staking functionalities introduce new forms of
                  interaction and value exchange between creators and their
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="creative">
        <h1 className="create-head">
          The creative industries:
          <br />
          The future we want to create
        </h1>
        <div>
          <p className="p-vinci">
            VINCI's goal is to bring all stakeholders within the culture economy
            closer together, to enable direct interaction and value exchange.
            This becomes possible via the $VINCI token. Its utility is designed
            for all stakeholders to engage with our products, connect with other
            ecosystem participants, and link them with the success of VINCI’s
            long-term vision.
          </p>
        </div>
      </div>
      <div className="cards-div">
        <div className="card1">
          <div className="">
            <h3 className="vinciwhite-h">The VINCI Whitepaper</h3>
            <p className="catalyst-p">
              VINCI is the catalyst to bridging the current disconnects between
              value creation and value capture for creators and their
              communities.{" "}
            </p>
            <button className="white-download-btn" title="Download">
              Download the whitepaper
            </button>
          </div>
          <div>
            <img
              className="token-img"
              src="https://framerusercontent.com/images/cGfUF9LjtBhHL9Rg7csfBkN9pW0.png?scale-down-to=512"
              alt=""
            />
          </div>
        </div>
        <div className="div2">
          <div className="card2">
            <img src={key} alt="" />
            <h1 className="h-access">Access to full VINCI experience</h1>
            <p className="p-staking">
              Staking provides individuals and partners access to enhanced
              product functionalities, additional services and special VINCI
              experiences.
            </p>
          </div>
          <div className="card3">
            <p style={{ marginBottom: "0px" }}>
              <span className="sp-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  className="bi bi-suit-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                </svg>
              </span>
            </p>
            <h1 className="h-access">Creator-fan value exchange</h1>
            <p className="p-staking">
              Special staking functionalities introduce new forms of interaction
              and value exchange between creators and their communities.
            </p>
          </div>
          <div className="card3">
            <p style={{ marginBottom: "0px" }}>
              <span className="sp-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  className="bi bi-infinity"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z" />
                </svg>
              </span>
            </p>
            <h1 className="h-access">Automated spot buybacks</h1>
            <p className="p-staking">
              Revenue from our product portfolio is used for buybacks which tie
              the value and stability of the $VINCI token to the success of our
              business.
            </p>
          </div>
        </div>
      </div>
      <div className="platform-div">
        <div className="platform-main">
          <h3 className="plat-h">The VINCI platform</h3>
          <p className="platform-p">
            Are you struggling to effectively communicate with your fanbase?
            VINCI offers direct communication channels such as email, push
            notifications, and more to help you connect with your fans in a
            meaningful way.
          </p>
          <div className="d-flex container">
            <div data-aos="fade-up" data-aos-duration="2000">
              <img
                className="img-lap"
                src="https://framerusercontent.com/images/emLdz2l95DtodiN0CWRJ4mll6c.png?scale-down-to=1024"
                alt=""
              />
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <img
                className="img-lap2"
                src="https://framerusercontent.com/images/i2QloeHpWaQBHOxcwgVez43b4.png?scale-down-to=1024"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Money />
    </div>
  );
};

export default Tokens;
