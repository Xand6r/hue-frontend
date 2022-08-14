import React from "react";
import styles from "./form.module.scss";

export default function Form() {
  return (
    <div className={styles.form}>
      <div className={styles.left}>
        <div className={styles.title}>
          Got questions? <br />
          Need help? <br />
          Please get in touch
        </div>
        <div className={styles.meta}>
          <div>
            <Email />
            <span>hello@hue-chicago.com</span>
          </div>
          <div>
            <Phone />
            <span>+1234567891234567</span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          Alternatively, you can fill out and submit the contact form below
        </div>
        <form className={styles.input_fields}>
          <div className={styles.input_wrapper}>
            <span>Name</span>
            <input type="text" placeholder="Enter full name" />
          </div>
          <div className={styles.input_wrapper}>
            <span>Email</span>
            <input type="text" placeholder="Enter email" />
          </div>
          <div className={styles.input_wrapper}>
            <span>Phone</span>
            <input type="text" placeholder="Enter phone number" />
          </div>
          <div className={styles.input_wrapper}>
            <span>Message</span>
            <textarea placeholder="Enter message" />
          </div>
        </form>
        <div className={styles.action}>
            Submit
        </div>
      </div>
    </div>
  );
}

const Email = () => (
  <svg
    width="23"
    height="19"
    viewBox="0 0 23 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 10.7143L1 2.31444C1 1.22265 2.11659 0.608509 2.88293 1.2788L8.63495 6.30994C10.3201 7.78392 12.6799 7.78392 14.3651 6.30994L20.1171 1.2788C20.8834 0.60851 22 1.22266 22 2.31444V16.688C22 17.4126 21.4777 18 20.8333 18L2.16667 18C1.52234 18 1 17.4126 1 16.688L1 14.3571"
      stroke="#131616"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Phone = () => (
  <svg
    width="16"
    height="23"
    viewBox="0 0 16 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.999998 15L0.999999 3C0.999999 1.89543 1.89543 1 3 1L13 1C14.1046 1 15 1.89543 15 3L15 20C15 21.1046 14.1046 22 13 22L3 22C1.89543 22 0.999999 21.1046 0.999999 20L0.999998 19.5C0.999998 18.9477 1.44771 18.5 2 18.5L11.5 18.5"
      stroke="#131616"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
