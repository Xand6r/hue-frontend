import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./menu.module.scss";
import { Logo, CloseIcon } from "./assets";

export default function Menu({ open, onClose }) {
  const router = useRouter();
  return (
    <div className={styles.menu}>
      <div className={styles.top}>
        <div
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        >
          <Logo />
        </div>
        <div onClick={onClose}>
          <CloseIcon />
        </div>
      </div>

      <div className={styles.options}>
        <div className={styles.items}>
          <Link href="/events">Event</Link>
        </div>
        <div className={styles.items}>Menu</div>
        <div className={styles.items}>
          <Link href="/gallery">Gallery</Link>
        </div>
        <div className={styles.items}>
          <Link href="/about">About</Link>
        </div>
        <div className={styles.items}>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <div className={styles.reservation_button}>Make Reservation</div>
    </div>
  );
}
