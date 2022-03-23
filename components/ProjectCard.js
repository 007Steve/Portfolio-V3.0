import React from "react";
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/ProjectCard.module.css";
import Image from 'next/image'
function ProjectCard({ color, img,website }) {
  return (

    <AnimatePresence>
      <Link href={`${website}`} passHref>
        <div exit={{ scale: 2 }} className={`${styles.projectCard} ${styles[color]}`}>
          <Image height={200} width={200} src={img}  alt="a logo of project icon"/>
          
          {/* <div className={styles.projectCard__linkContainer}>
            <Link href={`/project/${color}`}>
            <h5 className={styles.projectCard__link}>Live</h5>
            </Link>

            <h5 className={styles.projectCard__link}>Code</h5>
          </div> */}
        </div>
      </Link>
    </AnimatePresence>

  );
}

export default ProjectCard;
