import React from "react";
import { Document, Page } from "@react-pdf/renderer";

export default async function Cv() {
  return (
    <div className="flex flex-col w-full p-16 items-center">
      <div className="w-1/2">
        <img
          className="border border-black rounded-xl shadow-xl"
          src="/CV - Herman Østengen.png"
        />
      </div>
    </div>
  );
}
