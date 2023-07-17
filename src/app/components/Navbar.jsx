import React from "react";

// COMPONENTS

// ROUTER
import Link from "next/link";

export default function Navbar() {
  return (
    <section className="left-0 right-0 top-0 flex h-[150px] items-center justify-center text-[1.3rem]">
      <nav>
        <ul className="flex justify-center">
          <li className="mx-5 my-0">
            <Link href="/" className="inline-block px-2 py-4">
              Home
            </Link>
          </li>
          <li className="mx-5 my-0">
            <Link href="/about" className="inline-block px-2 py-4">
              About me
            </Link>
          </li>
          <li className="mx-5 my-0">
            <Link href="/portfolio" className="inline-block px-2 py-4">
              Portfolio
            </Link>
          </li>
          <li className="mx-5 my-0">
            <a className="inline-block px-2 py-4" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
