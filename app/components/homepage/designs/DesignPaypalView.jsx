"use client";

import Screenshot1 from "/public/designs/paypal/1.jpg";
import Screenshot2 from "/public/designs/paypal/2.jpg";
import Screenshot3 from "/public/designs/paypal/3.jpg";
import Screenshot4 from "/public/designs/paypal/4.jpg";
import ModalImage from "../../ModalImage";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function DesignPaypalView() {
  return (
    <div className="flex flex-col">
      <div className="mt-3 text-center sm:mt-5 text-2xl">
        <a
          className="hover:text-blue-400 flex gap-2 items-center flex justify-center"
          href="https://newsletter.pragmaticengineer.com/p/designing-a-payment-system"
          target="_blank"
        >
          System Design for PayPal
          <ArrowTopRightOnSquareIcon width={20} height={20} />
        </a>
      </div>
      <div className="max-w-[900px] my-4 text-center">
        PayPal is a digital payment platform that enables users to make and
        receive electronic payments. It is accessible through web browsers and
        mobile applications on Android and iOS devices.
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
