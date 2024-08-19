"use client";
import React, { useState, useRef, useEffect } from "react";

export default function Cv() {
  const [show, setShow] = useState<boolean>(false);
  const [zoom, setZoom] = useState<boolean>(false);
  const [clientWidth, setClientWidth] = useState<number>(0);
  const [clientHeight, setClientHeight] = useState<number>(0);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (imageRef.current && !imageRef.current.contains(event.target as Node)) {
      setShow(false);
    }
  };

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setShow(false);
      setZoom(false);
    }
  };

  const handleResize = () => {
    setClientHeight(window.innerHeight);
    setClientWidth(window.innerWidth);
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [show]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (clientWidth < clientHeight) {
    return (
      <>
        {show && (
          <div className={`absolute h-screen w-full z-30 -top-0`}>
            <div
              className={`flex flex-col items-center py-6 h-fit bg-gray-500 bg-opacity-50 hover:cursor-alias`}
              onClick={() => {
                setShow(false);
              }}
              style={{ minHeight: "130vh" }}
            >
              <img
                className={`border border-black shadow-2xl shadow-gray-500 z-50`}
                style={{
                  height: zoom ? "140vh" : "95vh",
                  maxHeight: "135vw",
                  aspectRatio: 210 / 297,
                }}
                src="/CV - Herman Østengen - Norsk.png"
              />
            </div>
          </div>
        )}
        <div className="flex flex-col w-full p-16 items-center">
          <div
            className="hover:cursor-move"
            style={{
              height: "80vh",
              maxHeight: "135vw",
              aspectRatio: 210 / 297,
            }}
            onClick={() => setShow(true)}
          >
            <img
              className="border border-black shadow-2xl shadow-gray-500"
              style={{
                height: "80vh",
                maxHeight: "135vw",
                aspectRatio: 210 / 297,
              }}
              src="/CV - Herman Østengen - Norsk.png"
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {show && (
          <div
            className={`${
              zoom ? "absolute" : "fixed"
            } h-screen w-full z-30 -top-0`}
          >
            <div
              className={`flex flex-col items-center py-6 h-fit bg-gray-500 bg-opacity-50 hover:cursor-alias`}
              style={{ minHeight: "130vh" }}
            >
              <img
                ref={imageRef}
                className={`border border-black shadow-2xl shadow-gray-500 z-50 ${
                  zoom ? "hover:cursor-zoom-out" : "hover:cursor-zoom-in"
                }`}
                style={{
                  height: zoom ? "140vh" : "95vh",
                  maxHeight: "135vw",
                  aspectRatio: 210 / 297,
                }}
                src="/CV - Herman Østengen - Norsk.png"
                onClick={() => {
                  setZoom(!zoom);
                }}
              />
            </div>
          </div>
        )}
        <div className="flex flex-col w-full p-16 items-center">
          <div
            className="transition duration-200 hover:scale-105 hover:cursor-move"
            style={{
              height: "80vh",
              maxHeight: "135vw",
              aspectRatio: 210 / 297,
            }}
            onClick={() => setShow(true)}
          >
            <img
              className="border border-black shadow-2xl shadow-gray-500"
              style={{
                height: "80vh",
                maxHeight: "135vw",
                aspectRatio: 210 / 297,
              }}
              src="/CV - Herman Østengen - Norsk.png"
            />
          </div>
        </div>
      </>
    );
  }
}
