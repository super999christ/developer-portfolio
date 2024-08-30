'use client'

import Image from "next/image"
import { useEffect, useState } from "react";
import ArtisanHero from "./animations/ArtisanHero";

export default function ModalImage({ src, maxWidth, lottieAnimation }) {
  const [isOpen, setOpen] = useState(false);
  
  const onImageClick = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.removeEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  return (
    <>
      <Image
        src={src}
        className={`project-image cursor-pointer ${maxWidth && 'sm:max-w-[600px] lg:max-w-[900px]'}`}
        onClick={onImageClick}
        alt="Project Screenshot"
      />
      {isOpen && (
        <div className="flex fixed top-0 left-0 z-[50000] w-screen h-screen bg-gray-700 bg-opacity-50 justify-center items-center p-10 cursor-pointer" onClick={onImageClick}>
          {!lottieAnimation ? (
            <Image
              src={src}
              className="project-image cursor-pointer"
              alt="Project Screenshot"
            />
          ): <ArtisanHero />}
        </div>
      )}
    </>
  )
}