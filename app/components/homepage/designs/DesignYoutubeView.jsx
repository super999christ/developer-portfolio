"use client";

import Screenshot1 from "/public/designs/youtube/1.jpg";
import Screenshot2 from "/public/designs/youtube/2.jpg";
import Screenshot3 from "/public/designs/youtube/3.jpg";
import Screenshot4 from "/public/designs/youtube/4.png";
import ModalImage from "../../ModalImage";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import ArticleLink from "./ArticleLink";

export default function DesignYoutubeView() {
  return (
    <div className="flex flex-col">
      <div className="mt-3 text-center sm:mt-5 text-2xl">
        <a
          className="hover:text-blue-400 flex gap-2 items-center flex justify-center"
          href="https://www.enjoyalgorithms.com/blog/design-youtube-system-design-interview-question"
          target="_blank"
        >
          System Design for Youtube
          <ArrowTopRightOnSquareIcon width={20} height={20} />
        </a>
        <div className="mt-2">
          <ArticleLink url="https://bytebytego.com/courses/system-design-interview/design-youtube" />
        </div>
      </div>
      <div className="max-w-[900px] my-4 text-center">
        YouTube is a popular video-sharing platform that allows users to watch,
        upload, and share videos. It is accessible through web browsers and
        mobile applications on various platforms, including Android, iOS, and
        smart TVs.
      </div>
      <div className="mt-5 flex flex-col gap-8 items-center">
        <ModalImage src={Screenshot1} maxWidth={true} />
        <ModalImage src={Screenshot2} maxWidth={true} />
        <ModalImage src={Screenshot3} maxWidth={true} />
        <ModalImage src={Screenshot4} maxWidth={true} />
      </div>
    </div>
  );
}
