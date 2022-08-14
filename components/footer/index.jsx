import React from "react";
import Image from "next/image";
import FooterLogo from "components/svg/footerLogo";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <section id="footer" className={styles.footer}>
      <section className={styles.top}>
        <div className={styles.header}>Be the first to know</div>
        <div className={styles.subheader}>
          Subscribe to our email newsletter and get our latest updates!
        </div>

        <div className={styles.input_wrapper}>
          <input type="text" placeholder="Enter email" />
          <div className={styles.subscribe_button}>Subscribe</div>
        </div>
      </section>

      <div className={styles.divider}></div>

      <section className={styles.bottom}>
        <div className={styles.first_line}>
          <div className={styles.footer_logo}>
            <Image layout="fill" src="/images/footerlogo.svg" />
          </div>
          <div className={styles.text}>
            Hue Chicago is a luxury bar & lounge offering elite nightlife and
            lounging experience for Chicago’s young upper class in a serene,
            safe, and contemporary-themed atmosphere.
          </div>
          <div className={styles.instagram_icon}>
            <InstagramIcon />
          </div>
        </div>

        <div className={styles.second_line}>
          <div className={styles.section_heading}>
            <span>Opening hours</span>
            <div className={styles.bottom_border} />
          </div>
          <div className={styles.section_content}>
            <span>Tuesday - Thursday (3pm - 12 Midnight)</span>
            <span>Friday - (3pm - 1pm)</span>
            <span>Saturday - (11pm - 3pm)</span>
            <span>Sunday - (11pm - 10pm)</span>
          </div>
        </div>

        <div className={styles.third_line}>
          <div>
            <div className={styles.section_heading}>
              <span>Location</span>
              <div className={styles.bottom_border} />
            </div>
            <div className={styles.section_content}>
              <span>67 E Cermack</span>
            </div>
          </div>

          <div>
            <div className={styles.section_heading}>
              <span>Contact</span>
              <div className={styles.bottom_border} />
            </div>
            <div className={styles.section_content}>
              <span
                className={styles.contact}
                onClick={() => {
                  window.location.href = "mailto:hello@hue-chicago.com";
                }}
              >
                hello@hue-chicago.com
              </span>
              <span
                className={styles.contact}
                onClick={() => {
                  window.open("tel:1234567891234567");
                }}
              >
                +1234567891234567
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.instagram_icon_mobile}>
        <InstagramIcon />
      </div>

      <div className={styles.copyright}>
        <span>© 2022 | Hue Chicago</span>
        <div className={styles.line}></div>
      </div>
    </section>
  );
}

const InstagramIcon = () => (
  <span
    style={{ cursor: "pointer" }}
    onClick={() => window.open("https://instagram.com/huechicago", "_blank")}
  >
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 4.375C13.9353 4.375 13.489 4.38988 12.089 4.45375C10.6916 4.51763 9.737 4.73987 8.90225 5.0645C8.02725 5.3935 7.23362 5.90975 6.57737 6.57825C5.90994 7.23374 5.39338 8.02681 5.06362 8.90225C4.74075 9.737 4.51763 10.6925 4.45375 12.0899C4.39075 13.489 4.375 13.9344 4.375 17.5C4.375 21.0656 4.38988 21.511 4.45375 22.911C4.51763 24.3084 4.73987 25.263 5.0645 26.0977C5.3935 26.9727 5.90975 27.7664 6.57825 28.4226C7.23376 29.09 8.02682 29.6066 8.90225 29.9364C9.737 30.2601 10.6916 30.4824 12.089 30.5462C13.489 30.6101 13.9353 30.625 17.5 30.625C21.0648 30.625 21.511 30.6101 22.911 30.5462C24.3084 30.4824 25.263 30.2601 26.0977 29.9355C26.9727 29.6065 27.7664 29.0903 28.4226 28.4218C29.0901 27.7663 29.6066 26.9732 29.9364 26.0977C30.2601 25.263 30.4824 24.3084 30.5462 22.911C30.6101 21.511 30.625 21.0648 30.625 17.5C30.625 13.9353 30.6101 13.489 30.5462 12.089C30.4824 10.6916 30.2601 9.737 29.9355 8.90225C29.606 8.02643 29.0894 7.23303 28.4218 6.57737C27.7663 5.90994 26.9732 5.39338 26.0977 5.06362C25.263 4.74075 24.3075 4.51763 22.9101 4.45375C21.511 4.39075 21.0656 4.375 17.5 4.375ZM17.5 6.74013C21.0044 6.74013 21.42 6.75325 22.8043 6.81625C24.0835 6.87488 24.7782 7.0875 25.2411 7.26863C25.8536 7.50575 26.2911 7.791 26.7505 8.2495C27.2099 8.70888 27.4943 9.14637 27.7314 9.75887C27.9116 10.2217 28.1251 10.9165 28.1838 12.1957C28.2467 13.58 28.2599 13.9956 28.2599 17.5C28.2599 21.0044 28.2467 21.42 28.1838 22.8043C28.1251 24.0835 27.9125 24.7782 27.7314 25.2411C27.5213 25.8112 27.1861 26.327 26.7505 26.7505C26.3271 27.1862 25.8113 27.5214 25.2411 27.7314C24.7782 27.9116 24.0835 28.1251 22.8043 28.1838C21.42 28.2467 21.0053 28.2599 17.5 28.2599C13.9948 28.2599 13.58 28.2467 12.1957 28.1838C10.9165 28.1251 10.2217 27.9125 9.75887 27.7314C9.18877 27.5213 8.67301 27.1861 8.2495 26.7505C7.8139 26.327 7.47874 25.8112 7.26863 25.2411C7.08837 24.7782 6.87488 24.0835 6.81625 22.8043C6.75325 21.42 6.74013 21.0044 6.74013 17.5C6.74013 13.9956 6.75325 13.58 6.81625 12.1957C6.87488 10.9165 7.0875 10.2217 7.26863 9.75887C7.50575 9.14637 7.791 8.70888 8.2495 8.2495C8.67295 7.81379 9.18873 7.4786 9.75887 7.26863C10.2217 7.08837 10.9165 6.87488 12.1957 6.81625C13.58 6.75325 13.9956 6.74013 17.5 6.74013Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4999 21.8794C16.9248 21.8794 16.3553 21.7662 15.824 21.5461C15.2927 21.326 14.8099 21.0034 14.4032 20.5967C13.9966 20.1901 13.674 19.7073 13.4539 19.176C13.2338 18.6446 13.1205 18.0752 13.1205 17.5001C13.1205 16.925 13.2338 16.3555 13.4539 15.8241C13.674 15.2928 13.9966 14.81 14.4032 14.4034C14.8099 13.9967 15.2927 13.6741 15.824 13.454C16.3553 13.234 16.9248 13.1207 17.4999 13.1207C18.6614 13.1207 19.7753 13.5821 20.5966 14.4034C21.4179 15.2247 21.8793 16.3386 21.8793 17.5001C21.8793 18.6615 21.4179 19.7755 20.5966 20.5967C19.7753 21.418 18.6614 21.8794 17.4999 21.8794ZM17.4999 10.7538C15.7107 10.7538 13.9948 11.4646 12.7296 12.7297C11.4644 13.9949 10.7537 15.7108 10.7537 17.5001C10.7537 19.2893 11.4644 21.0052 12.7296 22.2704C13.9948 23.5355 15.7107 24.2463 17.4999 24.2463C19.2891 24.2463 21.0051 23.5355 22.2702 22.2704C23.5354 21.0052 24.2462 19.2893 24.2462 17.5001C24.2462 15.7108 23.5354 13.9949 22.2702 12.7297C21.0051 11.4646 19.2891 10.7538 17.4999 10.7538ZM26.2088 10.6313C26.2088 11.0542 26.0408 11.4599 25.7417 11.7589C25.4426 12.058 25.037 12.226 24.6141 12.226C24.1912 12.226 23.7855 12.058 23.4865 11.7589C23.1874 11.4599 23.0194 11.0542 23.0194 10.6313C23.0194 10.2084 23.1874 9.80276 23.4865 9.50369C23.7855 9.20463 24.1912 9.03662 24.6141 9.03662C25.037 9.03662 25.4426 9.20463 25.7417 9.50369C26.0408 9.80276 26.2088 10.2084 26.2088 10.6313Z"
        fill="white"
      />
    </svg>
  </span>
);
