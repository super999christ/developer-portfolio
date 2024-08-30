"use client";

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width, height }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || '75%',
      height
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;