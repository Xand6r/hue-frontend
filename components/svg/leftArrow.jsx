import React from "react";

export default function leftArrow({onClick}) {
  return (
    <div onClick={() => onClick && onClick()}>
      <svg
        width="19"
        height="17"
        viewBox="0 0 19 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66667 5.6875L6.66667 1L1 8.5L6.66667 16L6.66667 9.5C6.66667 8.94772 7.11438 8.5 7.66667 8.5L18 8.5"
          stroke="#131616"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
