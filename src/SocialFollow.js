import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./App.module.css";
import {
    faFacebook,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className={styles.social}>
        <h3>Copyright (C) Yacine Djamal. All rights reserved.</h3>
      <a href="https://www.twitter.com/NalticeD"
          className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.facebook.com/djamel.yacine.5/"
          className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    </div>
  );
}