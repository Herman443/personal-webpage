"use client";
import React, { useEffect, useState } from "react";

interface passCheck {
  response: boolean;
}

const Drikkelek = () => {
  const [count, setCount] = useState<number>(5);
  const [spillere, setSpillere] = useState<string[]>(Array(5).fill(""));
  const [riktig, setRiktig] = useState<passCheck | any>(null);

  const handleInputChange = (index: number, value: string) => {
    const updatedSpillere = [...spillere];
    updatedSpillere[index] = value;
    localStorage.setItem("spillere", "");
    setSpillere(updatedSpillere);
  };

  const startSpill = () => {
    const pass = (document.getElementById("passord") as HTMLInputElement)
      ?.value;

    fetch("https://coin.hermanostengen.com/password?p=" + pass)
      .then((response) => response.json())
      .then((data) => {
        setRiktig(data);
        if (data.response) {
          const mid: string[] = [];
          for (let i = 0; i < spillere.length; i++) {
            if (spillere[i] != "") {
              mid.push(spillere[i]);
            }
          }
          if (mid.length > 1) {
            const spillereJSON = JSON.stringify(mid);
            localStorage.setItem("spillere", spillereJSON);
            location.href += "/session";
          } else {
            alert("Du må ha minst 2 spillere");
          }
        } else {
          alert("Feil passord!");
        }
      })
      .catch((error) => {
        console.error("Error fetching password verification:", error);
      });
  };

  const addPlayer = () => {
    setCount((prevCount) => prevCount + 1);
    setSpillere((prevNames) => [...prevNames, ""]);
  };

  const removePlayer = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      setSpillere((prevNames) => prevNames.slice(0, -1));
    }
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col items-center mx-4 my-12 p-6 rounded-xl border border-black shadow-2xl bg-white">
        <p className="text-3xl font-medium text-center">
          Herman&apos;s drikkelek!
        </p>
        <p className="text-xl font-semibold text-center pt-4">
          Legg til spillere:
        </p>
        <p className="text-center text-xs tracking-wide">
          Pssst! Mer gøy med ekte navn
        </p>
        <div
          id="spillere"
          className="flex flex-col w-fit items-end text-lg text-center pt-2 gap-2"
        >
          {Array.from({ length: count }, (_, index) => (
            <div key={index} className="flex flex-row gap-2 items-center">
              <p>Spiller {index + 1}:</p>
              <input
                className="rounded-lg p-1 w-36 text-base border border-black"
                type="text"
                value={spillere[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                placeholder="Navn"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-1">
          <button
            onClick={addPlayer}
            className="flex flex-row rounded-full text-lg items-center bg-emerald-600 shadow-lg active:bg-emerald-500 active:shadow-gray-300 text-white border border-black px-4 py-1 mt-2"
          >
            <p>Legg til spiller</p>
          </button>
          <button
            onClick={removePlayer}
            className="flex flex-row rounded-full text-lg items-center bg-red-500 shadow-lg active:bg-red-400 active:shadow-gray-300 text-white border border-black py-2 px-3 mt-2"
          >
            <i className="fa-solid fa-minus"></i>
          </button>
        </div>

        <div className="flex flex-row gap-2 text-lg items-center pt-6">
          <p>Passord: </p>
          <input
            className="rounded-lg p-1 w-36 text-base border border-black"
            type="password"
            id="passord"
          />
        </div>
        <button
          onClick={startSpill}
          className="flex flex-row rounded-full text-lg items-center bg-emerald-600 shadow-lg active:bg-emerald-500 active:shadow-gray-300 text-white border border-black px-4 py-1 mt-2"
        >
          <p>Start spill</p>
        </button>
      </div>
    </div>
  );
};

export default Drikkelek;
