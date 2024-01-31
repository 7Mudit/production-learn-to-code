import React from "react";
import Navbar from "./Navbar";

const navbarLinks = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "/about",
    label: "About",
  },
  {
    url: "/contact",
    label: "Contact",
  },
];

export default async function Header() {
  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <Navbar navbarLinks={navbarLinks} />
    </header>
  );
}
