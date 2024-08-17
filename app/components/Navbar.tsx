"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = ({}: {}) => {
  const [lang, setLang] = useState<string>("no");
  useEffect(() => {
    if (location.pathname.includes("/en")) {
      setLang("en");
    }
  }, []);
  return (
    <div className="fixed w-full">
      <div
        className="flex flex-row w-full justify-end pt-2 pr-16  text-sm font-light tracking-wide gap-2 text-white"
        style={{ background: "#00205B" }}
      >
        <Link href={"/en"}>
          <p
            className={"hover:text-rød"}
            style={{ color: lang == "en" ? "#C8102E" : "" }}
            onClick={() => setLang("en")}
          >
            [en]
          </p>
        </Link>
        <Link href={"/"}>
          <p
            className={"hover:text-rød"}
            style={{ color: lang == "no" ? "#C8102E" : "" }}
            onClick={() => setLang("no")}
          >
            [no]
          </p>
        </Link>
      </div>
      <div
        className="flex flex-row w-full justify-between items-center px-16 pb-10 pt-4"
        style={{ background: "#00205B" }}
      >
        <Link href={lang == "en" ? "/en/" : "/"}>
          <p className="flex flex-row items-center text-white text-3xl font-light hover:text-rød hover:cursor-pointer">
            [Herman Østengen]
          </p>
        </Link>
        <div className="flex flex-row gap-6 text-white text-xl font-light tracking-wider">
          <Link href={lang == "en" ? "/en/this-website" : "/this-website"}>
            <p className="hover:text-rød hover:cursor-pointer">
              [This Website]
            </p>
          </Link>
          <Link href={lang == "en" ? "/en/cv" : "/cv"}>
            <p className="hover:text-rød hover:cursor-pointer">[CV]</p>
          </Link>
          <Link
            target="_blank"
            className="flex flex-row justify-start hover:text-rød hover:cursor-pointer"
            href="https://github.com/Herman443"
          >
            <p>[Github]</p>
            <i className="fas fa-external-link text-xs"></i>
          </Link>
          <Link
            target="_blank"
            className="flex flex-row justify-start hover:text-rød hover:cursor-pointer"
            href="https://www.linkedin.com/in/herman-ostengen/"
          >
            <p>[LinkedIn]</p>
            <i className="fas fa-external-link text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
