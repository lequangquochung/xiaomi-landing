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

  const [openLang, setOpenLang] = useState(false);
  const [lang, setLang] = useState<"ENG" | "VI">("ENG");

  const selectLang = (value: "ENG" | "VI") => {
    setLang(value);
    setOpenLang(false);
  };

  return (
    <header className={`w-full text-white`}>
      <nav className={`flex ${style.navBlock} justify-start md:justify-around px-8 md:px-4 lg:px-8 z-2`}>
        {/* mobile toggle button */}

        {open ?
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden lg:hidden z-2">
            <Image src="/icons/close.svg"
              alt="Xiaomi"
              width={24}
              height={19}
            />
          </button>
          :
          < button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden lg:hidden z-2 ">
            <Image src="/icons/toggle_mb_nav.svg"
              alt="Xiaomi"
              width={24}
              height={19}
            />
          </button>
        }

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
          <ul className="navList flex items-center gap-6 tracking-wide">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="relative rounded-full px-3 py-1 transition-colors color-neutral-200 text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* button action desktop */}
        <div className="items-center gap-4 flex">
          <Image src="/icons/xiaomi_mobile.svg" alt="Xiaomi" width={40} height={40} className="ml-3" />
          <button className={`${style.topRightButton} ${style.signUpButton}`}>
            <span className="md:text-sm">SIGN UP</span>
          </button>
          <button className={`${style.topRightButton} ${style.logInButton}`}>
            <span className="color-neutral-200 text-sm">LOG IN</span>
          </button>

          <div className="relative text-left hidden md:block">
            <button className={`flex items-center gap-1 text-xs tracking-wide hover:text-white`}
              onClick={() => setOpenLang(!openLang)}
            >
              <span>{lang}</span>
              <Image
                src="/icons/arrow_drop_down.svg"
                alt="Arrow Down"
                width={8}
                height={8}
              />
            </button>
            {openLang && (
              <div className="absolute left-0 top-full mt-2 w-24 rounded-lg bg-[#1f1f1f] border border-[#3a3a3a] z-999">
                <button
                  onClick={() => selectLang("ENG")}
                  className="block w-full text-left px-3 py-2 text-sm text-white hover:bg-[#2a2a2a] hover:text-yellow-400"
                >
                  ENG
                </button>

                <button
                  onClick={() => selectLang("VI")}
                  className="block w-full text-left px-3 py-2 text-sm text-white hover:bg-[#2a2a2a] hover:text-yellow-400"
                >
                  VI
                </button>
              </div>
            )}
          </div>
        </div>

        {/* button action mobile */}
      </nav>

      {/* Menu mobile dropdown */}
      {
        open && (
          <div className={`md:hidden lg:hidden fixed inset-x-0 top-16 bottom-0 z-30 ${style.bgColorSec800}`}>
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
              <ul className="flex flex-col gap-1 text-sm">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="block rounded-md px-2 py-2 text-center navMobile__items"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      }
    </header >
  );
}
