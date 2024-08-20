"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ApiList() {
  const [clientWidth, setClientWidth] = useState<number>(1200);
  const [mine, setMine] = useState<boolean>(false);
  const [offentlige, setOffentlige] = useState<boolean>(false);

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

  return (
    <div
      className={`flex flex-col w-full ${
        clientWidth < 800 ? "py-8 px-6" : "py-20 px-16"
      }`}
    >
      <div
        className="flex flex-col p-6 w-full bg-white rounded-xl border border-black shadow-2xl"
        style={{ minHeight: "60vh" }}
      >
        <p className={`text-5xl pb-6`}>API&apos;s</p>
        <p className={`${clientWidth < 800 ? "text-lg" : "text-2xl"} pb-16`}>
          Implementations of mine and other public API&apos;s
        </p>
        <div
          className={`flex flex-col gap-4 ${
            clientWidth < 1000 ? "w-full" : "w-1/2"
          }`}
        >
          <button
            className={`flex flex-row justify-between items-center border-b border-black text-4xl`}
            onClick={() => setMine(!mine)}
          >
            <p>Mine</p>
            {mine ? (
              <i className="fa fa-chevron-down text-2xl"></i>
            ) : (
              <i className="fa fa-chevron-right text-2xl"></i>
            )}
          </button>
          {mine && (
            <div className="flex flex-col">
              <Link href={"api-list/coinflip"}>
                <button className="flex flex-row items-center justify-between gap-4 rounded-full border border-black py-2 px-6 w-fit text-2xl hover:blåknapp">
                  <p>Coinflip</p>
                  <i className="fa fa-chevron-right text-xl"></i>
                </button>
              </Link>
            </div>
          )}
        </div>
        <div
          className={`flex flex-col pt-12 gap-4 ${
            clientWidth < 1000 ? "w-full" : "w-1/2"
          }`}
        >
          <button
            className={`flex flex-row justify-between items-center border-b border-black text-4xl`}
            onClick={() => setOffentlige(!offentlige)}
          >
            <p>Public</p>
            {offentlige ? (
              <i className="fa fa-chevron-down text-2xl"></i>
            ) : (
              <i className="fa fa-chevron-right text-2xl"></i>
            )}
          </button>
          {offentlige && (
            <div className="flex flex-col">
              <p>Crickets..</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
