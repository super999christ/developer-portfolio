"use client";

import Screenshot1 from "/public/designs/twitter/1.gif";
import Screenshot2 from "/public/designs/twitter/2.png";
import Screenshot3 from "/public/designs/twitter/3.png";
import Screenshot4 from "/public/designs/twitter/4.png";
import ModalImage from "../../ModalImage";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import ArticleLink from "./ArticleLink";

export default function DesignTwitterView() {
  return (
    <div className="flex flex-col">
      <div className="mt-3 text-center sm:mt-5 text-2xl">
        <a
          className="hover:text-blue-400 flex gap-2 items-center flex justify-center"
          href="https://github.com/karanpratapsingh/system-design?tab=readme-ov-file#twitter"
          target="_blank"
        >
          System Design for Twitter
          <ArrowTopRightOnSquareIcon width={20} height={20} />
        </a>
        <div className="mt-2">
          <ArticleLink url="https://www.linkedin.com/pulse/system-design-101-twitter-like-platform-shanoj-kumar-v-ogwtc" />
        </div>
      </div>
      <div className="max-w-[900px] my-4 text-left">
        Twitter is a social media platform that allows users to post and
        interact with short messages known as "tweets." It is available on the
        web as well as mobile applications for Android and iOS devices.
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
