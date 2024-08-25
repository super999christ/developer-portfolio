"use client";

import Screenshot1 from "/public/designs/whatsapp/1.png";
import Screenshot2 from "/public/designs/whatsapp/2.png";
import ModalImage from "../../ModalImage";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import ArticleLink from "./ArticleLink";

export default function DesignWhatsappView() {
  return (
    <div className="flex flex-col">
      <div className="mt-3 text-center sm:mt-5 text-2xl">
        <a
          className="hover:text-blue-400 flex gap-2 items-center flex justify-center"
          href="https://bytebytego.com/courses/system-design-interview/design-a-chat-system"
          target="_blank"
        >
          System Design for WhatsApp
          <ArrowTopRightOnSquareIcon width={20} height={20} />
        </a>
        <div className="mt-2">
          <ArticleLink url="https://www.geeksforgeeks.org/how-to-design-a-database-for-whatsapp/" />
        </div>
      </div>
      <div className="max-w-[900px] my-4 text-center">
        WhatsApp is a chat application that provides instant messaging services
        to its users. It is one of the most used mobile applications on the
        planet, connecting over 2 billion users in 180+ countries. WhatsApp is
        also available on the web.
      </div>
      <div className="mt-5 flex flex-col gap-8 items-center">
        <ModalImage src={Screenshot1} maxWidth={true} />
        <ModalImage src={Screenshot2} maxWidth={true} />
      </div>
    </div>
  );
}
