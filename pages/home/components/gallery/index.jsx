import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import Image from "next/image";
import ProgressBar from "components/progressbar";

import RightArrow from "components/svg/rightArrow";
import LeftArrow from "components/svg/leftArrow";
import styles from "./gallery.module.scss";

const IMAGE_DETAILS = [
  { imageLink: "/images/firstimage.png", orientation: "landscape" },
  { imageLink: "/images/secondimage.png", orientation: "portrait" },
  { imageLink: "/images/thirdimage.png", orientation: "portrait" },
  { imageLink: "/images/firstimage.png", orientation: "landscape" },
  { imageLink: "/images/thirdimage.png", orientation: "portrait" },

];

export default function Gallery() {
  const [progress, setProgress] = useState((1 * 100) / IMAGE_DETAILS.length);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    beforeChange: (index) => {
      index++;
      setProgress((index * 100) / IMAGE_DETAILS.length);
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
        <div className={styles.action_button}>
          See Full Gallery <RightArrow />
        </div>
      </div>

      <div className={styles.mobile_progress}>
        <ProgressBar percentage={progress} />
      </div>

      <section className={styles.image_container_wrapper}>
        {/* <div className={styles.image_container}> */}
        <Slider ref={sliderRef} {...settings}>
          {IMAGE_DETAILS.map((oneImage) => (
            <ImageRender key={oneImage.orientation} {...oneImage} />
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

function ImageRender({ imageLink, orientation }) {
  return (
    <div className={styles[orientation]}>
      <Image src={imageLink} layout="fill" />
    </div>
  );
}
ImageRender.propTypes = {
  imageLink: PropTypes.string,
  orientation: PropTypes.oneOf(["portrait", "landscape"]).isRequired,
};
ImageRender.defaultProps = {};
