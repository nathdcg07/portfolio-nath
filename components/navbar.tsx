"use client";

import Link from "next/link";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-components";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = usePathname();

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full h-max bottom-10"
    >
      <nav>
        <div className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md shadow-lg shadow-white/10 border border-white/20">
          {itemsNavbar.map((item) => {
            const isActive = router === item.link;
            return (
              <div
                key={item.id}
                className={`p-3 rounded-full transition-all duration-200 cursor-pointer 
                ${isActive ? "bg-secondary text-black shadow-md shadow-secondary/40" : "hover:bg-white/10 text-white/80 hover:text-white"}`}
               >
                <Link href={item.link}>{item.icon}</Link>
              </div>
            );
          })}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
