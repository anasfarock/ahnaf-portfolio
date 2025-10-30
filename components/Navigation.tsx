"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/about", label: "ABOUT ME" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="flex w-full overflow-hidden pt-10 pb-1">
      <nav className="w-full">
        <div className="container mx-auto flex flex-wrap items-center md:flex-nowrap">
          <div className="mr-4 md:mr-8">
            <Link href="/" className="text-2xl font-signika font-bold">
              Ahnaf Farooq
            </Link>
          </div>

          <div className="ml-auto md:hidden flex items-center justify-start">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="tap-highlight-transparent text-black dark:text-white w-5 h-5 relative focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    isOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    isOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>

          <div
            className={`w-full md:w-auto md:flex-grow md:flex md:items-center overflow-hidden transition-all ease-out duration-500 ${
              isOpen ? "h-40" : "h-0"
            } md:h-auto`}
          >
            <ul className="flex flex-col duration-300 ease-out md:space-x-5 sm:transition-none mt-5 md:flex-row md:items-center md:ml-auto md:mt-0 md:pt-0 md:border-0">
              {navItems.map((item) => (
                <li key={item.href} className="group transition duration-300">
                  <Link
                    href={item.href}
                    className="font-signika text-2xl tap-highlight-transparent block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    <span
                      className={`hidden md:block h-0.5 bg-black dark:bg-white transition-all duration-500 ${
                        isActive(item.href)
                          ? "max-w-full"
                          : "max-w-0 group-hover:max-w-full"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}