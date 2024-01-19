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

const navbarLinks = [
  { href: "/about", title: "About", id: "1" },
  { href: "/technologies", title: "Technologies", id: "2" },
  { href: "/impact", title: "Impact", id: "3" },
  { href: "/discover", title: "Discover", id: "4" },
];

export const sidebarLinks: any = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full  flex-col gap-6 pt-16">
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
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
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
  return (
    <header
      className={`min-h-[64px] sticky sm:relative top-0 z-10 dark:bg-black bg-white border-b-[1px] border-opacity-30 border-white sm:border-none p-5 flex flex-row items-center justify-between`}
    >
      {/* Mobile Nav */}
      <div className="flex flex-row items-center gap-5 sm:gap-10">
        <div className="block sm:hidden ">
          <Sheet>
            <SheetTrigger asChild>
              <Image
                src="/assets/icons/hamburger.svg"
                width={36}
                height={36}
                alt="Menu"
                className={`dark:text-white text-black invert-colors sm:hidden`}
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
        <div className="hidden sm:flex  flex-row items-center justify-center gap-5">
          {navbarLinks.map((link) => (
            <div className="" key={link.id}>
              <Link
                href={`/${link.href}`}
                className="hover:underline hover:underline-offset-[20px] hover:cursor-pointer decoration-emerald-600"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Theme />
    </header>
  );
};

export default Navbar1;
