"use client";

import Screenshot1 from "/public/designs/uber/1.png";
import Screenshot2 from "/public/designs/uber/2.png";
import Screenshot3 from "/public/designs/uber/3.png";
import Screenshot4 from "/public/designs/uber/4.png";
import ModalImage from "../../ModalImage";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function DesignUberView() {
  return (
    <div className="flex flex-col">
      <div className="mt-3 text-center sm:mt-5 text-2xl">
        <a
          className="hover:text-blue-400 flex gap-2 items-center flex justify-center"
          href="https://github.com/karanpratapsingh/system-design?tab=readme-ov-file#uber"
          target="_blank"
        >
          System Design for Uber
          <ArrowTopRightOnSquareIcon width={20} height={20} />
        </a>
      </div>
      <div className="max-w-[900px] my-4 text-center">
        Uber is a mobility service provider, allowing users to book rides and a
        driver to transport them in a way similar to a taxi. It is available on
        the web and mobile platforms such as Android and iOS.
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
