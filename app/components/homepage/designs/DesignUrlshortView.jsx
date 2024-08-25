"use client";

import Screenshot1 from "/public/designs/urlshort/1.png";
import Screenshot2 from "/public/designs/urlshort/2.png";
import ModalImage from "../../ModalImage";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function DesignUrlshortView() {
  return (
    <div className="flex flex-col">
      <div className="mt-3 text-center sm:mt-5 text-2xl">
        <a
          className="hover:text-blue-400 flex gap-2 items-center flex justify-center"
          href="https://github.com/karanpratapsingh/system-design?tab=readme-ov-file#url-shortener"
          target="_blank"
        >
          System Design for URL Shortner
          <ArrowTopRightOnSquareIcon width={20} height={20} />
        </a>
      </div>
      <div className="max-w-[900px] my-4 text-center">
        A URL shortener service creates an alias or a short URL for a long URL.
        Users are redirected to the original URL when they visit these short
        links.
      </div>
      <div className="mt-5 flex flex-col gap-8 items-center">
        <ModalImage src={Screenshot1} maxWidth={true} />
        <ModalImage src={Screenshot2} maxWidth={true} />
      </div>
    </div>
  );
}
