import React, { useEffect } from "react";
// import "../styles/LandingPage.css";
import styles from "../styles/LandingPage.module.css";
import Lottie from "react-lottie";
import animationData from "../Stephenplummer-2.json";


function LandingPage() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.landingPage}>
      <div className={styles.landingPage__container}>
        <Lottie options={defaultOptions}  />
        </div>

    </div>
  );
}

export default LandingPage;
