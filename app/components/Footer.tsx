"use client";
import Link from "next/link";
import React, { useState } from "react";

const Footer = ({}: {}) => {
  return (
    <div className="flex flex-col w-full px-16 pb-32 bg-white">
      <div className="w-full border-t border-black"></div>
      <div className="flex flex-row w-full justify-between pt-20">
        <div className="flex flex-col text-2xl font-light">
          <p className="text-3xl font-medium pb-2">Contact:</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
