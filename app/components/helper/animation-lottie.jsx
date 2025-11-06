"use client";

import dynamic from "next/dynamic";

// Dynamically import Lottie with SSR disabled to prevent document is not defined error
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

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