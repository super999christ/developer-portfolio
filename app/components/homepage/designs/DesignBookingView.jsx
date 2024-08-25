"use client";

import Screenshot1 from "/public/designs/booking/1.webp";
import Screenshot2 from "/public/designs/booking/2.png";
import Screenshot3 from "/public/designs/booking/3.png";
import Screenshot4 from "/public/designs/booking/4.png";
import ModalImage from "../../ModalImage";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import ArticleLink from "./ArticleLink";

export default function DesignBookingView() {
  return (
    <div className="flex flex-col">
      <div className="mt-3 text-center sm:mt-5 text-2xl">
        <a
          className="hover:text-blue-400 flex gap-2 items-center flex justify-center"
          href="https://javascript.plainenglish.io/how-to-design-a-hotel-booking-system-56ef18b6adfc"
          target="_blank"
        >
          System Design for Booking
          <ArrowTopRightOnSquareIcon width={20} height={20} />
        </a>
        <div className="mt-2">
          <ArticleLink url="https://medium.com/@sahintalha1/high-level-system-architecture-of-booking-com-06c199003d94" />
          <ArticleLink url="https://www.geeksforgeeks.org/how-to-design-a-database-for-online-hotel-booking-app-like-makemytrip/" />
        </div>
      </div>
      <div className="max-w-[900px] my-4 text-center">
        Booking.com is an online travel booking platform that enables users to
        search, compare, and reserve a wide range of accommodations, including
        hotels, vacation rentals, and other lodging options. It is accessible
        through web browsers and mobile applications on Android and iOS devices.
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
