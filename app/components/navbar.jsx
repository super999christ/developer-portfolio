// @flow strict
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            CHASSITY NAKAMURA
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
          </li>
          <li>
            <Popover className="relative block px-4 py-2 no-underline outline-none hover:no-underline">
              <PopoverButton className="inline-flex items-center gap-x-1 text-sm text-white transition-colors duration-300 hover:text-pink-600 focus:outline-none">
                <span>DESIGN</span>
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
              </PopoverButton>
              <PopoverPanel
                className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-min -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="w-44 shrink rounded-xl bg-[#FFFFFF50] p-3 text-sm leading-6 text-white shadow-lg ring-1 ring-gray-900/5 backdrop-blur-5">
                  <a href="/design/ecommerce" className="block p-2 hover:text-pink-400 cursor-pointer">
                    E-commerce
                  </a>
                  <a href="/design/twitter" className="block p-2 hover:text-pink-400 cursor-pointer">
                    Twitter
                  </a>
                  <a href="/design/facebook" className="block p-2 hover:text-pink-400 cursor-pointer">
                    Facebook
                  </a>
                  <a href="/design/youtube" className="block p-2 hover:text-pink-400 cursor-pointer">
                    Youtube
                  </a>
                  <a href="/design/booking" className="block p-2 hover:text-pink-400 cursor-pointer">
                    Booking
                  </a>
                  <a href="/design/whatsapp" className="block p-2 hover:text-pink-400 cursor-pointer">
                    WhatsApp
                  </a>
                  <a href="/design/paypal" className="block p-2 hover:text-pink-400 cursor-pointer">
                    PayPal
                  </a>
                  <a href="/design/urlshort" className="block p-2 hover:text-pink-400 cursor-pointer">
                    URL Shortner
                  </a>
                  <a href="/design/netflix" className="block p-2 hover:text-pink-400 cursor-pointer">
                    Netflix
                  </a>
                  <a href="/design/uber" className="block p-2 hover:text-pink-400 cursor-pointer">
                    Uber
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;