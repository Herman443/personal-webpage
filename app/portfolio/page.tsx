"use client";

import { useEffect, useState } from "react";

export default function Portfolio() {
  return (
    <div className="flex flex-row w-full justify-center p-16">
      <div
        className="flex rounded-full border-red-600 w-1/2 aspect-square bg-white"
        style={{ borderWidth: 20 }}
      >
        <img
          className="rounded-full object-contain"
          src="https://syrte.obspm.fr/taiol/Under%20Construction.PNG"
        />
      </div>
    </div>
  );
}
