import React from 'react'
import styles from "../styles/ContactLinks.module.css";
import { Link } from '@material-ui/core'
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
function ContactLinks({ size }) {
    return (
        <div className={styles.contactLinks}>
            <Link href="https://twitter.com/StephenPlummer0">
                <TwitterIcon
                    fontSize={size}
                    className={`${styles.contactLinks__icon} ${styles.twitter}`}
                />
            </Link>
            <Link href="https://www.linkedin.com/">
                <LinkedInIcon
                    fontSize={size}
                    className={`${styles.contactLinks__icon} ${styles.linkedin} `}
                />
            </Link>
            <Link href="https://github.com/007Steve">
                <GitHubIcon
                    fontSize={size}
                    className={`${styles.contactLinks__icon} ${styles.github}`}
                />
            </Link>
        </div>
    )
}

export default ContactLinks
