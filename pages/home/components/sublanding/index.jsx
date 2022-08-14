import React from "react";
import Image from "next/image";
import styles from "./sublanding.module.scss";

export default function index() {
  return (
    <div className={styles.sublanding}>
      <section className={styles.left_section}>
        <div className={styles.heading}>
          Founded on luxury... <br /> and you in mind
        </div>
      </section>
      <section className={styles.right_section}>
        <div className={styles.text_content}>
          Experience Chicago differently. Let your hair down and unwind to a
          luxury lounging experience spiced with live music, sounds from the
          finest DJs and an extensive selection of the most exquisite cocktails
          and wines.
        </div>

        <div className={styles.reservation_button}>Make Reservation</div>

        <div className={styles.image_container}>
          <Image src="/images/taglineimage2.png" layout="fill" />
        </div>
      </section>
    </div>
  );
}
