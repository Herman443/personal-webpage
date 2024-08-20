"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface coinData {
  value: string;
  status: string;
  heads: number;
  tails: number;
  state: string;
}

export default function Coinflip() {
  const [data, setData] = useState<coinData | null>(null);
  const [once, setOnce] = useState<boolean>(true);
  const [clientWidth, setClientWidth] = useState<number>(1200);
  const [imgSrc, setImgSrc] = useState<string>("/emptyCoin.png");
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [numberOfCoins, setNumberOfCoins] = useState<number>(0);

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

  function updateNumber(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value, 10);
    setNumberOfCoins(isNaN(value) ? 0 : value);
  }

  const flipOnce = () => {
    setOnce(true);
    setImgSrc("/emptyCoin.png");
    setIsFlipping(true);
    setTimeout(() => {
      fetch("https://coin.hermanostengen.com/once")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          if (data.value === "Heads") {
            setImgSrc("/heads.png");
          } else {
            setImgSrc("/tails.png");
          }
          setIsFlipping(false);
        });
    }, 1000);
  };

  const flipMore = (coins: number) => {
    if (coins == 1) {
      flipOnce();
    } else if (coins != 0) {
      setOnce(false);
      setImgSrc("/emptyCoin.png");
      setIsFlipping(true);

      setTimeout(() => {
        fetch(`https://coin.hermanostengen.com/coins?coins=${coins}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setIsFlipping(false);
          });
      }, 1000);
    }
  };

  return (
    <div
      className={`flex flex-col w-full ${
        clientWidth < 800 ? "py-8 px-6" : "py-20 px-16"
      }`}
    >
      <div
        className="flex flex-col items-center p-6 w-full bg-white rounded-xl border border-black shadow-2xl"
        style={{ minHeight: "60vh" }}
      >
        <p className="text-5xl pb-6">Coinflip!</p>
        <p className={`${clientWidth < 800 ? "text-lg" : "text-2xl"} pb-16`}>
          Henter data fra{" "}
          <Link
            target="_blank"
            href="https://coin.hermanostengen.com/"
            className="underline"
          >
            coin.hermanostengen.com
          </Link>
          . Kildekode for API&apos;et ligger{" "}
          <Link
            target="_blank"
            href={"https://github.com/Herman443/Coinflip-API"}
            className="underline"
          >
            her
          </Link>
          .
        </p>
        <button
          className="flex py-2 px-6 rounded-full border border-black text-2xl hover:blåknapp"
          onClick={() => flipOnce()}
        >
          Kast én mynt
        </button>
        <div
          className={`flex ${
            clientWidth < 600
              ? "flex-col items-center gap-2"
              : "flex-row items-end gap-4"
          }`}
        >
          <button
            className="flex py-2 px-6 mt-6 rounded-full border border-black text-2xl hover:blåknapp"
            onClick={() => flipMore(numberOfCoins)}
          >
            Kast flere:
          </button>
          <input
            className="flex border border-black rounded-full text-2xl w-40 py-2 px-6"
            type="number"
            placeholder="0"
            id="input"
            name="input"
            onChange={updateNumber}
          ></input>
        </div>
        {!data && <div style={{ height: 36 + 16 }}></div>}
        {data && isFlipping && <div style={{ height: 36 + 16 }}></div>}
        <div className="flex flex-col items-center gap-4 pt-12">
          {data && once && data.state == "OK" && !isFlipping && (
            <p className="text-3xl font-medium">{data.value + "!"}</p>
          )}
          {once && (
            <img
              src={imgSrc}
              alt="Coin"
              className={isFlipping ? "flip pl-2" : "pl-2"}
            />
          )}
          {data && !once && data.state == "OK" && !isFlipping && (
            <div className="flex flex-row gap-8 text-3xl font-medium">
              <p>Heads: {data.heads}</p>
              <p>Tails: {data.tails}</p>
            </div>
          )}
          {!once && (
            <div className="flex flex-row">
              <img
                src={isFlipping ? "/emptyCoin.png" : "/heads.png"}
                alt="Coin"
                className={isFlipping ? "flip pl-2" : "pl-2"}
              />
              {clientWidth >= 600 && (
                <img
                  src={isFlipping ? "/emptyCoin.png" : "/tails.png"}
                  alt="Coin"
                  className={isFlipping ? "flip pl-2" : "pl-2"}
                />
              )}
              {clientWidth >= 1000 && (
                <img
                  src={isFlipping ? "/emptyCoin.png" : "/heads.png"}
                  alt="Coin"
                  className={isFlipping ? "flip pl-2" : "pl-2"}
                />
              )}
              {clientWidth >= 1300 && (
                <img
                  src={isFlipping ? "/emptyCoin.png" : "/tails.png"}
                  alt="Coin"
                  className={isFlipping ? "flip pl-2" : "pl-2"}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
