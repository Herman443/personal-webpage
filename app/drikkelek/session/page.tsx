"use client";
import React, { useEffect, useState } from "react";

interface Data {
  start: string;
  slutt: string;
}

const Session = () => {
  const [spillere, setSpillere] = useState<string[]>([]);
  const [aktiv, setAktiv] = useState<number>(0);
  const [data, setData] = useState<Data[]>([]);
  const [q, setQ] = useState<number>(0);
  const [intro, setIntro] = useState<boolean>(true);
  const [prank, setPrank] = useState<boolean>(false);
  const [start, setStart] = useState<string>("<b>Klare for å starte?</b>");
  const [slutt, setSlutt] = useState<string>("");
  const [ferdig, setFerdig] = useState<boolean>(false);

  function nextQ() {
    if (prank) {
      setStart("Okeyyyyy, let's go! ");
      setSlutt("<b>Helena</b> starter med å ta <b>4 slurker</b> ;)");
      setPrank(false);
    } else if (data && data.length > 0) {
      if (aktiv >= Math.ceil((2 * spillere.length) / 3) - 1) {
        setSpillere(shuffleArray(spillere));
        setAktiv(0);
      } else {
        setAktiv(aktiv + 1);
      }
      if (q >= data.length) {
        setStart("Gratulerer med vel gjennomført drikkelek :)<br/>");
        setSlutt("En skål for hosten!");
        setFerdig(true);
      } else {
        setStart(data[q].start);
        setSlutt("<b>" + spillere[aktiv] + "</b>" + data[q].slutt);
        setQ(q + 1);
      }
    }
  }

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swapping elements
    }
    return array;
  }

  useEffect(() => {
    let arr = localStorage.getItem("spillere");
    if (arr) {
      setSpillere(JSON.parse(arr));
      if (arr.toLowerCase().includes("helena")) {
        setPrank(true);
      }
    }

    fetch("https://coin.hermanostengen.com/drink")
      .then((response) => response.json())
      .then((data) => {
        const tasks = shuffleArray(data.tasks); // Shuffle tasks
        setData(tasks);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const backgroundStyle: React.CSSProperties = {
    backgroundColor:
      q % 4 == 1
        ? "#34d399"
        : q % 4 == 2
        ? "#A2BFFE"
        : q % 4 == 3
        ? "#FFA500"
        : "#F5F5DC",
    maxWidth: 400,
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div
        className="flex flex-col items-center text-center rounded-xl border border-black shadow-2xl mx-4 my-6 p-6 text-xl"
        style={backgroundStyle}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: start + "<br/>" + slutt,
          }}
        />
        {intro && (
          <button
            onClick={() => {
              setIntro(false);
              nextQ();
            }}
            className="flex flex-row rounded-full text-lg items-center bg-emerald-600 shadow-lg active:bg-emerald-500 text-white border border-black px-4 py-1 mt-8"
          >
            <p>Start!</p>
          </button>
        )}
        {!intro && (
          <div className="flex flex-row w-full justify-end">
            <button
              onClick={() => {
                ferdig ? (location.href = "/drikkelek") : nextQ();
              }}
              className="flex flex-row rounded-full text-lg items-center bg-emerald-600 shadow-lg active:bg-emerald-500 text-white border border-black py-2 px-3 mt-2"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Session;
