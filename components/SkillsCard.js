import React from "react";
import styles from "../styles/SkillsCard.module.css";
function SkillsCard({ title, img, color,p }) {
  return (
    <div className={styles.skillsCard}>
      <div className={`${styles.skillsCard__imgContainer}`}>
        <img className={styles.skillsCard__img }src={img} alt="" />
      </div>
      <h2 className={styles.skillsCard__title}>{title} </h2>
      <p className={styles.skillsCard__texts}>
       {p}
      </p>
    </div>
  );
}

export default SkillsCard;
