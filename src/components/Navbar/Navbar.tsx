"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./Navbar.module.scss";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "PRODUCT", href: "#product" },
  { label: "CONTACT", href: "#contact" },
  { label: "PRICE", href: "#price" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`${style.headerBlock} w-full text-white`}>
      <nav className={`flex ${style.navDesktop} justify-around px-4 sm:px-6 lg:px-8`}>
        {/* mobile toggle button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden lg:hidden">
          <Image src="/icons/toggle_mb_nav.svg"
            alt="Xiaomi"
            width={24}
            height={19}

          />
        </button>

        {/* Menu desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/nav_logo.svg"
              alt="Xiaomi"
              width={138}
              height={40}
              className="rounded-full"
            />
          </Link>
          <ul className="navList flex items-center gap-6 text-xs font-medium tracking-wide">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="relative rounded-full px-3 py-1 transition-colors color-neutral-200 font-size-14"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* button action desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="rounded-full bg-[#f5b000] px-5 py-2 text-xs font-semibold tracking-wide text-black transition hover:brightness-110">
            SIGN UP
          </button>
          <button className="rounded-full border border-[#f5b000] px-5 py-2 text-xs font-semibold tracking-wide text-[#f5b000] transition hover:bg-[#f5b000]/10">
            LOG IN
          </button>

          <button className={`flex items-center gap-1 text-xs tracking-wide text-gray-300 hover:text-white`}>
            ENG
            <svg
              viewBox="0 0 20 20"
              className="h-3 w-3"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M5.25 7.5 10 12.25 14.75 7.5h-9.5z" />
            </svg>
          </button>
        </div>

        {/* button action mobile */}
        {/* <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
        </button> */}
      </nav>

      {/* Menu mobile dropdown */}
      {open && (
        <div className="border-t border-neutral-800 bg-[#181818] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
            <ul className="flex flex-col gap-1 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-2 py-2 text-center"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* <div className="mt-2 flex flex-col gap-2">
              <button className="w-full rounded-full bg-[#f5b000] px-4 py-2 text-xs font-semibold tracking-wide text-black">
                SIGN UP
              </button>
              <button className="w-full rounded-full border border-[#f5b000] px-4 py-2 text-xs font-semibold tracking-wide text-[#f5b000]">
                LOG IN
              </button>
              <button className="mt-1 flex items-center gap-1 self-end text-xs tracking-wide text-gray-300">
                ENG
                <svg
                  viewBox="0 0 20 20"
                  className="h-3 w-3"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M5.25 7.5 10 12.25 14.75 7.5h-9.5z" />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
}
