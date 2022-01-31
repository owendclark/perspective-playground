import React, { useState } from "react"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { Link } from "next/link"
import { Routes } from ".blitz"

import classes from "./Navbar.module.css"

const Menu: React.FC = () => {
  return (
    <>
      <p>
        <a className={classes.link} href="#">
          About
        </a>
      </p>
      <p>
        <a className={classes.link} href="#">
          Help
        </a>
      </p>
      <p>
        <a className={classes.link} href="#">
          Terms of Service
        </a>
      </p>
      <p>
        <a className={classes.link} href="#">
          Privacy Policy
        </a>
      </p>
      <p>
        <a className={classes.link} href="#">
          Our Team
        </a>
      </p>
    </>
  )
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src="/assets/images/logo.png" alt="logo" height={100} width={100} />
        </div>
        <nav className={classes.nav}>
          <Menu />
        </nav>
      </div>
      <div className={classes.signUpButtons}>
        <Link href={Routes.LoginPage()}>
          <p>Sign in</p>
        </Link>
        <Link href={Routes.SignupPage()}>
          <button type="button">Sign up</button>
        </Link>
      </div>
      <div className={classes.menu}>
        {isMenuOpen ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setIsMenuOpen(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setIsMenuOpen(true)} />
        )}
        {isMenuOpen && (
          <div className={classes.menuPopUp}>
            <div className={classes.menuPopUpLinks}>
              <Menu />
            </div>
            <div className={classes.menuPopUpButtons}>
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
