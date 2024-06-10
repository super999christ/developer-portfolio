'use client'

import Image from "next/image"
import { useState } from "react";

export default function ModalImage({ src, title, subtitle }) {
  const [isOpen, setOpen] = useState(false);
  
  const onImageClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Image
        src={src}
        className="project-image cursor-pointer"
        onClick={onImageClick}
        alt="Project Screenshot"
      />
      {isOpen && (
        <div className="flex fixed top-0 left-0 z-[50000] w-screen h-screen bg-gray-700 bg-opacity-50 justify-center items-center p-10 cursor-pointer" onClick={onImageClick}>
          <Image
            src={src}
            className="project-image cursor-pointer"
            alt="Project Screenshot"
          />
        </div>
      )}
    </>
  )
}