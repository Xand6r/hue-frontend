import React from "react";
import Image from "next/image";

import styles from "./navbar.module.scss";

export default function Index() {
  return (
    <nav className={styles.navbar}>
      <section className={styles.left_section}>
        <div>Event</div>
        <div>Menu</div>
        <div>Gallery</div>
        <div>About</div>
      </section>
      <section className={styles.logo_container}>
        <Image src="/images/logosmall.svg" height={53} width={111} />
      </section>
      <section className={styles.right_section}>
        <div>Contact</div>
        <div className={styles.reservation_button}>Make Reservation</div>
      </section>
    </nav>
  );
}
