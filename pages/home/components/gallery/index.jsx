import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import Image from "next/image";
import ProgressBar from "components/progressbar";

import RightArrow from "components/svg/rightArrow";
import LeftArrow from "components/svg/leftArrow";
import styles from "./gallery.module.scss";
import { useRouter } from "next/router";
import { ImageRender } from "pages/gallery/components/images";

export default function Gallery({ gallery = [] }) {
  const [progress, setProgress] = useState((1 * 100) / gallery.length);
  const sliderRef = useRef(null);
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth: true,
    beforeChange: (index) => {
      index++;
      setProgress((index * 100) / gallery.length);
    },
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.top_section}>
        <div className={styles.header__text}>Gallery</div>
        <div
          onClick={() => router.push("/gallery")}
          className={styles.action_button}
        >
          See Full Gallery <RightArrow />
        </div>
      </div>

      <div className={styles.mobile_progress}>
        <ProgressBar percentage={progress} />
      </div>

      <section className={styles.image_container_wrapper}>
        {/* <div className={styles.image_container}> */}
        <Slider ref={sliderRef} {...settings}>
          {gallery.map((oneevent) => (
            <ImageRender key={oneevent._id} event={oneevent} overlay />
          ))}
        </Slider>
        {/* </div> */}
      </section>

      <section className={styles.action}>
        <div className={styles.left}>
          <ProgressBar percentage={progress} />
        </div>
        <div className={styles.right}>
          <div
            onClick={() => {
              sliderRef.current.slickPrev();
            }}
          >
            <LeftArrow
              onClick={() => {
                sliderRef.current.slickPrev();
              }}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickNext();
            }}
          >
            <RightArrow
              onClick={() => {
                sliderRef.current.slickNext();
              }}
            />
          </div>
        </div>
      </section>

      <div className={styles.action_button_mobile}>
        See Full Gallery <RightArrow />
      </div>
    </div>
  );
}
