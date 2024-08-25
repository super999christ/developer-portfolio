"use client";

import Screenshot1 from "/public/designs/ecommerce/1.png";
import Screenshot2 from "/public/designs/ecommerce/2.png";
import ModalImage from "../../ModalImage";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import ArticleLink from "./ArticleLink";

export default function DesignEcommerceView() {
  return (
    <div className="flex flex-col">
      <div className="mt-3 text-center sm:mt-5 text-2xl">
        <a
          className="hover:text-blue-400 flex gap-2 items-center flex justify-center"
          href="https://medium.com/@samarthasthan/building-a-scalable-e-commerce-empire-a-micro-services-system-design-approach-96118bbcef8e"
          target="_blank"
        >
          System Design for Shopify
          <ArrowTopRightOnSquareIcon width={20} height={20} />
        </a>
        <div className="mt-2">
          <ArticleLink url="https://dev.to/ezzdinatef/ecommerce-database-design-1ggc" />
        </div>
      </div>
      <div className="max-w-[900px] my-4 text-center">
        Shopify is a cloud-based e-commerce platform that enables businesses to
        create and manage their online stores. It is accessible through web
        browsers and mobile applications on both Android and iOS devices.
      </div>
      <div className="mt-5 flex flex-col gap-8 items-center">
        <ModalImage src={Screenshot1} maxWidth={true} />
        <ModalImage src={Screenshot2} maxWidth={true} />
      </div>
    </div>
  );
}
