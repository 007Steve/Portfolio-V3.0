import React from "react";
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/ProjectCard.module.css";
function ProjectCard({ color,img }) {
  return (
    
      <AnimatePresence>
        <Link href={`/project/${color}`}>
        <div exit={{ scale: 2 }} className={`${styles.projectCard} ${styles[color]}`}>
          <img  className={styles.projectCard__img} src={img} alt=""/>
        </div>
        </Link>
      </AnimatePresence>
    
  );
}

export default ProjectCard;
