"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import menu from "@/public/Icons/Menu.svg";
import x from "@/public/Icons/X.svg";
import Image from "next/image";
import { navItems } from "@/lib/nav";

export default function MobileSidebar() {
  const [isShowing, setIsShowing] = useState(false);

  const onClick = () => {
    setIsShowing(!isShowing);
  };

  return (
    <>
      <AnimatePresence>
        {isShowing && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-sage"
          >
            <div className="h-fit flex items-center justify-between mx-3 my-4 lg:m-8">
              <span></span>
              <button
                onClick={onClick}
                className="cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src={x}
                  alt="Close menu"
                  width="0"
                  height="0"
                  className="size-6 lg:size-10"
                />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-10 font-outfit pt-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={onClick}
                  className="text-2xl lg:text-3xl uppercase hover:scale-105 transition-transform duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="max-w-[160px] lg:max-w-[250px] pt-10 text-center">
                <span className="font-renjanis text-[35px] lg:text-[50px] tracking-wide leading-10 lg:leading-14">
                  Clean Girl Esthetics
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isShowing && (
        <button
          onClick={onClick}
          className="hover:scale-105 transition-transform duration-200 cursor-pointer"
        >
          <Image
            src={menu}
            alt="Open menu"
            width="0"
            height="0"
            className="size-6 lg:size-10"
          />
        </button>
      )}
    </>
  );
}
