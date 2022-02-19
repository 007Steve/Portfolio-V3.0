import React from 'react'
import styles from "../styles/HeaderSection.module.css";
import Nav from './Nav';
import Scene from './Scene';
import ScrollDown from './ScrollDown';
function HeaderSection() {
    return (
        <div className={styles.headerSection}>
            <Nav/>
            <Scene/>
            <ScrollDown/>
        </div>
    )
}

export default HeaderSection
