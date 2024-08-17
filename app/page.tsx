"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex flex-row justify-center gap-16 w-full py-32 px-16"
      style={{
        minHeight: "60vh",
      }}
    >
      <div className="flex flex-col w-fit">
        <p className="text-8xl font-light tracking-wide">Møt Herman!</p>
        <div className="flex flex-col items-start w-full text-5xl pl-6 pt-8 gap-5">
          <p>- Cybersikkerhet Student</p>
          <p>- Web/System Utvikler</p>
          <p>- IT Konsulent</p>
          <p>- Nerd</p>
        </div>
      </div>
      <div className="flex w-1/4">
        <img
          className="flex rounded-full aspect-square object-cover shadow-2xl shadow-gray-400"
          src="/Profile.jpg"
        ></img>
      </div>
    </div>
  );
}
