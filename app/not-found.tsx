"use client";
import React, { useEffect, useState } from "react";

const NotFound = () => {
  const [clientWidth, setClientWidth] = useState<number>(1200);
  const [clientHeight, setClientHeight] = useState<number>(800);

  const handleResize = () => {
    setClientWidth(window.innerWidth);
    setClientHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (clientHeight > clientWidth) {
    return (
      <>
        <div
          className=" flex flex-col items-center w-full"
          style={{ height: "50vh", minHeight: 400 }}
        >
          <div className="flex flex-row w-full">
            <div
              className="flex flex-row items-center gap-2 mx-4 mb-6 mt-12 text-2xl hover:cursor-pointer hover:underline"
              onClick={() => {
                history.back();
              }}
            >
              <i className="fa-solid fa-chevron-left"></i>
              <p>Go back</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full px-4 items-center justify-center">
            <img
              className="shadow-2xl w-full"
              src="/chalkboard.png"
              style={{ maxWidth: 690 }}
            />
            <div style={{ height: 100 }}></div>
          </div>
        </div>
      </>
    );
  } else if (clientWidth < 1000) {
    return (
      <>
        <div
          className=" flex flex-col items-center w-full"
          style={{ height: "50vh", minHeight: 400 }}
        >
          <div className="flex flex-row w-full">
            <div
              className="flex flex-row items-center gap-2 mx-16 mb-10 mt-16 text-2xl hover:cursor-pointer hover:underline"
              onClick={() => {
                history.back();
              }}
            >
              <i className="fa-solid fa-chevron-left"></i>
              <p>Go back</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full items-center justify-center">
            <img
              className="shadow-2xl w-8/12"
              src="/chalkboard.png"
              style={{ maxWidth: 690 }}
            />
            <div style={{ height: 100 }}></div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className=" flex flex-col items-center w-full"
          style={{ height: "50vh", minHeight: 400 }}
        >
          <div className="flex flex-row w-full">
            <div
              className="flex flex-row items-center gap-2 mx-16 mb-10 mt-16 text-2xl hover:cursor-pointer hover:underline"
              onClick={() => {
                history.back();
              }}
            >
              <i className="fa-solid fa-chevron-left"></i>
              <p>Go back</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full items-center justify-center">
            <img
              className="shadow-2xl w-1/2"
              src="/chalkboard.png"
              style={{ maxWidth: 690 }}
            />
            <div style={{ height: 100 }}></div>
          </div>
        </div>
      </>
    );
  }
};

export default NotFound;
