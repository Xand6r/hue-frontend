import React from "react";
import Image from "next/image";

import styles from "./navbar.module.scss";

export default function Index() {
  return (
    <nav className={styles.navbar}>
      {/* left menu items */}
      <section className={styles.left_section}>
        <div>Event</div>
        <div>Menu</div>
        <div>Gallery</div>
        <div>About</div>
      </section>
      {/* center logo */}
      <section className={styles.logo_container}>
        <Image src="/images/logosmall.svg" layout="fill" />
      </section>
      {/* right menu items */}
      <section className={styles.right_section}>
        <div>Contact</div>
        <div className={styles.reservation_button}>Make Reservatvion</div>
      </section>
      {/* mobile section */}
      <section className={styles.mobile_hamburger}>
        <HamBurger />
      </section>
    </nav>
  );
}

const HamBurger = () => (
  <svg
    width="31"
    height="14"
    viewBox="0 0 31 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="31" height="2" fill="white" />
    <rect y="6" width="31" height="2" fill="white" />
    <rect y="12" width="31" height="2" fill="white" />
  </svg>
);
