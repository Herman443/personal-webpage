"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

const Navbar = ({}: {}) => {
  const [lang, setLang] = useState<string>("no");
  const [clientWidth, setClientWidth] = useState<number>(1200);
  const [hamburger, setHamburger] = useState<boolean>(false);
  const ddRef = useRef<HTMLImageElement>(null);

  const handleResize = () => {
    setClientWidth(window.innerWidth);
  };

  useEffect(() => {
    const handleMouseClick = (event: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(event.target as Node)) {
        setHamburger(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousedown", handleMouseClick);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", handleMouseClick);
    };
  }, [hamburger]);

  useEffect(() => {
    if (location.pathname.includes("/en")) {
      setLang("en");
    }
  }, []);

  if (clientWidth < 800) {
    return (
      <>
        <div className="fixed w-full z-10">
          <div
            className="flex flex-row w-full justify-end pt-2 pr-6  text-sm font-light tracking-wide gap-2 text-white"
            style={{ background: "#00205B" }}
          >
            <Link href={"/en"}>
              <p
                className={""}
                style={{ color: lang == "en" ? "#BA0C2F" : "" }}
                onClick={() => setLang("en")}
              >
                [en]
              </p>
            </Link>
            <Link href={"/"}>
              <p
                className={""}
                style={{ color: lang == "no" ? "#BA0C2F" : "" }}
                onClick={() => setLang("no")}
              >
                [no]
              </p>
            </Link>
          </div>
          <div
            className="flex flex-row w-full justify-between items-center px-6 pb-8 pt-2 shadow-xl"
            style={{ background: "#00205B" }}
          >
            <Link href={lang == "en" ? "/en/" : "/"}>
              <p className="flex flex-row items-center text-white text-3xl font-light ">
                [H:Ø]
              </p>
            </Link>
            <button onClick={() => setHamburger(!hamburger)}>
              <i className="fas fa-hamburger text-white text-3xl" />
            </button>
          </div>
          {hamburger && (
            <div className="flex flex-col p-2 w-full" ref={ddRef}>
              <div
                className="flex flex-col p-4 w-full rounded-xl bg-white gap-6 text-lg tracking-wider shadow-2xl"
                style={{ color: "#00205B" }}
              >
                <Link
                  onClick={() => setTimeout(() => setHamburger(false), 50)}
                  className="w-fit"
                  href={lang == "en" ? "/en/website-info" : "/website-info"}
                >
                  <p>{lang == "en" ? "[Website Info]" : "[Nettside Info]"}</p>
                </Link>
                <Link
                  onClick={() => setTimeout(() => setHamburger(false), 50)}
                  className="w-fit"
                  href={lang == "en" ? "/en/portfolio" : "/portfolio"}
                >
                  <p>{lang == "en" ? "[Portfolio]" : "[Portefølje]"}</p>
                </Link>
                <Link
                  onClick={() => setTimeout(() => setHamburger(false), 50)}
                  className="w-fit"
                  href={lang == "en" ? "/en/cv" : "/cv"}
                >
                  <p className="">[CV]</p>
                </Link>
                <Link
                  onClick={() => setTimeout(() => setHamburger(false), 50)}
                  target="_blank"
                  className="flex flex-row justify-start w-fit"
                  href="https://github.com/Herman443"
                >
                  <p>[Github]</p>
                  <i className="fas fa-external-link text-xs"></i>
                </Link>
                <Link
                  onClick={() => setTimeout(() => setHamburger(false), 50)}
                  target="_blank"
                  className="flex flex-row justify-start"
                  href="https://www.linkedin.com/in/herman-ostengen/"
                >
                  <p>[LinkedIn]</p>
                  <i className="fas fa-external-link text-xs"></i>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div style={{ height: 104 }}></div>
      </>
    );
  } else if (clientWidth < 1160) {
    return (
      <>
        <div className="fixed w-full z-10 shadow-2xl">
          <div
            className="flex flex-row w-full justify-end pt-2 pr-16  text-sm font-light tracking-wide gap-2 text-white"
            style={{ background: "#00205B" }}
          >
            <Link href={"/en"}>
              <p
                className={"hover:text-rød"}
                style={{ color: lang == "en" ? "#BA0C2F" : "" }}
                onClick={() => setLang("en")}
              >
                [en]
              </p>
            </Link>
            <Link href={"/"}>
              <p
                className={"hover:text-rød"}
                style={{ color: lang == "no" ? "#BA0C2F" : "" }}
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
                [H:Ø]
              </p>
            </Link>
            <div className="flex flex-row gap-6 text-white text-base font-light tracking-wider">
              <Link href={lang == "en" ? "/en/website-info" : "/website-info"}>
                <p className="hover:text-rød hover:cursor-pointer">
                  {lang == "en" ? "[Website Info]" : "[Nettside Info]"}
                </p>
              </Link>
              <Link href={lang == "en" ? "/en/portfolio" : "/portfolio"}>
                <p className="hover:text-rød hover:cursor-pointer">
                  {lang == "en" ? "[Portfolio]" : "[Portefølje]"}
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
        <div style={{ height: 120 }}></div>
      </>
    );
  } else {
    return (
      <>
        <div className="fixed w-full z-10 shadow-2xl">
          <div
            className="flex flex-row w-full justify-end pt-2 pr-16  text-sm font-light tracking-wide gap-2 text-white"
            style={{ background: "#00205B" }}
          >
            <Link href={"/en"}>
              <p
                className={"hover:text-rød"}
                style={{ color: lang == "en" ? "#BA0C2F" : "" }}
                onClick={() => setLang("en")}
              >
                [en]
              </p>
            </Link>
            <Link href={"/"}>
              <p
                className={"hover:text-rød"}
                style={{ color: lang == "no" ? "#BA0C2F" : "" }}
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
              <Link href={lang == "en" ? "/en/website-info" : "/website-info"}>
                <p className="hover:text-rød hover:cursor-pointer">
                  {lang == "en" ? "[Website Info]" : "[Nettside Info]"}
                </p>
              </Link>
              <Link href={lang == "en" ? "/en/portfolio" : "/portfolio"}>
                <p className="hover:text-rød hover:cursor-pointer">
                  {lang == "en" ? "[Portfolio]" : "[Portefølje]"}
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
        <div style={{ height: 120 }}></div>
      </>
    );
  }
};

export default Navbar;
