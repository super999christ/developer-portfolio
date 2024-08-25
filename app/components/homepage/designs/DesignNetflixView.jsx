"use client";

import Screenshot1 from "/public/designs/netflix/1.png";
import Screenshot2 from "/public/designs/netflix/2.png";
import Screenshot3 from "/public/designs/netflix/3.png";
import ModalImage from "../../ModalImage";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import ArticleLink from "./ArticleLink";

export default function DesignNetflixView() {
  return (
    <div className="flex flex-col">
      <div className="mt-3 text-center sm:mt-5 text-2xl">
        <a
          className="hover:text-blue-400 flex gap-2 items-center flex justify-center"
          href="https://github.com/karanpratapsingh/system-design?tab=readme-ov-file#netflix"
          target="_blank"
        >
          System Design for Netflix
          <ArrowTopRightOnSquareIcon width={20} height={20} />
        </a>
      </div>
      <div className="max-w-[900px] my-4 text-center">
        Netflix is a subscription-based streaming service that allows its
        members to watch TV shows and movies on an internet-connected device. It
        is available on platforms such as the Web, iOS, Android, TV, etc.
      </div>
      <div className="mt-5 flex flex-col gap-8 items-center">
        <ModalImage src={Screenshot1} maxWidth={true} />
        <ModalImage src={Screenshot2} maxWidth={true} />
        <ModalImage src={Screenshot3} maxWidth={true} />
      </div>
    </div>
  );
}
