"use client";

import Screenshot1 from "/public/designs/facebook/1.webp";
import Screenshot2 from "/public/designs/facebook/2.webp";
import ModalImage from "../../ModalImage";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function DesignFacebookView() {
  return (
    <div className="flex flex-col">
      <div className="mt-3 text-center sm:mt-5 text-2xl">
        <a
          className="hover:text-blue-400 flex gap-2 items-center flex justify-center"
          href="https://www.geeksforgeeks.org/design-facebook-system-design/"
          target="_blank"
        >
          System Design for Facebook
          <ArrowTopRightOnSquareIcon width={20} height={20} />
        </a>
      </div>
      <div className="max-w-[900px] my-4 text-center">
        Facebook is a social media platform that allows users to connect with
        friends, family, and communities. It is accessible through web browsers
        and mobile applications on Android and iOS devices.
      </div>
      <div className="mt-5 flex flex-col gap-8 items-center">
        <ModalImage src={Screenshot1} maxWidth={true} />
        <ModalImage src={Screenshot2} maxWidth={true} />
      </div>
    </div>
  );
}
