import { BlitzPage, Routes } from "blitz"
import { Link } from "next/link"

import classes from "./landing.module.css"
//import Header from "./components/Header"
import { Navbar, Landing } from "./components"

const LandingPage: BlitzPage = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <Landing />
    </div>
  )
}

/*
const Landing: BlitzPage = () => {
  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.main}>
        <div className={classes.contentWindow}>
          <div className={classes.content}>
            <h3 className={classes.titleText}>Collaboration Through Conversation</h3>
            <div className={classes.buttonContainer}>
              <div className={classes.signupButton}>
                <Link href={Routes.SignupPage()}>
                  <p className={classes.buttonText}>Sign Up</p>
                </Link>
              </div>
              <div className={classes.loginButton}>
                <Link href={Routes.LoginPage()}>
                  <p className={classes.buttonText}>Log In</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
*/

//TODO: Change img tags to Image compoonent

export default LandingPage
