import React from "react";
import styles from "../styles/SkillsCard.module.css";
import Image from 'next/image'
function SkillsCard({ title, img,p }) {
  return (
    <div className={styles.skillsCard}>
      <div className={`${styles.skillsCard__imgContainer}`}>
        <Image  className={styles.skillsCard__img }src={img} height={200} width={200} alt="a logo of project icon"/>
       
      </div>
      <h2 className={styles.skillsCard__title}>{title} </h2>
      <p className={styles.skillsCard__texts}>
       {p}
      </p>
    </div>
  );
}

export default SkillsCard;
