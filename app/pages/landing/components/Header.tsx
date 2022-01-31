import React from "react"
import { Link } from "next/link"

import classes from "./Header.module.css"

const Header: React.FC = () => {
  return (
    <header className={classes.headerContainer}>
      <div className={classes.imageContainer}>
        <Link href="/">
          <img src="/assets/images/logo.png" alt="Perspective Logo" width={75} height={75} />
        </Link>
      </div>
      <nav className={classes.navContainer}>
        <div className={classes.linkContainer}>
          <Link href="/">
            <h5 className={classes.linkText}>About</h5>
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link href="/">
            <h5 className={classes.linkText}>Help Center</h5>
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link href="/">
            <h5 className={classes.linkText}>Terms of Service</h5>
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link href="/">
            <h5 className={classes.linkText}>Privacy Policy</h5>
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link href="/">
            <h5 className={classes.linkText}>Cookie Policy</h5>
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link href="/">
            <h5 className={classes.linkText}>Directory</h5>
          </Link>
        </div>
        <div className={classes.linkContainer}>
          <Link href="/">
            <h5 className={classes.linkText}>Settings</h5>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
