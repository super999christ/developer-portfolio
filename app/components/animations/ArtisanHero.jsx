'use client';

import artisanLottie from '/public/lottie/artisan.json'
import AnimationLottie from '../helper/animation-lottie';

export default function ArtisanHero() {
  return (
    <AnimationLottie animationPath={artisanLottie} shouldShowLoading={true} />
  )
};