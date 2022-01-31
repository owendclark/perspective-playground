import React from "react"
import { Link } from "next/link"
import { Routes } from ".blitz"

import classes from "./Landing.module.css"

const Landing: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.gradientText}>Collaboration Through Conversation</h1>
        <p>
          Be a part of the change by contributing to impactful conversations, not crippling
          contradiction.
        </p>
        <div className={classes.getStarted}>
          <Link href={Routes.SignupPage()}>
            <button type="button">Get Started</button>
          </Link>
        </div>
      </div>
      <div className={classes.image}>
        <img
          src="/assets/images/landingImage.png"
          alt="Image of two people, representing collaboration"
        />
      </div>
    </div>
  )
}

export default Landing
