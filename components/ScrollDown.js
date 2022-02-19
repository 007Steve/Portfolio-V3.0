import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/ScrollDown.module.css";

function ScrollDown() {
  return (
    <div className={styles.scrollDown}>
      {/* <p className="scrollDown__Text">Scroll Down</p> */}
      <motion.img
        animate={{ y: 1 }}
        initial={{ y: -10 }}
        transition={{ ease: "easeIn", duration: 0.5, yoyo: Infinity }}
        className={styles.scrollDown__Img}
        src="/down-arrow.png"
      />
    </div>
  );
}

export default ScrollDown;
