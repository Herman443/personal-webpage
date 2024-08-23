"use client";

import { Herr_Von_Muellerhoff } from "next/font/google";
import { useEffect, useState } from "react";

export default function Home() {
  const [clientWidth, setClientWidth] = useState<number>(1200);
  const [clicks, setClicks] = useState<number>(0);

  const handleResize = () => {
    setClientWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (clientWidth < 800) {
    return (
      <div
        className={`flex flex-col justify-center items-center blåtekst ${
          clientWidth < 420 ? "gap-8" : "gap-10"
        } w-full p-6`}
        style={{
          minHeight: "60vh",
        }}
      >
        <div
          className="flex"
          onClick={() => {
            clicks == 20
              ? (location.href = "https://dranks.hermanostengen.com/")
              : setClicks(clicks + 1);
          }}
        >
          <img
            className="flex rounded-full object-cover shadow-2xl shadow-gray-400"
            style={
              clientWidth < 420
                ? {
                    height: 180 + clicks,
                    width: 180 + clicks,
                    maxWidth: 400,
                  }
                : {
                    height: 200 + clicks,
                    width: 200 + clicks,
                    maxWidth: 400,
                  }
            }
            src="/Profile.jpg"
          ></img>
        </div>
        <div className="flex flex-col w-fit">
          <p
            className={`${
              clientWidth < 420 ? "text-4xl" : "text-6xl"
            } tracking-wide`}
          >
            Møt Herman!
          </p>
          <div className="flex flex-row gap-2">
            <div
              className={`flex flex-col items-start ${
                clientWidth < 420 ? "text-xl pl-1 pt-4" : "text-3xl pl-2 pt-2"
              }`}
              style={{ gap: clientWidth < 420 ? "8px" : "14px" }}
            >
              <i className="fa-solid fa-graduation-cap"></i>
              <i className="fa-solid fa-power-off"></i>
              <i className="fa-solid fa-handshake-angle"></i>
              <i className="fa-solid fa-glasses"></i>
            </div>
            <div
              className={`flex flex-col items-start ${
                clientWidth < 420 ? "text-xl pt-3" : "text-3xl pt-2 gap-2"
              }`}
            >
              <p>Cybersikkerhet Student</p>
              <p>Web/System Utvikler</p>
              <p>IT Konsulent</p>
              <p>Nerd</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (clientWidth < 1160) {
    return (
      <div
        className="flex flex-row justify-center blåtekst gap-16 w-full py-28 px-16"
        style={{
          minHeight: "60vh",
        }}
      >
        <div className="flex flex-col w-fit">
          <p
            className="text-7xl font-light tracking-wide"
            style={{ lineHeight: 0.9 }}
          >
            Møt Herman!
          </p>
          <div className="flex flex-row text-4xl pl-4 pt-10 gap-2">
            <div
              className="flex flex-col items-start w-fit"
              style={{ gap: "10px" }}
            >
              <i className="fa-solid fa-graduation-cap"></i>
              <i className="fa-solid fa-power-off"></i>
              <i className="fa-solid fa-handshake-angle"></i>
              <i className="fa-solid fa-glasses"></i>
            </div>
            <div
              className="flex flex-col items-start w-fit"
              style={{ gap: "6px" }}
            >
              <p>Cybersikkerhet Student</p>
              <p>Web/System Utvikler</p>
              <p>IT Konsulent</p>
              <p>Nerd</p>
            </div>
          </div>
        </div>
        <div
          className="flex"
          onClick={() => {
            clicks == 20
              ? (location.href = "https://dranks.hermanostengen.com/")
              : setClicks(clicks + 1);
          }}
          style={{ maxWidth: "25%" }}
        >
          <img
            style={{ width: "100%", maxWidth: 400 + clicks }}
            className="flex flex-shrink rounded-full h-min object-cover shadow-2xl shadow-gray-400"
            src="/Profile.jpg"
          ></img>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="flex flex-row justify-center blåtekst gap-16 w-full py-32 px-16"
        style={{
          minHeight: "60vh",
        }}
      >
        <div className="flex flex-col w-fit">
          <p className="text-8xl font-light tracking-wide">Møt Herman!</p>
          <div className="flex flex-row text-5xl pl-6 pt-8 gap-2">
            <div className="flex flex-col items-start w-fit gap-10">
              <i className="fa-solid fa-graduation-cap"></i>
              <i className="fa-solid fa-power-off"></i>
              <i className="fa-solid fa-handshake-angle"></i>
              <i className="fa-solid fa-glasses"></i>
            </div>
            <div className="flex flex-col items-start w-fit gap-10">
              <p>Cybersikkerhet Student</p>
              <p>Web/System Utvikler</p>
              <p>IT Konsulent</p>
              <p>Nerd</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            clicks == 20
              ? (location.href = "https://dranks.hermanostengen.com/")
              : setClicks(clicks + 1);
          }}
          className="flex"
          style={{ maxWidth: "25%" }}
        >
          <img
            style={{ width: "100%", maxWidth: 400 + clicks }}
            className="flex rounded-full h-min object-cover shadow-2xl shadow-gray-400"
            src="/Profile.jpg"
          ></img>
        </div>
      </div>
    );
  }
}
