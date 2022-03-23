import React, { useState } from "react";
import styles from "../styles/Nav.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import Image from 'next/image'
function Nav() {

  const [open, setOpen] = useState()
  return (
    <div className={styles.nav} >
      <Link href="/" passHref>
      <Image height={200} width={200} src="/spB.png"  alt="a logo of an image of sp"/>
        
      </Link>
      <div className={styles.nav__menuContainer}>
        <MenuIcon className={styles.nav__menu} onMouseEnter={() => setOpen(!open)}  />
        {open ? <ul className={styles.nav__menuLinksContainer} onMouseLeave={() => setOpen(!open)}>
          <Link href="/#home"  passHref>
            <li className={styles.nav__links}>Home </li>
          </Link>
          <Link href="/#about" passHref>
            <li className={styles.nav__links}>About </li>
          </Link>
          <Link href="/#skills" passHref>
            <li className={styles.nav__links}>Skills </li>
          </Link>

          <Link href="/#portfolio" passHref>
            <li className={styles.nav__links}>Portfolio </li>
          </Link>
          <Link href="/#contact" passHref>
            <li className={styles.nav__links}>Contact </li>
          </Link>
        </ul> : <></>}
      </div>
    </div>
  );
}

export default Nav;

