import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import WavingGuy from "../LottieFiles/wavingGuy.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>Bankupalle Laxman</b>
          </h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={WavingGuy}
          loop={true}
        />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Welcome to my portfolio! <b>I'm Laxman</b>
          </h1>
          <p>
            {" "}
            I'm passionate about backend programming and cybersecurity. From
            crunching numbers to optimizing finances, I bring balance to the
            equation.
            <br />
            <br />
            Off-duty, catch me on the sports court – a national-level badminton
            player, professional in basketball, and a strategic chess player.{" "}
            <br />
            <br />
            Also, I love <b> Coffee</b>{" "}
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
