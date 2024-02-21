"use client";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Theme from "../shared/Theme";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({ subsets: ["latin"] });
import React from "react";
import clsx from "clsx";

const navbarLinks = [
  { href: "/about", title: "About", id: "1" },
  { href: "/gemini", title: "Gemini", id: "2" },
  { href: "/upsolving", title: "Upsolving", id: "3" },
  // { href: "/nptel-notes", title: "Nptel", id: "4" },
  { href: "/semester-notes", title: "Semester Notes", id: "6" },
  { href: "/contact", title: "Contact", id: "5" },
];

export const sidebarLinks: any = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/gemini",
    label: "Gemini",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/upsolving",
    label: "Upsolving",
  },
  // {
  //   imgURL: "/assets/icons/suitcase.svg",
  //   route: "/nptel-notes",
  //   label: "NPTEL Notes",
  // },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/semester-notes",
    label: "Semester Notes",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/about",
    label: "About",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/contact",
    label: "Contact",
  },
];

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section
      className={`flex h-full  ${urbanist.className}  flex-col gap-6 pt-16`}
    >
      {sidebarLinks.map((item: any) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "bg-hero-light    rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${
                  isActive
                    ? "text-light-900 dark:text-zinc-900"
                    : "invert-colors"
                }`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const Navbar1 = () => {
  const pathname = usePathname();
  return (
    <header
      className={`min-h-[64px] sticky md:relative top-0 z-10 dark:bg-black bg-white border-b-[1px] border-opacity-30 border-white sm:border-none p-5 flex flex-row items-center justify-between`}
    >
      {/* Mobile Nav */}
      <div className="flex flex-row items-center gap-5 md:gap-10">
        <div className="block md:hidden ">
          <Sheet>
            <SheetTrigger asChild>
              <Image
                src="/assets/icons/hamburger.svg"
                width={36}
                height={36}
                alt="Menu"
                className={`dark:text-white text-black invert-colors md:hidden`}
              />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="dark:text-white dark:bg-black text-black bg-white
               border-none"
            >
              <Link href="/" className="flex items-center gap-1">
                {/* <Image
                src="/assets/images/site-logo.svg"
                width={23}
                height={23}
                alt="Learn To Code"
              /> */}
                <h1 className="text-xl font-extrabold ">Learn To Code</h1>
              </Link>
              <div>
                <SheetClose asChild>
                  <NavContent />
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/">
          <h1 className="text-xl dark:text-white text-black tracking-wide  font-extrabold ">
            Learn To Code
          </h1>
        </Link>
        <div className="hidden md:flex  flex-row items-center justify-center gap-5">
          {/* {navbarLinks.map((link) => (
            <div className="" key={link.id}>
              <Link
                href={link.href}
                className="hover:underline hover:underline-offset-[20px] hover:cursor-pointer dark:text-white text-black decoration-emerald-600"
              >
                {link.title}
              </Link>
            </div>
          ))} */}
          {navbarLinks.map((link: any, index: any) => (
            <React.Fragment key={index}>
              <li className=" list-none">
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "text-emerald-600 font-bold underline underline-offset-8"
                      : "dark:text-white text-black"
                  } hover:underline hover:underline-offset-8 hover:cursor-pointer`}
                >
                  {link.title}
                </Link>
              </li>
            </React.Fragment>
          ))}
        </div>
      </div>

      <Theme />
    </header>
  );
};

export default Navbar1;
