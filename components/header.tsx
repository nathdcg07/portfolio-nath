"use client";

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-components";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 w-full px-4 top-5 md:top-10"
    >
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg">
        <Link href="/">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Just <span className="text-secondary">Nath</span>
          </h1>
        </Link>
        <div className="flex items-center gap-5 text-white text-xl">
          {socialNetworks.map(({ logo, src, id }) => {
          const isExternal = src.startsWith("http");
          return isExternal ? (
          <a
              key={id}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-secondary"
            >
              {logo}
            </a>
          ) : (
            <Link
              key={id}
              href={src}
              className="transition-all duration-300 hover:text-secondary"
            >
              {logo}
            </Link>
          );
        })}
      </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
