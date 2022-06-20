import React, { useEffect } from "react"
import PropTypes from 'prop-types';
import { gsap } from "gsap";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "./navbar.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Index({
  selector,
  useFadeDownAnimation,
  theme = "light",
}) {
  const router = useRouter();

  // wait until DOM has been rendered
  useEffect(() => {
    if (!useFadeDownAnimation) return;
    ScrollTrigger.matchMedia({
      "(min-width: 1200px)": function () {
        gsap.fromTo(
          selector("#icon"),
          {
            autoAlpha: 0,
          },
          {
            scrollTrigger: {
              trigger: selector("#homeimage"),
              start: "top top-=21",
              end: "+=1",
              scrub: true,
            },
            autoAlpha: 1,
            duration: 0.01,
          }
        );
      },
    });
  }, [useFadeDownAnimation]);

  return (
    <nav className={`${styles.navbar} ${styles[theme]}`}>
      {/* left menu items */}
      <section className={styles.left_section}>
        <div>Event</div>
        <div>Menu</div>
        <div>Gallery</div>
        <div>
          <Link href="/about">About</Link>
        </div>
      </section>
      {/* center logo */}
      <section
        onClick={(e) => {
          e.preventDefault();
          router.push("/");
        }}
        id="icon"
        className={styles.logo_container}
      >
        <Image src={`/images/logosmall${theme}.svg`} layout="fill" />
      </section>
      {/* right menu items */}
      <section className={styles.right_section}>
        <div>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.reservation_button}>Make Reservatvion</div>
      </section>
      {/* mobile section */}
      <section className={styles.mobile_hamburger}>
        <HamBurger />
      </section>
    </nav>
  );
}

Index.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"]),
  selector: PropTypes.any.isRequired,
  useFadeDownAnimation:  PropTypes.bool
}
Index.defaultProps = {
  theme: "light",
  useFadeDownAnimation: false
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
