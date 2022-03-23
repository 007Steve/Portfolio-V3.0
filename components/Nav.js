import React, { useState } from "react";
import styles from "../styles/Nav.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import Image from 'next/image'
function Nav() {

  const [open, setOpen] = useState()

  return (
    <div className={styles.nav} >
      <Link href="/">
      <Image height={200} width={200} src={img}  alt="a logo of an image of sp"/>
        {/* <img className={styles.nav__logo} src="/spB.png" alt="an image of sp" /> */}
      </Link>
      <div className={styles.nav__menuContainer}>
        <MenuIcon className={styles.nav__menu} onMouseEnter={() => setOpen(!open)}  />
        {open ? <ul className={styles.nav__menuLinksContainer} onMouseLeave={() => setOpen(!open)}>
          <Link href="/#home">
            <li className={styles.nav__links}>Home </li>
          </Link>
          <Link href="/#about">
            <li className={styles.nav__links}>About </li>
          </Link>
          <Link href="/#skills">
            <li className={styles.nav__links}>Skills </li>
          </Link>

          <Link href="/#portfolio">
            <li className={styles.nav__links}>Portfolio </li>
          </Link>
          <Link href="/#contact">
            <li className={styles.nav__links}>Contact </li>
          </Link>
        </ul> : <></>}
      </div>
    </div>
  );
}

export default Nav;

