import React from "react";
import Image from "next/image";
import styles from "./about.module.scss";

export default function index() {
  return (
    <div className={styles.about}>
      <div className={styles.logo}>
        <Image src="/images/abouticon.svg" layout="fill" />
      </div>
      <div className={styles.textcontent}>
        <span>
          Hue Chicago is a luxury bar & lounge offering elite nightlife and
          lounging experience for Chicago’s young upper class in a serene, safe,
          and contemporary-themed atmosphere. Hue Chicago delivers top-class
          entertainment and hospitality through live music sessions from
          top-notch DJs, elite VIP services, and an assortment of the most
          exquisite drink and liquor brands from around the world. As an
          energy-efficient establishment, we are environmentally responsible and
          dedicated to eco-friendly features and practices all across our
          operations.
        </span>

      </div>
    </div>
  );
}
